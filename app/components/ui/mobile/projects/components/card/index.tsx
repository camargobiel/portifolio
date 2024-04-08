type Props = {
  title: string
  link: string
  techs: string
  description: string
}

export const Card = ({ title, link, techs, description }: Props) => {
  return (
    <div className="relative mb-20 mx-3">
      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primary"></span>
      <span className="text-xl relative inline-block h-full w-full rounded border-2 border-primary bg-white px-3 py-1 text-primary transition duration-100">
        <div className={`border-primary rounded-lg flex p-1 flex-col gap-3`}>
          <h2 className="text-xl">{title}</h2>
          <a target="_blank" href={link}>
            <small className="text-primary text-base underline">
              Ver no github
            </small>
          </a>
          <p className="text-zinc-500 text-base">{description}</p>
          <p className="text-primary text-base">
            Tecnologias: <strong>{techs}</strong>
          </p>
        </div>
      </span>
    </div>
  )
}
