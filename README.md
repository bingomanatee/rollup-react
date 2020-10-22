# React Component Rollup Starter Kit

Want to write a shareable react component and put it into NPM but don't know where to start?

Here, silly. Here is where to start. Clone this repo and make it your own. For what its worth, 
I'm a "yarn guy" and this code has only been tested/used under Yarn. 

A few notes: 

## On Choosing a Name

It used to be that there was plenty of names to grab on NPM. Not so much. You can drive yourself crazy
trying to find a name for your stuff --or you can get smart and create an organizational namespace.

Mine for instance is @wonderlandlabs; so my modules  are (for instance) `@wonderlandlabs/looking-glass-engine`
or `@wonderlandlandlabs/picker`. Is there an NPM module named `picker`? For sure, but as long as I put stuff
under my prefix, I don't have to worry about conflicts or uniqueness (other than against my own work). 
Plus, it hangs a lantern on who made your stuff, and everyone loves attention.

The name you choose for your module needs to be stamped in your `package.json` file under (you guessed it) 
the 'name' property. 

## Adding dependencies

Do this *very carefully* and keep an eye on output file size; sure you can bring in everything under the roof
but your dep's need to be worth their weight; don't include lodash if you just need a few functions from it;
as in the use of `lodash.isequal`. One good example is `moment.js`; on *their own site* they say they are bloated
and aging, and  `day.js` is a lightweight alt for what moment does. 

React, most specifically, should be a `peer dependency`; that is, it should be in the users' package.json, but
this module isn't bundling it directly. That way you don't force the user to be using the precise version of React
that you are, an unlikely coincidence. Same goes for `PropTypes` et all. 

If you need something for testing or compilation, put it in `devDependencies`. as in, all the rollup and plugins
you use to build your component, or tap, jest et all. 

For sure, don't put images, video or other large files into your module; thats just cruel. Learn the magic of SVG
(or svgr) if you must include visual media. 

## Documentation

Git-docs strips out all the things you comment into classes and libraries and spits out markdown files;
the scripts provided allow you to update your components using the `build-doc` script and serve them in a readable
local microsite. 

## Test

To be honest I haven't got Jest integrated properly; before updating my rollup cycle to include react components
I used TAP which is perfect for everything --- except React. Want to do it? I heart PRs. 

## Organizing components

You can bundle as many sub-files as you want in your source and tie them together in your `src/index.js` file. 

## The Rollup Config file

The file is one I've been poking and tuning for a while; it will do the heavy lifting you need to boil down your 
work into a shareable resource. One thing you might want to change is the `root` property. I haven't seen it
make a difference but it doesn't hurt.

Most of the plugins are self-explanatory but a few callouts:

* `terser` makes the file small, compact -- and awful to read; comment it out in development to make
  error tracing easier. 
* `babel` is a thing I added to make it not choke on JSX; it adds react-friendliness to the otherwise 
  context-agnostic rollup process
  
## Publishing (and republishing) to NPM

As simple as it is, a few things to note.

* **NPM is write-only.** You can always publish later versions, but you cannot re-publish version a.b.c, or delete it.
   This is a good thing in general, but annoying if you are doing a lot of test revs and want to use it in (say) 
   CodeSandbox. 
* **NPM doesn't copy source.** you won't find every file in your local repo inside a module that you download. 
   There are ways to include more than the compiled code but frankly, haven't looked into that much. Point being, 
   its a good idea to point people to your Github repo to let them view the full dev environment, ask questions,
   abuse you emotionally, and hopefully, add PRs for problems. 
* **BUILD BEFORE YOU PUBLISH**. Seems obvious but I can't tell you how many times I've changed source, published,  
   and realize I just publish the pre-fixed build files from the last time I DIDIN'T fuck up.
* Keep a log of your API changes in the `changelog.md` file. You don't have to keep a diary of every bug fix ..
   but it might help to let people know you found and fixed a problem *they* have because they are a version or two
   behind the curve. 
* **Don't stay on 0.0.x once your code works.** It's a dick move. Go to version 1.0 once your code is tenable. 
   Arrays may start at zero, but code releases should be 1.0 sooner rather than later. If your code is such shit 
   that you don't think its worthy of the 1.0 mark, then keep it to yourself and don't crap it into NPM in the first place.

Here is a good checklist for publishing/republishing your code. 

1. build; even if you are 100% sure you already baked in the last changes, build a new lib file. 
2. run your unit tests.
3. use your lib in a local context by linking it (see yarn docs). 
4. Update your `changelog.md` with *why* you are building a new version. 
5. type `yarn publish`; it will prompt you to up-version your library/package.json file, then send your work to NPM.
6. commit and push your source with a comment including the current version number (which you should sync with your changelog notes too)
7. Include and double-check your module in a system like CodeSandbox to make sure that it works on "not your computer". 
8. Tweet a notice about your progress.
9. Write an article in Media about what a kickass programmer you are and wait for that big ad revenue check to come in. 

