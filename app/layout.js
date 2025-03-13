import "./globals.css"

export const metadata = {
  title: "Portfolio | Next.js",
  description: "My professional portfolio built with Next.js",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'