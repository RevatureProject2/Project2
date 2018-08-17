import { Component } from '@angular/core';
import { TestService } from './components/services/test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  providers: [TestService]
})
export class AppComponent {
}
