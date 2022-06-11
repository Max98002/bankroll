export default class ChangeNameMoneyItem {
  constructor(editBlock) {
    this.edit = document.querySelectorAll(editBlock);
  }

  init() {
    this.edit.forEach(editEl => {

      const input = editEl.querySelector('.edit-input');
      const nameItemBlock = editEl.previousElementSibling.querySelector('.money-item__title');

      input.addEventListener('change', () => {
        nameItemBlock.textContent = input.value;
        input.value = '';
        editEl.classList.remove('edit_active');
      });
    });
  }
}