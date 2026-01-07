// Created by: Rudram Joshi
import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientLayout } from "@/components/ClientLayout";
import { VisualEditsMessenger } from "orchids-visual-edits";

/**
 * Root Metadata for SEO optimization
 */
export const metadata: Metadata = {
  title: "Satyam Residency",
  description: "Experience premium living with Satyam Residency. Offering modern 1, 2, and 3 BHK flats with top-notch facilities in Thaltej, Ahmedabad.",
};

/**
 * RootLayout Component
 * Defines the global structure including Navigation, Footer, and global scripts.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        
        {/* Global Navigation Bar */}
        <Navbar />
        
        {/* Main Content Area with Page Transitions */}
        <main className="min-h-screen">
          <ClientLayout>
            {children}
          </ClientLayout>
        </main>
        
        {/* Global Footer */}
        <Footer />
        
        {/* Sticky WhatsApp Contact Button */}
        <WhatsAppButton />
        
        {/* Monitoring and Analytics Scripts */}
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="0fadbc8d-0654-4945-b4b9-2fb7f83f9a29"
        />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}