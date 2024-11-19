import React from 'react'

const TodoList = (props) => {
  return (
    <li className='listItem'>
        {props.item}
        <span className='icons'>
            <i className="fa-solid fa-trash icon-delete" 
            onClick={e=>{
                props.deleteItem(props.index)
            }}></i>
        </span>
    </li>
  )
}

export default TodoList