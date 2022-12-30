/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React from 'react'

interface Department {
  name: string
  slug: string
}

type ListDepartmentProps = {
  listDepartments: Department[]
  setSlug: React.Dispatch<React.SetStateAction<string>>
}

const DepartmentGroup = ({ listDepartments, setSlug }: ListDepartmentProps) => {
  const onSelectDepartment = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSlug(`${event.target.value}`)
  }

  // console.log('ListDepartment', slug)

  return (
    <select name="" id="" onChange={(event) => onSelectDepartment(event)}>
      <option value="op1">Seleccione un departamento</option>
      {listDepartments?.map((department, index) => {
        return (
          <option key={index} value={department.slug}>
            {department.name}
          </option>
        )
      })}
    </select>
  )
}

export default DepartmentGroup
