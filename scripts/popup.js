/* global chrome */
(function(){
    'use strict';
    const actionButton = document.getElementById('labrador_submit_userdata');
    actionButton.addEventListener('click', function(_) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                { file: 'scripts/labrador.js' });
        });
    });
})();