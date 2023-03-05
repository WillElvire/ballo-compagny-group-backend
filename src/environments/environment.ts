// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  HttpServers :{
    BASE_API_DEV : "http://localhost:3002/api/v1",
    BASE_API_URL : "http://localhost:3002"
  },
  ENC_KEY : "",
  firebaseConfig : {
    apiKey: "AIzaSyB5VljzAwznH4K7H-j6iR-9MNRHcbwX-a8",
    authDomain: "bcgroup-d4caf.firebaseapp.com",
    projectId: "bcgroup-d4caf",
    storageBucket: "bcgroup-d4caf.appspot.com",
    messagingSenderId: "200840379108",
    appId: "1:200840379108:web:886a8f913adbcfb9c48af1",
    measurementId: "G-7XRVRN7G9K"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
