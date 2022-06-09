export default class MoreMenuBtn {
  constructor(triggersBtns) {
    this.btns = document.querySelectorAll(triggersBtns);
  }

  showMenu() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const menu = btn.querySelector('.more-btn-menu');

        if (!btn.classList.contains('more-btn_active')) {
          btn.classList.add('more-btn_active');
          menu.classList.add('more-btn-menu_active');
        } else {
          btn.classList.remove('more-btn_active');
          menu.classList.remove('more-btn-menu_active');
        }
      })
    })
  }

  init() {
    this.showMenu();
  }
}