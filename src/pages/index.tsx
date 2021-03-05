import dynamic from 'next/dynamic'
import places from 'components/Map/mock'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const Home = () => (
  <>
    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="About" />
    </LinkWrapper>
    <Map places={places} />
  </>
)

export default Home
