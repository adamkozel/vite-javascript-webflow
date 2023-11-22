import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

// Create the onload timeline
export const onloadTimeline = gsap.timeline()

document.addEventListener('DOMContentLoaded', () => {
  // Initialize headline animations immediately after DOM is ready
  Headline('.digital', 0.5)

  // Add other animations to the onload timeline
  onloadTimeline
    .add(HeroSocials(), 'start+=0.8')
    .add(HeroServices(), 'start+=0.75')
    .add(HeroButton(), 'start+=2')
    .add(adamkozel(), 'start+=2.2')
    .add(dotsAppear('#dots-header', 2), 'start+=0.5')
    .add(dotsAppear('#dots-project-01', 2.2), 'start+=0.5')
    .add(projectAppear(), 'start+=0.5')
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
function Headline(targetId, staggerStart) {
  let split = new SplitText(targetId, { type: 'chars' })
  let chars = split.chars
  gsap.set(chars, {
    rotationX: 64,
    y: 72,
    opacity: 0,
  })
  let tl = gsap.timeline({
    delay: staggerStart,
  })
  tl.to(chars, {
    rotationX: 0,
    y: 0,
    opacity: 1,
    ease: 'circ.out',
    stagger: 0.05,
    duration: 1,
  })
  return tl
}
function HeroServices() {
  const tl = gsap.timeline({
    defaults: { ease: 'power1.out' },
    delay: 0.5,
  })
  tl.fromTo(
    '.services > *',
    {
      rotationY: 100,
      x: 150,
      autoAlpha: 0,
      opacity: 0,
    },
    {
      rotationY: 0,
      x: 0,
      opacity: 1,
      ease: 'expo.out',
      autoAlpha: 1,
      duration: 2,
      stagger: {
        each: 0.2,
      },
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
      width: 0,
      opacity: 0,
    },
    {
      opacity: 1,
      width: '100%',
      duration: 4,
      ease: 'expo.inOut',
    }
  )
  return tl
}
