/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React from 'react'
import { useQuery } from 'react-apollo'

import QUERY_VALUE from '../graphql/getDepartmentSearch.graphql'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)

  console.log('Query Data: ', data)

  return loading ? <div>Loading...</div> : <div>Search Department</div>
}

export default DepartmentSearch
