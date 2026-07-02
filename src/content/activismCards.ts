import earth from '../assets/img/earth.gif';
import microscope from '../assets/img/microscope.gif';
import snowflake from '../assets/img/snowflake.gif';
import dove from '../assets/img/dove.gif';
import lantern from '../assets/img/lantern.gif';
import prideFlag from '../assets/img/prideflag.gif';
import brain from '../assets/img/brain.gif';
import smiley from '../assets/img/smiley.gif';
import usa from '../assets/img/usa.gif';
import cat from '../assets/img/cat.gif';
import bat from '../assets/img/bat.gif';
import pangolin from '../assets/img/pangolin.gif';

export type ActivismTag =
  | 'Climate'
  | 'Humanitarianism'
  | 'Mental Health'
  | 'Animal Care and Rescue';

export const cardData = [
  {
    title: "The Climate Reality Project",
    tag: 'Climate',
    description: "\"Catalyzing a global solution to the climate crisis.\"",
    image: earth,
    link: "https://www.climaterealityproject.org/"
  },
  {
    title: "Earthjustice",
    tag: 'Climate',
    description: "\"We are here because the earth needs a good lawyer.\"",
    image: microscope,
    link: "https://www.earthjustice.org/"
  },
  {
    title: "Union of Concerned Scientists",
    tag: 'Climate',
    description: "\"Using rigorous, independent science to solve our planet's most pressing problems.\"",
    image: snowflake,
    link: "https://www.ucs.org/"
  },
  {
    title: "Freedom For Immigrants",
    tag: 'Humanitarianism',
    description: "\"Building a world where no one is incarcerated for crossing a border.\"",
    image: dove,
    link: "https://www.freedomforimmigrants.org/"
  },
  {
    title: "Institute for Free Speech",
    tag: 'Humanitarianism',
    description: "\"Free political speech guaranteed by the First Amendment is the most important right.\"",
    image: lantern,
    link: "https://www.ifs.org/"
  },
  {
    title: "Resource Center",
    tag: 'Humanitarianism',
    description: "\"Empowers the lesbian, gay, bisexual, transgender, and queer/questioning (LGBTQ) communities.\"",
    image: prideFlag,
    link: "https://myresourcecenter.org/"
  },
  {
    title: "National Alliance on Mental Illness (NAMI)",
    tag: 'Mental Health',
    description: "\"NAMI works to educate, advocate, listen and lead to improve the lives of people with mental illness and their loved ones.\"",
    image: brain,
    link: "https://www.nami.org/"
  },
  {
    title: "To Write Love On Her Arms",
    tag: 'Mental Health',
    description: "\"To Write Love on Her Arms is a nonprofit movement dedicated to presenting hope and finding help for people struggling.\"",
    image: smiley,
    link: "https://twloha.com/"
  },
  {
    title: "Tragedy Assistance Program for Survivors (TAPS)",
    tag: 'Mental Health',
    description: "\"TAPS provides comfort, care and resources to all those grieving the death of a military loved one.\"",
    image: usa,
    link: "https://www.taps.org/"
  },
  {
    title: "Alaska Humane Society: Adopt-A-Cat Shelter",
    tag: 'Animal Care and Rescue',
    description: "\"Our mission is to rescue, rehabilitate, and re-home cats in Alaska.\"",
    image: cat,
    link: "https://adopt-a-cat.org/"
  },
  {
    title: "Bat Conservation International",
    tag: 'Animal Care and Rescue',
    description: "\"Working to conserve the world's bats and their ecosystems to ensure a healthy planet..\"",
    image: bat,
    link: "https://www.batcon.org/"
  },
  {
    title: "Pangolin Crisis Fund",
    tag: 'Animal Care and Rescue',
    description: "\"The Pangolin Crisis Fund invests in the best projects to stop the poaching of pangolins.\"",
    image: pangolin,
    link: "https://wildnet.org/wildlife-fund/pangolin-crisis-fund/"
  },
];