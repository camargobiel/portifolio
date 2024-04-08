'use client'

import { useEffect, useState } from 'react'
import { Contacts } from './components/ui/desktop/contacts'
import { Experience } from './components/ui/desktop/experience'
import { Landing } from './components/ui/desktop/landing'
import { Projects } from './components/ui/desktop/projects'
import { Technologies } from './components/ui/desktop/technologies'
import { Navbar } from './components/ui/desktop/navbar'
import { NavbarMobile } from './components/ui/mobile/navbar'
import { LandingMobile } from './components/ui/mobile/landing'
import { TechnologiesMobile } from './components/ui/mobile/technologies'
import { ExperienceMobile } from './components/ui/mobile/experience'
import { ProjectsMobile } from './components/ui/mobile/projects'
import { ContactsMobile } from './components/ui/mobile/contacts'

export default function Home() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (window) {
      setWidth(window.screen.width)
    }
  }, [setWidth])

  const isMobile = width <= 650

  return (
    <main>
      {isMobile ? (
        <>
          <NavbarMobile />
          <LandingMobile />
          <TechnologiesMobile />
          <ExperienceMobile />
          <ProjectsMobile />
          <ContactsMobile />
        </>
      ) : (
        <div>
          <Navbar />
          <Landing />
          <Technologies />
          <Experience />
          <Projects />
          <Contacts />
        </div>
      )}
    </main>
  )
}
