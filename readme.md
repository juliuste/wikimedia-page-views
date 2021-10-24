# :warning: UNMAINTAINED

# wikimedia-page-views

Fetch daily view count for given page on given wikimedia site for a defined date interval using [this API](https://wikitech.wikimedia.org/wiki/Analytics/AQS/Pageviews). Work in progress.

[![npm version](https://img.shields.io/npm/v/wikimedia-page-views.svg)](https://www.npmjs.com/package/wikimedia-page-views)
[![Build Status](https://travis-ci.org/juliuste/wikimedia-page-views.svg?branch=master)](https://travis-ci.org/juliuste/wikimedia-page-views)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/wikimedia-page-views.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/wikimedia-page-views.svg)](https://david-dm.org/juliuste/wikimedia-page-views)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/wikimedia-page-views.svg)](https://david-dm.org/juliuste/wikimedia-page-views#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/wikimedia-page-views.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```shell
npm install wikimedia-page-views
```

## Usage

The module returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise) that will resolve in a list of views per day:

```js
const views = require('wikimedia-page-views')

views(pageName, siteName, startDate, endDate)
```

Time of `startDate` and `endDate` will be ignored (due to limitations made by the original API), results will be displayed per-day in UTC time.

```js
views('Leipzig', 'de.wikipedia', new Date('2017-12-01'), new Date('2017-12-10'))
.then(console.log)
```

would give you something like this:

```js
[
    {
        "site": "de.wikipedia",
        "page": "Leipzig",
        "date": "2017-12-01T00:00:00.000Z",
        "views": 1920
    },
    {
        "site": "de.wikipedia",
        "page": "Leipzig",
        "date": "2017-12-02T00:00:00.000Z",
        "views": 2004
    },
    // …
    {
        "site": "de.wikipedia",
        "page": "Leipzig",
        "date": "2017-12-10T00:00:00.000Z",
        "views": 2090
    }
]
```

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/wikimedia-page-views/issues).
