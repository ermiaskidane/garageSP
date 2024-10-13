import Image from 'next/image'
import InfiniteSliderBasic from './infiniteSlide'
export default function CarModal() {


  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">
        ANY MAKE
        <br />
        ANY MODEL
      </h1>
      <div className="w-16 h-1 bg-orange-500 mb-6"></div>
      <p className="text-lg mb-8 max-w-3xl">
        We’re dedicated to caring for every vehicle. Whether your car needs bodywork, paint touch-ups, or mechanical repairs, we’re here to help.
      </p>
      <InfiniteSliderBasic />
    </div>
  )
}