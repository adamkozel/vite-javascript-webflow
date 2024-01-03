import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

import SmoothScroll from './assets/SmoothScroll'
SmoothScroll()

//Constants
const start = 'top bottom-=20%'
const end = 'bottom top+=50%'
const triggerAbout = '.items'

// Create the onload timeline
export const onloadTimeline = gsap.timeline()

document.addEventListener('DOMContentLoaded', () => {
  // Initialize headline animations immediately after DOM is ready
  animateHeadline('.heading-hero', 0.5)

  // Add other animations to the onload timeline
  onloadTimeline
    .add(HeroSocials(), 'start+=0.8')
    .add(HeroServices(), 'start+=0.75')
    .add(HeroButton(), 'start+=2')
    .add(adamkozel(), 'start+=2.2')
    .add(dotsAppear('#dots-header', 2), 'start+=0.5')
    .add(dotsAppear('#dots-project-01', 2.2), 'start+=0.5')
    .add(projectAppear(), 'start+=0.5')
    .add(marqueeAppear(), 'start+=0.5')
})
function HeroSocials() {
  const tl = gsap.timeline({
    defaults: { ease: 'power1.out' },
  })
  tl.fromTo(
    '.socials-header > div > *',
    {
      rotationX: 100,
      y: 20,
      autoAlpha: 0,
    },
    {
      rotationX: 0,
      y: 0,
      ease: 'expo.out',
      autoAlpha: 1,
      duration: 2,
      stagger: {
        each: 0.15,
      },
    }
  )
  return tl
}
function animateHeadline(targetId, staggerStart) {
  const splitText = new SplitText(targetId, { type: 'chars' })
  const chars = splitText.chars

  gsap.set(chars, { rotationX: 64, y: 72, opacity: 0 })

  return gsap.timeline({ delay: staggerStart }).to(chars, {
    rotationX: 0,
    y: 0,
    opacity: 1,
    ease: 'circ.out',
    stagger: 0.06,
    duration: 1.5,
  })
}
function HeroServices() {
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' }, delay: 0.5 })
  tl.fromTo(
    '.services > *',
    { rotationY: 100, x: 150, autoAlpha: 0, opacity: 0 },
    {
      rotationY: 0,
      x: 0,
      opacity: 1,
      ease: 'expo.out',
      autoAlpha: 1,
      duration: 2,
      stagger: 0.2,
    }
  )
  return tl
}
function HeroButton() {
  const tl = gsap.timeline({
    defaults: { ease: 'power1.out' },
  })
  tl.fromTo(
    '.cta-button',
    {
      opacity: 0,
      translateZ: -100,
      rotationX: 20,
    },
    {
      rotationX: 0,
      translateZ: 0,
      positionZ: 0,
      opacity: 1,
      duration: 6,
      ease: 'power1.Out',
    }
  )
  return tl
}
function adamkozel() {
  const tl = gsap.timeline({
    defaults: { ease: 'power1.out' },
  })
  tl.fromTo(
    '#header-name',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 10,
      ease: 'expo.out',
    }
  )
  return tl
}
function dotsAppear(selector, delay) {
  const tl = gsap.timeline()
  tl.fromTo(
    selector + ' > *',
    {
      scale: 0,
    },
    {
      delay: delay,
      scale: 1,
      stagger: 0.5,
    }
  )
  return tl
}
function projectAppear() {
  const tl = gsap.timeline({
    defaults: { ease: 'power1.out' },
  })
  tl.fromTo(
    '#project-01',
    {
      rotationX: 20,
      y: 200,
      opacity: 0,
    },
    {
      rotationX: 0,
      opacity: 1,
      y: 0,
      duration: 5,
      ease: 'expo.out',
    }
  )
  return tl
}

function marqueeAppear() {
  const tl = gsap.timeline({
    defaults: { ease: 'power1.out' },
  })
  tl.fromTo(
    '.marquee',
    {
      y: 50,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 5,
      ease: 'expo.out',
    }
  )
  return tl
}

