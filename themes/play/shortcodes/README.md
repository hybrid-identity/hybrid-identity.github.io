# nonlinear/toolbox 

Some tested-and-true tools for creative code (mostly p5js).

Visit [nonlinear.nyc/toolbox](https://www.nonlinear.nyc/toolbox/) for the updated list.

## Install as a submodule


1. Go to folder on your project:
	- Jekyll: `_includes/`
	- Hugo: `layouts/shortcodes`
1. Run `git submodule add https://github.com/nonlinear/toolbox.git toolbox`

## Import object

- Jekyll: Use [Jekyll include rules](https://jekyllrb.com/docs/includes/), and remember to add `toolbox` folder to it
- Hugo: Use [Jekyll shortcode rules](https://gohugo.io/content-management/shortcodes/), and remember to add `toolbox` folder to it

## Troubleshoot: submodule + githubpages

Github generates flat blogs server-side, so submodule breaks because it renames folder with commit. flat blogs are meant to be client-side, so there's a way to prevent github from rebuilding it server-side:

1. force jekyll or hugo to generate flat blog on `docs/` folder, instead of default `_site/` 
	- Jekyll: add `destination: docs` on `config.yml`
	- Hugo: add `publishDir = "docs"` on `config.toml`
1. push changes
1. on github settings, tell githubpages to point to `docs/` folder instead