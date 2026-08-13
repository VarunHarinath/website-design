import "./globals.css";

export const metadata = {
  title: "Inicio Technologies | Technology that works for business",
  description:
    "Application engineering, quality, data, cloud, cybersecurity, IT operations and technology talent from Inicio Technologies.",
  openGraph: {
    title: "Inicio Technologies | Technology that works for business",
    description:
      "Practical engineering and IT services shaped around the way your business works.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Inicio Technologies — Technology that works the way business does." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inicio Technologies | Technology that works for business",
    description: "Practical engineering and IT services shaped around the way your business works.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
