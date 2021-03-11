import ReactDOMServer from 'react-dom/server'
import { Bookmark, Home, Star } from '@styled-icons/material'

export const BookmarkIcon = ReactDOMServer.renderToString(
  <Bookmark color="#2A2CC8" size={24} aria-label="Wish to vistit" />
)

export const HomeIcon = ReactDOMServer.renderToString(
  <Home color="#50923E" size={24} aria-label="Wish to vistit" />
)

export const StarIcon = ReactDOMServer.renderToString(
  <Star color="#FFC733" size={24} aria-label="Already visited place" />
)
