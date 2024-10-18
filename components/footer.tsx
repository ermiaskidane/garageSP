import Image from 'next/image'
import React from 'react'
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react'
import { format } from 'date-fns'

const Footer = () => {
  return (
    <footer id="CONTACT" className="bg-[#1a2841] text-white">
    <div className=" mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <Image src="/placeholder.svg" alt="Car Garage Logo" width={150} height={50} className="mb-4" />
          <p className="text-sm">
          At My Garage LTD, we’ve cultivated a loyal customer base, with many returning for our services. A large part of our business comes from referrals, showcasing our commitment to excellent service.
          </p>
          <div className="flex space-x-4 mt-4">
            <Facebook size={24} />
            <Twitter size={24} />
            <Youtube size={24} />
            <Instagram size={24} />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">OPENING HOURS</h3>
          <ul className="space-y-2">
            <li>Monday: 9am - 5pm</li>
            <li>Tuesday: 9am - 5pm</li>
            <li>Wednesday: 9am - 5pm</li>
            <li>Thursday: 9am - 5pm</li>
            <li>Friday: 9am - 5pm</li>
            <li>Saturday: 10am - 2pm</li>
            <li>Sunday: 10am - 2pm</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <ul className="space-y-2">
            <li>07437 108 498</li>
            <li>07495 590 530</li>
            <li>2 Littleton st</li>
            <li>LE3 5GH, Leicester</li>
            <li>Garage@mycargarage.co.uk</li>
            <li>Office@mycargarage.co.uk</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-[#13202f] text-center py-4 text-sm">
      <p>© {format(new Date(), 'yyyy')} My Garage LTD. All Rights Reserved.</p>
      {/* <p>Created with Garage Website Online</p> */}
    </div>
  </footer>
  )
}

export default Footer