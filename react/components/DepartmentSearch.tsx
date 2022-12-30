/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React from 'react'
import { useQuery } from 'react-apollo'

import QUERY_VALUE from '../graphql/getDepartmentSearch.graphql'
import DepartmentGroup from './DepartmentGroup'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)

  console.log('Query Data: ', loading, data)

  return <DepartmentGroup listDepartments={data?.categories} />
}

export default DepartmentSearch
