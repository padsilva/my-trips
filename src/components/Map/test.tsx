import { render, screen } from '@testing-library/react'

import Map from '.'

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
    const places = [
      {
        id: '1',
        name: 'Bombarral',
        slug: 'bombarral',
        location: {
          latitude: 39.2683,
          longitude: -9.1581
        },
        description: `<p>My hometown is <strong>Bombarral</strong>.</p>
          It is located in a privileged geographic region in the extreme
          southern part of the District of Leiria, in the centre of Western
          Tourist Region.`
      },
      {
        id: '2',
        name: 'Padua',
        slug: 'padua',
        location: {
          latitude: 45.416667,
          longitude: 11.866667
        },
        description: `Padua is a city and comune in Veneto, northern Italy.`
      }
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/bombarral/i)).toBeInTheDocument()
    expect(screen.getByTitle(/padua/i)).toBeInTheDocument()
  })
})
