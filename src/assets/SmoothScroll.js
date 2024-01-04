import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

console.log('Welcome to Vite + JS + Webflow!')

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function SmoothScroll() {
  //eslint-disable-next-line
  let smoother = ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.page-wrapper',
    smooth: 2,
    effects: true,
    smoothTouch: 0.1,
  })
}
