import dynamic from 'next/dynamic'
import places from 'components/Map/mock'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const Home = () => <Map places={places} />

export default Home
