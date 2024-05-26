// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hassam Jawed Portfolio</title>
        <meta name="description" content="Hassam Jawed Portfolio - Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Hassam J.
        </h1>
        <p className="mt-3 text-2xl text-gray-400">
          Development is on the way. Stay tuned!
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-800">
        <p className="text-gray-500">© 2024 Hassam Jawed</p>
      </footer>
    </div>
  );
}
