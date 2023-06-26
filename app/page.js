import Image from 'next/image'

function Review({Text}) {
  return (
    <div className='col-span-12 sm:col-span-6 md:col-span-4 rounded-xl text-slate-200'>
      <div className='text-2xl text-center m-12'>
        ⭐⭐⭐⭐⭐
      </div>
      <div className='text-center text-4xl m-12 mt-0'>
        {Text}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className='w-4/5 mx-auto gap-4 grid columns-12'>
      <div className='col-span-12 mx-auto my-36'>
        <h1 className='text-5xl md:text-8xl underline decoration-violet-900 text-center'>Coding Stock <i className="fa-light fa-plus"></i></h1>
        <p className='text-2xl m-5 text-center'>Build With Confidence</p>
      </div>
      <Review Text='No better way to find and host assets!'/>
      <Review Text='It was just the tool I needed!'/>
      <Review Text='I have been blown away with the speed!'/>    
    </div>
  )
}