gsap.fromTo(
  ['#information-header', '#dots-header'],
  {
    y: 0, // initial position
    opacity: 1, // initial opacity
    rotationX: 0,
  },
  {
    rotationX: 50,
    y: -50, // amount of px
    opacity: 1, // final opacity
    scrollTrigger: {
      trigger: '.header',
      start: 'top top', // when the top of the trigger hits the bottom of the viewport
      end: 'bottom top', // when the bottom of the trigger hits the top of the viewport
      scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  }
)
gsap.fromTo(
  '.headline',
  {
    y: 0, // initial position
    opacity: 1, // initial opacity
    rotationX: 0,
  },
  {
    rotationX: 10,
    y: -10, // amount of px
    opacity: 1, // final opacity
    scrollTrigger: {
      trigger: '.header',
      start: 'top top', // when the top of the trigger hits the bottom of the viewport
      end: 'bottom top', // when the bottom of the trigger hits the top of the viewport
      scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  }
)

//paragraph animation
const paragraphAbout = document.querySelector('.paragraph-about')

// Split the text into lines using SplitText
const splitText = new SplitText(paragraphAbout, {
  type: 'lines',
  linesClass: 'split-line',
})
const lines = splitText.lines

// Apply the GSAP effect to non-empty lines
const nonEmptyLines = lines.filter((line) => line.textContent.trim() !== '')
gsap.to(nonEmptyLines, {
  backgroundPositionX: '0%',
  stagger: {
    each: 0.1,
    from: 'start',
    grid: 'auto',
    ease: 'none',
  },
  scrollTrigger: {
    trigger: paragraphAbout,
    scrub: 2,
    start: 'top bottom-=20%',
    end: 'bottom top+=30%',
    markers: false,
  },
})

// Timeline for the dividers scaling from left to right
gsap.set('.divider', {
  opacity: 0,
  scaleX: 0,
  transformOrigin: 'left',
})
const tlDividers = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: triggerAbout,
    start: start,
    end: end,
    scrub: 4,
  },
})

tlDividers.to('.divider', {
  opacity: 1,
  scaleX: 1,
  stagger: 0.07,
})

gsap.set('.divider-footer', {
  opacity: 0,
  scaleX: 0,
  transformOrigin: 'left',
})
const tlFooterDividers = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: '.contact-wrapper',
    start: start,
    end: end,
    scrub: 4,
  },
})

tlFooterDividers.to('.divider-footer', {
  opacity: 1,
  scaleX: 1,
  stagger: 0.07,
})

gsap.set('.divider-footer-socials', {
  opacity: 0,
  scaleX: 0,
  transformOrigin: 'left',
})
const tlFooterSocialsDividers = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: '.socials-footer',
    start: start,
    end: end,
    scrub: 4,
  },
})

tlFooterSocialsDividers.to('.divider-footer-socials', {
  opacity: 1,
  scaleX: 1,
  stagger: 0.07,
})
gsap.set(
  '#left-1, #right-1, #left-2, #right-2, #left-3, #right-3, #left-4, #right-4',
  {
    y: 40,
  }
)
// Timeline for the dividers scaling from left to right

const tlChildren = gsap.timeline({
  scrollTrigger: {
    trigger: triggerAbout,
    start: start,
    end: end,
    scrub: true,
  },
})

tlChildren.to(
  '#left-1, #right-1, #left-2, #right-2, #left-3, #right-3, #left-4, #right-4',
  {
    y: 0,
    stagger: 0.1,
  }
)

function dotsContentAppear(selector) {
  gsap.fromTo(
    selector + ' > *',
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%', // Adjust the start position as desired
        end: 'bottom 80%', // Adjust the end position as desired
        scrub: 2,
      },
    }
  )
}

dotsContentAppear('#dots-about')
dotsContentAppear('#dots-project-02')
dotsContentAppear('#dots-project-03')
dotsContentAppear('#dots-project-04')
dotsContentAppear('#dots-footer')

gsap.set(
  '#title-1, #link-1, #title-2, #link-2, #title-3, #link-3, #title-4, #link-4',
  {
    y: 40,
  }
)
// Timeline for the dividers scaling from left to right

const tlFooterChildren = gsap.timeline({
  scrollTrigger: {
    trigger: '.socials-footer',
    start: 'top bottom',
    end: 'bottom top+=50%',
    scrub: true,
  },
})

tlFooterChildren.to(
  '#title-1, #link-1, #title-2, #link-2, #title-3, #link-3, #title-4, #link-4',
  {
    y: 0,
    stagger: 0.1,
  }
)
const splitTextFooter = new SplitText('.heading-footer', { type: 'chars' })
const chars = splitTextFooter.chars

gsap.set(chars, { rotationX: 64, y: 72, opacity: 0 })

