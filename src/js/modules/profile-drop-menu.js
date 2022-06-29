const profileDropMenu = () => {
  const btns = document.querySelectorAll('.button-profile');
  let intervalId;

  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dataBtn = e.currentTarget.getAttribute('data-path');
      const menu = document.querySelector(`[data-target=${dataBtn}]`);

      for (let i = 0; i < btns.length; i++) {
        btns[i].nextElementSibling.classList.remove('profile-drop-block_active');
        intervalId = setTimeout(() => {
          btns[i].classList.remove('open');
        }, 0);
      }

      if (!btn.classList.contains('open')) {
        menu.classList.add('profile-drop-block_active');

        intervalId = setTimeout(() => {
          btn.classList.add('open');
        }, 0);
      }

      if (btn.classList.contains('open')) {
        clearTimeout(intervalId);

        menu.classList.remove('selected-blocks-list_active');

        intervalId = setTimeout(() => {
          btn.classList.remove('open');
        }, 0);
      }
    })

    
  });

  window.addEventListener('click', (e) => {
    const target = e.target;

    for(let i = 0; i < btns.length; i++) {
      if (target && !target.matches('.profile-drop-block') && btns[i].classList.contains('open') && !target.closest("div[data-target]")) {
        for (let i = 0; i < btns.length; i++) {
          btns[i].nextElementSibling.classList.remove('profile-drop-block_active');
          intervalId = setTimeout(() => {
            btns[i].classList.remove('open');
          }, 0);
        }
      }
    }
  });
}

export default profileDropMenu;