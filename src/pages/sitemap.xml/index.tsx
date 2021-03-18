import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'
import client from 'graphql/client'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  const fields = places.map(({ slug }) => ({
    loc: `https://padsilva-trips.vercel.app/place/${slug}`, // Absolute url
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: 'https://padsilva-trips.vercel.app/',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://padsilva-trips.vercel.app/about',
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
const Named = () => {}
export default Named
