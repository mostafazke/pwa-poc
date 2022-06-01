import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@pwabuilder/pwa-inking';
// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css`
.center {
  text-align: center;
}
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
    <div class="container">
    <h1 class="center">PWA inking PoC</h1>
    <inking-canvas name="myInkingCanvas">
    <inking-toolbar canvas="myInkingCanvas" orientation="vertical" vertical="bottom" horizontal="right">
    <inking-toolbar-highlighter></inking-toolbar-highlighter>
    <inking-toolbar-pen></inking-toolbar-pen>
    <inking-toolbar-eraser></inking-toolbar-eraser>
    <inking-toolbar-save></inking-toolbar-save>
    </inking-toolbar>
    </inking-canvas>
    </div>
    `;
  }
}
