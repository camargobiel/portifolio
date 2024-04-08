'use client'

import Image from 'next/image'
import GNCIcon from '../../../../../public/GNC.svg'
import { useState } from 'react'

export function NavbarMobile() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <nav
      className={`w-100 p-4 h-24 flex items-center justify-evenly fixed bg-white w-full z-50`}
    >
      <section
        className="cursor-pointer"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <Image src={GNCIcon} alt="icon" width={80} height={20} />
      </section>
      <div className={`flex flex-col items-center relative`}>
        <button
          onClick={() => setOpen(!open)}
          onBlur={() =>
            setTimeout(() => {
              setOpen(false)
            }, 100)
          }
          className="text-primary border-b-[1px] border-transparent hover:border-b-[1px] hover:border-primary transition-all"
        >
          Links
        </button>
        {open && (
          <section className="flex flex-col absolute mt-10 border border-primary rounded bg-white w-52 shadow-lg">
            <button
              onClick={() => scrollTo('techs')}
              className="text-primary text-sm border-b-[1px] border-primary transition-all p-2"
            >
              Tecnologias
            </button>
            <button
              onClick={() => scrollTo('experiences')}
              className="text-primary text-sm border-b-[1px] border-primary transition-all p-2"
            >
              Experiências
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="text-primary text-sm border-b-[1px] border-primary transition-all p-2"
            >
              Meus projetos
            </button>
            <button
              onClick={() => scrollTo('contacts')}
              className="text-primary text-sm transition-all p-2"
            >
              Contatos
            </button>
          </section>
        )}
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=17992151281"
        target="_blank"
        className="text-primary border rounded p-1 border-primary px-2"
      >
        Fale comigo
      </a>
    </nav>
  )
}
