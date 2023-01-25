import { ITemplateBase } from 'components/types'
import './style.scss'

interface IListUserTemplate extends ITemplateBase {
  templateHeader: React.ReactNode
  templateContent: React.ReactNode
  templateFooter: React.ReactNode
}

export const ListUserTemplate = (props: IListUserTemplate) => {
  const { templateContent, templateHeader, templateFooter } = props
  return (
    <div className="layout-wrapper">
      <div className="header-wrapper">{templateHeader}</div>
      <div className="sidbar-wrapper">{templateFooter}</div>
      <div className="content-wrapper">{templateContent}</div>
    </div>
  )
}
