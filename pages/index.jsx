import Head from 'next/head'
import Form from '../components/Form'
import List from '../components/List'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Date Connor today!</title>
        <meta name='description' content='DATE CONNOR TODAY!!!' />
        <link rel='icon' href='/favicon.ico' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Form></Form>
      <p>Want something removed? <a href="mailto:me@cnnd.co.uk">Send me an email</a>.</p>
      <List></List>
    </div>
  )
}
