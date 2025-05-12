"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WCFMGuidePage() {
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

          <h1 className="text-4xl font-bold mb-4">Using WCFM – Frontend Manager for WooCommerce</h1>
          <div className="flex items-center gap-2 text-gray-400 mb-8">
            <span>April 20, 2025</span>
            <span>•</span>
            <span>WooCommerce</span>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg mb-6">
              WCFM (WooCommerce Frontend Manager) is a powerful plugin that transforms your WooCommerce store into a
              full-featured multi-vendor marketplace. This comprehensive guide will walk you through setting up and
              configuring WCFM for your online store.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">What is WCFM?</h2>
            <p className="text-gray-300 mb-4">
              WCFM is a frontend dashboard solution for WooCommerce that allows vendors to manage their products,
              orders, and store settings directly from the frontend of your website. It's particularly useful for
              creating multi-vendor marketplaces where multiple sellers can operate under one platform.
            </p>
            <p className="text-gray-300 mb-4">
              The plugin comes in both free and premium versions, with the premium version offering additional features
              like vendor verification, store invoices, inquiry management, and more.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Key Features of WCFM</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
              <li>Comprehensive frontend dashboard for vendors</li>
              <li>Product management (simple, variable, grouped, external)</li>
              <li>Order management and tracking</li>
              <li>Vendor analytics and reports</li>
              <li>Commission management</li>
              <li>Vendor verification system (premium)</li>
              <li>Store hours and vacation mode (premium)</li>
              <li>Support ticket system (premium)</li>
              <li>Vendor shipping management</li>
              <li>Store SEO management</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Prerequisites</h2>
            <p className="text-gray-300 mb-4">Before installing WCFM, ensure you have:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
              <li>WordPress 5.0 or higher</li>
              <li>WooCommerce 3.0 or higher</li>
              <li>A multi-vendor plugin like WC Marketplace, Dokan, or WC Vendors (optional but recommended)</li>
              <li>PHP 7.0 or higher</li>
              <li>MySQL 5.6 or higher</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 1: Installing WCFM</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Install from WordPress Repository:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Go to WordPress Dashboard &gt; Plugins &gt; Add New</li>
                  <li>Search for "WCFM - WooCommerce Frontend Manager"</li>
                  <li>Click "Install Now" and then "Activate"</li>
                </ul>
              </li>
              <li>
                <strong className="text-white">Or Install Manually:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Download the plugin from{" "}
                    <a
                      href="https://wordpress.org/plugins/wc-frontend-manager/"
                      className="text-[#0ff] hover:underline"
                    >
                      wordpress.org
                    </a>
                  </li>
                  <li>Go to WordPress Dashboard &gt; Plugins &gt; Add New &gt; Upload Plugin</li>
                  <li>Choose the downloaded file and click "Install Now"</li>
                  <li>Activate the plugin after installation</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 2: Basic Configuration</h2>
            <p className="text-gray-300 mb-4">After installation, you'll need to configure WCFM:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Access WCFM Settings:</strong> Go to WordPress Dashboard &gt; WCFM &gt;
                Settings
              </li>
              <li>
                <strong className="text-white">General Settings:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Set dashboard access for user roles</li>
                  <li>Configure dashboard visibility</li>
                  <li>Set up quick access menu items</li>
                </ul>
              </li>
              <li>
                <strong className="text-white">Dashboard Setup:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Customize dashboard widgets</li>
                  <li>Set welcome message</li>
                  <li>Configure dashboard style and color scheme</li>
                </ul>
              </li>
              <li>
                <strong className="text-white">Capability Controller:</strong> Define what vendors can do in their
                dashboard
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 3: Setting Up Vendor Registration</h2>
            <p className="text-gray-300 mb-4">To allow vendors to register on your marketplace:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>Go to WCFM &gt; Settings &gt; Vendor Registration</li>
              <li>Enable vendor registration</li>
              <li>Configure registration fields</li>
              <li>Set up approval process (automatic or manual)</li>
              <li>Customize welcome emails</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 4: Commission Setup</h2>
            <p className="text-gray-300 mb-4">Configure how commissions are calculated and distributed:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>Go to WCFM &gt; Settings &gt; Commission</li>
              <li>Choose commission type (percentage, fixed, or both)</li>
              <li>Set commission rates</li>
              <li>Configure tax and shipping fee handling</li>
              <li>Set up payment schedules (if using WCFM Marketplace)</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 5: Store Setup</h2>
            <p className="text-gray-300 mb-4">Configure vendor store settings:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>Go to WCFM &gt; Settings &gt; Store</li>
              <li>Set up store URL structure</li>
              <li>Configure store sidebar options</li>
              <li>Set up store header and banner settings</li>
              <li>Enable/disable store features like reviews, policies, etc.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 6: Customizing the Vendor Dashboard</h2>
            <p className="text-gray-300 mb-4">Make the dashboard user-friendly for your vendors:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>Go to WCFM &gt; Settings &gt; Dashboard</li>
              <li>Choose which menu items to display</li>
              <li>Configure dashboard color scheme</li>
              <li>Set up welcome box content</li>
              <li>Configure dashboard widgets</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 7: Managing Product Options</h2>
            <p className="text-gray-300 mb-4">Control what product types and features vendors can use:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>Go to WCFM &gt; Settings &gt; Products</li>
              <li>Enable/disable product types (simple, variable, etc.)</li>
              <li>Configure product fields visibility</li>
              <li>Set up product limit per vendor (if needed)</li>
              <li>Configure product approval process</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 8: Setting Up Shipping</h2>
            <p className="text-gray-300 mb-4">Configure shipping options for vendors:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-300">
              <li>Go to WCFM &gt; Settings &gt; Shipping</li>
              <li>Enable vendor shipping</li>
              <li>Configure shipping methods available to vendors</li>
              <li>Set up shipping zones</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 9: Enhancing with WCFM Add-ons</h2>
            <p className="text-gray-300 mb-4">Consider these useful WCFM add-ons:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
              <li>
                <strong className="text-white">WCFM Marketplace:</strong> Complete multi-vendor marketplace solution
              </li>
              <li>
                <strong className="text-white">WCFM Delivery:</strong> Delivery management system
              </li>
              <li>
                <strong className="text-white">WCFM Membership:</strong> Subscription plans for vendors
              </li>
              <li>
                <strong className="text-white">WCFM Analytics:</strong> Advanced analytics for vendors
              </li>
              <li>
                <strong className="text-white">WCFM Enquiry:</strong> Product inquiry system
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Common Issues and Troubleshooting</h2>
            <ul className="list-disc pl-6 mb-6 space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Dashboard Not Loading:</strong> Check for JavaScript errors, plugin
                conflicts, or theme compatibility issues.
              </li>
              <li>
                <strong className="text-white">Vendor Registration Not Working:</strong> Verify email settings and check
                if the registration form is properly configured.
              </li>
              <li>
                <strong className="text-white">Commission Not Calculating Correctly:</strong> Review your commission
                settings and check for conflicts with other plugins.
              </li>
              <li>
                <strong className="text-white">Product Upload Issues:</strong> Check file permissions and PHP memory
                limits.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
            <p className="text-gray-300 mb-6">
              WCFM is a powerful tool for creating and managing multi-vendor marketplaces on WordPress. With its
              comprehensive feature set and user-friendly interface, it provides everything you need to run a successful
              online marketplace.
            </p>
            <p className="text-gray-300 mb-6">
              By following this guide, you should now have a fully functional WCFM setup that allows vendors to manage
              their products, orders, and stores efficiently from the frontend of your website.
            </p>

            <div className="bg-gradient-to-r from-[#0ff]/10 to-[#f0f]/10 p-6 rounded-lg mt-10">
              <h3 className="text-xl font-bold mb-3">Need Help Setting Up Your Multi-Vendor Marketplace?</h3>
              <p className="mb-4">
                I offer comprehensive WooCommerce and WCFM setup and customization services to help you create a
                successful online marketplace.
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
