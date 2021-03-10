import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { Info } from '@styled-icons/material-outlined'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <NextSeo
      title="My Trips"
      description="A simple project to show some of my favorite places."
      canonical="https://padsilva-trips.vercel.app"
      openGraph={{
        url: 'https://padsilva-trips.vercel.app',
        title: 'My Trips',
        description: 'A simple project to show some of my favorite places.',
        images: [
          {
            url: 'https://padsilva-trips.vercel.app/img/cover.png',
            width: 1280,
            height: 720,
            alt: 'My Trips'
          }
        ],
        site_name: 'My Trips'
      }}
    />
    <LinkWrapper href="/about">
      <Info size={32} aria-label="About" />
    </LinkWrapper>
    <Map places={places} />
  </>
)

export default HomeTemplate
