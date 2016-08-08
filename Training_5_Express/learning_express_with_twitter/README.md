Code School Real Time Web Chapter 5
Twitter mocked api
=============================
contact me : [revilofr](https://github.com/revilofr)

## Purpose
Real Time Web with node.js is an awesome course to learn node.js.
If you don't know Code School, please, give it a try, it's a really
good way to learn languages. [CodeSchool](http://www.codeschool.com)

Anyway Chapter 5.1 could be a bit frustrating assuming that you try to
really develop things as you learn it. As Gregg Pollack told us into the
video, Twitter api has changed since they created the Real time web 
courses, and the provided code doesn't work anymore.

Anyway, if you want to have it done as it was few years ago with the old
twitter api, feel free to follow this way ;)


How to have a twitter mock working as it was working years ago..

## How
Just launch the twittermock.js file like that in its own terminal:
```bash
node twittermock.js
```
After that, call your app.js with just one change (the host value) :
```js
options = {
        protocol: 'http:',
        host: 'api.twitter.com',
        pathname: '/1/statuses/user_timeline.json',
        query: {screen_name: username, count:10}
    };
```
becomes
```js
options = {
        protocol: 'http:',
        host: 'localhost:8081',
        pathname: '/1/statuses/user_timeline.json',
        query: {screen_name: username, count:10}
    };
```

The twittermock will return the following tweets :
```json
[
    {
      "text": "text1 blablablablabla "
    },
    {
      "text": "text2 blablablablablablablablablabla"
    },
    {
      "text": "text3 blablablablabla"
    },
    {
      "text": "text4 blablablablablablablablablabla"
    },
    {
      "text": "text5 blablablablablablablablablablablablablablabla "
    },
    {
      "text": "text6 blablablablablablablablablabla"
    },
    {
      "text": "text7 blablablablablablablablablabla"
    },
    {
      "text": "text8 blablablablablablablablablabla"
    },
    {
      "text": "text9 blablablablablablablablablabla"
    },
    {
      "text": "text10 blablablablablablablablablabla"
    }
]
```
Note: only text property is relevent here as it is the only one that
should be take into account by the ejs view.

Feel free to adapt, enhance, share, and so on ;)