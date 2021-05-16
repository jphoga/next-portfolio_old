import Head from 'next/head'
import Hero from '../components/hero'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'


export default function Home({ allPostsData }) {
  return (
    <Layout currentPage="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />

      
    </Layout>
  )
}
