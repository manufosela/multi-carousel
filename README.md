# multi-carousel

Lit-Element web component description

## Demo

```
<h2>Basic multi-carousel Demo</h2>
<h3>Demo</h3>
<multi-carousel></multi-carousel>

```
<!---
```
<custom-element-demo>
  <template>
    <link rel="import" href="multi-carousel.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<multi-carousel>
  <div>Content of slide 1</div>
  <div>Content of slide 2</div>
  <div>Content of slide 3</div>
  ...
  <div>Content of slide N</div>
</multi-carousel>

## Attributes

* master: Attribute type Boolean, indicates that the carousel is a master carousel. It's mandatory to have an id attribute when is true.
* master-id: Attribute type String, indicates the id of the master carousel },
* slide-checked-number: Attribute type Number, indicates what is the default slide 

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
**user**

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details

## Generated

**generator-lit-element-base** - *yeoman npm package* - by [@manufosela](https://github.com/manufosela/generator-litelement-webcomponent)
