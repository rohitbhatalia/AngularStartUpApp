import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//.then(() => registerServiceWorker());

// function registerServiceWorker() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('sw.js').then(function (registration) {

//       console.log('Registration successful', registration);

//       registration.onupdatefound = function () {
//         const installingWorker = registration.installing;

//         console.log('Service worker update found, now checking the statechange ...', installingWorker.state);

//         installingWorker.onstatechange = function () {
//           switch (installingWorker.state) {
//             case 'installed':
//               if (navigator.serviceWorker.controller) {
//                 console.log('New or updated content is available.');
//               } else {
//                 console.log('Content is now available offline!');
//               }
//               break;

//             case 'redundant':
//               console.error('The installing service worker became redundant.');
//               break;
//           }
//         };
//       };
//     }).catch(function (e) {
//       console.error('Error during service worker registration:', e);
//     });
//   }
// }

// function registerServiceWorkerSimple() {

//   if ('serviceWorker' in navigator) {
//     window.addEventListener('load', load);
//   }

//   function load() {
//     navigator.serviceWorker.register('/service-worker.js').then(success, fail);
//   }

//   function success(registration) {
//     // Registration was successful
//     console.log('ServiceWorker registration successful with scope: ', registration.scope);
//   }

//   function fail(err) {
//     // registration failed :(
//     console.log('ServiceWorker registration failed: ', err);
//   }
// }
