import { ITemplateBase } from 'components/types'
import './style.scss'
import React from 'react'

interface IListUserTemplate extends ITemplateBase {
  templateHeader: React.ReactElement
  templateSideBar: React.ReactElement
  templateContent: React.ReactElement
  templateFooter: React.ReactElement
}

const StandardTemplate = (props: IListUserTemplate) => {
  const { templateContent, templateHeader, templateSideBar, templateFooter } =
    props
  return (
    <div className="layout-wrapper">
      <div className="header-wrapper">{templateHeader}</div>
      <div className="sidbar-wrapper">{templateSideBar}</div>
      <div className="content-wrapper">{templateContent}</div>
      <div className="footer-wrapper">{templateFooter}</div>
    </div>
  )
}

export default StandardTemplate
