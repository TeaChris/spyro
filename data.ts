import img1 from './src/images/classes1.png'
import img2 from './src/images/classes2.png'
import img3 from './src/images/classes3.png'

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
    image: img1,
    name: 'robert fox',
    stack: 'gym instructor',
  },
  {
    image: img1,
    name: 'anny potsy',
    stack: 'gym instructor',
  },
  {
    image: img1,
    name: 'glynn hogan',
    stack: 'gym instructor',
  },
]
