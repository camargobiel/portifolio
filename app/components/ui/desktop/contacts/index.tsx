import Image from 'next/image'
import Profile from '../../../../../public/images/perfil.jpg'

export function Contacts() {
  return (
    <section id="contacts" className="h-screen w-screen">
      <h2 className="text-4xl text-primary mb-24 pt-[170px] text-center">
        Contatos
      </h2>
      <div className="flex justify-center">
        <div className={`flex gap-10 items-center`}>
          <Image
            src={Profile}
            className="w-64 h-64 rounded-full object-cover"
            alt="minha foto"
          />
          <div className="flex flex-col gap-5 text-lg font-sans">
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
            <p>📍 São José do Rio Preto (SP)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
