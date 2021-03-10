import { Close } from '@styled-icons/material-outlined'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

export type PagesTemplateProps = {
  heading: string
  body: string
}

const PagesTemplate = ({ heading, body }: PagesTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <Close size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PagesTemplate
