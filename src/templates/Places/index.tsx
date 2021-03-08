import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline'

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
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => (
  <>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
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

        <S.Gallery>
          {place.gallery.map((image) => (
            <Image
              key={`photo-${image.id}`}
              src={image.url}
              alt={place.name}
              width={1000}
              height={600}
              quality={75}
            />
          ))}
        </S.Gallery>
      </S.Container>
    </S.Wrapper>
  </>
)

export default PlacesTemplate
