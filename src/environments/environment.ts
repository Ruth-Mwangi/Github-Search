// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  ruthApiUrl:"https://api.github.com/users/Ruth-Mwangi?access_token=5a940cfd1992f2f5488c4b93117c7f9aa3daef17",
  rururepo:"https://api.github.com/search/repositories?access_token=5a940cfd1992f2f5488c4b93117c7f9aa3daef17&q=user:Ruth-Mwangi",
  searchRepo:"https://api.github.com/search/repositories?access_token=5a940cfd1992f2f5488c4b93117c7f9aa3daef17&q=",
  searchUser:"https://api.github.com/search/users?access_token=5a940cfd1992f2f5488c4b93117c7f9aa3daef17&q="
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
