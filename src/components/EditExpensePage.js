import React from "react"

const EditExpensePage = props => {
  console.log(props)
  return (
    <div>
      <div>Editing the expense with id of {props.match.params.id}</div>
    </div>
  )
}
export default EditExpensePage
