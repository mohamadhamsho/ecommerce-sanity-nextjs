import React from 'react'

const loading = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="bg-slate-200 animate-pulse w-[350px] h-5"></h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((product, idx) => (
          <div key={idx} className="">
            <div
              
              className="bg-slate-200 animate-pulse w-[100%] h-80"
            ></div>
            <div className="flex justify-between items-center mt-4">
              <div className="bg-slate-200 animate-pulse w-[170px] h-4"></div>
              <div className="bg-slate-200 animate-pulse w-[40px] h-4"></div>
            </div>
            <div className="bg-slate-200 animate-pulse w-[40px] h-4 my-4"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default loading
