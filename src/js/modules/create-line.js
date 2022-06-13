const createLine = () => {

  const mainWrap = document.querySelector('.main-wrapper');

  window.addEventListener('scroll', () => {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    mainWrap.style.gridTemplateRows = scrollHeight + 'px';
  })

};

export default createLine;