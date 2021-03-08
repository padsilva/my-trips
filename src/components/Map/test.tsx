import { render, screen } from '@testing-library/react'

import Map from '.'
import places from './mock'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    render(<Map places={places} />)

    expect(screen.getByTitle(/bombarral/i)).toBeInTheDocument()
    expect(screen.getByTitle(/padua/i)).toBeInTheDocument()
  })
})
