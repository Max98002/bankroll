export default class ShowEditBlock {
  constructor(triggerBlock) {
    this.block = document.querySelectorAll(triggerBlock);
  }

  init() {
    this.block.forEach(block => {
      block.addEventListener('click', () => {
        const edit = block.parentElement.querySelector('.edit');
        edit.classList.toggle('edit_active');
      })
    })
  }
}