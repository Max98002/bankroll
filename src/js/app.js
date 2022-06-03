import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import ProfileDropMenu from "./modules/profile-drop-menu.js";

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  new ProfileDropMenu('.button-profile_user', '.normal-menu').init();
  new ProfileDropMenu('.button-profile_disconnected', '.disconnected-menu').init();
  new ProfileDropMenu('.button-profile_connected', '.connected-menu').init();
})