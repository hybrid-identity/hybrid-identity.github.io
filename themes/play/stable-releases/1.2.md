# praxis / play

A [hugo](https://gohugo.io/) theme environment for  stand-alone creative code experiments, reducing the learning curve so you can enjoy being in the zone.

Our goal to curate best practices (integrating, testing, documenting) to play with:

- processing
- p5js
- ml5js
- PWA (so it works well on mobile browsers)

## features

**praxis / play** provides an ever-growing list of ready-to-use features to speed up your creative code: Want text not to be selectable? Want to prevent zoom? ml5? smooth scroll?

Features are per page so you only load what you need, to ensure performance. 


| Feature  | ⏱️ | Description |
|:---- |:----------- |:----------- |
| `p5js` | 👍 | installs [p5js library](https://p5js.org/) | 
| `no-scroll` | 👍 | prevents scroll |
| `no-zoom` | 👍 | prevents zoom |
| `modernizr` | 👍 | installs [modernizr](https://modernizr.com/) and [detectizr](https://github.com/barisaydinoglu/Detectizr#detectizr) libraries |
| `ml5js` | 👍 | installs [ml5js library](https://ml5js.org/) |
| `jquery` | 👍 | installs [jquery library](https://jquery.com/) |
| `style` | 👍 | accepts your [hugo main.scss](https://gohugo.io/hugo-pipes/scss-sass/) (make sure you have `main.scss` ready) |
| `no-credits` | 👍 | removes **praxis / play** credits |
| `no-text-select` | 👍 | prevents text selection (globally) | - | non-global version? |
| `revealjs` | 👍 | installs [revealjs library](https://revealjs.com/). use `revealjs[theme]` for themes. [view complete list](https://revealjs.com/themes/) |
| `magazine` | 🧪 | a variation of revealjs with magazine ratios |
| `bootstrap` | ⏳ | installs bootstrap CSS and JS, plus popper and tooltip/popover activation |
| `redirect` | ⏳ | redirects page  (maybe a shortcode?) |
| `favicon` | ⏳ | adds favicon for all browsers and devices |
|`open-graph` | ⏳ | adds all open-graph features (for facebook ,twitter, etc) |
| `request-motion` | ⏳ | modal intercept requesting gyroscope permissions (should only appear if browser HAS this function) |
| `smooth-scroll` | ⏳ | forces smooth scrolling when internal navigation |
| `no-nav` | ⏳ | removes top browser navigation (maybe PWA is better?) |
| `request-location` | ⏳ | modal intercept requesting location permissions |
| `request-camera` | ⏳ | modal intercept requesting camera permissions |
| `fullbleed` | ⏳ | moves canvas to bg, below HTML |

- 👍: ready to use
- 🧪: testing
- ⏳: soon


## installation

1. Download [latest release](https://github.com/praxisnyc/play/archive/1.2.zip)
1. Unzip it and rename as `play`
1. Move entire folder inside your huge `themes` folder
1. On `config.toml` add `theme = "play"`
1. Run your hugo normally


## creating a new post

1. Make sure post is `.html`
1. On frontmatter, add the features you need with `play: feature1, feature2` ([View all features](https://github.com/praxisnyc/play/#features))


## get informed

- [Subscribe to our newsletter](https://tinyletter.com/praxis-play/) for updates
- Contact us for suggestions: [email](mailto:info@nicholasfrota.com?subject=praxis%20play%20feature%20suggestion), [twitter](https://twitter.com/nonlinear), [mastodon](https://mastodon.social/@nonlinear)
- [Join our telegram group](https://t.me/joinchat/IZcW2U4HflaCQj1G) for questions, troubleshooting, etc