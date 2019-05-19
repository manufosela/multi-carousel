# multi-carousel

Lit-Element web component description

## Demo

```html
<multi-carousel>
  <div>Content of slide 1</div>
  <div>Content of slide 2</div>
  <div>Content of slide 3</div>
  ...
  <div>Content of slide N</div>
</multi-carousel>
```

### Attributes

* master: Attribute type Boolean, indicates that the carousel is a master carousel. It's mandatory to have an id attribute when is true.
* master-id: Attribute type String, indicates the id of the master carousel },
* slide-checked-number: Attribute type Number, indicates what is the default slide 

### CSS variables
  --main-color: #000;
  --slides-bg-color: #FFF;
  --slides-border: 10px solid var(--slides-bg-color);
  --slides-border-radius:0px;
  --slides-padding: 0;
  --slides-width: 820px;
  --slides-height: 420px;
  --hover-arrow-color: #FF0;
  --nav-point-color: #3A3A3A;

```
## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Build
```
$ npm run build
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Author
manufosela

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details

## Generated

**generator-lit-element-base** - *yeoman npm package* - by [@manufosela](https://github.com/manufosela/generator-litelement-webcomponent)
