/* ================== */
/* VARIALBES           */
/* ================ */

const tabList = document.querySelector('[role="tablist"]')
const tabs = [...tabList.children]

/* ================== */
/* FUNCTIONS           */
/* ================ */

/**
 * Hides content that shouldn't curently be visible
 * @param {HTMLElement} parent parent element of elements to hide
 * @param {String} selector string for selecting all elements to hide
 */
function hideContent (parent, selector) {
  const targetElements = [...parent.querySelectorAll(selector)]

  targetElements.forEach(element => element.setAttribute('data-visibility', false))
}

/**
 * Displays target content
 * @param {HTMLElement} parent parent of target element
 * @param {String} selector string for selecting target element
 */
function showContent (parent, selector) {
  parent.querySelector(selector).setAttribute('data-visibility', true)
}

/* ================== */
/* EXECUTION            */
/* ================ */
let currentIndex = 0
tabList.addEventListener('keydown', e => {
  const leftArrow = 37
  const rightArrow = 39

  if (e.keyCode === leftArrow || e.keyCode === rightArrow) {
    tabs.forEach(t => t.setAttribute('tabindex', -1))

    if (e.keyCode === rightArrow) {
      currentIndex++

      if (currentIndex >= tabs.length) {
        currentIndex = 0
      }
    } else if (e.keyCode === leftArrow) {
      currentIndex--

      if (currentIndex < 0) {
        currentIndex = tabs.length - 1
      }
    }

    tabs[currentIndex].setAttribute('tabindex', 0)
    tabs[currentIndex].focus()
  }
})

tabList.addEventListener('click', e => {
  const tab = e.target.closest('button[role="tab"]')

  if (!tab) return
  const content = tab.getAttribute('aria-controls')
  const image = tab.getAttribute('data-image')

  const parentContainer = tab.parentElement
  const mainContainer = parentContainer.parentElement

  /* switch selected tab */
  tabs.forEach(t => t.setAttribute('aria-selected', false))
  tab.setAttribute('aria-selected', true)

  /* switch tab content */
  hideContent(mainContainer, '[role="tabpanel"]')
  showContent(mainContainer, `#${content}`)

  /* switch tab image */
  hideContent(mainContainer, '.tab-image')
  showContent(mainContainer, `#${image}`)
})
