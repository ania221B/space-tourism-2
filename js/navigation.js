const toggleBtn = document.querySelector('.mobile-nav-toggle')
const nav = document.querySelector('.primary-nav')

toggleBtn.addEventListener('click', e => {
  const expanded = toggleBtn.getAttribute('aria-expanded')

  if (expanded === 'false') {
    toggleBtn.setAttribute('aria-expanded', true)
    nav.setAttribute('data-visibility', true)
  } else {
    toggleBtn.setAttribute('aria-expanded', false)
    nav.setAttribute('data-visibility', false)
  }
})
