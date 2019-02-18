/* global chrome */
(function() {
    'use strict';
    const submitButton = document.getElementById('submit_settings');
    submitButton.addEventListener('click', function(_) {
        let errors = [];
        const
           username = document.getElementById('github_username').value,
           token = document.getElementById('github_token').value;
        if (!username) {
            errors.push('Please use valid github username.');
        }
        if (!token || token.length < 40) {
            errors.push('Please use valid github auth token.')
        }
        const errorBlock = document.getElementById('errors');
        if (errors.length > 0) {
            for (let i = 0; i < errors.length; i++) {
                const e = document.createElement('p')
                e.innerText = errors[i];
                errorBlock.appendChild(e);
            }
            console.log("Everything is NOT OK.");
        } else {
            while(errorBlock.firstChild) {
                errorBlock.removeChild(errorBlock.firstChild);
            }
            chrome.storage.sync.set({ username, token }, function() {
                console.log("Everything is OK.");
            });
        }
    });
})();