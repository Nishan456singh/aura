import Image from "next/image"


function Footer() {
  return (
    <footer className="bg-black/[0.1] text-black py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-black/[0.7] text-lg font-semibold mb-4">About Us</h2>
          <h3 className="text-black/[0.7] text-md font-medium"></h3>
          <Image src="/assets/images/logo.png" alt="logo" width={200} height={40} className="rounded-full" />
          <p className="mb-4">
            I wanted to take a moment to share my personal experience with you. Having built and successfully operated my own trucking business, I understand the challenges, the highs, and the lows that come with this dynamic industry.
          </p>
        </div>
        <div>
          <h2 className="text-black/[0.7] text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/career"
                className="hover:text-white transition-colors duration-300"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-black/[0.7] text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-black/[0.7] text-lg font-semibold mb-4">Contact Us</h2>
          <h3 className="text-black/[0.7] text-md font-medium">OFFICE</h3>
          <p>6255 171A Street</p>
          <p>Surrey, BC V3S 5S3</p>
          <p>Email: auraclothing@gmail.com</p>
          <p>Phone: +1-514-233-0751</p>
        </div>
      </div>
      <p className="text-center text-md pt-8">© 2024 Aura.  All rights reserved.</p>
      <p className="text-center text-xs pt-2">
        © Design & Developed By
        <a href="https://nishansingh.pro" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">
          {""} Nishan Singh
        </a>
      </p>
    </footer>
  )
}

export default Footer