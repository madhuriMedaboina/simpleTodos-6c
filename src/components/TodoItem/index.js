// Write your code here
import React from 'react'
import './index.css'

const TodoItem = props => {
  const {userDetails, deleteTodoItem} = props
  const {id, title} = userDetails
  const onDelete = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="list-container">
      <p className="para">{title}</p>
      <div>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
