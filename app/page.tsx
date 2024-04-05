import { Contacts } from './components/contacts'
import { Experience } from './components/experience'
import { Landing } from './components/landing'
import { Projects } from './components/projects'
import { Technologies } from './components/technologies'

export default function Home() {
  return (
    <main className="w-screen">
      <Landing />
      <Technologies />
      <Experience />
      <Projects />
      <Contacts />
    </main>
  )
}
