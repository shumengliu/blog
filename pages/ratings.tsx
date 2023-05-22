import React from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { GetStaticProps } from 'next'
import axios from 'axios'

const DEFAULT_LAYOUT = 'StaticPageLayout'

// export const getStaticProps: GetStaticProps = async (context) => {
//   const pageContent = await getFileBySlug('pages', ['ratings'])
//   return { props: { pageContent } }
// }

export default function Ratings({ rapidRating, blitzRating }) {
  return (
    <>
      <PageSEO title={`Ratings - ${siteMetadata.author}`} description="Ratings of Shumeng Liu" />
      <div className="flex flex-col items-start justify-start divide-y divide-y-0 divide-gray-200 divide-gray-700 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
            My Live Ratings
          </h1>
        </div>
        <div>{rapidRating}</div>
        <div>{blitzRating}</div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  // TODO extract chess.com username into siteMetadata
  const apiUrl = 'https://api.chess.com/pub/player/wallfacer/stats'

  // TODO add codeforces rating
  // TODO add fastest Rubik's Rube solve (WCA api)

  try {
    const response = await axios.get(apiUrl)
    const data = response.data
    console.log('success')
    console.log(data)
    const rapidRating = data.chess_rapid.last.rating
    const blitzRating = data.chess_blitz.last.rating
    return {
      props: {
        rapidRating,
        blitzRating,
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        data: null,
      },
    }
  }
}
