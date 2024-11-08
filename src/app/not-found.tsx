import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
    <section className="max-w-[140rem] mx-auto p-[6rem_3rem]">
    <div className="w-full h-[60vh] flex  flex-col justify-center items-center space-y-4">
      <h2 className='text-7xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded">
      <Link href="/">Return Home</Link>
      </button>
      </div>
      </section>
    </>
  )
}