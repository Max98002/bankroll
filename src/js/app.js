import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import createLine from './modules/create-line.js';
import MoreMenuBtn from './modules/more-btn-menu.js';
import Accordion from "./modules/accordion.js";
import ChangeNameMoneyItem from "./modules/change-name-money-item.js";
import ShowEditBlock from './modules/show-edit-block.js';
import ProfileDropMenu from './modules/profile-drop-menu.js';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  createLine();

  new ProfileDropMenu('.button-profile', 'profile-drop-block_active', '.profile-drop-block').init();
  new ProfileDropMenu('.currency-selection-header', 'show-menu', '.currency-selection-drop-menu').init();

  new MoreMenuBtn('.more-btn').init();

  new Accordion('.group__header').init();

  new ChangeNameMoneyItem('.edit').init();

  new ShowEditBlock('.money-item').init();
})