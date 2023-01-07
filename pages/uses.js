import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Uses() {
  return (
    <>
      <PageSEO title={`Uses - ${siteMetadata.author}`} description="Things Shuyun use" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Uses
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          Things I use.
          {/* TODO Write this page. */}
        </div>
      </div>
    </>
  )
}
