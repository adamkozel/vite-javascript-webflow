import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

import SmoothScroll from './assets/SmoothScroll'
SmoothScroll()

// Create the onload timeline
export const onloadTimeline = gsap.timeline()

document.addEventListener('DOMContentLoaded', () => {
  // Initialize headline animations immediately after DOM is ready
  animateHeadline('.digital', 0.5)

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
    '.contact',
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
  ['.information', '#dots-header'],
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
    scrub: 1,
    start: 'top center',
    end: 'bottom top+=30%',
  },
})
