'use client'

import Image from 'next/image'
import GNCIcon from '../../../../../public/GNC.svg'

export function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <nav
      className={`w-screen p-4 h-24 flex items-center justify-evenly fixed bg-white z-50`}
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
        <Image src={GNCIcon} alt="icon" width={120} height={20} />
      </section>
      <section className="flex gap-20">
        <button
          onClick={() => scrollTo('techs')}
          className="text-primary text-xl border-b-[1px] border-transparent hover:border-b-[1px] hover:border-primary transition-all"
        >
          Tecnologias
        </button>
        <button
          onClick={() => scrollTo('experiences')}
          className="text-primary text-xl border-b-[1px] border-transparent hover:border-b-[1px] hover:border-primary transition-all"
        >
          Experiências
        </button>
        <button
          onClick={() => scrollTo('projects')}
          className="text-primary text-xl border-b-[1px] border-transparent hover:border-b-[1px] hover:border-primary transition-all"
        >
          Meus projetos
        </button>
        <button
          onClick={() => scrollTo('contacts')}
          className="text-primary text-xl border-b-[1px] border-transparent hover:border-b-[1px] hover:border-primary transition-all"
        >
          Contatos
        </button>
      </section>
      <a href="https://api.whatsapp.com/send?phone=17992151281" target="_blank">
        <button className="text-xl before:ease relative h-12 w-40 overflow-hidden border rounded-lg border-primary text-primary before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-primary before:transition-all before:duration-300 hover:text-white hover:before:-rotate-180">
          <span className="relative z-10">Fale comigo</span>
        </button>
      </a>
    </nav>
  )
}
