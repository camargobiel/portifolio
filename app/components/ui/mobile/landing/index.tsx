export function LandingMobile() {
  return (
    <section className={`flex h-[80vh] w-[100vw] pt-40 px-10  justify-evenly`}>
      <section>
        <h2 className={`text-primary text-[30px]`}>Oi, sou o Gabriel.</h2>
        <h1 className={`text-white bg-primary transition-all text-[23px]`}>
          Programador Web Full Stack.
        </h1>
        <p className={`text-[14px] text-wrap mt-5`}>
          Desenvolvedor com mais de 2 anos de experiência e apaixonado no que
          faz. <br />
          Navegue pelo portfólio para ser mais sobre mim.
        </p>
        <a href="/curriculo_gabriel_camargo.pdf" download>
          <button className="mt-5 text-sm before:ease relative h-10 px-3 overflow-hidden border rounded-lg border-primary text-primary before:absolute before:left-0 before:-ml-2 before:h-48 before:w-96 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-primary before:transition-all before:duration-300 hover:text-white hover:before:-rotate-180">
            <span className="relative z-10">Baixar currículo (PDF)</span>
          </button>
        </a>
      </section>
    </section>
  )
}
