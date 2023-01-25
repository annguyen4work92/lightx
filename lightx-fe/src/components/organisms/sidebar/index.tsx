import React from 'react'
import DefaultSideBar from './deafault.component'

interface ISideBarWrapper {}
const SideBarWapper: React.FC<ISideBarWrapper> = (
  props: React.PropsWithChildren<ISideBarWrapper>
) => {
  const { children } = props
  return <>{children || <DefaultSideBar />}</>
}
export default SideBarWapper
