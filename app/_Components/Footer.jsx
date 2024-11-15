import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-300">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600 dark:text-teal-300">
              <Image src="/logo.svg" alt="logo" width={150} height={100} />
            </div>

            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
              molestias.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a href="https://www.facebook.com/andrew.magdy.31924" target='_blank'>
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/0/#inbox" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    <SiGmail size={20} />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    1on1 Coaching
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Company Review
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Accounts Review
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    HR Consulting
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    SEO Optimisation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Accounts Review
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Contact
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    FAQs
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Accessibility
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Returns Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Hiring Statistics
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer