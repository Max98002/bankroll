export default class ProfileDropMenu {
  constructor(tiggersBtns, triggerMenu) {
    this.menu = document.querySelector(triggerMenu);
    this.btns = document.querySelectorAll(tiggersBtns);
    this.allMenu = document.querySelectorAll('[data-drop-menu]');
  }

  showMenu() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        this.menu.classList.toggle('show-menu');
      });
    })
  }

  init() {
    this.showMenu();
  }
}