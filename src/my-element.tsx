import { FASTElement, customElement, attr, ValueConverter, html } from "@microsoft/fast-element";

const template = html<MyElement>`
  <div class="header">
      <h4>my name is</h4>
  </div>
  <div class="body">TODO: Name Here</div>
  <div class="footer"></div>
`;

@customElement({
    name: 'my-element',
    template
})
export class MyElement extends FASTElement {
    @attr greeting: string = 'Hello';

    greetingChanged() {
      this.shadowRoot!.innerHTML = this.greeting;
    }
}