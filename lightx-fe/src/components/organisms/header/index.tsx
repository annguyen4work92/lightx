import React from 'react'
import DefaultHeader from './default.component'

interface IHeaderWapper {}
const HeaderWrapper: React.FC<IHeaderWapper> = (
  props: React.PropsWithChildren<IHeaderWapper>
) => {
  const { children } = props
  return <>{children || <DefaultHeader />}</>
}
export default HeaderWrapper
