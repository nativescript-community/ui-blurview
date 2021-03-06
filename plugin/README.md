# NativeScript Blurview widget
[![npm downloads](https://img.shields.io/npm/dm/@nativescript-community/ui-blurview.svg)](https://www.npmjs.com/package/@nativescript-community/ui-blurview)
[![npm downloads](https://img.shields.io/npm/dt/@nativescript-community/ui-blurview.svg)](https://www.npmjs.com/package/@nativescript-community/ui-blurview)
[![npm](https://img.shields.io/npm/v/@nativescript-community/ui-blurview.svg)](https://www.npmjs.com/package/@nativescript-community/ui-blurview)

A NativeScript BlurView widget.

## Installation
Run the following command from the root of your project:

`tns plugin add @nativescript-community/ui-blurview`

This command automatically installs the necessary files, as well as stores @nativescript-community/ui-blurview as a dependency in your project's package.json file.

## Configuration
There is no additional configuration needed!

## API

## Usage
You need to add `xmlns:gv="@nativescript-community/ui-blurview"` to your page tag, and then simply use `<gv:BlurView/>` in order to add the widget to your page. 
```xml
<!-- test-page.xml -->
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:gv="@nativescript-community/ui-blurview" loaded="pageLoaded">
    <GridLayout rows="" columns="">
        <Image src="https://wallpaperscraft.com/image/rose_flower_colorful_close-up_petals_18824_960x544.jpg" id="bgimage" stretch="aspectFill" />
        <bv:BlurView></bv:BlurView>
    </GridLayout>
</Page>
```


## Demos
This repository includes both Angular and plain NativeScript demos. In order to run those execute the following in your shell:
```shell
$ git clone https://github.com/nativescript-community/ui-blurview
$ cd @nativescript-community/ui-blurview
$ npm install
$ npm run demo-ios
```
This will run the plain NativeScript demo project on iOS. If you want to run it on Android simply use the `-android` instead of the `-ios` sufix. 

