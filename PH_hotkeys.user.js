// ==UserScript==
// @name         PH_hotkeys
// @description  Prohardver hotkeys in editor
// @namespace    https://www.prohardver.hu/
// @match        https://prohardver.hu/tema/*
// @match        https://mobilarena.hu/tema/*
// @match        https://itcafe.hu/tema/*
// @match        https://gamepod.hu/tema/*
// @version      1.1
// @author       0xmilan
// @grant        none
// @updateURL    https://raw.githubusercontent.com/0xmilan/prohardver-userscripts/main/PH_hotkeys.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Add an event listener for keydown events
    document.addEventListener('keydown', function(event) {
        // new comment
        if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
            event.preventDefault();
            document.querySelector('a[title="Új hozzászólás"]').click();
        };

        // toggle off topic text
        if ((event.ctrlKey || event.metaKey) && event.key === 'h') { // h for "halvany"
            event.preventDefault();
            document.querySelector('button[data-tmce-toggle="off"]').click();
        };

        // toggle off topic comment
        if ((event.ctrlKey || event.metaKey) && event.key === 'o') {
            event.preventDefault();
            document.querySelector('input[type="checkbox"][name="offtopic"][value="1"]').click();
        };

        // send comment
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            event.preventDefault();
            document.querySelector('li.media.msg-editor').querySelector('button.btn.btn-secondary.btn-sm').click();
        }
    });
})();

