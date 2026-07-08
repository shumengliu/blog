import Script from 'next/script'

// Vercel Web Analytics via the platform-served script (framework-agnostic
// integration). The @vercel/analytics package requires React 18 / Next 13+,
// so it can't be used on this stack.
// https://vercel.com/docs/analytics/quickstart
const VercelAnalyticsScript = () => {
  return (
    <>
      <Script strategy="afterInteractive" id="va-init">
        {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
      </Script>
      <Script strategy="lazyOnload" src="/_vercel/insights/script.js" />
    </>
  )
}

export default VercelAnalyticsScript
