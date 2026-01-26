import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className='mt-28 items-center justify-center text-center'>
      <h1 className="text-2xl font-semibold md:text-4xl  ">
        We're delighted to have you 
        <span className="text-orange-500"> Here! :)</span>
      </h1>
      <p className='mt-12'>A bookstore is a place where books are sold to customers for reading, learning, and reference purposes. It offers a wide variety of books such as textbooks, novels, storybooks, magazines, newspapers, reference books, and sometimes stationery items. Bookstores can be small local shops or large stores with thousands of books arranged in different sections based on subjects, authors, or genres.

      </p>
      <Link to='/'>
       <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300">
  Back
</button>
      </Link>
    
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 '>
      {
       list.map((item) => (
  <Cards key={item.id} item={item} />
))
  
      }
    </div>

    </div>
  )
}

export default Course
