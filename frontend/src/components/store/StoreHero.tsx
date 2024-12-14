const StoreHero = () => {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-purple-700 min-h-[500px] flex flex-col items-center justify-center text-white text-center py-12 px-4'>
      <div className='max-w-2xl'>
        <h1 className='text-5xl font-bold mb-4 tracking-tight'>Welcome Seller</h1>
        <p className='text-xl mb-8 text-gray-100'>
          We are glad that you choose us to grow your business and reach new heights.
        </p>

        <div className='flex justify-center space-x-4'>
          <button className='bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md'>
            Login
          </button>
          <button className='bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300'>
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}

export default StoreHero