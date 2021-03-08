// import * as S from './styles'

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
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => (
  <>
    <h1>{place.name}</h1>

    <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

    {place.gallery.map((image) => (
      <img key={`photo-${image.id}`} src={image.url} alt={place.name} />
    ))}
  </>
)

export default PlacesTemplate
