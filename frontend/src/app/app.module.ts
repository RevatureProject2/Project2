import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './routes/routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TestsComponent } from './components/tests/tests.component';
import { TestNGTestComponent } from './components/testng-test/testng-test.component';

import { DatesPipe } from './components/dates.pipe';

import { HttpService } from './components/services/http.service';
import { TestService } from './components/services/test-service.service';
import { PassfailPipe } from './components/passfail.pipe';
import { CamelToTitlePipe } from './components/camel-to-title.pipe';
import { HistoryComponent } from './components/history/history.component';
import { BatchComponent } from './components/history/batch/batch.component';
import { StacktraceDirective } from './components/stacktrace.directive';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        TestsComponent,
        TestNGTestComponent,
        DatesPipe,
        PassfailPipe,
        CamelToTitlePipe,
        HistoryComponent,
        BatchComponent,
        StacktraceDirective,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpModule
    ],
    providers: [HttpService, TestService],
    bootstrap: [AppComponent]
})
export class AppModule {}
