'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export function ExperienceMobile() {
  return (
    <section id="experiences" className="h-screen">
      <h2 className="text-4xl text-primary pt-32 mb-16 text-center">
        Experiências
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        autoplay
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative mx-3 mb-20">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primary"></span>
            <span className="text-xl relative inline-block h-full w-full rounded border-2 border-primary bg-white px-3 py-1 text-primary transition duration-100">
              <div className="border-primary rounded-lg p-1 flex flex-col gap-3">
                <a
                  href="https://Paipe.co/"
                  target="_blank"
                  className="text-primary text-lg underline cursor-pointer"
                >
                  Paipe.co
                </a>
                <h3 className="text-primary text-lg">Full Stack Pleno</h3>
                <h3 className="text-zinc-500 text-base">
                  Julho de 2023 - Atualmente
                </h3>
                <h4 className="text-primary text-base">
                  Tecnologias:{' '}
                  <strong>
                    React, PostgreSQL, Node.JS, Rest, Prisma e AWS
                  </strong>
                </h4>
              </div>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mx-3 mb-20">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primary"></span>
            <span className="text-xl relative inline-block h-full w-full rounded border-2 border-primary bg-white px-3 py-1 text-primary transition duration-100">
              <div className="rounded-lg p-1 flex flex-col gap-3">
                <a
                  href="https://fieldcontrol.com.br/"
                  target="_blank"
                  className="text-primary text-lg underline cursor-pointer"
                >
                  Field Control
                </a>
                <h3 className="text-primary text-lg">Full Stack Estagiário</h3>
                <h3 className="text-zinc-500 text-base">
                  Maio de 2022 - Julho de 2023
                </h3>
                <h4 className="text-primary text-base">
                  Tecnologias:{' '}
                  <strong>
                    Angular, AngularJS, React, IONIC, Rest e GraphQL
                  </strong>
                </h4>
              </div>
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
