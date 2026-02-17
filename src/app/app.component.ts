import { Component } from '@angular/core';

class Student {
  constructor(public firstName: string, public lastName: string) {}

  getFullName(): string {
    return `My full name is ${this.firstName} ${this.lastName}`;
  }
}

class MobilePhone {
  makeCall(): string {
    return 'Can make a call';
  }

  sendSms(): string {
    return 'Can send SMS';
  }
}

class ApplePhone extends MobilePhone {
  useSiri(): string {
    return 'Can use Siri to control';
  }

  showFunctions(): string {
    return `${this.makeCall()}; ${this.sendSms()}; ${this.useSiri()}`;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = 'TypeScript001 rewritten to Angular 19';
  protected readonly helloWorld = 'Hello World';
  protected readonly studentSummary = new Student('Harry', 'Potter').getFullName();
  protected readonly applePhoneSummary = new ApplePhone().showFunctions();
  protected readonly addResult = this.add(7, 2);

  private add(a: number, b: number): number {
    return a + b;
  }
}
