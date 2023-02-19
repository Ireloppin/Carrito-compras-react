import React from 'react'

const Option = ({value}) => {
  return (
    <option style={{textTransform:'capitalize'}} value={value}>{value}</option>
  )
}

export default Option