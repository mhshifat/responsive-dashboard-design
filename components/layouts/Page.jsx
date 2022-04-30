import Head from 'next/head'

export default function Page({ title = 'Demo App', children }) {
  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </main>
  )
}
