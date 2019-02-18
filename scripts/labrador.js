/* global chrome */
(function() {
    'use strict';
    const
        cmsDeployUsername = document.getElementById('fetchAndDeployCms_authUserName'),
        cmsDeployToken = document.getElementById('fetchAndDeployCms_authToken'),
        frontDeployUsername = document.getElementById('fetchAndDeployFront_authUserName'),
        frontDeployToken = document.getElementById('fetchAndDeployFront_authToken');

    chrome.storage.sync.get('username', function(data) {
        const username = data.username;
        chrome.storage.sync.get('token', function(data) {
            const token = data.token;
            if (!username) {
                return;
            }
            if (!token) {
                return;
            }
            cmsDeployUsername.value = username;
            cmsDeployToken.value = token;
            frontDeployUsername.value = username;
            frontDeployToken.value = token;
        })
    })
})();