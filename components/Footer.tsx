import Link from "next/link"
import Image from "next/image"
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { companyLinks } from "@/data"

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
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61562350618912&mibextid=ZbWKwL",
                  icon: SiFacebook,
                  label: "Facebook",
                },
                { href: "https://x.com/trickalhldsmw?t=GaUNahMgYoKgFeNtij0N2A&s=08", icon: SiX, label: "X" },
                { href: "https://www.linkedin.com/company/trickalholdings", icon: SiLinkedin, label: "LinkedIn" },
                {
                  href: "https://www.instagram.com/trickalholdings.mw/profilecard/?igsh=ZWJqdXlueTlmMjcw",
                  icon: SiInstagram,
                  label: "Instagram",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            {companyLinks.map((section) => (
              <div key={section.title} className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{section.title}</h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-base text-gray-300 hover:text-white transition-colors flex items-center"
                        >
                          {"icon" in link && link.icon && <link.icon className="w-5 h-5 mr-2 text-gray-400" />}
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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

