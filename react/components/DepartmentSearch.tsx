/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { SearchBar } from 'vtex.store-components'

import QUERY_VALUE from '../graphql/getDepartmentSearch.graphql'
import DepartmentGroup from './DepartmentGroup'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState('')

  console.log('Query Data: ', slug, loading)

  return (
    <div className="flex">
      <DepartmentGroup listDepartments={data?.categories} setSlug={setSlug} />
      <SearchBar
        customSearchPageUrl={slug}
        inputType="search"
        placeholder="Buscar products..."
        displayMode="search-and-clear-buttons"
      />
    </div>
  )
}

export default DepartmentSearch
