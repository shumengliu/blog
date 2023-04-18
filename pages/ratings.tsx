import React from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { GetStaticProps } from 'next'

const DEFAULT_LAYOUT = 'StaticPageLayout'

export const getStaticProps: GetStaticProps = async (context) => {
  const pageContent = await getFileBySlug('pages', ['ratings'])
  return { props: { pageContent } }
}

export default function Ratings({ pageContent }) {
  const { mdxSource, frontMatter } = pageContent
  return (
    <>
      <PageSEO title={`Ratings - ${siteMetadata.author}`} description="Ratings of Shumeng Liu" />
      <div className="flex flex-col items-start justify-start divide-y divide-y-0 divide-gray-200 divide-gray-700 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
            My live ratings on various platforms.
          </h1>
        </div>
      </div>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}
