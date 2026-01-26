import React from 'react'

function Cards({item}) {
 
  return (
    <>
    <div className='mt-4 my-3 p-3 '>
      <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-pink-100  dark:bg-slate-900 dark:text-white border
">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">₹{item.price}</div>
      <div className=" cursor-pointer px-2 py-1 rounded-full hover:bg-orange-500 hover:text-white border  duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
