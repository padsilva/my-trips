import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { Close } from '@styled-icons/material-outlined'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

type ImageProps = {
  id: string
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    reference?: {
      html: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => (
  <>
    <NextSeo
      title={`${place.name} - My Trips`}
      description={
        place.description?.text ||
        'A simple project to show some of my favorite places.'
      }
      canonical="https://padsilva-trips.vercel.app"
      openGraph={{
        url: 'https://padsilva-trips.vercel.app',
        title: `${place.name} - My Trips`,
        description:
          place.description?.text ||
          'A simple project to show some of my favorite places.',
        images: [
          {
            url: place.gallery[0].url,
            width: place.gallery[0].width,
            height: place.gallery[0].height,
            alt: place.name
          }
        ],
        site_name: 'My Trips'
      }}
    />

    <LinkWrapper href="/">
      <Close size={32} />
    </LinkWrapper>

    <S.Wrapper>
      <S.Container>
        <S.Heading>{place.name}</S.Heading>

        <S.Body>
          <div
            dangerouslySetInnerHTML={{
              __html: place.description?.html || ''
            }}
          />
        </S.Body>

        <S.Reference>
          <div
            dangerouslySetInnerHTML={{
              __html: place.reference?.html || ''
            }}
          />
        </S.Reference>

        <S.Gallery>
          {place.gallery.map((image) => (
            <Image
              key={`photo-${image.id}`}
              src={image.url}
              alt={place.name}
              width={image.width}
              height={image.height}
              layout="responsive"
            />
          ))}
        </S.Gallery>
      </S.Container>
    </S.Wrapper>
  </>
)

export default PlacesTemplate
