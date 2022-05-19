import React, {useState} from 'react'
import Comment from '../Comment/Comment'

export default function Form() {
  
  const [input, setInput] = useState('')
  const [comments, setComments] = useState([])

  
  const submitHandler = event => {
    event.preventDefault()
    if (input) {setComments([...comments, input])
    setInput('')}
  }
  
  const deleteComment = (index) => {
    comments.splice(index, 1) 
  }  

  return (
    <>
    <form className='form' onSubmit={submitHandler}>
          <label className='form__lable'> Comments</label>
          <input className='form__input' type="text" placeholder='  Add a comment...' value={input} onChange={(event) => setInput(event.target.value)}/>
          <button className='form__addBtn' type='submit'>Add</button>
    </form>
    {comments.map((el, index) => (<Comment comment={el} key={index} deleteComment={deleteComment} index={index}/>))}
    </>
  )
}