gsap.fromTo(
  chars,
  {
    rotationX: 64,
    y: 72,
    opacity: 0,
  },
  {
    rotationX: 0,
    y: 0,
    opacity: 1,
    ease: 'circ.out',
    stagger: 0.06,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.heading-footer', // Adjust the trigger element as needed
      scrub: 2,
      start: 'top center', // Adjust the start position as needed
      end: 'bottom center-=200', // Adjust the end position as needed
    },
  }
)
gsap.fromTo(
  '#button-footer',
  {
    opacity: 0,
    translateZ: -100,
    rotationX: 20,
  },
  {
    rotationX: 0,
    translateZ: 0,
    positionZ: 0,
    opacity: 1,
    duration: 6,
    ease: 'power1.Out',
    scrollTrigger: {
      trigger: '#button-footer', // Adjust the trigger element as needed
      scrub: 2,
      start: 'top center', // Adjust the start position as needed
      end: 'bottom center-=200', // Adjust the end position as needed
    },
  }
)
gsap.fromTo(
  '.footer',
  {
    rotationX: 35,
  },
  {
    rotationX: 0,
    scrollTrigger: {
      trigger: '.frame-196',
      scrub: 4,
      start: 'top center',
      end: 'bottom center',
    },
  }
)
gsap.fromTo(
  '#about-section',
  {
    rotationX: 10,
    transformOrigin: 'bottom',
  },
  {
    rotationX: 0,
    scrollTrigger: {
      trigger: '#about-section',
      scrub: 4,
      start: 'top center',
      end: 'bottom center',
    },
  }
)
gsap.fromTo(
  '#about-adam',
  {
    y: 40,
    transformOrigin: 'bottom',
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: '.content-wrapper-3',
      scrub: 4,
      start: 'top bottom',
      end: 'bottom center',
    },
  }
)
gsap.fromTo(
  '#adams-history',
  {
    y: 40,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: '.content-wrapper-3',
      scrub: 4,
      start: 'top bottom-=30%',
      end: 'bottom center',
    },
  }
)
gsap.fromTo(
  '#contact',
  {
    y: 40,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: '.footer',
      scrub: 4,
      start: 'top bottom',
      end: 'bottom bottom',
    },
  }
)
const init = () => {
  const marquee = document.querySelector('[wb-data="marquee"]')
  if (!marquee) {
    return
  }
  const duration = parseInt(marquee.getAttribute('duration'), 10) || 5
  const marqueeContent = marquee.firstChild
  if (!marqueeContent) {
    return
  }

  const marqueeContentClone = marqueeContent.cloneNode(true)
  marquee.append(marqueeContentClone)

  let tween

  const playMarquee = () => {
    let progress = tween ? tween.progress() : 0
    tween && tween.progress(0).kill()
    const width = parseInt(gsap.getProperty(marqueeContent, 'width'), 10)
    const gap = parseInt(gsap.getProperty(marqueeContent, 'column-gap'), 10)
    const distanceToTranslate = -1 * (gap + width)

    tween = gsap.fromTo(
      marquee.children,
      { x: 0 },
      { x: distanceToTranslate, duration, ease: 'none', repeat: -1 }
    )
    tween.progress(progress)
    console.log({ width })
  }
  playMarquee()

  function debounce(func) {
    var timer
    return function (event) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(
        () => {
          func()
        },
        500,
        event
      )
    }
  }

  window.addEventListener('resize', debounce(playMarquee))

  // console.log({ marquee, marqueeContent });
}

document.addEventListener('DOMContentLoaded', function () {
  function updateEffects(x, y) {
    gsap.utils.toArray('.cube').forEach(function (element) {
      var depth = element.dataset.depth || 0.1
      var tiltIntensity = 0.2
      var tiltX = (y * tiltIntensity * 15).toFixed(2)
      var tiltY = (-x * tiltIntensity * 15).toFixed(2)
      var moveX = x * depth * 60
      var moveY = y * depth * 60
      gsap.to(element, {
        duration: 4,
        x: moveX,
        y: moveY,
        rotationX: tiltX,
        rotationY: tiltY,
        transformPerspective: 1500,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    })
  }

  gsap.set('.cube', {
    opacity: 0,
    scale: 0.75,
    y: 64,
    yPercent: 48,
    transformOrigin: 'center center',
  })
  gsap.to('.cube', {
    opacity: 1,
    delay: 1.35,
    duration: 1,
    ease: 'power4.inOut',
  })
  gsap.to('.cube', {
    scale: 1,
    y: 0,
    delay: 1.5,
    duration: 9,
    ease: 'expo.out',
  })
  gsap.to('.cube', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.cube',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 4,
    },
  })
  document.addEventListener('mousemove', function (e) {
    var mouseXPercent = (e.clientX / window.innerWidth) * 2 - 1
    var mouseYPercent = (e.clientY / window.innerHeight) * 2 - 1
    updateEffects(mouseXPercent, mouseYPercent)
  })
  gsap.set('.framer-1puz1lp', {
    transformStyle: 'preserve-3d',
  })
})
document.addEventListener('DOMContentLoaded', init)

gsap.fromTo(
  '.image-footer',
  {
    opacity: 0,
    scale: 1,
    duration: 0.001,
    rotationX: 30,
    rotationY: 20,
    transformOrigin: 'bottom',
    ease: 'expo.inOut',
  },
  {
    rotationX: 0,
    rotationY: 0,
    opacity: 1,
    scale: 1.2,
    scrollTrigger: {
      trigger: '.footer',
      start: 'top center',
      end: 'bottom bottom',
      scrub: 1.5,
    },
  }
)
