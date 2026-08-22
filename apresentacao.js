const slides = [...document.querySelectorAll('.slide')]
const counter = document.querySelector('#counter')
let current = 0

function show(index) {
  current = Math.max(0, Math.min(index, slides.length - 1))
  slides.forEach((slide, position) => {
    const active = position === current
    slide.classList.toggle('active', active)
    slide.setAttribute('aria-hidden', String(!active))
  })
  counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`
  document.querySelector('#prev').disabled = current === 0
  document.querySelector('#next').disabled = current === slides.length - 1
  history.replaceState(null, '', `#slide-${current + 1}`)
}

document.querySelector('#prev').addEventListener('click', () => show(current - 1))
document.querySelector('#next').addEventListener('click', () => show(current + 1))
document.addEventListener('keydown', event => {
  if (['ArrowRight', 'PageDown', ' '].includes(event.key) && event.target.tagName !== 'BUTTON') {
    event.preventDefault()
    show(current + 1)
  }
  if (['ArrowLeft', 'PageUp'].includes(event.key)) show(current - 1)
  if (event.key === 'Home') show(0)
  if (event.key === 'End') show(slides.length - 1)
})

document.querySelectorAll('.timer').forEach(timer => {
  const display = timer.querySelector('span')
  const [toggle, reset] = timer.querySelectorAll('button')
  const duration = Number(timer.dataset.seconds)
  let remaining = duration
  let interval = null

  function render() {
    const minutes = Math.floor(remaining / 60)
    const seconds = remaining % 60
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  toggle.addEventListener('click', () => {
    if (interval) {
      clearInterval(interval)
      interval = null
      toggle.textContent = 'Continuar'
      return
    }
    toggle.textContent = 'Pausar'
    interval = setInterval(() => {
      if (remaining > 0) remaining -= 1
      render()
      if (remaining === 0) {
        clearInterval(interval)
        interval = null
        toggle.textContent = 'Iniciar'
      }
    }, 1000)
  })

  reset.addEventListener('click', () => {
    clearInterval(interval)
    interval = null
    remaining = duration
    toggle.textContent = 'Iniciar'
    render()
  })

  render()
})

const initial = Number(location.hash.replace('#slide-', ''))
show(Number.isInteger(initial) && initial > 0 ? initial - 1 : 0)
