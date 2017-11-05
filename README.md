[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/bahrus/xtal-siema)

# \<xtal-siema\>

\<xtal-siema\> is a Polymer-based wrapper around the [Siema carousel api](https://pawelgrzybek.com/siema/)

## Drag Finger / Mouse left / right below to see slides swish by

<!--
```
<custom-element-demo>
  <template>
    <style>
      xtal-link-preview {
        height:200px
      }
    </style>
    <link rel="import" href="xtal-siema.html">
    <script async src="https://rawgit.com/bahrus/xtal-link-preview/master/xtal-link-preview.js"></script>
    <xtal-siema 
          duration="200" easing="ease-out" per-page="1" start-index="0" draggable multiple-drag threshold="20"
          style="height: 200px" attr-for-selected="preview">
          <div>Awesome Web Component Libraries not found on WebComponents.org (until now)</div>
          <xtal-link-preview href="https://onsen.io"></xtal-link-preview>
          <xtal-link-preview href="https://blogs.oracle.com/developers/announcing-oracle-jet-40-and-web-components"></xtal-link-preview>
          <xtal-link-preview href="https://www.ampproject.org"></xtal-link-preview>
          <xtal-link-preview href="https://github.com/theonion/bulbs-elements"></xtal-link-preview>
          <xtal-link-preview href="https://elix.org/"></xtal-link-preview>
          <xtal-link-preview href="https://github.com/skatejs/sk-router"></xtal-link-preview>
          <xtal-link-preview href="https://patternfly-webcomponents.github.io"></xtal-link-preview>
          <xtal-link-preview href="http://blog.htmltreegrid.com/post/Best-WebComponents-DataGrid-DataTable.aspx"></xtal-link-preview>
          <xtal-link-preview href="https://www.predix-ui.com/"></xtal-link-preview>"
          <xtal-link-preview href="https://github.com/x-tag"></xtal-link-preview>
          <xtal-link-preview href="https://codepen.io/justinfagnani/project/editor/Zgbpme"></xtal-link-preview>
          <xtal-link-preview href="https://medium.com/@mikeal/ive-seen-the-future-it-s-full-of-html-2577246f2210"></xtal-link-preview>
          <xtal-link-preview href="https://developers.google.com/web/fundamentals/web-components/examples/"></xtal-link-preview>
          <xtal-link-preview href="https://github.com/Comcast/polaris"></xtal-link-preview>
          <xtal-link-preview href="https://github.com/QuinntyneBrown/ce-carousel"></xtal-link-preview>
    </xtal-siema>
  </template>
</custom-element-demo>
```
-->


## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
