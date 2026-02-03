export function initLazyLoad(root: Document | HTMLElement = document): void {
  const getImages = () => Array.from(root.querySelectorAll('img.lazy')) as HTMLImageElement[]

  let lazyloadThrottleTimeout: number | undefined

  function lazyload(): void {
    if (lazyloadThrottleTimeout !== undefined) {
      window.clearTimeout(lazyloadThrottleTimeout)
    }

    lazyloadThrottleTimeout = window.setTimeout(() => {
      const scrollTop = window.pageYOffset
      const imgs = getImages()

      imgs.forEach((img) => {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          const dataSrc = img.dataset.src
          if (dataSrc) img.src = dataSrc
          img.classList.remove('lazy')
        }
      })

      if (getImages().length === 0) {
        document.removeEventListener('scroll', lazyload)
        window.removeEventListener('resize', lazyload)
        window.removeEventListener('orientationchange', lazyload)
      }
    }, 20)
  }

  document.addEventListener('scroll', lazyload, { passive: true })
  window.addEventListener('resize', lazyload)
  window.addEventListener('orientationchange', lazyload)

  // initial run
  lazyload()
}

// auto-initialize when loaded in browser
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initLazyLoad())
  } else {
    initLazyLoad()
  }
}
