import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'
import Leaflet from 'leaflet'

import Legend from 'components/Legend'
import { BookmarkIcon, HomeIcon, StarIcon } from 'icons'
import { mapView } from './config'

import * as S from './styles'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
  visited: boolean
}

export type MapProps = {
  places?: Place[]
}

const home = 'bombarral'

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  const customMarkerIcon = (place: Place) => {
    const iconHTML =
      place.slug === home ? HomeIcon : place.visited ? StarIcon : BookmarkIcon

    return new Leaflet.DivIcon({
      html: iconHTML,
      iconSize: [24, 24],
      iconAnchor: [12, 18],
      popupAnchor: [0, -24]
    })
  }

  return (
    <S.Wrapper>
      <MapContainer
        center={mapView.center}
        zoom={mapView.zoom}
        style={{
          height: '100%',
          width: '100%'
        }}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) map.setMinZoom(2)

            map.addEventListener('dragend', () => {
              mapView.setView(map.getCenter())
            })

            map.addEventListener('zoomend', () => {
              mapView.setView(map.getCenter(), map.getZoom())
            })

            return null
          }}
        </MapConsumer>

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Legend />

        {places?.map((place) => (
          <Marker
            key={`place-${place.id}`}
            position={[place.location.latitude, place.location.longitude]}
            title={place.name}
            eventHandlers={{
              click: () => router.push(`/place/${place.slug}`)
            }}
            icon={customMarkerIcon(place)}
          />
        ))}
      </MapContainer>
    </S.Wrapper>
  )
}

export default Map
