# \<multi-carousel>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i multi-carousel
```

## Usage

```html
<script type="module">
  import 'multi-carousel/multi-carousel.js';
</script>

<!-- This multi-carousel is the carousel master with buttons -->
<multi-carousel id="themaster" master>
  <!-- HTML BLOCK 1 IS SLIDE 1-->
  <!-- HTML BLOCK 2 IS SLIDE 2-->
  <!-- HTML BLOCK 3 IS SLIDE 3-->
  <!-- HTML BLOCK 4 IS SLIDE 4-->
</multi-carousel>

<!-- This multi-carousel is the subordinate carousel to carousel master, when master changes, this carousel change -->
<multi-carousel master-id="themaster">
  <!-- HTML BLOCK 1 IS SLIDE 1-->
  <!-- HTML BLOCK 2 IS SLIDE 2-->
  <!-- HTML BLOCK 3 IS SLIDE 3-->
  <!-- HTML BLOCK 4 IS SLIDE 4-->
</multi-carousel>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
