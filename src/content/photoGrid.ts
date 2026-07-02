type PhotoGridItem = {
  src: string
  label: string
  year: string
  title: string
}

export type PhotoGroup = {
  key: string
  year: string
  title: string
  photos: PhotoGridItem[]
}

export type PhotoYearGroup = {
  year: string
  groups: PhotoGroup[]
}

const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const formatTitle = (slug: string) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const parsePhotoName = (fileName: string) => {
  const match = fileName.match(/^(\d{4})-(.+?)(?:-\d+)?\.(jpg|jpeg|png|webp)$/i)

  if (!match) {
    const fallbackName = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '').replace(/-/g, ' ')

    return {
      year: 'Unknown year',
      title: fallbackName,
    }
  }

  return {
    year: match[1],
    title: formatTitle(match[2]),
  }
}

export const photoGrid: PhotoGridItem[] = Object.entries(imageModules)
  .sort(([leftPath], [rightPath]) => rightPath.localeCompare(leftPath))
  .map(([path, src]) => {
    const fileName = path.split('/').pop() ?? ''
    const { year, title } = parsePhotoName(fileName)
    const label = `${year} ${title}`

    return {
      src,
      label,
      year,
      title,
    }
  })

const groupedPhotoMap = photoGrid.reduce((years, photo) => {
  const yearGroups = years.get(photo.year) ?? new Map<string, PhotoGroup>()
  const locationKey = photo.title
  const existingGroup = yearGroups.get(locationKey)

  if (existingGroup) {
    existingGroup.photos.push(photo)
    years.set(photo.year, yearGroups)
    return years
  }

  yearGroups.set(locationKey, {
    key: `${photo.year}-${locationKey}`,
    year: photo.year,
    title: photo.title,
    photos: [photo],
  })

  years.set(photo.year, yearGroups)
  return years
}, new Map<string, Map<string, PhotoGroup>>())

export const photoYearGroups: PhotoYearGroup[] = Array.from(groupedPhotoMap.entries())
  .sort(([leftYear], [rightYear]) => Number(rightYear) - Number(leftYear))
  .map(([year, groups]) => ({
    year,
    groups: Array.from(groups.values()).sort((leftGroup, rightGroup) =>
      leftGroup.title.localeCompare(rightGroup.title),
    ),
  }))