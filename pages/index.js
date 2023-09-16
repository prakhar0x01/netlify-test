import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Gentle Reminder : This Page is only for Testing Purpose...</h2>

      <main>
        <br><br><hr><h2>If you're here you probably come from my github profile...</h2>
        <img src=https://i.imgflip.com/p67ab.jpg onmouseover=confirm("This is not XSS... 😂😂😂")>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
