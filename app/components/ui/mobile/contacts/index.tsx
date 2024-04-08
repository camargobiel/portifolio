'use client'

import Image from 'next/image'
import Profile from '../../../../../public/images/perfil.jpg'

export function ContactsMobile() {
  return (
    <section id="contacts" className="h-screen p-3 text-black">
      <h2 className="text-4xl text-primary mb-16 pt-32 text-center">
        Contatos
      </h2>
      <div className="flex justify-center text-center">
        <div className={`flex flex-col justify-center items-center gap-10`}>
          <Image
            src={Profile}
            className="w-48 h-48 rounded-full object-cover"
            alt="minha foto"
          />
          <div className="flex flex-col gap-5 text-lg font-sans text-black">
            <p>📍 São José do Rio Preto (SP)</p>
            <p>E-mail: camargoobiel@gmail.com</p>
            <p>Telefone/WhatsApp: (17) 99215-1281</p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/gabriel-nunes-camargo/"
                target="_blank"
                className="underline text-blue-500"
              >
                https://linkedin.com/in/gabriel-nunes-camargo/
              </a>
            </p>
            <p>
              Github:{' '}
              <a
                className="underline text-blue-500"
                href="https://github.com/camargobiel"
                target="_blank"
              >
                https://github.com/camargobiel
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
