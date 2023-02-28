const toggleBtn = document.querySelector('.mobile-nav-toggle')
const nav = document.querySelector('.primary-nav')

function openMenu () {
  toggleBtn.setAttribute('aria-expanded', 'true')
  nav.setAttribute('data-state', 'opened')
}

function closeMenu () {
  toggleBtn.setAttribute('aria-expanded', 'false')
  nav.setAttribute('data-state', 'closing')
}

toggleBtn.addEventListener('click', e => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true'
  expanded ? closeMenu() : openMenu()

  document.body.addEventListener(
    'animationend',
    e => {
      if (e.animationName === 'hideMenu') {
        nav.setAttribute('data-state', 'closed')
      }
    },
    { once: true }
  )
})

document.body.addEventListener('click', e => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true'
  if (expanded) {
    if (
      !e.target.closest('.primary-nav') &&
      !e.target.closest('.mobile-nav-toggle')
    ) {
      closeMenu()
    }
  }

  document.body.addEventListener(
    'animationend',
    e => {
      if (e.animationName === 'hideMenu') {
        nav.setAttribute('data-state', 'closed')
      }
    },
    { once: true }
  )
})
