import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center text-white text-sm font-bold">
                C
              </div>
              <span>codeCrew</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming lives through world-class programming education. Learn, practice, and build your career.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Summer Training
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Bootcamp Training
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Industrial Training
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Internship
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Phone: +91 98765 42102</li>
              <li>Email: info@codecrew.com</li>
              <li>Address: Gurugram, Haryana</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 codeCrew Institute. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
