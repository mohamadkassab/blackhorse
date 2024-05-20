"use client";
import Link from "next/link";
import classes from "./classes.module.css";

const Footer = () => {
  return (
    <>
      <footer itemScope  className="relative z-10 bg-white py-4 dark:bg-gray-dark md:py-8 lg:py-12">
        <div className="container pt-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] ">
                <Link href="/" title="blackhorse" className={`header-logo block w-full`}>
                  <label  itemProp="logo"  className={classes.logo}>
                    BLACKHORSE
                  </label>
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark"></p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="Instagram link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="currentColor"
                        d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                      ></path>
                      <circle
                        fill="currentColor"
                        cx="12.3"
                        cy="3.7"
                        r=".533"
                      ></circle>
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="Facebook link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="23"
                      height="23"
                    >
                      <path
                        fill="currentColor"
                        d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="Telegram link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="currentColor"
                        d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
                      ></path>
                    </svg>
                  </a>

                  <a
                    href="/"
                    aria-label="Linkedin link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      width="26"
                      height="26"
                    >
                      <path
                        fill="currentColor"
                        d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className=" ">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Quick links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      title="ride"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Ride
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      title="services"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      title="contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Get a quote
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div>
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Company
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/about"
                      title="about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/safety"
                      title="safety"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Safety
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/termsPolicies"
                      title="terms policies"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms and privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support
                </h2>
                <ul>
                <li>
                    <Link
                      href="tel:+1 781 777 3922"
                      title="phone number"
                      target="_blank"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      +1 781 777 3922
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:info@blackhorsetaxi.com"
                      title="email"
                      target="_blank"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      info@blackhorsetaxi.com
                    </Link>
                  </li>
          
            

           
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
