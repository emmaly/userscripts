// ==UserScript==
// @name         Remove Twitch Frontpage Headliner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Emmaly
// @description  Removes the frontpage headliner layout div from Twitch homepage
// @match        https://www.twitch.tv/
// @grant        none
// @homepage     https://github.com/emmaly
// @supportURL   https://github.com/emmaly/userscripts/issues
// @updateURL    https://github.com/emmaly/userscripts/raw/refs/heads/main/RemoveTwitchFrontpageHeadliner.user.js
// @downloadURL  https://github.com/emmaly/userscripts/raw/refs/heads/main/RemoveTwitchFrontpageHeadliner.user.js
// @license      MIT
// ==/UserScript==

/*
 * Copyright (c) 2024 Emmaly
 * GitHub: https://github.com/emmaly
 * Twitch: https://www.twitch.tv/SorceressEmmaly
 */

(function() {
  'use strict';

  // Function to remove the frontpage headliner layout
  function removeFrontpageHeadliner() {
      const headliner = document.querySelector('div.featured-content-carousel__wrapper');
      if (headliner) {
          headliner.remove();
      }
  }

  // Run the function when the page loads
  removeFrontpageHeadliner();

  // Also run the function periodically in case the element is added dynamically
  setInterval(removeFrontpageHeadliner, 1000);
})();
