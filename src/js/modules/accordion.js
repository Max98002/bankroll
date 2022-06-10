export default class Accordion {
  constructor(triggerSelector) {
    this.btns = document.querySelectorAll(triggerSelector);
  }

  showElements() {
    this.btns.forEach(btn => {

      btn.addEventListener('click', () => {
        const arrow = btn.querySelector('.group__icon');

        if (!arrow.classList.contains("group__icon_active")) {
          btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 'px';
          btn.nextElementSibling.style.opacity = '1';
          btn.nextElementSibling.style.pointerEvents = 'auto';
          arrow.classList.add('group__icon_active');
        } else {
          btn.nextElementSibling.style.maxHeight = 0 + 'px';
          btn.nextElementSibling.style.opacity = '0';
          btn.nextElementSibling.style.pointerEvents = 'none';
          arrow.classList.remove('group__icon_active');
        }


      })

    })
  }

  init() {
    this.showElements();
  }
}

// this.btns.forEach(btn => {
//   const arrow = btn.querySelector('.group__icon');
//   btn.nextElementSibling.style.maxHeight = '0px';
//   btn.nextElementSibling.style.overflow = 'hidden';
//   arrow.classList.remove('group__icon_active');
// });