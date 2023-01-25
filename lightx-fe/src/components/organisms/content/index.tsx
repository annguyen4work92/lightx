import DefaultContent from './default.component'
import React from 'react'

interface IContentWrapper {}
const ContentWrapper: React.FC<IContentWrapper> = (
  props: React.PropsWithChildren<IContentWrapper>
) => {
  const { children } = props
  return <>{children || <DefaultContent />}</>
}
export default ContentWrapper
