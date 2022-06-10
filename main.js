window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
  const button = document.querySelector('#backToTopButton')
  if (scrollY > 550) {
    button.classList.add('show')
  } else {
    button.classList.remove('show')
  }
}