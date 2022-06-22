# Urbit UI Template

Change `urbit-ui-template` in `package.json` to match the name of your app.

Change `proxy` in `package.json` to point at your ship. It is currently set to the default fakezod port.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

There are a few changes to the `public` folder and the `package.json` that are specific to urbit apps.

## Available Scripts

In the project directory, you can run:

### `npm start`

Urbit-specific notes:
- The part of this script prior to `&& react-scripts start` is necessary for using urbit subscriptions in development mode.
- You will need to authenticate with your proxy destination ship if you have not already.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Publishing Your UI on Urbit

### Creating the glob

The following is a step-by-step guide based on the official guide found here: https://urbit.org/docs/userspace/dist/glob

Note that `path_to_...` is used as a placeholder in the steps below.

It is recommended to copy these steps and build your own glob script, particularly for the non-urbit commands.

1. Run `npm run build`
2. Start up a new fakezod with `path_to_urbit/urbit -F zod`
3. In the fakezod run `|mount %landscape`
4. In a separate terminal run `cp -r path_to_repo/build path_to_fakezod/zod/landscape/`
5. Run `cd path_to_fakezod/zod/landscape/build/static/js && rm *.js.map*`
6. Run `cd path_to_fakezod/zod/landscape/build/static/css && rm *.css.map*`
7. On the fakezod run `|commit %landscape`
8. On the fakezod run `-garden!make-glob %landscape /build`
9. Your file should now be available in `path_to_fakezod/.urb/put/`. The filename will start with `glob` and have a `.glob` extension.

### Uploading the glob

Upload the glob to a publically available location. A good way to test that it is publically available is to visit the glob's URL in incognito mode.
If you are using AWS S3, for example, you will have to confirm that you want the glob to be publically available.

### desk.docket-0

Update the `glob-http` line in your desk.docket-0 to include the new glob url and glob ID.

You should not have a `glob-ames` or `site` entry if you are using `glob-http`. And you should use `glob-http` if you are using a React frontend due to the size of the UI files.

Example: `glob-http+['https://escape-app-dist.s3.us-east-2.amazonaws.com/glob-0v4.nko18.e27qn.q1ueq.aon0t.l0fp3.glob' 0v4.nko18.e27qn.q1ueq.aon0t.l0fp3]`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
