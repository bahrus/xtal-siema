[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/bahrus/xtal-siema)

<a href="https://nodei.co/npm/xtal-siema/"><img src="https://nodei.co/npm/xtal-siema.png"></a>

# \<xtal-siema\>

Web component wrapper around the lightweight (3kb minified/gzipped) [Siema carousel library](https://pawelgrzybek.github.io/siema/).

In the demo below, drag with your mouse / finger.  Or use next / previous buttons.

<!--
```
<custom-element-demo>
  <template>
  <div>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <script type="module" src="https://unpkg.com/xtal-siema@0.0.0/xtal-siema.js?module"></script>
    <script type="module" src="https://unpkg.com/wired-button@0.7.0/wired-button.js?module"></script>
    <script type="module" src="https://unpkg.com/xtal-link-preview@0.0.24/xtal-link-preview.js?module"></script>
    <script type="module" src="https://unpkg.com/p-d.p-u@0.0.61/p-d-x.js?module"></script>
    <h3>Basic xtal-siema demo</h3>
    <div>
      <wired-button on-click="prevPage" data-jump="-1">Previous</wired-button>&nbsp;
      <wired-button on-click="nextPage" data-jump="1">Next</wired-button>
    </div>
    <p-d on="click" if="wired-button" to="{pageJump:target.dataset.jump}"></p-d>
    <xtal-siema style="height: 300px" attr-for-selected="preview">
      <div class="openingSlide">
        <div class="textDesc">
          Web Component links of interest
        </div>
      </div>

      <xtal-link-preview href="https://vaadin.com/directory">
        <div class="loader"></div>
        <div class="textDesc">Vaadin Directory</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/RHelements">
        <div class="loader"></div>
        <div class="textDesc">RHElements</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/material-components/material-components-web-components">
        <div class="loader"></div>
        <div class="textDesc">Material Web Components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://ni.github.io/design-system/elements/buttons/">
        <div class="loader"></div>
        <div class="textDesc">Fuse Design Systems</div>
      </xtal-link-preview>
      <xtal-link-preview href="http://mixpanel.github.io/mixpanel-common/examples/style-guide-new/">
        <div class="loader"></div>
        <div class="textDesc">Mixpanel Design</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://stencilcomponents.com/">
        <div class="loader"></div>
        <div class="textDesc">Stencil Components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.predix-ui.com/">
        <div class="loader"></div>
        <div class="textDesc">Predix Components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://ciampo.github.io/macro-carousel/demo/">
        <div class="loader"></div>
        <div class="textDesc">macro-carousel</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/@valdrinkoshi/performant-expand-collapse-animations-93d99e80f7f">
        <div class="loader"></div>
        <div class="textDesc">Expand/Collapse Animations</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://festify.github.io/ken-burns-carousel/">
        <div class="loader"></div>
        <div class="textDesc">Ken Burns Slide Show</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/splitinfinities/lottie-wc">
        <div class="loader"></div>
        <div class="textDesc">Lottie Animations</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://onsen.io">
        <div class="loader"></div>
        <div class="textDesc">Onsen UI</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://blogs.oracle.com/developers/announcing-oracle-jet-40-and-web-components">
        <div class="loader"></div>
        <div class="textDesc">Oracle Jet</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.ampproject.org">
        <div class="loader"></div>
        <div class="textDesc">AMP</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/theonion/bulbs-elements">
        <div class="loader"></div>
        <div class="textDesc">America's Finest News Source</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://elix.org/">
        <div class="loader"></div>
        <div class="textDesc">elix</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/skatejs/sk-router">
        <div class="loader"></div>
        <div class="textDesc">SkateJS Router</div>
      </xtal-link-preview>
      <xtal-link-preview href="http://blog.htmltreegrid.com/post/Best-WebComponents-DataGrid-DataTable.aspx">
        <div class="loader"></div>
        <div class="textDesc">HTML Treegrid</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.predix-ui.com/">
        <div class="loader"></div>
        <div class="textDesc">Predix</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/x-tag">
        <div class="loader"></div>
        <div class="textDesc">x-tag</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Polymer/lit-html/tree/master/demo">
        <div class="loader"></div>
        <div class="textDesc">lit-html</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/@mikeal/ive-seen-the-future-it-s-full-of-html-2577246f2210">
        <div class="loader"></div>
        <div class="textDesc">@mikeal</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://developers.google.com/web/fundamentals/web-components/examples/">
        <div class="loader"></div>
        <div class="textDesc">Best Practices Examples</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Comcast/polaris">
        <div class="loader"></div>
        <div class="textDesc">Polaris</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/QuinntyneBrown/ce-carousel">
        <div class="loader"></div>
        <div class="textDesc">cd-carousel</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Fdom92/stencil-fetch">
        <div class="loader"></div>
        <div class="textDesc">Stencil fetch</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Fdom92/stencil-payment">
        <div class="loader"></div>
        <div class="textDesc">Stencil Payment</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/mappmechanic/awesome-stenciljs">
        <div class="loader"></div>
        <div class="textDesc">Awesome Stencil</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Fdom92/stencil-voice2text">
        <div class="loader"></div>
        <div class="textDesc">Stencil Voice2Text</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://stackblitz.com/edit/angular-ce-poc-material-v2">
        <div class="loader"></div>
        <div class="textDesc">Angular material elements</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/tanepiper/mm-components">
        <div class="loader"></div>
        <div class="textDesc">Music Markup components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://aframe.io/">
        <div class="loader"></div>
        <div class="textDesc">A-frame Web VR</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/PolymerLabs/amp-viewer/blob/master/amp-viewer.js">
        <div class="loader"></div>
        <div class="textDesc">Amp Viewer</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://twittercommunity.com/t/announcing-twitter-status-and-twitter-user-web-components-for-displaying-tweets-and-users/100433?u=abraham">
        <div class="loader"></div>
        <div class="textDesc">Twitter components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://jpmorganchase.github.io/perspective/">
        <div class="loader"></div>
        <div class="textDesc">JPMorgan Chase Perspecitve</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/dabeng/OrgChart-Webcomponents">
        <div class="loader"></div>
        <div class="textDesc">Org Charts</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/dsolimando/hnpwa-mobileelements/tree/pagination/www/lib">
        <div class="loader"></div>
        <div class="textDesc">HNPWA Mobile Elements</div>
      </xtal-link-preview>
      <xtal-link-preview href="http://handsontable.github.io/hot-table/">
        <div class="loader"></div>
        <div class="textDesc">Polymer Element wrapper for Handsontable</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/samsung-internet-dev/making-a-simple-gamepad-web-component-23b2ac262f56">
        <div class="loader"></div>
        <div class="textDesc">Gamepad Web Component</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/css-doodle/css-doodle" >
        <div class="loader"></div>
        <div class="textDesc">CSS Doodle</div>
      </xtal-link-preview>
    </xtal-siema>
    <p-d-x on="fetch-complete-changed" to="{href:target.href;innerText:target.title}" skip-init></p-d-x>
    <a target="_blank">link</a>

    <style>
      xtal-link-preview,
      .openingSlide {
        height: 200px;
        text-align: center;
      }

      xtal-link-preview {
        position: relative;
        top: 80px
      }

      .textDesc {
        position: relative;
        top: 20%;

      }

      .loader {
        position: relative;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        border: 16px solid #f3f3f3;
        /* Light grey */
        border-top: 16px solid #3498db;
        /* Blue */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }


      /* .slide {
          display: none;
        } */
    </style>
  </div>
    </template>
</custom-element-demo>
```
-->

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

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
