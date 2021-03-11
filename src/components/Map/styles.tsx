import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    background-color: var(--background);
  }

  .leaflet-div-icon {
    background: transparent;
    border: none;
  }

  .info {
    padding: 6px 8px;
    font-size: var(--small);
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  .legend {
    line-height: 24px;

    svg {
      margin-right: 8px;
    }
  }
`
