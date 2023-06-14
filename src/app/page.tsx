import Classes from '@/components/Classes'
import Download from '@/components/Download'
import Faq from '@/components/Faq'
import Feedbacks from '@/components/Feedbacks'
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
      <Download />
      <Feedbacks />
      <Faq />
    </>
  )
}
