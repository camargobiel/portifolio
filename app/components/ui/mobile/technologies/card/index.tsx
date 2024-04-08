type Props = {
  techs: Array<{
    svg: React.ReactNode
    title: string
  }>
  title: string
}

export function Card({ techs, title }: Props) {
  return (
    <div className="relative mb-20 mx-3">
      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primary"></span>
      <span className="flex text-xl relative h-full w-full rounded border-2 border-primary bg-white px-3 py-1 text-primary transition duration-100">
        <div className="border-primary rounded-lg p-2 w-full flex flex-col gap-3">
          <h2 className="text-xl text-primary">{title}</h2>
          <section className={`mt-5 grid grid-cols-3 place-items-center gap-5`}>
            {techs.map((item, index) => (
              <div
                className="flex flex-col items-center gap-5 py-2"
                key={index}
              >
                <div className="scale-75">{item.svg}</div>
                <p className="text-sm text-primary">{item.title}</p>
              </div>
            ))}
          </section>
        </div>
      </span>
    </div>
  )
}
