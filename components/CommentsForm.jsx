import React, {useState, useEffect, useRef} from 'react'


const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmisson = () => {
    setError(false);

    const {value: comment} = comment.EL.current;
    const {value: name} = name.EL.current;
    const {value: email} = email.EL.current;
    const {checked: storeData} = storeData.EL.current;

    if(!comment || !name || !email){
        setError(true);
        return;
    }

    const commentObj = {name, email, comment, slug};

    if(storeData){
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else{
      localStorage.removeItem('name', name);
      localStorage.removeItem('email', email);
    }
  }


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className = 'text-xl mb-8 font-semibold border-b pb-4' >Leave a Comment</h3>
      <div className ='grid grid-cols-1 gap-4 mb-4'>
          <textarea 
            ref={commentEl}
            className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Comment'
            name="comment"
          />
      </div>
      <div className ='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
          <input
            type ='text' ref={nameEl}
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Name'
            name="name"
          />
      </div>
      <div className ='grid grid-cols-1 gap-4 mb-4'>
      <input
            type ='text' ref={emailEl}
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Email'
            name="email"
          />
      </div>
      <div className ='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input ref={storeDataEl.el} type='checkbox' id='storeData' name='storData' value='true'/>
          <label className= 'text-gray-500 cursor-pointer ml-2' htmlFor='storeData'> Save my email and name for the next time I comment.</label>
        </div>
      </div>
      {error && <p className= 'text-xs text-red-600'>All fields required!</p>}
      <div className='mt-8'>
        <button 
          type='button' 
          onCLick={handleCommentSubmisson}
          className='transition duration-500 ease hover:bg-pink-700 inline-block bg-yellow-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'>
            Post Comment
        </button>
        {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-blue-500'>Comment submitted for review.</span>}
      </div>
    </div>
  )
}

export default CommentsForm