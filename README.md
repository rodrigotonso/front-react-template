# Frontend Template (IALab)
## Index

- [Frontend Template](#frontend-template)
  - [Index](#index)
  - [Introduction](#introduction)
  - [Tools](#tools)
    - [Nextjs](#nextjs)
    - [Typescript](#typescript)
    - [Redux](#redux)
    - [Eslint](#eslint)
    - [Stylelint](#stylelint)
    - [Prettier](#prettier)
    - [Jest](#jest)
  - [Folder structure and usage](#folder-structure-and-usage)
    - [Root Directories](#root-directories)
    - [Root Files](#root-files)
    - [Directories in /src](#directories-in-src)
    - [Files in /src](#files-in-src)
  - [Guide](#guide)
    - [Starting](#starting)
    - [Application configuration and environment](#application-configuration-and-environment)
      - [Your service must know its URL.](#your-service-must-know-its-url)
      - [Environment variables and their usage in NextJS](#environment-variables-and-their-usage-in-nextjs)
      - [Starting the app](#starting-the-app)
        - [app.tsx:](#apptsx)
      - [Remove unnecesary dependencies](#remove-unnecesary-dependencies)
    - [Types](#types)
    - [Internationalization](#internationalization)
    - [State](#state)
      - [State guide](#state-guide)
    - [Controller](#controller)
    - [Pages](#pages)
      - [Components](#components)
      - [Form control](#form-control)
    - [Styling](#styling)
    - [Services](#services)
    - [Errors](#errors)
      - [Error sources](#error-sources)
      - [Error handling](#error-handling)
    - [Some specific services.](#some-specific-services)
      - [Google ReCaptcha V3:](#google-recaptcha-v3)
      - [Keycloak:](#keycloak)
    - [Security](#security)
      - [Authentication and security recommendations](#authentication-and-security-recommendations)
      - [HTTP Headers](#http-headers)
      - [Other recommendations](#other-recommendations)
    - [Testing](#testing)
      - [Unit testing](#unit-testing)
    - [Documentation](#documentation)
      - [Tests documentation](#tests-documentation)
      - [Code documentation](#code-documentation)
    - [Commands](#commands)

## Introduction

This template is used to create new frontend applications. It's made using React and NextJs, using them as a microservice for frontend.
This template follows the practices established in the microservices template, so we recommend you to read that one before reading this.

That being said:
In the **src** dir you will find a complete example on how this system could work. You can add or remove the files you need.

## Tools

If you are using the Visual Studio Code as your code editor (recommended, you can get it [here](https://code.visualstudio.com/)), you should install and use the associated plugins.

### Nextjs

We use Next.js due to different advantages:

- Better user experience
- Data security
- SEO efficiency
- Incremental Static Generation
- Better performance than a SPA, but with the browsing experience of this.
- Better scores in the Core Web Vitals (you can check this one using LightHouse).

Read the docs: [Next.js docs](https://nextjs.org/docs)

### Typescript

As a JavaScript superset. All the files should be written in TypeScript in order to make the code cleaner. Its configuration is set in the .tsconfig file. You can read how to configure it [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

Read the docs: [Typescript docs](https://www.typescriptlang.org/docs).

### Redux

For state management. We use Redux Toolkit (official recommended approach for writing Redux logic), which wraps around the Redux core, and contains packages and functions that are essential for building a Redux app.

Read the docs: [Redux docs](https://redux.js.org/introduction/getting-started), [Redux Toolkit docs](https://redux-toolkit.js.org/introduction/getting-started) and [React Redux docs](https://react-redux.js.org/introduction/getting-started).

### Eslint

For code styling. It ensures you are using the best practices and all the developers are following the same guides. The configuration is set in the .eslintrc file. You can read how to configure it [here](https://eslint.org/docs/user-guide/configuring).

We use the AirBnb style guide for coding: [Guide docs](https://github.com/airbnb/javascript).

Read the docs: [ESLint docs](https://eslint.org/).

VSCode plugin: [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Stylelint

For CSS and SCSS code styling, just like ESLint but for styles. Its configuration can be found in .stylelintrc.json. You can read how to configure it [here](https://stylelint.io/user-guide/usage/options).

We use the AirBnb style guide for coding: [Guide docs](https://github.com/airbnb/css).

Read the docs: [Stylelint docs](https://stylelint.io/user-guide/get-started).

VSCode plugin: [here](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint).

### Prettier

It's an opinionated code formatter used for making the code prettier. Also, by this way all the developers will be following the same style guides. It's configured in the .prettierrc file. You can read how to configure it [here](https://prettier.io/docs/en/configuration.html).

It's recommended to set **formatOnSave** to **true** in your Code Editor to make this step easier.

Read the docs: [Prettier docs](https://prettier.io/).

VSCode plugin: [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### Jest

For unit testing it uses Jest. It will look for all the files which their names finishes with ".test.ts" in the "/tests" dir and execute them. Jest is a very powerful tool for testing. Its configuration is set in the jestconfig.json file. You can read how to configure it [here](https://jestjs.io/docs/en/configuration).

Read the docs: [Jest docs](https://jestjs.io/).

## Folder structure and usage

### Root Directories

- **build**: Has the compiled code and it's prepared to work. This directory is removed and remade everytime you run "npm run build", so never put something that cannot be erased there.
- **docs**: Contains the different docs (code and the testings).
- **node_modules**: It's the standard node_modules folder for NodeJS.
- **package_utils**: It contains some scripts we need at package config.
- **public**: It contains the primary HTML file and static files.
- **src**: It contains the source of the package with some functional examples on how to use the template. It's the code that will be compiled when you run "npm run build".
- **tests**: Contains all the different files (and some examples) that will be tested when you use "npm run test". Jest will look for all the files finishing with ".test.ts".

### Root Files

- **.browserslistrc**: Contains the queries for specifying which browsers should be supported in this frontend. Read the docs: [Browserslist queries](https://www.npmjs.com/package/browserslist#queries).
- **.dockerignore**: Files that will be ignored by docker.
- **Dockerfile**: File with the docker instructions to build the container. Read the docs: [DockerFile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- **.env-sample**: You should use it as a sample to complete the .env file. This will contain the environment variables. Variables should be used from outside (read the docs of the microservice template!).
- **.eslintrc**: Contains all the configuration for [eslintrc](https://eslint.org/docs/user-guide/configuring).
- **.eslintignore**: Contains the folders/files that will be ignored by eslint.
- **.gitignore**: Contains all the files and directories that won't be upstreamed to git. How to configure: [gitignore](https://git-scm.com/docs/gitignore).
- **.npmrc**: Contains how npm will work. How to configure: [npmrc](https://docs.npmjs.com/configuring-npm/npmrc.html).
- **.pretierrc**: Contains prettier configuration. How to configure: [prettierrc](https://prettier.io/docs/en/configuration.html).
- **.stylelintrc**: Contains Stylelint configuration. How to configure: [stylelintrc](https://stylelint.io/user-guide/configure).
- **CHANGELOG.md, LICENSE and README.md**: Standard files that have information about how to use the package (this file), the changes in each release and the license.
- **jest.config.js**: Contains Jest configuration. How to configure: [jestconfig](https://jestjs.io/docs/en/configuration).
- **jesthtmlreporter.config.json**: Contains the configuration for the testings output files.
- **next.config.js**: File to configure NextJS. Has things like headers for client browser, how to use webpack, etc. Read the docs: [next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction)
- **next-env.d.ts**: Has some settings for the typescript usage with next. Read: [Typescript with Next](https://nextjs.org/docs/basic-features/typescript)
- **package.json**: NodeJS Package configuration. How to configure: [package.json](https://docs.npmjs.com/creating-a-package-json-file).
- **tsconfig.json**: Contains TypeScript configuration. How to configure: [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
- **typedoc.json**: Contains the TYPE DOC configuration. How to configure: [typedoc](https://typedoc.org/guides/options/).

### Directories in /src

- **components**: Contains the components for the entire application.
- **constants**: Contains all the application constants (configuration that doesn't depend on environment variables).
- **controller**: Contains the bussiness logic layer. It's the part that executes what the app needs and interact with the state.
- **internationalization** Contains all the things needed to use the app in different languages (and also contains app strings).
- **pages**: Contains the Next.js pages folder. Each file in this folder will be a route in the application. Read in next how this works...
- **scss**: Contains global styles and some SASS/CSS utils and variables needed in many parts of the app.
- **services**: Contains calls to third party services or APIs. This directory should contain all interactions with any API.
- **state**: Contains all related to Redux Toolkit state (features, storages, actions, etc.).
- **types**: Contains all complex or reused types across the application.
- **utils**: Contains some utils, like the axiosHelper.

### Files in /src

- **config.ts**: Like in the microservice template, it contains the values coming from the environment. It's an internal facade in order not to use "process.env" everywhere in the code. This file also makes sure you have all the environment variables you need.

## Guide

### Starting

To develop a frontend this template follows many code rules: ESLint, Stylelint, Prettier, the AirBnb guide, TypeScript, etc. But this is just for coding. The app design is harder, because we cannot have automated tools and we have to be very thoughtfull as we develop. Accessibility, performance and SEO are also issues to consider.

Before starting to develop is necessary to execute the `npm run prepare` command, because it installs the husky.

Here are the guides and recommendations we want to follow to build:

- [React and TypeScript](https://www.reactandtypescript.dev/): Here are some recommendations and examples for using React with TypeScript.
- [React+TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react): Here is a cheatsheet with a lot of recommendations for using React with TypeScript.
- [Accesibility](https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b): A medium post with 7 things to consider about accesibility
- [Next.js examples](https://github.com/vercel/next.js/tree/canary/examples): Here are many examples on how to use different libraries or settings in Next.js.
- [Accesibility](https://adhithiravi.medium.com/web-accessibility-and-why-you-should-care-c8b436412ebd): Another medium post with some recommendations about accesibility.
- [Frontend Checklist](https://frontendchecklist.io/): A checklist with a lot of recommendations for a frontend application. [Here](https://github.com/thedaviddias/Front-End-Checklist) is the Github repo for this checklist.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse): An open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more.
- [web.dev](https://web.dev): A Google resource to learn, create, and solve on the web.
- [OWASP](https://owasp.org/): This site contains a lot of information on security practices. It's updated very often, so it's good to keep an eye on it.

You will find the template has some examples on how it could be used. You can delete the files or modify them to your needs.

### Application configuration and environment

The application should start at /src/config.ts. This file will try to get all the information from the environment before running the app.
There are some important points about this:

#### Your service must know its URL

First of all, this service will be used for frontend apps, so you will have to expose it in a specific URL (like "https://yourapp.com/"), or maybe with a specific subpath ("https://yourapp.com/subpath/subpath2"). It's very important for your service to know this URL.

**Why?**: In many scenarios, you will run in the main path "/" (like "yourapp.com/") and nextJS would work with not so much configuration. It's very straight forward, as all the browsers will use your host and the "/" as a relative path.

But, in many other scenarios, you will run in a subpath ("yourpath.com/subpath"), and you will have to tell this to your scripts. This scenario will be common if you have more than one frontend service, or run in a specific path.
Being more specific, in your HTML you could use as a src "/imgs/hello.png", but this will crash if the relative path doesn't work as you expect.

```html
<!--
This one will work if you run in "yourapp.com" but will crash if you run in "yourapp.com/path".
In the last scenario, it will look for the non existent "yourapp.com/imgs/hello.png".
-->
<img src="/imgs/hello.png" />

<!-- This one will work in every scenario. -->
<img src={`${CONFIG.ABSOLUTE_URL}/imgs/hello.png`} />
```

**Can I ignore this if I'm sure I will run in the "/" path?**: Please, no... The project can change in the future and the following developers will have to guess to change this. Maybe, they will have to search in the whole code looking for where you used paths to edit them. Please, just use the absolute path from the environment variable since the begining.

#### Environment variables and their usage in NextJS

Even though it may not be obvious why environment variables are so important for frontend apps, these are the best way to make your service:

- configurable: you can change the code behaviour from outside the code itself.
- portable: as you change the configuration and just running somewhere else (imagine changing the URL and re run it somewhere else).
- secure: You can store here information that shouldn't be in the repository.

Every thing you might want to change in your code behaviour without needing to change the code, it should be done in the environment variables.

But, frontend apps have a little trick in this: as they could be exposed to the client, you should be very carefull about where and when to use them. It would be TERRIBLE to expose something like an API KEY or a database password to the user.

For this reason, nextJS requires a prefix in them in order to expose them to the frontend. Otherwise, if you try to reach them in client, you will receive "undefined".

So, you will want to expose things that can be seen by the front with the "NEXT*PUBLIC*" prefix, like this:

```env
NEXT_PUBLIC_ABSOLUTE_URL=https//myexample.com

NEXT_PUBLIC_CAPTCHA_SITE_KEY=oaisdjoaisjdoaijaisd
```

So, this information will be seen by the application in the frontend.
We use config.ts as a facade to get this information, and also to remove that hellish ugly "NEXT_PUBLIC\_" from the rest of the code.

**When should I use NEXT_PUBLIC\_ prefix?**: Should the information be visible in the front? If it's true (the app URL, some service URL, a site secret for captchas, etc.), the answer is yes. If it's not (where to store logs, application name, etc.), the answer is no.

**I'm not convinced why they are useful...**: Some things like the captcha site key or the URL can change with time, and you won't want to change the code in order to make them work (or imagine you have the same repo in different URLs... you need the environment variables.).

**How to know if a variable should be in the environment or in constants?**: If it's something you should want to configure from OUTSIDE the app, like the URL or the site key, it should be in the environment. If it's something you just want to have in some place to prevent magic numbers or strings, or to reuse the same value in different places, it should be in constants.

**Why using config.ts and not just using process.env?**: It's a good practice to have a facade and just one place to ensure all the environment variables are set. Otherwise, you can be using "undefined" as a value, or building an app with wrong information.

#### Starting the app

As we use NextJs, the application starts at /src/pages/\_app.tsx. Here is the Next.js App Component.
You might want to read about them in the NextJS docs: [docs](https://nextjs.org/docs)

You will find that the dir /pages has the router for the frontend app. You can read about this in: [routing docs](https://nextjs.org/docs/routing/introduction).
Otherwise, if you want your app to be visible in every route, you can name the main file [[...slug.tsx]].

##### \_app.tsx

This file is the best site to configure:

- Headers that should be present in every page (like the favicon).
- SEO configuration that should be present in every page (like the description).
- Initialization for libraries or services you will need since the start: like captchas, keyCloak, etc. The best way is to use the "useEffect" hook.

This is an effective way to start async configuration:

```javascript
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {

  // This will run when the application starts.
  useEffect(() => {
    // Declare the function as async in order to use it inside the hook.
    const start = async () => {
      // Do some async stuff...
      await googleRecaptchaV3Service.addScript();
      await asyncService.asyncThing();
    };
    // Execute the function.
    start();
  }, []);

  return (
      // All the app...
  );
};
```

If you do it this way, every page should have the information loaded, service started, etc.

#### Remove unnecesary dependencies

Some dependencies added in package.json, specially UI libraries, are not necessary.
You can remove them if you want.
They are added just in order to make the template, but you might not use them (like formik, swal, etc.).

### Types

The /types dir contains all the different types that could be reused in different parts of the application. For example, you might find a type that will be needed in state, controller and views layers. Also, you could find different files inside the same layer that use this type. It's not a good practice to rewrite this type in every file (if you have to modify something, you will have to do it in a lot of files), so it's better to have them in a specific dir.

**Some guides**:

- If the type it's a TypeScript built-in, like "Record<string, string>", it's better NOT to include it in "types". The idea of /types it's to simplify TypeScript usage, not to have all the types in the same place.
- If the type it's too layer specific, maybe it shouldn't be here, because you could reuse that type in another layer when you shouldn't. This would break concerns separation: if controller uses some state specific types, then state it's not a module, and you cannot replace without changing the controller layer too.

### Internationalization

If the app will be needed in more than one language, this directory comes to the rescue.
Every app description or string that will be seen by the final user should be here. This way, you will find every text in the same place.
Also, internationalization lets you use more than one language. You can specify the description in english and spanish, for example, and also can be extended in the future.

So:

- If the string can be seen by the user, like a title, it should be added here.
- Every string should be written in the default language, but you can also have more than one.
- You can add error descriptions here by its code. For example, if the error is coded "MEDIA_NOT_FOUND", you can use MEDIA_NOT_FOUND = 'We cannot find the media you are looking for...'.

### State

This layer works as a module to interact with the global application state. For state management we use Redux, specifically with Redux Toolkit, which is a much simpler way of writing Redux logic.

Basically Redux Toolkit avoids separating Actions and Reducers, putting them together in a single place called Slices and another advantages such as allowing state mutability in reducers, a replacement of the createStore function, etc.

This layer should never be accessed directly. If any part of the app needs to update the state, it should access it through the actions layer.

The /state directory contains three main parts:

- **features**: This dir contains different Redux ToolKit Slices for different features of the app.
- **actions**: Every action needed on the state should be here. It works as an abstraction layer on state. So, the main part to interact with the state should be in state/actions. Be careful, don't confuse this abstraction layer with Redux actions, it's just an abstraction layer.
- **storages**: It contains different methods to access to localStorage or sessionStorage.

Also, you will see two files:

- **store.ts**: It exports the application store.
- **index.ts**: It exports the application store, the storages and Redux actions.

#### State guide

For Redux Toolkit usage we recommend to read the [official documentation](https://redux-toolkit.js.org/). Is good to know that any application feature that needs to be in the global state, is necessary add a representative-name file into a /features folder, where a Slice must be created that includes the name of the feature, the initial state and the corresponding reducers. Then the feature selector, all the actions and reducer should be exported.

To subscribe a component to a part of the application state, you must pass the feature selector as a parameter to the React-Redux useSelector hook. Then when the state is updated the view will also do it and vice versa.

**Note**: It is important to note that non-serializable values should not be put in State or Actions. [Read more](https://redux.js.org/style-guide/style-guide#do-not-put-non-serializable-values-in-state-or-actions).

We recommend to read the [Redux best practices post](https://redux.js.org/style-guide/style-guide).

**Where should I use redux and where local state?**: Sometimes you will find the state is used only in one place (like a SelectBox state –open or closed–). In those cases, there's no reason to use Redux. Redux is for GLOBAL state: things that can be accessed by many components in different layers, or in different places. If that particular state will be used in just one place, and it's changed in the component itself (like the selectbox state), it's better to use the useState() hook.

**Why do we need an abstraction layer and cannot use directly the exported action?**: For style and maintenance reasons. It's very ugly and hard to maintain "dispatch()" every time... This way it's a better way to keep layers separated.

### Controller

This layer has the app bussiness logic. Whatever the app needs to do or execute, it should be done here. This is the intermediate between state layer and views layer.

This is in order to prevent the state being accessed without control. Also, if in the future you need to add some bussiness logic rule, it can be added here (which is much tidier than inserting bussiness logic things in state layer).

**Do I have to use this layer if my app is very simple?**: Yes! You should optimize for change in the future. Your application is simple NOW. You don't know tomorrow. Imagine that you go from the view to the state without a controller layer. If in the future you need to add something like a captcha, a service, etc. you won't have where to do it. You might try to do it in the state (very untidy!) or in the component (that's not intuitive!). It's a nice practice to have a layer prepared to grow your application logic. It's cost (a few minutes) is very low against its benefits.

**Guide**:

- Every state feature (vg: Counter) should be accessed by one controller (counterController). Avoid using more than one state feature by controller.
- If a controller file needs more than one state feature, use the other controller to access it.
- Do NOT add here API requests to other URLs. These should be added to /services directory, and controllers must use them.

### Pages

This is simply the Next.js pages folder. Every file (that exports a React Component) in this folder will be a route in the application. The **\_app.tsx** file acts as the "entry point". Everything you put inside it will be in every page. You must use it for state provider, component library provider, theming provider, etc. The **\_document.tsx** file is the Next.js Custom Document. You can read more about this here: [Next.js Custom Document](https://nextjs.org/docs/advanced-features/custom-document).

You should read the documentation about NextJS routing: [docs](https://nextjs.org/docs/routing/introduction).

#### Components

The **components** folder contains all the application components. The best way to organize the components is to create a folder with the representative name of the component with Upper Camel Case as the naming convention. Inside each folder there should be an index.tsx file which contains the React component and an index.scss file which contains the component styles. For example, for a component called Counter, in another component or view it is imported as _~/components/Counter_, which makes the import more readable and less repetitive.

```txt
- components
-- Component1
--- index.tsx
--- index.module.scss
-- Component2
--- index.tsx
--- index.module.scss
```

#### Form control

Form control is **extremely** important.
There are many React form libraries. You will notice that in this template we have used [Formik](https://formik.org/), which is one of them, but we also recommend the use of [React Hook Form](https://react-hook-form.com/). Both are similar, having components necessary to build solid and easy-to-validate forms, also allowing the use of UI libraries such as [Material-UI](https://material-ui.com/) or [Chakra UI](https://chakra-ui.com/) being completely independent of them.

**Why are forms so important?**: You can and you should use this stuff to ensure the user input. You can control the types and what you expect in many places: the state, the controller, the services... But the hardest part is the user inputs, and it should be controlled in the form location. It's very important to use the form component as a type validator to ensure what you expect, and then you can pass the information safely to other layers.
The main idea is to use form control (like formik) to validate data, as you do with JSON Schema for inputs in the backend, or with ORMs with the database.

**Why should I control types in the form and not in the state, controller, etc.?**: It's better to deal with the input in the first layer that has contact with something from outside. Imagine passing information that is not validated from a layer to another. Then, you will have to deal with unknown variables everywhere. The best option is to deal with the input as it's received, and then safely pass the information to the rest of the application.

**Controlling everything in the form won't make this layer very overloaded?**: Maybe... Controlling this stuff may seem as a controller or state responsability. But dealing with the user input in the layer that receive it will make all the code far more simpler, as you can safely pass the information to the rest of the app. But also it will make it more portable. The bottom layers (state, controller) will expect information in a specific structure. It's responsability of the upper layer to sent it as it's expected.

### Styling

For styling we decided to use SASS as a CSS Preprocessor. Inside the **/src/scss** folder should be CSS utils and variables like font sizes, media query values, colors, etc. that are needed in different parts of the application styles.

It is important to mention that all the styles within the **globals.scss** file of this folder will be applied to the entire application and component styles should be a SCSS Modules (should end as **.module.scss**).

Sometimes it is also recommended to use Component libraries such as [Material-UI](https://material-ui.com/), [Chakra UI](https://chakra-ui.com/) or [React Suite](https://rsuitejs.com/).

You should use the variables in the SCSS to make the application change as one.

Example:

```scss
@use 'scss/variables/colors' as colors;
@use 'scss/variables/mediaQuerySizes' as mediaQuerySizes;

.class {
  @media #{mediaQuerySizes.$mobile} {
    color: colors.$primary;
  }

  @media #{mediaQuerySizes.$small-mobile} {
    color: colors.$secondary;
  }
}
```

If you manually set the expected widths or the main color, you will find harder to mantain the page integrated.
The best way is to set the colores, font-sizes, etc. in the same place. And then change it in ONE place.

### Services

This directory contains all the services consumed such as external APIs or backend application.
By default, any request to other server or another service should be here.

This template have a sample on how to use other services and also how to use this one, with this template response format. It works using the [axios](https://www.npmjs.com/package/axios) package.

```javascript
const APIClient = axios.create({
  baseURL: 'HERE THE URL'
  timeout: 10000,
  headers: {
    'X-API-KEY': 'SOME API KEY',
  },
  params: {
    some_param: 'SOME PARAM',
  },
});
```

Also, in /utils dir you can find a file called "axiosHelper" which will help you handling axios responses.
Axios is an awesome library but:

- Take any status code different than 2xx as an error (not what we wanted in REST).
- This errors have the response as an object and it's verbose to take that on every method.
- It's very verbose to use with TypeScript (and you have to use "any").

The file "axiosHelper" will help you get the response with the different information you need in this format, regardless of the status code:

```typescript
type axiosResponse = {
  success: true;
  statusCode: number;
  payload: any;
};

type axiosError = {
  success: false;
  error: {
    message: string;
    code?: number;
    url?: string;
    method?: string;
  };
};
```

From now on, you can get the format you want like this:

```typescript
  /**
   * Gets something.
   */
  async getSomething(): Promise<axiosResponse | axiosError> {
    const url = '/something';
    let result;
    try {
      const response = await APIClient.get(url);
      result = axiosHelper.handleResponse(response);
    } catch (error) {
      result = axiosHelper.handleError(error);
    }
    return result;
  }
};
```

In both cases, if the response is valid (a JSON), it will return the object with that information.

You will also find a file called ownServiceAxiosHelper, which is used to the format we use in services.
Some services (like the NASA APOD) will response with the information you need. But we use a { success, error, payload } schema in our services.

### Errors

In a backend service, you simply catch the error and let him "go up" until it's processed in a top layer and it's logged, handled, stored in a database, etc. etc. In the frontend this is less "straight forward".

#### Error sources

In a Frontend application, errors are usually not from your code. They com from:

- unexpected API results (if you lose internet or the backend is down...)
- API errors (you didn't have permissions, the back has crashed...)
- unexpected things like API returning things that you did not expect or other stuff crashed (like the Captcha)

To deal with errors, we recommend:

- be very specific with types in Typescript (do not use "any")
- be very careful when consuming APIs (you might send "123" and the API was expecting a number)
- be very careful dealing with user input (if you expect a number, validate a number, etc.).

Most of this error will emerge at developing time so you can deal with them.
After this, you have to deal with API errors.

#### Error handling

For this, we recommend using an AxiosHelper for error handling. Then, you should develop the way the UI displays them.
We try to wrap errors inside a previsible structure, and then handle it.

**Where is the best way to deal with errors?**: Sometimes you will want to handle it the controller layer. For example, you consume a service, it returns "error", like "not logged in" and you want to do a specific behaviour, like redirecting to another URL. This kind of stuff should be done in the controller layer. But, most of the times, you will want to "bubble up" the error until it will be showed to the user.

The error display is a part of the view. So, the best way to finish processing an error is the view layer. And the best place in the view layer to say you will display it's where you fired it.

This is an example using "Sweet alert". The event will fire the onClick method and, if something fails, sweet alert will show the "error.message".

```javascript
const Component = (): JSX.Element => {
  const onClick = () => {
    try {
      doSomeStuff();
    } catch (error) {
      swal('Error', error.message, 'error');
    }
  };
  return <Button onClick={onClick} />;
};
```

### Some specific services

There are services that you might want to use very often. So we added them just in case.

#### Google ReCaptcha V3

We added the Google Recaptcha V3 because we often need it to robots control. We chose the V3 version because it's the less invasive for the user.

This is how to use:

- Change the service name from .\_ts to .ts. (it's named like that in order to "build" work correclty).
- Set the site secret environment variable.

```env
# GOOGLE CAPTCHA
NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY=holi
```

- Add it to the config.ts file:

```javascript
  SERVICES: {
    GOOGLE_CAPTCHA: {
      SITE_KEY: process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY || envError('NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY'),
    },
```

- Load the script when that app starts, in /pages/\_app.ts

```javascript
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const start = async () => {
      await googleRecaptchaV3Service.addScript();
    };
    start();
  }, []);
```

- Get the token everytime you need it:

```javascript
try {
  const params = { someStuff };
  const token = await googleRecaptchaV3.verify('some action here');
  const paramsWithToken = { ...params, 'g-recaptcha-response': token };
  await API.method(paramsWithToken);
} catch (error) {
  // TODO: HANDLE ERROR HERE.
  throw error;
}
```

#### Keycloak

[Keycloak](https://www.keycloak.org/) is an Open Source Identity and Access Management. It is a good way to manage users and develop frontend (or backend) applications "forgetting" users authentication. It basically provides an auth server to target users auth.

How to use:

- Change the service name from .\_ts to .ts. (it's named like that in order to "build" work correclty).
- Set the corresponding environment variables (server url, realm and clientId (resource) as basics, you can add the necessaries).

```env
# KEYCLOAK
NEXT_PUBLIC_KEYCLOAK_AUTH_SERVER_URL=https://example.com/auth
NEXT_PUBLIC_KEYCLOAK_REALM=RealmName
NEXT_PUBLIC_KEYCLOAK_RESOURCE=ClientId
```

- Add it to the config.ts file:

```javascript
KEYCLOAK: {
  AUTH_SERVER_URL: process.env.NEXT_PUBLIC_KEYCLOAK_AUTH_SERVER_URL || envError('NEXT_PUBLIC_KEYCLOAK_AUTH_SERVER_URL'),
  REALM: process.env.NEXT_PUBLIC_KEYCLOAK_REALM || envError('NEXT_PUBLIC_KEYCLOAK_REALM'),
  RESOURCE: process.env.NEXT_PUBLIC_KEYCLOAK_RESOURCE || envError('NEXT_PUBLIC_KEYCLOAK_RESOURCE'),
},
```

- Load the init function when that app starts, in /pages/\_app.ts (or eg in the user controller for better control)

```javascript
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    keycloakService.initKeycloak(onAuthenticatedCallback);
  }, []);
```

### Security

#### Authentication and security recommendations

Following the [OWASP](https://owasp.org/) guidelines, it is not recommended to store access tokens or any sensitive information in LocalStorage or SessionStorage, mainly because they are accessible through JavaScript by XSS attack.

Here are some recommendations from OWASP and a Medium post that explain why you should **store access tokens and sensitive information in cookies with httpOnly flag instead** of LocalStorage/SessionStorage. Also the Mozilla Observatory and SSL Labs to scan the site for security checks.

- [OWASP cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage)
- [Medium post](https://coolgk.medium.com/localstorage-vs-cookie-for-jwt-access-token-war-in-short-943fb23239ca)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

#### HTTP Headers

There are some headers added to the next.config.js to increase the application security.
Read more about HTTP headers security: [docs](https://developer.mozilla.org/es/docs/Web/HTTP/Headers).

You can remove this configuration setting in the .env file ADD_HEADERS to something different to "1".
Also, you can change the CSP header with the CSP_POLICY environment variable, otherwise its value will be: "default-src 'self'".

**Important**: Please always control the headers security in the [Mozilla Observatory](https://observatory.mozilla.org/)

**Where is the best place to set the HTTP headers?**: It depends. In most cases, you will have the same security everywhere in the app. In that case, the best place should be a proxy in front of all your services (like nginx or apache) with all the headers added to all the responses. But sometimes you will need to accept outside things, and you will have to change it. In this case, you shoudl change it in the backend service.

#### Other recommendations

That being said. Most of the possible security issues are taken care by react. For example, you won't have code injection problems. Please, do NOT use stuff like dangerouslyInnerHtml...

Please read: [Medium post](https://betterprogramming.pub/frontend-app-security-439797f57892)

### Testing

It's very important to add tests in order to know the application is working correctly.
We will use Jest for that. It contains an extensive documentation on how to do it: [docs](https://jestjs.io/docs/en/getting-started). Also for React components tests, we use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

If we have time, it's always a good practice to have unit testing for everything.

All the tests are in the /tests directory with the suffix "test.ts". If they don't say ".test", they are not tested by Jest.
Before any test, Jest will use the "prepareTests.js" script.

#### Unit testing

Unit testing is very simple when you have modules you want to test and they always return the same output.
We should do unit testing for every module or script that do not use third party dependencies or other services.
The process is very simple and you can follow Jest documentation.

```javascript
test('Fs returns text OK.', () => {
  const text = fs.readFileSync(FILE_PATH, { encoding: 'utf8' });
  expect(text).toBe('Content of the file');
});
```

Always remember:

- Unit testing should test only ONE thing.
- They should be stateless (always make sure the unit testing does not expect a previous state, or, if they do, they should initialize it inside the function).

This documentation has nice good practices (for C#, but they also apply for JavaScript): [docs](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices),

### Documentation

We use two main tools to document the application: Jest HTML reporter for tests and TYPE DOC for code documentation.

This template will generate two different folders for documentation in different times inside /docs.

- **code**: It will be added running npm run generate-docs with typedoc.
- **tests**: It will be added by Jest when the testings are finished and it gets the report.

#### Tests documentation

We use [Jest HTML Reporter](https://www.npmjs.com/package/jest-html-reporter) for document unit testing.
Just do unit and integration testings and it will save the results in the specified file.

#### Code documentation

We use [TypeDoc](https://typedoc.org/). This documentation is done by using "npm run generate-docs" or "yarn generate-docs. It reads file by file and generates a new documentation in "/docs".

You can follow [TSDocs](https://github.com/microsoft/tsdoc) for notation.

**Note**: It's a good practice to watch documentation often, so you will see what the output is.

### Commands

You can use the following commands:
| Command | Description |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| prepare | Installs the husky. |
| \_clean | Deletes the **.next**, **out** and **build** dirs. |
| \_control | Runs linters, formatter, type checker, unit tests and audits the production packages |
| rpm run lint | Runs eslint and stylelint in the **src** directory. |
| format | Runs prettier in the **src** directory. |
| type-check | Checks types. |
| test:unit | Runs Jest for all the test in the /tests/unit directory. |
| test:integration | Runs Jest for all the test in the /tests/integration directory. |
| dev | Gets the Next.js dev server up. |
| build-stats | Builds the project with bundles analyzer enabled. |
| build | Runs \_clean, lint commands and generates the production build. |
| export | Exports the app to static HTML to the **out** dir. |
| npm start | Gets the Next.js production server up. |
