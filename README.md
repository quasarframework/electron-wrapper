![Quasar Framework logo](https://cdn.rawgit.com/quasarframework/quasar-art/863c14bd/dist/svg/quasar-logo-full-inline.svg)

# Quasar Framework Electron Wrapper
> Build Electron Apps with Quasar. Currently in **beta**.

## Quickstart

### Wrap Quasar App
`$ quasar wrap electron`

### Running for development
Make sure you keep running (from root project folder): `$ quasar dev`
Then from wrapper folder: `$ npm run dev`

### Bulding for production
Make sure you build Quasar app from root project folder before packaging it with Electron (`$ quasar build`).
Then from Electron wrapper folder: `$ npm run build`

Build for specific platform only:
```bash
$ npm run build <platform>
# Example: $ npm run build linux
```

# Quasar Framework
> Build responsive websites, PWAs, hybrid mobile Apps (that look native!) and Electron apps using same code, powered with Vue.

<a href="https://badge.fury.io/js/quasar-framework"><img src="https://badge.fury.io/js/quasar-framework.svg"></a>

## Supporting Quasar
Quasar Framework is an MIT-licensed open source project. Its ongoing development is made possible thanks to the support by these awesome [backers](https://github.com/rstoenescu/quasar-framework/blob/dev/backers.md). If you'd like to join them, check out [Quasar Framework's Patreon campaign](https://www.patreon.com/quasarframework).

## Documentation

> Electron wrapper documentation will be available soon. Until then, Quasar CLI will give all instructions when you wrap your app.

Head on to the Quasar Framework official website for help on CLI commands: [http://quasar-framework.org](http://quasar-framework.org/guide/quasar-cli.html)

## Community Forum

Head on to the official community forum: [http://forum.quasar-framework.org](http://forum.quasar-framework.org)

## Quasar Repositories

* [Quasar Framework](https://github.com/rstoenescu/quasar-framework)
* [Quasar CLI](https://github.com/rstoenescu/quasar-cli)
* [Quasar Play App](https://github.com/rstoenescu/quasar-play)

## Contributing

I'm excited if you want to contribute to Quasar under any form (report bugs, write a plugin, fix an issue, write a new feature).

### Issue Reporting Guidelines

**Please use the appropriate Github repo to report issues. See "Related Components" above.** For example, a bug related to CLI should be reported to the CLI repo, one related to build issues to Quasar Framework Templates repo and so on.

- The issue list of the repository is **exclusively** for bug reports and feature requests. For anything else please use the [Community Forum](http://forum.quasar-framework.org).

- Try to search for your issue, it may have already been fixed in the development branch or it may have a resolution.

- Check if the issue is reproducible with the latest stable version of Quasar. If you are using a pre-release, please indicate the specific version you are using.

- It is **required** that you clearly describe the steps necessary to reproduce the issue you are running into. Issues with no clear repro steps will not be triaged. If an issue labeled "need repro" receives no further input from the issue author for more than 5 days, it will be closed.

- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

Read more [here](http://quasar-framework.org/guide/contributing.html).

## Quasar Play App

Instead of using mobile emulators for testing your Quasar Apps, use this App instead. You can develop apps directly on your phone/tablet (hot reload supported!), without even installing your app.

Currently only on [Google Play](https://play.google.com/store/apps/details?id=com.quasarframework.quasarplay&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1). Requiring funding to pay fees on Apple Store and release the iOS counterpart too.

Check its repo here: [Quasar Play](https://github.com/rstoenescu/quasar-play).

## License

Copyright (c) 2016-2017 Razvan Stoenescu

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
