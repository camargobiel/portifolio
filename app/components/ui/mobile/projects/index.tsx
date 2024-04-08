'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { Card } from './components/card'

export function ProjectsMobile() {
  return (
    <section id="projects" className="h-[100vh] bg-slate-200">
      <h2 className="text-4xl text-primary mb-16 pt-32 text-center">
        Meus projetos
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        autoplay
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Card
            title="Sistema de autenticação"
            description="API de autenticação completa com token/refresh token, Google e
            Github. Documentado com Swagger e totalmente testada usando testes
            E2E."
            link="https://github.com/camargobiel/authentication-system"
            techs="Typescript, Node.js, Express, Prisma, PostgreSQL, Docker e Jest"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="API Book trade"
            description="API desenvolvida com base em Clean Architecture, testes
            unitários e E2E"
            link="https://github.com/camargobiel/book-trade-api"
            techs="Typescript, Node.js, Express, Prisma, PostgreSQL e Docker"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Projeto interdisciplinar acadêmico"
            description="Sistema full stack completo de controle de estoque
            desenvolvido para matéria da faculdade."
            link="https://github.com/camargobiel/inter"
            techs="Typescript, React, C#, .NET 7, Entity Framework"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
