[<img align="right" src="./assets/icon.svg?sanitize=true">](https://github.com/Amabel/knock-off)

# Knock Off

[![CircleCI (all branches)](https://img.shields.io/circleci/project/github/Amabel/knock-off.svg)](https://circleci.com/gh/Amabel/knock-off)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/nieaaebpmiidhgpdfnffjabiioamhccl.svg?color=#50ca26)](https://chrome.google.com/webstore/detail/knock-off/nieaaebpmiidhgpdfnffjabiioamhccl)
[![dependencies](https://img.shields.io/david/Amabel/knock-off.svg)](https://david-dm.org/amabel/knock-off)
[![devDependencies](https://img.shields.io/david/dev/Amabel/knock-off.svg)](https://david-dm.org/amabel/knock-off?type=dev)

[![last commit (master)](https://img.shields.io/github/last-commit/amabel/knock-off/master.svg)](https://github.com/Amabel/knock-off/commits/master)
[![release date](https://img.shields.io/github/release-date/Amabel/knock-off.svg)](https://github.com/Amabel/knock-off/releases)

Web extension for improving user experience on [JOBCAN](https://ssl.jobcan.jp/employee)

## Features

* Highlight unfilled rows in man-hour-manage page

* Autofill time (hours) in edit table of man-hour-manage page

## Download

<a href="https://chrome.google.com/webstore/detail/knock-off/nieaaebpmiidhgpdfnffjabiioamhccl"><img src="https://res.cloudinary.com/luoweibinb/image/upload/v1561301816/knock-off/ChromeWebStore_BadgeWBorder_v2_496x150.png"></a>

## Debug

### Install

	$ npm install
    $ cp app/scripts/config/env.js.sample app/scripts/config/env.js

### Development

    npm run dev chrome
    npm run dev firefox
    npm run dev opera
    npm run dev edge

### Build

    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge

built with [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)
