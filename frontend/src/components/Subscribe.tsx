import React from 'react'

const Subscribe = () => {
  return (
    <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-light-primary mb-4">
            Subscribe now & get 20% off
          </h2>
          <p className="text-light-secondary mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, recusandae!
            Consectetur tempora dolores, nobis, officia magnam ea assumenda quam ullam doloribus,
            sint reprehenderit illo saepe neque dolorum? Tenetur, porro quod?
          </p>
          <div className="mt-4 flex justify-center">
              <input
                type="email"
                className="rounded-l-md border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button className="bg-black text-white rounded-r-md px-4 py-2 hover:bg-gray-800">
                SUBSCRIBE
              </button>
            </div>
    </div>
    
  )
}

export default Subscribe
