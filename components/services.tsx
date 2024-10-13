import CarModal from "./carModal";
import Footer from "./footer";
import GarageStatistics from "./garageStatistics";
import Cards from "./serviceCards";


export default function ServicesSection() {
  return (
    <>
        <section id="SERVICES" className="py-12 bg-gray-100">
          <div className="mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Our Services</h2>
            <div className="w-20 h-1 bg-orange-500 mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* MOT Service Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-orange-500 uppercase">Testing Station</h3>
                      <h4 className="text-xl font-bold text-gray-800">MOT</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                  MOT tests are required annually to ensure your vehicle is safe and roadworthy.
                  To legally drive, you must have a valid MOT, road tax, and insurance. Failing 
                  to comply can lead to fines and points on your license.
                    {/* MOT tests are mandatory vehicle tests that must be retaken every year
                    to ensure the vehicle is safe to drive and in a roadworthy condition. In
                    order to drive your vehicle legally, you must have a valid MOT, road tax
                    and insurance on your vehicle. Failure to do so could result in fines and
                    points on your licence. */}
                  </p>
                  <a href="#" className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                    Book MOT →
                  </a>
                </div>
              </div>

              {/* Servicing Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-orange-500 uppercase">Car & Van</h3>
                      <h4 className="text-xl font-bold text-gray-800">Servicing</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                  Our car and van servicing includes essential tasks like oil 
                  and filter changes, along with a thorough inspection of your vehicle. This 
                  helps you understand its overall condition and highlights any areas that may 
                  need attention in the future, allowing you to stay ahead of potential issues.
                  </p>
                  <a href="#" className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                    Book Online →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cards/>
        <GarageStatistics/>
        <CarModal/>
        <Footer/>
        {/* <AutoServiceCards/> */}
        </>
  )
}

