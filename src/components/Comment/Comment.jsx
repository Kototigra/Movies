import React from 'react'


export default function Comment({comment, deleteComment, index}) {

  return (
   <div className='comment'>
   <p className='comment__text'>{comment}</p>
   <button className='comment__deleteBtn' onClick={() => deleteComment(index)}>X</button>
   <br/>
   </div>
  )
}
