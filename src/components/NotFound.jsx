import React from 'react'

function NotFound() {
  return (
    <section className="h-[100vh] flex flex-col md:flex-row md:justify-evenly md:items-center">
      <div className="md:w-[50%]">
        <img className="" src="/404.svg" alt="Not Found" width="100%" />
      </div>
      <div className="md:w-[50%]">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="font-light">
          Oops! It seems like you've wandered into uncharted territory. The page you're looking for may have taken a detour or simply doesn't exist.
        </p>
      </div>
    </section>
  )
}

export default NotFound
