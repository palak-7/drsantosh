import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white pt-16">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(Footer/bgimg.png)" }}
      >
        <div className="container mx-auto px-6 lg:py-16 sm:py-12">
          {/* Top section */}
          <div className="flex flex-wrap items-center justify-between py-10">
            <Image
              src="/logo/DrSantoshLogo.png"
              alt="/"
              width={300}
              height={200}
              className=""
            />
            <div className="flex gap-4 lg:mt-0 mt-10">
              <Link
                href="https://www.instagram.com/drsantoshghai/"
                target="__black"
              >
                <FiInstagram className="text-4xl bg-blue-500 rounded-full p-2" />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61562238766058"
                target="__black"
              >
                <FaFacebookF className="text-4xl bg-blue-800 rounded-full p-2" />
              </Link>

              <Link href="https://www.linkedin.com/" target="__black">
                <FaLinkedinIn className="text-4xl bg-blue-800 rounded-full p-2" />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCueXPbbshhW8VtgU9BoPaqA"
                target="__black"
              >
                <AiOutlineYoutube className="text-4xl bg-red-500 rounded-full p-2" />
              </Link>
            </div>
          </div>

          {/* Grid section */}
          <div className="lg:grid grid-cols-12">
            {/* Company Info */}
            <div className="col-start-2 col-span-3">
              <h1 className="font-bold underline mb-4 text-2xl lg:text-3xl underline-offset-4">
                Company
              </h1>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-3 mt-5 lg:mt-0">
              <h1 className="font-bold underline mb-4 text-2xl lg:text-3xl underline-offset-4">
                Services
              </h1>
              <ul className="space-y-2">
                <li>
                  <Link href="/services">Diabetes</Link>
                </li>
                <li>
                  <Link href="/services">Hypertension</Link>
                </li>
                <li>
                  <Link href="/services">Headaches</Link>
                </li>
                <li>
                  <Link href="/services">Anemia</Link>
                </li>
                <li>
                  <Link href="/services">Kidney Disease</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-4 mt-5 lg:mt-0 lg:pb-0 pb-4">
              <h1 className="font-bold underline mb-4 text-2xl lg:text-3xl underline-offset-4">
                Contact
              </h1>
              <div className="flex items-start gap-2">
                <div className="lg:text-2xl text-3xl">
                  <FaLocationDot className="text-blue-700" />
                </div>
                <p>
                  108 Pillar No. 107, 2-B, Pusa Rd, next to Karol Bagh, Block 18
                  A, Rajinder Place, Karol Bagh, New Delhi, Delhi, 110005
                </p>
              </div>
              <Link href="tel:+919999137803">
                <div className="flex items-center gap-2 mt-2">
                  <div className="lg:text-2xl text-3xl">
                    <IoIosCall className="text-blue-700" />
                  </div>
                  <p className="text-lg">+91 9999137803</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
