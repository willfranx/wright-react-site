type PhotoGridItem = {
  src: string
  label: string
}

const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export const photoGrid: PhotoGridItem[] = Object.entries(imageModules)
  .sort(([leftPath], [rightPath]) => rightPath.localeCompare(leftPath))
  .map(([path, src]) => {
    const fileName = path.split('/').pop() ?? ''
    const label = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '').replace(/-/g, ' ')

    return {
      src,
      label,
    }
  })