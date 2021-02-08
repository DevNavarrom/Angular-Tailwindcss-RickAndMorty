// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr       : false,
  apiURL: 'https://rickandmortyapi.com/api',
  firebaseConfig : {
    apiKey: "AIzaSyCja-MUnRsBKu7WhIZOe-48BAw2ypSJsu4",
    authDomain: "angularrickandmorty.firebaseapp.com",
    projectId: "angularrickandmorty",
    storageBucket: "angularrickandmorty.appspot.com",
    messagingSenderId: "155203543494",
    appId: "1:155203543494:web:4fbb5510bd6e6e495512c7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
