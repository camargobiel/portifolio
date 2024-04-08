'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import {
  alreadyWorkedTechs,
  mainTechs,
  studyingTechs,
} from '@/app/shared/techs'
import { Card } from './card'

export function TechnologiesMobile() {
  return (
    <section id="techs" className="w-[100vw] h-screen gap-14 bg-slate-200">
      <h2 className="text-4xl text-primary pt-32 mb-16 text-center">
        Tecnologias
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        autoplay
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Card techs={mainTechs} title="Trabalho atualmente" />
        </SwiperSlide>
        <SwiperSlide>
          <Card techs={alreadyWorkedTechs} title="Já trabalhei" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Estou estudando" techs={studyingTechs} />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
