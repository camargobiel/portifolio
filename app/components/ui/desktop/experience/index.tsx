export function Experience() {
  return (
    <section id="experiences" className="h-[100vh] w-screen">
      <h2 className="text-4xl text-primary pt-36 mb-11 text-center">
        Experiências
      </h2>
      <section className="flex justify-center">
        <div className="relative m-10 mb-20">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primary"></span>
          <span className="text-xl relative inline-block h-full w-full rounded border-2 border-primary bg-white px-3 py-1 text-primary transition duration-100">
            <div className="rounded-lg p-5 flex flex-col gap-3">
              <a
                href="https://fieldcontrol.com.br/"
                target="_blank"
                className="text-primary text-2xl underline cursor-pointer"
              >
                Field Control
              </a>
              <h3 className="text-primary text-xl">Full Stack Estagiário</h3>
              <h3 className="text-zinc-500 text-xl">
                Maio de 2022 - Julho de 2023
              </h3>
              <h4 className="text-primary text-lg">
                Tecnologias:{' '}
                <strong>
                  Angular, AngularJS, React, IONIC, Rest e GraphQL
                </strong>
              </h4>
            </div>
          </span>
        </div>
        <div className="relative m-10 mb-20">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primary"></span>
          <span className="text-xl relative inline-block h-full w-full rounded border-2 border-primary bg-white px-3 py-1 text-primary transition duration-100">
            <div className="border-primary rounded-lg p-5 flex flex-col gap-3">
              <a
                href="https://Paipe.co/"
                target="_blank"
                className="text-primary text-2xl underline cursor-pointer"
              >
                Paipe.co
              </a>
              <h3 className="text-primary text-xl">Full Stack Pleno</h3>
              <h3 className="text-zinc-500 text-xl">
                Julho de 2023 - Atualmente
              </h3>
              <h4 className="text-primary text-lg">
                Tecnologias:{' '}
                <strong>React, PostgreSQL, Node.JS, Rest, Prisma e AWS</strong>
              </h4>
            </div>
          </span>
        </div>
      </section>
    </section>
  )
}
