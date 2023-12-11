import {FakeService} from "@app/03-services/fake.service";


export class TodosComponent {

  todos: number[] = [];

  constructor(private fakeService: FakeService) {
  }

  callFakeService() {
    this.fakeService.getDataV1().subscribe(data => this.todos = data);
  }
}
