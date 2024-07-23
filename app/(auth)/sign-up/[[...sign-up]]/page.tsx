import { SignUp } from '@clerk/nextjs'
import img from '../../../assets/sign-up.jpeg'
import Image from 'next/image'
export default function Page() {
  return (
    <section className="bg-white absolute top-0 left-0 w-full h-full">
      <div className="lg:grid h-full flex justify-center lg:min-h-screen lg:grid-cols-12">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <SignUp />
          </div>
        </main>
        <section className="relative hidden lg:flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            src={img}
            height={600}
            width={600}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
          />
        </section>
      </div>
    </section>
  )
}
