import React from 'react'

// create postCard styleing and info 57:46

const PostCard = ({post}) => {
  return (
  <div>
    {post.title}
    {post.excerpt}
  </div>
 
  )
}

export default PostCard