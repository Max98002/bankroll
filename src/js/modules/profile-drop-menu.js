export default class ProfileDropMenu {
  constructor(btnSelector, activeSelector, wrapperBlockSelector) {
    this.btns = document.querySelectorAll(btnSelector);
    this.active = activeSelector;
    this.wrapperBlock = wrapperBlockSelector;
    this.intervalId;
  }

  init() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dataBtn = e.currentTarget.getAttribute('data-path');
        const menu = document.querySelector(`[data-target=${dataBtn}]`);

        console.log(dataBtn, menu);

        for (let i = 0; i < this.btns.length; i++) {
          this.btns[i].nextElementSibling.classList.remove(this.active);
          this.intervalId = setTimeout(() => {
            this.btns[i].classList.remove('open');
          }, 0);
        }

        if (!btn.classList.contains('open')) {
          menu.classList.add(this.active);

          this.intervalId = setTimeout(() => {
            btn.classList.add('open');
          }, 0);
        }

        if (btn.classList.contains('open')) {
          clearTimeout(this.intervalId);

          menu.classList.remove(this.active);

          this.intervalId = setTimeout(() => {
            btn.classList.remove('open');
          }, 0);
        }
      })


    });

    window.addEventListener('click', (e) => {
      const target = e.target;

      for (let i = 0; i < this.btns.length; i++) {
        if (target && !target.matches(this.wrapperBlock) && this.btns[i].classList.contains('open') && !target.closest("div[data-target]")) {
          for (let i = 0; i < this.btns.length; i++) {
            this.btns[i].nextElementSibling.classList.remove(this.active);
            this.intervalId = setTimeout(() => {
              this.btns[i].classList.remove('open');
            }, 0);
          }
        }
      }
    });
  }
}