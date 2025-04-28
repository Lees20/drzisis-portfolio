<<<<<<< HEAD
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Domine } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const domine = Domine({ subsets: ["latin"], variable: "--font-domine" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust weights to your preference
  variable: "--font-montserrat",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
=======
import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

// Load Outfit font properly
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
>>>>>>> 806809b (Fix nested repository issue)
});

export const metadata = {
  title: "Dr. Marios Zisis | Cardiologist",
  description: "Medical graduate dedicated to cardiology and patient-centered care.",
  openGraph: {
    title: "Dr. Marios Zisis | Cardiologist",
    description: "Medical graduate dedicated to cardiology and patient-centered care",
    url: "https://drzisis.com",
    siteName: "Dr. Marios Zisis",
    images: [
      {
<<<<<<< HEAD
        url: "https://drzisis.com/favicon.ico", // Path to Open Graph image
=======
        url: "https://drzisis.com/favicon.ico",
>>>>>>> 806809b (Fix nested repository issue)
        width: 1200,
        height: 630,
        alt: "Dr. Marios Zisis | Cardiologist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
<<<<<<< HEAD
  initialScale: 1.0,
=======
  initialScale: 1,
>>>>>>> 806809b (Fix nested repository issue)
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="en" className={montserrat.variable}>
    <body className="font-sans text-stone-800 flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </body>
  </html>
  );
}


<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr. Marios Zisis",
      "image": "https://drzisis.com/profile-img.jpg", // A good professional photo
      "jobTitle": "Cardiologist",
      "url": "https://drzisis.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },
      "email": "mailto:mzisis01@gmail.com",
      "description": "Recent medical graduate with a passion for cardiology, preventive care, and patient-centered clinical practice.",
    }),
  }}
/>
=======
    <html lang="en" className={outfit.variable}>
      <body className="font-sans text-stone-800 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Marios Zisis",
              "image": "https://drzisis.com/profile-img.jpg",
              "jobTitle": "Cardiologist",
              "url": "https://drzisis.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Athens",
                "addressCountry": "GR",
              },
              "email": "mailto:mzisis01@gmail.com",
              "description":
                "Recent medical graduate with a passion for cardiology, preventive care, and patient-centered clinical practice.",
            }),
          }}
        />
      </body>
    </html>
  );
}
>>>>>>> 806809b (Fix nested repository issue)
