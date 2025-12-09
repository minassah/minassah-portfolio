import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minassah | Tech Consultancy & ERP Solutions",
  description: "Minassah specializes in technology consultancy, ERP systems (Odoo/SAP), mobile app development, and custom web solutions. Transform your business with our expert team.",
  keywords: ["ERP", "Odoo", "SAP", "consultancy", "mobile apps", "web development", "technology solutions"],
  authors: [{ name: "Minassah" }],
  openGraph: {
    title: "Minassah | Tech Consultancy & ERP Solutions",
    description: "Transform your business with expert technology consultancy and custom solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable}`}>
          {children}
      </body>
    </html>
  );
}
