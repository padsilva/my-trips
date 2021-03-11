import { useEffect } from 'react'
import Leaflet from 'leaflet'
import { useMap } from 'react-leaflet'
import { BookmarkIcon, HomeIcon, StarIcon } from 'icons'

const Legend = () => {
  const map = useMap()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useEffect((): any => {
    const legend = new Leaflet.Control({ position: 'bottomleft' })
    legend.onAdd = () => {
      const div = Leaflet.DomUtil.create('div', 'info legend')

      div.innerHTML += HomeIcon + ' My hometown <br>'

      div.innerHTML += StarIcon + ' Already visited <br>'

      div.innerHTML += BookmarkIcon + ' Want to visit <br>'

      return div
    }

    legend.addTo(map)

    return () => legend.remove()
  }, [map])

  return null
}

export default Legend
