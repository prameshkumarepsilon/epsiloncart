import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TotalAmountPipe } from "@pipes/total-amount.pipe";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
  declarations: [TotalAmountPipe],
  exports: [
    TotalAmountPipe,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        deps: [HttpClient],
        useFactory: http => new TranslateHttpLoader(http)
      }
    })
  ]
})
export class SharedModule {}
