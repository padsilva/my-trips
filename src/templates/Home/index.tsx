import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <NextSeo
      title="My Trips"
      description="A simple project to show some of my trips"
      canonical="https://www.url.ie/"
      openGraph={{
        url: 'https://www.url.ie/',
        title: 'My Trips',
        description: 'A simple project to show some of my trips',
        images: [
          {
            url: 'https://www.url.ie/img/cover.png',
            width: 1280,
            height: 720,
            alt: 'My Trips'
          }
        ],
        site_name: 'My Trips'
      }}
    />
    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="About" />
    </LinkWrapper>
    <Map places={places} />
  </>
)

export default HomeTemplate
