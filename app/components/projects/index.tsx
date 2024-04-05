export function Projects() {
  return (
    <section id="projects" className="h-[100vh] bg-slate-200 px-10">
      <h2 className="text-4xl text-primary mb-24 pt-[170px] text-center">
        Meus projetos
      </h2>
      <div className="grid grid-cols-3 place-items-center">
        <div className="relative">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primary"></span>
          <span className="text-xl relative inline-block h-full w-full rounded border-2 border-primary bg-white px-3 py-1 text-primary transition duration-100">
            <div className="border-primary rounded-lg p-5 w-[27vw] flex flex-col gap-3">
              <h2 className="text-2xl">Sistema de autenticação</h2>
              <a
                target="_blank"
                href="https://github.com/camargobiel/authentication-system"
              >
                <small className="text-primary text-lg underline">
                  Ver no github
                </small>
              </a>
              <h3 className="text-zinc-500 text-xl">
                API de autenticação completa com token/refresh token, Google e
                Github. <br />
                Documentado com Swagger. <br />
                Totalmente testada usando testes E2E.
              </h3>
              <h4 className="text-primary text-lg">
                Tecnologias:{' '}
                <strong>
                  Typescript, Node.js, Express, Prisma, PostgreSQL, Docker e
                  Jest
                </strong>
              </h4>
            </div>
          </span>
        </div>
        <div className="relative h-full">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primary"></span>
          <span className="text-xl relative inline-block h-full w-full rounded border-2 border-primary bg-white px-3 py-1 text-primary transition duration-100">
            <div className="border-primary rounded-lg p-5 w-[27vw] flex flex-col gap-3">
              <h2 className="text-2xl">API Book trade</h2>
              <a
                target="_blank"
                href="https://github.com/camargobiel/book-trade-api"
              >
                <small className="text-primary text-lg underline">
                  Ver no github
                </small>
              </a>
              <h3 className="text-zinc-500 text-xl">
                API desenvolvida com base em Clean Architecture, testes
                unitários e E2E
              </h3>
              <h4 className="text-primary text-lg">
                Tecnologias:{' '}
                <strong>
                  Typescript, Node.js, Express, Prisma, PostgreSQL e Docker
                </strong>
              </h4>
            </div>
          </span>
        </div>
        <div className="relative h-full">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primary"></span>
          <span className="text-xl relative inline-block h-full w-full rounded border-2 border-primary bg-white px-3 py-1 text-primary transition duration-100">
            <div className="border-primary rounded-lg p-5 w-[27vw] flex flex-col gap-3">
              <h2 className="text-2xl">Projeto interdisciplinar acadêmico</h2>
              <a target="_blank" href="https://github.com/camargobiel/inter">
                <small className="text-primary text-lg underline">
                  Ver no github
                </small>
              </a>
              <h3 className="text-zinc-500 text-xl">
                Sistema full stack completo de controle de estoque desenvolvido
                para matéria da faculdade.
              </h3>
              <h4 className="text-primary text-lg">
                Tecnologias:{' '}
                <strong>Typescript, React, C#, .NET 7, Entity Framework</strong>
              </h4>
            </div>
          </span>
        </div>
      </div>
    </section>
  )
}
