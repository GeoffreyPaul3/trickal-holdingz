import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/Trickal.png"
                width={50}
                height={50}
                alt="Trickal Holdings Logo"
                className="w-auto h-12 mr-3"
              />
              <span className="text-2xl font-bold">Trickal Holdings</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Empowering Your Financial Future with Innovative Solutions and Sustainable Growth Strategies.
            </p>
            <div className="flex space-x-6">
              <Link href="https://www.facebook.com/profile.php?id=61562350618912&mibextid=ZbWKwL" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <SiFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/trickalhldsmw?t=GaUNahMgYoKgFeNtij0N2A&s=08" 
              className="text-gray-400 hover:text-white transition-colors"
               target="_blank"
              rel="noopener noreferrer"
              >
                <span className="sr-only">X</span>
                <SiX className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/trickalholdings"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <SiLinkedin className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/trickalholdings.mw/profilecard/?igsh=ZWJqdXlueTlmMjcw" 
              className="text-gray-400 hover:text-white transition-colors"
               target="_blank"
              rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <SiInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  {['T Pay', 'tconnect', 'Chumalink', 'Visual Visa Cards', 'Ledger IQ'].map((item) => (
                    <li key={item}>
                      <Link href="" className="text-base text-gray-300 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {['About', 'Careers', 'Partners', 'News'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-base text-gray-300 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {['Help Center', 'Live Chat', 'Report an Issue'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-base text-gray-300 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact Us</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-gray-400" />
                    <a href="mailto:info@trickalholdings.com" className="text-gray-300 whitespace-nowrap hover:text-white transition-colors">info@trickalholdings.com</a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-gray-400" />
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">+265 997 40 75 98</a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                    <span className="text-gray-300">Development House, Blantyre, Third Floor, Office 307</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Trickal Holdings, Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Button variant="link" className="text-gray-300 hover:text-white mr-4">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

