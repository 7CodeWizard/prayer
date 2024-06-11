import { Buddhism } from "assets"
import { Confucianism } from "assets"
import { Islam } from "assets"
import { Judaism } from "assets"
import { Shinto } from "assets"
import { Taoism } from "assets"
import { Spiritualit } from "assets"
import { Shikism } from "assets"
import { Jainism } from "assets"
import { Hinduism } from "assets"
import { Christianity } from "assets"
import { Baha } from "assets"
import { Other } from "assets"
import {
  defaultAvatar,
  avatar1, avatar2, avatar3,
  car,
  slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10
} from "assets"

const colorInfo = ['default', 'warning', 'primary', 'info', 'success', 'danger']
const tabInfo = ['Prayers', 'Meditations']

const navLinkInfo = [
  {
    icon: 'fa fa-facebook-square',
    title: 'Facebook',
    link: 'https://www.facebook.com',
    color: 'primary'
  },
  {
    icon: 'fa fa-instagram',
    title: 'Instagram',
    link: 'https://www.instagram.com',
    color: 'danger'
  },
  {
    icon: 'fa fa-twitter-square',
    title: 'Twitter',
    link: 'https://twitter.com',
    color: 'info'
  },
  {
    icon: 'fa fa-linkedin',
    title: 'Linkedin',
    link: 'https://www.linkedin.com/',
    color: 'success'
  },
  {
    icon: 'fa fa-whatsapp',
    title: 'WhatsApp',
    link: 'https://wa.me/',
    color: 'primary'
  },
]

const faithNameInfo = [
  'Bahai', 'Buddhism', 'Christianity', 'Confucianism', 'Hinduism', 'Islam', 'Jainism', 'Judaism', 'Shikism', 'Shinto', 'Spiritualit', 'Taoism', 'Other'
]

const faithIamgeInfo = {
  Baha: Baha,
  Buddhism: Buddhism,
  Christianity: Christianity,
  Confucianism: Confucianism,
  Hinduism: Hinduism,
  Islam: Islam,
  Jainism: Jainism,
  Judaism: Judaism,
  Shikism: Shikism,
  Shinto: Shinto,
  Spiritualit: Spiritualit,
  Taoism: Taoism,
  Other: Other
}


const myProfile = {
  avatar: defaultAvatar,
  firstName: 'Maya',
  lastName: 'Haynes',
  userName: 'Jessica Jones',
  email: 'jessica@gmail.com',
  age: '27',
  location: 'Bucharest, Romania',
  companyPosition: 'Solution Manager - Creative Tim Officer',
  education: 'University of Computer Science',
  summary: 'An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.',
  contributions: [
    {
      userName: 'Joana',
      flag: '',
      content: 'Joana content Lorem ipsum dolor sit amet consectetur',
      date: 'May 25 2024',
    },
    {
      userName: 'Catherine',
      flag: '',
      content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
      date: 'May 3 2024',
    },
    {
      userName: 'Olga',
      flag: '',
      content: 'Olga content Lorem ipsum dolor sit amet consectetur',
      date: 'Apr 29 2024',
    },
  ]
}

const userListInfo = [
  {
    userName: 'Joana',
    avatar: avatar1,
    date: 'May 25 2024',
    location: 'UK',
    contributions: [
      {
        userName: 'Joana',
        content: 'Lorem ipsom dollor',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        content: 'Lorem ipsom dollor',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        content: 'Lorem ipsom dollor',
        date: 'Apr 29 2024',
      },
    ]
  },
  {
    userName: 'Catherine',
    avatar: avatar2,
    date: 'May 3 2024',
    location: 'US',
    contributions: [
      {
        userName: 'Joana',
        content: 'Lorem ipsom dollor',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        content: 'Lorem ipsom dollor',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        content: 'Lorem ipsom dollor',
        date: 'Apr 29 2024',
      },
    ]
  },
  {
    userName: 'Olga',
    avatar: avatar3,
    date: 'Apr 29 2024',
    location: 'Russia',
    contributions: [
      {
        userName: 'Joana',
        content: 'Lorem ipsom dollor',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        content: 'Lorem ipsom dollor',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        content: 'Lorem ipsom dollor',
        date: 'Apr 29 2024',
      },
    ]
  },
]

const prayerInfo = [
  {
    profile: 'Lala',
    title: 'PrayerTitle1',
    image: car,
    description: 'Prayer Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    prayers: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        flag: '',
        content: 'Olga content Lorem ipsum dolor sit amet consectetur',
        date: 'Apr 29 2024',
      },
    ],
  },
  {
    profile: 'Kiera',
    title: 'PrayerTitle2',
    image: car,
    description: 'Prayer Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    prayers: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        flag: '',
        content: 'Olga content Lorem ipsum dolor sit amet consectetur',
        date: 'Apr 29 2024',
      },
    ],
  },
  {
    profile: 'Tori',
    title: 'PrayerTitle3',
    image: car,
    description: 'Prayer Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    prayers: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        flag: '',
        content: 'Olga content Lorem ipsum dolor sit amet consectetur',
        date: 'Apr 29 2024',
      },
    ],
  },
]

const meditationInfo = [
  {
    profile: 'Lala',
    title: 'MeditationTitle1',
    image: car,
    description: 'Meditation Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    meditations: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
    ],
  },
  {
    profile: 'Kiera',
    title: 'MeditationTitle2',
    image: car,
    description: 'Meditation Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    meditations: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
    ],
  },
]

const slideInfo = [
  {
    altText: '',
    caption: '',
    key: 1,
    src: slider1,
  },
  {
    altText: '',
    caption: '',
    key: 2,
    src: slider2,
  },
  {
    altText: '',
    caption: '',
    key: 3,
    src: slider3,
  },
  {
    altText: '',
    caption: '',
    key: 4,
    src: slider4,
  },
  {
    altText: '',
    caption: '',
    key: 5,
    src: slider5,
  },
  {
    altText: '',
    caption: '',
    key: 6,
    src: slider6,
  },
  {
    altText: '',
    caption: '',
    key: 7,
    src: slider7,
  },
  {
    altText: '',
    caption: '',
    key: 8,
    src: slider8,
  },
  {
    altText: '',
    caption: '',
    key: 9,
    src: slider9,
  },
  {
    altText: '',
    caption: '',
    key: 10,
    src: slider10,
  },
]

export {
  faithNameInfo, faithIamgeInfo, colorInfo,
  tabInfo, navLinkInfo,
  myProfile, userListInfo, prayerInfo, meditationInfo,
  slideInfo,
}