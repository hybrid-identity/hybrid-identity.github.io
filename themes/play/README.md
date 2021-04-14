# praxis / play

A [hugo](https://gohugo.io/) theme environment for  stand-alone creative code experiments, reducing the learning curve so you can enjoy being in the zone.

Our goal to curate best practices (integrating, testing, documenting) to play with:

- processing
- p5js
- ml5js
- PWA (so it works well on mobile browsers)

## installation

1. Download [latest release](https://github.com/praxisnyc/play/archive/1.4.zip)
1. Unzip it and rename as `play`
1. Move entire folder inside your huge `themes` folder
1. On `config.toml` add `theme = "play"`
1. Run your hugo normally


## creating a new post

1. Make sure post is `.html`
1. On frontmatter, add the features you need with `play: feature1, feature2` ([View all features](https://github.com/praxisnyc/play/#features))

## features

**praxis / play** provides an ever-growing list of ready-to-use features to speed up your creative code: Want text not to be selectable? Want to prevent zoom? ml5? smooth scroll?

Features are per page so you only load what you need, to ensure performance. 

👍 is ready to use, 🧪 is in testing, ⏳ is soon

- 👍 `p5js`
	- installs [p5js library](https://p5js.org/)
- 👍 `no-scroll`
	- prevents scroll
- 👍 `no-zoom`
	- prevents zoom
- 👍 `modernizr`
	- installs [modernizr](https://modernizr.com/) and [detectizr](https://github.com/barisaydinoglu/Detectizr#detectizr) libraries
- 👍 `ml5js`
	- installs [ml5js library](https://ml5js.org/)
- 👍 `jquery`
	- installs [jquery library](https://jquery.com/)
- 👍 `style`
	- accepts your [hugo main.scss](https://gohugo.io/hugo-pipes/scss-sass/)
	- make sure you have `main.scss` ready
- 👍 `no-credits`
	- removes **praxis / play** credits
- 👍 `no-scope`
	- removes CSS scope html classes ([view below](https://github.com/praxisnyc/play#css-scope))
- 👍 `no-text-select`
	- prevents text selection (globally)
	- 🐛: doesn't work with [revealjs](https://revealjs.com/)
- 👍 `revealjs`
	- installs [revealjs library](https://revealjs.com/)
	- wrap each slide in `<section>` for it to work
	- use `revealjs[theme]` for themes ([view complete list](https://revealjs.com/themes/))
- 🧪 `magazine`
	- a variation of revealjs with magazine ratios
	- use `play: revealjs[magazine]` to activate it
	- 📖: check [css variables](https://github.com/praxisnyc/play/blob/main/assets/css/revealjs/theme/magazine.css) to intercept and make your own.
- ⏳ `bootstrap`
	- installs bootstrap CSS and JS, plus popper and tooltip/popover activation
- ⏳ `redirect`
	- redirects page  (maybe a shortcode?)
- ⏳ `favicon`
	- adds favicon for all browsers and devices
- ⏳ `open-graph`
	- adds all open-graph features (for facebook ,twitter, etc)
- ⏳ `request-motion`
	- modal intercept requesting gyroscope permissions (should only appear if browser HAS this function)
- ⏳ `smooth-scroll`
	- forces smooth scrolling when internal navigation
- ⏳ `no-nav`
	- removes top browser navigation (maybe PWA is better?)
- ⏳ `request-location`
	- modal intercept requesting location permissions
- ⏳ `request-camera`
	- modal intercept requesting camera permissions
- ⏳ `fullbleed`
	- moves canvas to bg, below HTML

## credits

By default, all **praxis / play** creations have a hidden **credits** modal, accessed by clicking a top-right hidden area. It has:

- 👍 title, description (from frontmatter)
- 👍 wanna describe in details your notes? use `about:` frontmatter. It's markdown-ready (use "" if multi-line)
- ⏳ if you have other relevant creations (sorted by features), it's listed here too (use `no-relevant-links` feature to disable)
- ⏳ author list (as [per this standardization](https://github.com/gohugoio/hugo/pull/1850))
- 👍 Don't want credits on your creation? Use `no-credits` feature

## CSS scope

**praxis / play** automatically adds post slug as an `html` class, so if your post url is `domain/category/post/` your `html` also has a class `post`.

You can also create a more generic style (for multiple pages) by adding `style: style-name` on frontmatter. It will also appear as a class on `html`.

Don't want CSS scope? Use `no-scope` feature

## get informed

- [Subscribe to our newsletter](https://tinyletter.com/praxis-play/) for updates
- Contact us for suggestions: [email](mailto:info@nicholasfrota.com?subject=praxis%20play%20feature%20suggestion), [twitter](https://twitter.com/nonlinear), [mastodon](https://mastodon.social/@nonlinear)
- [Join our telegram group](https://t.me/joinchat/IZcW2U4HflaCQj1G) for questions, troubleshooting, etc