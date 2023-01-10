import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import Link from 'next/link'

// TODO: Consider change this later
const DEFAULT_LAYOUT = 'PostSimple'

export async function getStaticProps() {
  const pageContent = await getFileBySlug('pages', ['now'])
  return { props: { pageContent } }
}

export default function Now({ pageContent }) {
  const { mdxSource, frontMatter } = pageContent
  return (
    <>
      <PageSEO title={`Now - ${siteMetadata.author}`} description="Things Shuyun is up to lately" />
      <div className="flex flex-col items-start justify-start divide-y divide-y-0 divide-gray-200 divide-gray-700 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
            What I am doing NOW
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
