import type { NextPage } from 'next'
import Head from 'next/head'

const posts = [
  { title: 'Terrible Twos', excerpt: 'What to Do at Two' },
  { title: 'Nap Time', excerpt: 'Sleep When they Sleep' },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray">
      <Head>
        <title>Parenting Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className= 'grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div>
        {posts.map((post, index) =>(
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
        
        </div>
        
        <div className='lg:col-span-4 col-span-1'>

        </div>


      </div>

      
    </div>
  )
}

export default Home
