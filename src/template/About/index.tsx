import { CloseOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        atque ullam? In saepe dicta, nesciunt deserunt, alias, officia voluptas
        repudiandae culpa minima quibusdam amet eaque officiis. Et corporis
        officiis id.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
