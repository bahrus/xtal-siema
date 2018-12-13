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
    <!-- Pass down ('p-d' how much to jump to the node below) -->
    <p-d on="click" if="wired-button" prop="pageJump" val="target.dataset.jump"></p-d>
    
    <xtal-siema attr-for-selected="preview">
      <div class="openingSlide">
        <div class="textDesc">
          Web Component links of interest
        </div>
      </div>
      <xtal-link-preview href="https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html">
        <div class="loader">
          ⚡
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration/">
        <div class="loader">
          Edgewise
        </div>
      </xtal-link-preview>

      <div>
        <a href="https://www.chromestatus.com/metrics/feature/timeline/popularity/1689" target="blank">Custom Element
          Usage</a>
      </div>
      <div>
        <a href="https://www.chromestatus.com/metrics/feature/timeline/popularity/804" target="blank">Shadow DOM
          Usage</a>
      </div>
      <xtal-link-preview href="https://github.com/w3c/webcomponents/issues/776">
        <div class="loader">
          VS Editor Support?
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://opensource.googleblog.com/2018/11/introducing-web-component-and-data-api-for-quick-draw.html">
        <div class="loader">
          Quick Draw
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/matthewp/haunted">
        <div class="loader">
          Haunted Hooks
        </div>
      </xtal-link-preview>

      <div>
        <a  href="https://twitter.com/julienrenaux/status/1049212830367539200/photo/1?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1049212830367539200&ref_url=http%3A%2F%2F127.0.0.1%3A8081%2Fdemo%2Findex.html" target="_blank">
           <img style="height:195px" src="https://pbs.twimg.com/media/Do8B6zrW0AISmNP.jpg">
          </a>
      </div>
      <xtal-link-preview href="https://www.blazeui.com/">
        <div class="loader">
          Blaze UI
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://leanpub.com/web-component-essentials">
        <div class="loader">
          New Book
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.pluralsight.com/courses/vanilla-web-components-practical-guide">
        <div class="loader">
          PluralSight
        </div>
      </xtal-link-preview>
      <iframe width="600" height="290" src="https://www.youtube.com/embed/CKy8tKMOP4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      <xtal-link-preview href="https://hacks.mozilla.org/2018/11/the-power-of-web-components/">
        <div class="loader">Power of WCs</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/stencil-tricks/a-practical-introduction-to-styling-a-shadow-dom-and-slots-879565a2f423">
        <div class="loader">Styling Shadow DOM</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://deckdeckgo.com/">
        <div class="loader">Deck Deck Go</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Heydon/bruck">
        <div class="loader">Lo-fi prototyping</div>
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
      <xtal-link-preview href="https://stencilcomponents.com/">
        <div class="loader">Stencil Components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://bendyworks.com/blog/build-a-web-component-with-nutmeg">
        <div class="loader">
          Nutmeg
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://dev.to/bennypowers/lets-build-web-components-part-6-gluon-27ll">
        <div class="loader">
          Gluon
        </div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/WebReflection/hyperHTML-Element">
        <div class="loader">HyperHTML Element</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/UpperCod/Atomico">
        <div class="loader">Atomico</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/slimjs">
        <div class="loader">SlimJS</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/skatejs/skatejs/">
        <div class="loader">SkateJS</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.predix-ui.com/">
        <div class="loader">Predix Components</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/Tencent/omi/tree/master/packages/omi-chart">
        <div class="loader">Omi Charts</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://ciampo.github.io/macro-carousel/demo/">
        <div class="loader">macro-carousel</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/@valdrinkoshi/performant-expand-collapse-animations-93d99e80f7f">
        <div class="loader">Expand/Collapse Animations</div>
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
      <xtal-link-preview href="https://bgrins.github.io/xbl-analysis/">
        <div class="loader">
          XBL => CE
        </div>
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
      <xtal-link-preview href="https://nervous-stonebraker-1f429b.netlify.com/">
        <div class="loader">Recommmmendations</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://www.w3.org/2001/tag/doc/webcomponents-design-guidelines/">
        <div class="loader">
          W3C Guidance
        </div>
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
      <xtal-link-preview href="https://github.com/lamplightdev/compost-hn">
        <div class="loader">Compost Elements</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://github.com/alexnoz/vanilla-wc-hnpwa">
        <div class="loader">Vannilla WC PWA</div>
      </xtal-link-preview>
      <xtal-link-preview href="http://handsontable.github.io/hot-table/">
        <div class="loader">Polymer Element wrapper for Handsontable</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://medium.com/samsung-internet-dev/making-a-simple-gamepad-web-component-23b2ac262f56">
        <div class="loader">Gamepad Web Component</div>
      </xtal-link-preview>
      <xtal-link-preview href="https://micro-frontends.org/">
        <div class="loader">Micro Frontend</div>
      </xtal-link-preview>
    </xtal-siema>
    <!-- pass the url and title from the fetch to the hyperlink after completing the fetch -->
    <p-d on="fetch-complete-changed" to="a" prop="href" val="target.href" skip-init m="1"></p-d>
    <p-d on="fetch-complete-changed" to="a" prop="innerText" val="target.title" skip-init m="1"></p-d>
    <!-- watch for twitter slides -->
    <css-observe data-xlp="no" id="twitterObserver" observe selector="div[preview]>twitter-widget" ></css-observe>
    <!-- If a twitter widget is opened, hide the link -->
    <p-d-x on="latest-match-changed" to="a" prop="dataset.xlp" val="target.dataset.xlp" m="1" skip-init></p-d-x>
    <!-- Watch for simple hyperlink slides -->
    <css-observe data-xlp="no" id="aObserver" observe selector="div[preview]>a" ></css-observe>
    <!-- If a simple hyperlink slide is opened, hide the bottom hyperlink -->
    <p-d-x on="latest-match-changed" to="a" prop="dataset.xlp" val="target.dataset.xlp" m="1" skip-init></p-d-x>
    <!-- If an iframe is opened, hide the bottom hyperlink-->
    <css-observe data-xlp="no" id="iframeObserver" observe selector="iframe[preview]" ></css-observe>
    <p-d-x on="latest-match-changed" to="a" prop="dataset.xlp" val="target.dataset.xlp" m="1" skip-init></p-d-x>
    <!-- Watch for link preview slides -->
    <css-observe data-xlp="yes" id="xlpObserver" observe selector="xtal-link-preview[preview]" ></css-observe>
    <!-- If a link preview slide is opened, show the hyperlink -->
    <p-d-x on="latest-match-changed" to="a" prop="dataset.xlp" val="target.dataset.xlp" m="1" skip-init></p-d-x>
    <a class="preview-link" target="_blank">link</a>

    <style>
      a[data-xlp="no"]{
        display:none;
      }

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
      a[preview-link]{
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
      div[preview]{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
      }
      xtal-siema:not([data-selected-changed]) {
        display:none;
      }
      details{
        overflow: hidden;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/xtal-siema@0.0.24/xtal-siema.iife.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/wired-elements@0.8.2/dist/wired-elements.bundled.min.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/xtal-link-preview@0.0.35/xtal-link-preview.iife.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/p-d.p-u@0.0.91/dist/p-all.iife.js"></script>
    <script type="module" src="https://unpkg.com/css-observe@0.0.7/dist/css-observe.iife.js"></script>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
    </template>
</custom-element-demo>
```
-->

<!--
```
<custom-element-demo>
<template>
    <div>
        <wc-info href="https://unpkg.com/xtal-siema@0.0.26/web-components.json"></wc-info>
        <script type="module" src="https://unpkg.com/wc-info@0.0.8/wc-info.js?module"></script>
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

WIP