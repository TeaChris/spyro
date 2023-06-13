import Classes from '@/components/Classes'
import Fit from '@/components/Fit'
import Header from '@/components/Header'
import Instructors from '@/components/Instructors'
import Moves from '@/components/Moves'

export default function Home() {
  return (
    <>
      <Header />
      <Moves />
      <Fit />
      <Classes />
      <Instructors />
    </>
  )
}
