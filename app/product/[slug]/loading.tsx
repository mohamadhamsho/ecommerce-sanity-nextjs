import React from "react";

function Loading() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="grid gap-4 lg:grid-cols-5">
          <div className="order-last flex gap-4 lg:order-none lg:flex-col">
            {[1, 2, 3, 4].map((image: any, index: any) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg"
              >
                <div className="h-[160px] md:h-[140px] w-full object-cover object-center cursor-pointer bg-slate-200 animate-pulse" />
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 h-[610px]">
            <div className="h-full w-full object-cover object-center cursor-pointer  bg-slate-200 animate-pulse" />
          </div>
        </div>

        <div className="md:py-8">
          <div>
            <div className="w-20 h-4 bg-slate-200 animate-pulse"></div>
            <h2 className="w-[370px] h-8 bg-slate-200 animate-pulse mt-2"></h2>
          </div>
          <div className="mb-6 ">
            <div className="w-32 h-4 bg-slate-200 animate-pulse mt-4"></div>
            <div className="flex justify-start items-center gap-4 mt-6">
              <div className="w-28 h-8 bg-slate-200 animate-pulse rounded-xl"></div>
              <div className="w-24 h-8 bg-slate-200 animate-pulse rounded-xl"></div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <div className="w-20 h-4 bg-slate-200 animate-pulse"></div>
            <div className="w-28 h-4 bg-slate-200 animate-pulse"></div>
            <div className="w-40 h-4 bg-slate-200 animate-pulse mt-4"></div>
          </div>

          <div className="flex gap-2 mt-6">
            <div className="w-32 h-10 bg-slate-200 animate-pulse rounded-xl"></div>
            <div className="w-32 h-10 bg-slate-200 animate-pulse rounded-xl"></div>
          </div>

          <div className="flex flex-col gap-3 mt-10">

          <p className="w-full h-5 bg-slate-200 animate-pulse rounded-xl"></p>
          <p className="w-full h-5 bg-slate-200 animate-pulse rounded-xl"></p>
          <p className="w-full h-5 bg-slate-200 animate-pulse rounded-xl"></p>
          <p className="w-full h-5 bg-slate-200 animate-pulse rounded-xl"></p>
          <p className="w-full h-5 bg-slate-200 animate-pulse rounded-xl"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
