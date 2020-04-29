import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { from } from "rxjs";
@Component({
  selector: "app-root",
  // selector: "div#app-root",
  template: `
    <div>
      <h1>{{ title }}</h1>
      <hr />
      <p>Powerd by Angular 9</p>
    </div>
  `
})
class HelloComponent {
  title: string;
  constructor() {
    this.title = "Hello World!";
  }
}
// -------------------- End of component

@NgModule({
  declarations: [
    //  List of all components, directives and pipes
    HelloComponent
  ],
  imports: [
    // list  of all other modules that your module depends on
    BrowserModule
  ],
  providers: [
    // list of all services (injectables)
  ],
  bootstrap: [HelloComponent]
})
class MyApp {}
// ------------------end of MyApp ng-module
//  instruct angular to bootstrap one of our module (AppModule)
platformBrowserDynamic().bootstrapModule(MyApp);
