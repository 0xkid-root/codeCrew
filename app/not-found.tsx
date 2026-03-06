import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The course or page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
