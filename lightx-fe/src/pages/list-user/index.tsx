import ContentWrapper from 'components/organisms/content'
import HeaderWrapper from 'components/organisms/header'
import StandardTemplate from 'components/templates/standard'
import { useUserFetcher } from 'hooks/api-fetch/useUserFetcher'
import React from 'react'

interface IListUserPage {
  name?: string
}

const ListUserPage: React.FC<IListUserPage> = () => {
  const { dataSource } = useUserFetcher()

  const memoContent = React.useMemo(
    () => <ContentWrapper>
      <button>Hehes</button>
      <input id="hihi" data-testid="testid"/>
      <input id="disabled-input" data-testid="disabled-input" disabled/>
      {JSON.stringify(dataSource)}
      </ContentWrapper>,
    [dataSource?.length]
  )

  const memoHeader = React.useMemo(
    () => <HeaderWrapper>{'Here is the header overrided'}</HeaderWrapper>,
    []
  )

  return (
    <StandardTemplate
      templateContent={memoContent}
      templateFooter={<>{'I am footer'}</>}
      templateHeader={memoHeader}
      templateSideBar={<>{'Bo may la sidebar'}</>}
    />
  )
}

export default ListUserPage
