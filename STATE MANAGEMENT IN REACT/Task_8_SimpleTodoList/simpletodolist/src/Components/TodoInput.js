import React, { useState } from 'react';

const TodoInput = (props) => {

    const[inputText,setInputText] = useState('');

  return (
    <div className='inputContainer'>
        <input 
            type='text' 
            className='inputBoxTodo' 
            placeholder='Enter todo'
            value={inputText}
            onChange = {e => {
                setInputText(e.target.value)
            }}
        />
        <button className='addBtn' onClick={()=>{
            props.addList(inputText)
            setInputText('') 
        }}>Add</button>
    </div>
  )
}       

export default TodoInput