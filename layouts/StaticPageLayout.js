import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'

export default function PageLayout({ frontMatter, children }) {
  const { lastmod, title } = frontMatter
  return (
    <SectionContainer>
      <scrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    Updated on <time dateTime={lastmod}>{formatDate(lastmod)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <Comments frontMatter={frontMatter} />
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
