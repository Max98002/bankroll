export default class ProfileDropMenu {
  constructor(tiggersBtns, triggerMenu, activeClass = '') {
    this.menu = document.querySelector(triggerMenu);
    this.btns = document.querySelectorAll(tiggersBtns);
    this.allMenu = document.querySelectorAll('[data-drop-menu]');
    this.active = activeClass;
  }

  showMenu() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        try {
          btn.classList.toggle(this.active);
        } catch {}
        this.menu.classList.toggle('show-menu');
      });
    })
  }

  init() {
    this.showMenu();
  }
}