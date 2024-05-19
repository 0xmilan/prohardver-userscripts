// ==UserScript==
// @name         PH_comment_background
// @description  Highlight replies to your comments
// @namespace    https://www.prohardver.hu/*
// @match        https://prohardver.hu/tema/*
// @match        https://mobilarena.hu/tema/*
// @match        https://itcafe.hu/tema/*
// @match        https://gamepod.hu/tema/*
// @version      1.0
// @author       0xmilan
// @grant        none
// @updateURL    https://raw.githubusercontent.com/0xmilan/prohardver-userscripts/main/PH_comment_background.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Function to apply background colors
    function applyBackgroundColors() {
        // Find all 'msg-head-replied' elements
        var repliedElements = document.querySelectorAll('.msg-head-replied .user-title a');

        repliedElements.forEach(function(link) {
            if (link.textContent === "0xmilan") {
                // Find the card-body following the card-header containing this link
                var cardHeader = link.closest('.card-header');
                var cardBody = cardHeader.nextElementSibling;
                cardBody.style.backgroundColor = '#300000'; // dark red color, works well with dark mode of prohardver.hu
            }
        });
    }

    // Check if the DOM is already fully loaded
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // Execute the code immediately
        applyBackgroundColors();
    } else {
        // Wait for the DOMContentLoaded event before executing the code
        document.addEventListener("DOMContentLoaded", function() {
            // Execute the code when the event fires
            applyBackgroundColors();
        });
    }

})();

