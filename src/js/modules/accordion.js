export default class Accordion {
  constructor(triggerSelector) {
    this.btns = document.querySelectorAll(triggerSelector);
    this.intervalId;
  }

  showElements() {
    this.btns.forEach(btn => {

      btn.addEventListener('click', () => {
        const arrow = btn.querySelector('.group__icon');

        // this.btns.forEach(btn => {
        //   const arrow = btn.querySelector('.group__icon');
        //   btn.nextElementSibling.style.maxHeight = '0px';
        //   btn.nextElementSibling.style.overflow = 'hidden';
        //   arrow.classList.remove('group__icon_active');
        // });

        if (!btn.classList.contains('open')) {
          btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 'px';
          arrow.classList.add('group__icon_active');
          intervalId = setTimeout(() => {
            btn.classList.add('open');
          }, 0);
        }

        if (btn.classList.contains('open')) {
          clearInterval(this.intervalId);

          const arrow = btn.querySelector('.group__icon');
          btn.nextElementSibling.style.maxHeight = '0px';
          btn.nextElementSibling.style.overflow = 'hidden';
          arrow.classList.remove('group__icon_active');          

          intervalId = setTimeout(() => {
            btn.classList.remove('open');
          }, 0);
        }
      })

    })
  }

  init() {
    this.showElements();
  }
}