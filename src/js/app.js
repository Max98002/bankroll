import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import ProfileDropMenu from "./modules/profile-drop-menu.js";
import ItemsActive from './modules/items-active.js';
import MoreMenuBtn from './modules/more-btn-menu.js';
import Accordion from "./modules/accordion.js";

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  new ProfileDropMenu('.button-profile_user', '.normal-menu').init();
  new ProfileDropMenu('.button-profile_disconnected', '.disconnected-menu').init();
  new ProfileDropMenu('.button-profile_connected', '.connected-menu').init();
  new ProfileDropMenu('.currency-selection-header', '.currency-selection-drop-menu', 'currency-selection-header_active').init();
  
  new ItemsActive('.items-group-wrapper', 'items_active').init();

  new MoreMenuBtn('.more-btn').init();

  new Accordion('.group__header').init();
})