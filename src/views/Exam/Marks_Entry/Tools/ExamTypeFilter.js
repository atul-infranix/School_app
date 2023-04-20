import { Select } from 'components/ui'
import React from 'react'

const ExamTypeFilter = (props) => {
  return (
    <Select className={props.marginLeft?"ml-4":""} size="sm" placeholder="ExamType"/>
  )
}

export default ExamTypeFilter