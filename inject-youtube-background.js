```javascript
// Inject YouTube video background for hake.me
(function() {
    'use strict';
    // Create video background container
    var videoContainer = document.createElement('div');
    videoContainer.className = 'video-background';
    // Create iframe for YouTube video
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/HV3E5K75BDE?autoplay=1&mute=1&loop=1&playlist=HV3E5K75BDE';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');
    // Append iframe to container
    videoContainer.appendChild(iframe);
    // Insert container as the first child of body
    document.body.insertBefore(videoContainer, document.body.firstChild);
})();
```