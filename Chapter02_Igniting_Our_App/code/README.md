# Intro

Welcome to the Ignition Chapter. I've installed Parcel Bundler for this Chapter.

# Takeaways

1. Install Parcel as a devDependency. (Can verify in package.json)
2. Install React, ReactDOM as a dependency. (Can verify in package.json)
3. Added .gitignore to ignore node_modules, dist and .parcel-cache folders.
   - package-lock.json has been excluded as it is recommended to commit this file and refrain from modifying it.
4. Build successfully using Parcel and notice build time.

- First build,

  <img src=".\img\first_buid_334_ms.png"  width="80%">

- Second build much faster!!,

  <img src=".\img\second_build_14ms.png"  width="80%">

5. Add npm scripts in package.json,

   _For generating Development build,_

   - `start` added to `scripts` within `package.json` will essentially run `npx parcel index.html`

     <img src=".\img\dev_build.png" width="80%">
      💡 Compare the fize size of Dev Build to Prod Build below.

   _For generating Production build_,

   - `build` added to `scripts` within `package.json` will essentially run `npx parcel build index.html`
     <img src=".\img\prod_build.png" width="80%">
     💡 You might notice that Development build is **2x bigger** compared to Production build.

     🧭 Production builds are generally optimized & minified to be run on client's machine. It is expected of it to be smaller. Also, Development Build contains additional code for hot module replacement, debugging etc. which adds to it's file size.
