import img1 from './src/images/classes1.png'
import img2 from './src/images/classes2.png'
import img3 from './src/images/classes3.png'

import tutor1 from './src/images/tutor1.png'
import tutor2 from './src/images/tutor2.png'
import tutor3 from './src/images/tutor3.png'
import tutor4 from './src/images/tutor4.png'

import feed from './src/images/feed.svg'
import feed2 from './src/images/feed2.svg'
import feed3 from './src/images/feed3.svg'
import { Interface } from 'readline'

export interface Navlinks {
  id: number
  name: string
  path: string
}

export const navlinks: Navlinks[] = [
  {
    id: 1,
    name: 'classes',
    path: '/',
  },
  {
    id: 2,
    name: 'Teams',
    path: '/',
  },
  {
    id: 3,
    name: 'about us',
    path: '/',
  },
  {
    id: 4,
    name: 'gallery',
    path: '/',
  },
]

export interface Classes {
  image: any
  name: string
  student: string
  title: string
  time: number
  instructor: string
  numberOfClasses: number
  diff: string
}

export const classes: Classes[] = [
  {
    image: img1,
    name: 'yoga',
    student: '29 students',
    title: 'strength & sweat',
    time: 2,
    instructor: 'esther howard',
    numberOfClasses: 30,
    diff: 'beginner',
  },
  {
    image: img2,
    name: 'fitness',
    student: '34 students',
    title: 'total body burnout',
    time: 4,
    instructor: 'wade waron',
    numberOfClasses: 45,
    diff: 'medium',
  },
  {
    image: img3,
    name: 'yoga',
    student: '60 students',
    title: 'bootcamp challenge',
    time: 3,
    instructor: 'robert fox',
    numberOfClasses: 352,
    diff: 'hard',
  },
]

export interface Instructors {
  image: any
  name: string
  stack: string
}

export const instructors: Instructors[] = [
  {
    image: tutor1,
    name: 'jacob jones',
    stack: 'gym trainer',
  },
  {
    image: tutor2,
    name: 'Leslie Alexander',
    stack: 'gym trainer',
  },
  {
    image: tutor3,
    name: 'Cameron Williamson',
    stack: 'gym trainer',
  },
  {
    image: tutor4,
    name: 'Jane Cooper',
    stack: 'gym trainer',
  },
]

export interface Feedbacks {
  image: any
  name: string
  words: string
}

export const feedbacks: Feedbacks[] = [
  {
    image: feed,
    name: 'Courtney Henry',
    words:
      'Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re',
  },
  {
    image: feed2,
    name: 'Brooklyn Simmons',
    words:
      'This a great historic site to visit. I rented a little cart and the driver was a really good friendly',
  },
  {
    image: feed3,
    name: 'Jane Cooper',
    words:
      'I had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful',
  },
]

export interface Faqs {
  id: number
  question: string
  answer: string
}

export const faqs: Faqs[] = [
  {
    id: 1,
    question: 'What are your focus areas?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 2,
    question: 'What are your focus areas as a UI/UX agency?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 3,
    question: 'What are your focus areas as a UI/UX agency?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 4,
    question: 'What are your focus areas as a UI/UX agency?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 5,
    question: 'What are your focus areas as a UI/UX agency?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 6,
    question: 'What are your focus areas as a UI/UX agency?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
]
