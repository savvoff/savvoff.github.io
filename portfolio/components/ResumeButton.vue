<template>
  <a
    ref="resumeButtonElement"
    href="/resume.html"
    target="_blank"
    rel="noopener noreferrer"
    class="resume-button"
    aria-label="Open Resume"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span class="resume-button__text">Resume</span>
    <svg
      class="resume-button__icon"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11L11 1M11 1H3M11 1V9"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>

<script setup>
  import { gsap } from 'gsap'

  const resumeButtonElement = ref(null)
  let magneticEffect = null

  /**
   * Handles mouse enter on resume button to update cursor label
   */
  function handleMouseEnter() {
    if (window.cursor && window.cursor.DOM && window.cursor.DOM.text) {
      window.cursor.DOM.text.innerHTML = 'CV'
    }
  }

  /**
   * Handles mouse leave on resume button to reset position and cursor
   */
  function handleMouseLeave() {
    if (window.cursor && window.cursor.DOM && window.cursor.DOM.text) {
      window.cursor.DOM.text.innerHTML = ''
    }

    if (resumeButtonElement.value) {
      gsap.to(resumeButtonElement.value, {
        duration: 0.8,
        ease: 'power4.out',
        x: 0,
        y: 0,
      })
    }
  }

  onMounted(async () => {
    if (resumeButtonElement.value) {
      const { MagneticFx } = await import('~/plugins/js/magneticFx')
      magneticEffect = new MagneticFx(resumeButtonElement.value)
    }
  })
</script>

<style lang="scss" scoped>
  .resume-button {
    position: fixed;
    top: 2rem;
    right: 2.5rem;
    z-index: 90;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.65rem 1.25rem;
    border-radius: 3rem;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    color: var(--color-text, #ffffff);
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
    will-change: transform;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.12);
      color: #ffffff;
    }

    &__icon {
      transition: transform 0.3s ease;
    }

    &:hover &__icon {
      transform: translate(2px, -2px);
    }
  }

  @media screen and (max-width: 768px) {
    .resume-button {
      top: 1.25rem;
      right: 1.25rem;
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
    }
  }
</style>
