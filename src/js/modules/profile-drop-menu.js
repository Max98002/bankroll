export default class ProfileDropMenu {
  constructor(tiggersBtns, triggerMenu, activeClass = '') {
    this.menu = document.querySelector(triggerMenu);
    this.btns = document.querySelectorAll(tiggersBtns);
    this.active = activeClass;
    this.selectorMenu = triggerMenu;
  }

  showMenu() {
    this.btns.forEach(btn => {

      btn.addEventListener('click', (e) => {
        const target = e.target;

        if (target) {
          e.preventDefault();
        }

        try {
          btn.classList.toggle(this.active);
        } catch {}

        this.menu.classList.toggle('show-menu');
      });

    });
  }

  init() {
    this.showMenu();
  }
}