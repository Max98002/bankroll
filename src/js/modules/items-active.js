export default class ItemsActive {
  constructor(tiggersItems, activeClass = '') {
    this.items = document.querySelectorAll(tiggersItems);
    this.active = activeClass;
  }

  showItem() {
    this.items.forEach(item => {
      item.addEventListener('click', (e) => {

        const allItems = item.parentElement.querySelectorAll('.item').length * 61 + 32;
        const icon = item.querySelector('.items-group__icon');
        if (e.target) {
          e.preventDefault();
        }

        if (this.clickItems) {
          this.clickItems = false;

          item.parentElement.style.cssText = `
          height: ${32}px;
          overflow: hidden;
          `;
          icon.style.cssText = `transform: rotate(0deg);`;

        } else {
          this.clickItems = true;

          item.parentElement.style.cssText = `
          height: ${allItems}px;
          overflow: auto;
          `;
          icon.style.cssText = `transform: rotate(90deg);`;

        }

      });
    })
  }

  init() {
    this.showItem();
  }
}