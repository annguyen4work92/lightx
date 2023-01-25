import React from 'react'
import DefaultFooter from './default.component'

interface IFooterWapper {}

const FooterWrapper: React.FC<IFooterWapper> = (
  props: React.PropsWithChildren<IFooterWapper>
) => {
  const { children } = props
  return <>{children || <DefaultFooter />}</>
}

export default FooterWrapper
