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

document.body.addEventListener('click', e => {
  const expanded = toggleBtn.getAttribute('aria-expanded')
  if (expanded === 'true') {
    if (!e.target.closest('.primary-nav') && !e.target.closest('.mobile-nav-toggle')) {
      toggleBtn.setAttribute('aria-expanded', false)
      nav.setAttribute('data-visibility', false)
    } else {
      toggleBtn.setAttribute('aria-expanded', true)
      nav.setAttribute('data-visibility', true)
    }
  }
})
