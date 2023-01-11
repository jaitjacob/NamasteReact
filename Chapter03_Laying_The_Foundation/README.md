# 🔰 Intro

In this chapter I'm experimenting with Functional Components. Following is a UI mockup of a functional component I created in this Chapter,

<img src="code\img\header_component_ui_mock.png">

# 🥡 Takeaways

1.  Use JSX

    🛡️ It is safe to embed user input in JSX.

    > **Note**

    > By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

2.  Read about how Babel converts JSX to JavaScript.

    - Read about Abstract Syntax Tree.

3.  Configure Babel.

    🚩 I tried **NOT** installing Parcel in this project & trying to configure Babel alone but was unsuccessful.

    - Install @bable/core and @babel/cli.
    - Add scripts for Babel in package.json
    - Add following presets,

    > @babel/preset-env for compiling ES2015+ syntax
    > @babel/preset-react for React

    Doing all this was a hassel. Sticking to Parcel for now. I will get into Babel nitty-gritty at some later point.
