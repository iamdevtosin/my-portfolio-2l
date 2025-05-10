"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WordPressErrorsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="pt-32 pb-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <Button variant="link" className="text-[#0ff] p-0 mb-6 flex items-center">
              <ChevronLeft className="mr-1 h-4 w-4" /> Back to Blog
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-4">Common WordPress Errors and How to Fix Them</h1>
          <div className="flex items-center gap-2 text-gray-400 mb-8">
            <span>May 5, 2025</span>
            <span>•</span>
            <span>WordPress</span>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg mb-6">
              WordPress powers over 40% of all websites on the internet, but even this popular platform isn't immune to
              errors. In this comprehensive guide, we'll explore the most common WordPress errors and provide
              step-by-step solutions to fix them.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The White Screen of Death (WSOD)</h2>
            <p className="text-gray-300 mb-4">
              The White Screen of Death is one of the most dreaded WordPress errors. It occurs when your screen suddenly
              goes blank with no error message.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">Common Causes:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
              <li>PHP memory limit exceeded</li>
              <li>Plugin conflicts</li>
              <li>Theme compatibility issues</li>
              <li>Corrupted core files</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-3">How to Fix:</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Increase PHP Memory Limit:</strong> Add the following line to your
                wp-config.php file:
                <pre className="bg-gray-800 p-3 rounded-md my-3 overflow-x-auto">
                  <code>define('WP_MEMORY_LIMIT', '256M');</code>
                </pre>
              </li>
              <li>
                <strong className="text-white">Disable All Plugins:</strong> Access your site via FTP and rename the
                plugins folder to "plugins_old" to deactivate all plugins at once. If your site works, reactivate
                plugins one by one to identify the problematic one.
              </li>
              <li>
                <strong className="text-white">Switch to Default Theme:</strong> Rename your current theme folder to
                force WordPress to use the default theme.
              </li>
              <li>
                <strong className="text-white">Enable WordPress Debug Mode:</strong> Add these lines to wp-config.php to
                see detailed error messages:
                <pre className="bg-gray-800 p-3 rounded-md my-3 overflow-x-auto">
                  <code>
                    define('WP_DEBUG', true);
                    <br />
                    define('WP_DEBUG_LOG', true);
                    <br />
                    define('WP_DEBUG_DISPLAY', false);
                  </code>
                </pre>
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Database Connection Error</h2>
            <p className="text-gray-300 mb-4">
              "Error establishing a database connection" appears when WordPress cannot connect to your database.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">Common Causes:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
              <li>Incorrect database credentials in wp-config.php</li>
              <li>Corrupted database</li>
              <li>Database server is down</li>
              <li>Exceeded hosting resource limits</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-3">How to Fix:</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Verify Database Credentials:</strong> Check your wp-config.php file for
                correct database name, username, password, and host.
              </li>
              <li>
                <strong className="text-white">Repair Database:</strong> Add this line to wp-config.php temporarily:
                <pre className="bg-gray-800 p-3 rounded-md my-3 overflow-x-auto">
                  <code>define('WP_ALLOW_REPAIR', true);</code>
                </pre>
                Then visit: yourdomain.com/wp-admin/maint/repair.php
              </li>
              <li>
                <strong className="text-white">Contact Your Host:</strong> If the database server is down or you've
                exceeded resource limits, contact your hosting provider.
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Internal Server Error (500)</h2>
            <p className="text-gray-300 mb-4">
              The 500 Internal Server Error is a generic error message indicating something went wrong on the server.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">Common Causes:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
              <li>Corrupted .htaccess file</li>
              <li>PHP memory limit issues</li>
              <li>Plugin or theme conflicts</li>
              <li>Corrupted WordPress core files</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-3">How to Fix:</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Regenerate .htaccess File:</strong> Rename the current .htaccess file and
                create a new one through WordPress Settings &gt; Permalinks.
              </li>
              <li>
                <strong className="text-white">Increase PHP Memory:</strong> As mentioned earlier, increase the PHP
                memory limit in wp-config.php.
              </li>
              <li>
                <strong className="text-white">Deactivate Plugins:</strong> Disable all plugins and reactivate them one
                by one.
              </li>
              <li>
                <strong className="text-white">Reinstall WordPress Core:</strong> Download a fresh copy of WordPress and
                replace the wp-admin and wp-includes folders.
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
            <p className="text-gray-300 mb-6">
              WordPress errors can be frustrating, but most can be resolved with the right approach. Regular backups,
              keeping WordPress core, themes, and plugins updated, and using quality hosting can prevent many of these
              issues from occurring in the first place.
            </p>
            <p className="text-gray-300 mb-6">
              If you're experiencing persistent issues with your WordPress site, consider professional WordPress
              management services to ensure your site remains secure, fast, and error-free.
            </p>

            <div className="bg-gradient-to-r from-[#0ff]/10 to-[#f0f]/10 p-6 rounded-lg mt-10">
              <h3 className="text-xl font-bold mb-3">Need Help With Your WordPress Site?</h3>
              <p className="mb-4">
                I offer comprehensive WordPress management and troubleshooting services to keep your site running
                smoothly.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
