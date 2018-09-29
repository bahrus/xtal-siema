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
    
    <h3>Basic xtal-siema demo</h3>
    <div>
      <wired-button data-jump="-1">Previous</wired-button>&nbsp;
      <wired-button data-jump="1">Next</wired-button>
    </div>
    <p-d on="click" if="wired-button" to="{pageJump:target.dataset.jump}"></p-d>
    <xtal-siema  attr-for-selected="preview">
      <div class="openingSlide">
        <div class="textDesc">
          Web Component links of interest
        </div>
      </div>
      <xtal-link-preview href="https://www.sencha.com/blog/sencha-roadmap-update/">
        <div class="loader">
          ExtJS 7
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://blog.nightly.mozilla.org/2018/09/06/developer-tools-support-for-web-components-in-firefox-63/">
        <div class="loader">
          Firefox Web Component Debugging
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.xoriant.com/blog/big-data-analytics/turbocharge-data-science-workbench.html">
        <div class="loader">
          Data Science WCs
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.npmjs.com/package/@wcfactory/cli">
        <div class="loader">
          WCFactory
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://blog.mastykarz.nl/web-components-sharepoint-framework/">
        <div class="loader">
            Web Components in Sharepoint
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://boltdesignsystem.com/">
        <div class="loader">Bolt Design System</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://frontendnews.io/editions/2018-08-15-simple-camera-component">
        <div class="loader">Camera Component</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/@lucamezzalira/a-night-experimenting-with-lit-html-585a8c69892a">
        <div class="loader">night-lit</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/TeamHive/stencil-shimmer">
        <div class="loader">Stencil Shimmer</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/css-doodle/css-doodle">
        <div class="loader">CSS Doodle</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://vaadin.com/directory">
        <div class="loader">Vaadin Directory</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/RHelements">
        <div class="loader">RHElements</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/material-components/material-components-web-components">
        <div class="loader">Material Web Components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://ni.github.io/design-system/elements/buttons/">
        <div class="loader">Fuse Design Systems</div>
      </xtal-link-preview>
      <xtal-link-preview href="http://mixpanel.github.io/mixpanel-common/examples/style-guide-new/">
        <div class="loader">Mixpanel Design</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://stencilcomponents.com/">
        <div class="loader">Stencil Components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.predix-ui.com/">
        <div class="loader">Predix Components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://ciampo.github.io/macro-carousel/demo/">
        <div class="loader">macro-carousel</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/@valdrinkoshi/performant-expand-collapse-animations-93d99e80f7f">
        <div class="loader">Expand/Collapse Animations</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://festify.github.io/ken-burns-carousel/">
        <div class="loader">Ken Burns Slide Show</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/splitinfinities/lottie-wc">
        <div class="loader">Lottie Animations</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://onsen.io">
        <div class="loader">Onsen UI</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://blogs.oracle.com/developers/announcing-oracle-jet-40-and-web-components">
        <div class="loader">Oracle Jet</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.ampproject.org">
        <div class="loader">AMP</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/theonion/bulbs-elements">
        <div class="loader">America's Finest News Source</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://elix.org/">
        <div class="loader">elix</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/skatejs/sk-router">
        <div class="loader">SkateJS Router</div>
      </xtal-link-preview>
      <xtal-link-preview href="http://blog.htmltreegrid.com/post/Best-WebComponents-DataGrid-DataTable.aspx">
        <div class="loader">HTML Treegrid</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.predix-ui.com/">
        <div class="loader">Predix</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/x-tag">
        <div class="loader">x-tag</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Polymer/lit-html/tree/master/demo">
        <div class="loader">lit-html</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/@mikeal/ive-seen-the-future-it-s-full-of-html-2577246f2210">
        <div class="loader">@mikeal</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://developers.google.com/web/fundamentals/web-components/examples/">
        <div class="loader">Best Practices Examples</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Comcast/polaris">
        <div class="loader">Polaris</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/QuinntyneBrown/ce-carousel">
        <div class="loader">cd-carousel</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Fdom92/stencil-fetch">
        <div class="loader">Stencil fetch</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Fdom92/stencil-payment">
        <div class="loader">Stencil Payment</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/mappmechanic/awesome-stenciljs">
        <div class="loader">Awesome Stencil</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Fdom92/stencil-voice2text">
        <div class="loader">Stencil Voice2Text</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://stackblitz.com/edit/angular-ce-poc-material-v2">
        <div class="loader">Angular material elements</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/tanepiper/mm-components">
        <div class="loader">Music Markup components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://aframe.io/">
        <div class="loader">A-frame Web VR</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/PolymerLabs/amp-viewer/blob/master/amp-viewer.js">
        <div class="loader">Amp Viewer</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://twittercommunity.com/t/announcing-twitter-status-and-twitter-user-web-components-for-displaying-tweets-and-users/100433?u=abraham">
        <div class="loader">Twitter components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://jpmorganchase.github.io/perspective/">
        <div class="loader">JPMorgan Chase Perspecitve</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/dabeng/OrgChart-Webcomponents">
        <div class="loader">Org Charts</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/dsolimando/hnpwa-mobileelements/tree/pagination/www/lib">
        <div class="loader">HNPWA Mobile Elements</div>
      </xtal-link-preview>
      <xtal-link-preview href="http://handsontable.github.io/hot-table/">
        <div class="loader">Polymer Element wrapper for Handsontable</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/samsung-internet-dev/making-a-simple-gamepad-web-component-23b2ac262f56">
        <div class="loader">Gamepad Web Component</div>
      </xtal-link-preview>

    </xtal-siema>
    <p-d-x on="fetch-complete-changed" to="{href:target.href;innerText:target.title}" skip-init></p-d-x>
    <a target="_blank">link</a>

    <style>
      

      xtal-siema{
        max-width: 600px;
        width:100%;
      }
      xtal-siema div{
        height:99%;
      }
      xtal-link-preview:not([fetch-complete]) {
        display: none;
      }

      a:not([href]) {
        display: none;
      }
      a{
        display:block;
        margin-top:30px;
      }

      xtal-link-preview,
      .openingSlide {
        display:flex;
        flex-direction: column;

        height: 200px;
        text-align: center;
      }

      xtal-link-preview {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        height: 100%;
        width: 100%;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
      }

      /* On mouse-over, add a deeper shadow */
      xtal-link-preview:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      xtal-link-preview>div {
        display: flex;
        height: 100%;
        padding: 5px;
      }
      xtal-link-preview img {
        object-fit: scale-down;
        
      }
      @media (min-width: 800px) {
        xtal-siema{
          height: 200px;
        }
        xtal-link-preview>div {
          flex-direction: row-reverse;
          justify-content: space-around;
        }
        xtal-link-preview img {
          align-self: stretch;
          filter: drop-shadow(0px 0px 1px rgba(0,0,0,.3))
          drop-shadow(0px 0px 10px rgba(0,0,0,.3));
        }
        
      }

      @media (max-width: 800px) {
        xtal-link-preview>div {
          flex-direction: column-reverse;
          align-items: center;
          justify-content: center;
        }
        xtal-siema{
          height: 300px;
        }
        xtal-link-preview img {
          border: 1px solid #ccc;
        }
        
      }

      xtal-link-preview>div>details summary::-webkit-details-marker {
        display: none;
      }

      xtal-link-preview>div>details>summary {
        margin-top: 5px;
        font-weight: 800;
      }

      xtal-link-preview>div>details p {
        text-align: left;
        margin-left: 5px;
      }


      /* Add some padding inside the card container */
      .container {
        padding: 2px 16px;
      }

      .textDesc {
        display:flex;
        flex-direction: column;
        justify-content: center;
      }

      .loader {
        display:flex;
        position: relative;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        border: 16px solid #f3f3f3;
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
    </style>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <script type="module" src="https://unpkg.com/xtal-siema@0.0.12/xtal-siema.js?module"></script>
    <script type="module" src="https://unpkg.com/wired-button@0.7.0/wired-button.js?module"></script>
    <script type="module" src="https://unpkg.com/xtal-link-preview@0.0.30/xtal-link-preview.js?module"></script>
    <script type="module" src="https://unpkg.com/p-d.p-u@0.0.61/p-d-x.js?module"></script>
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
