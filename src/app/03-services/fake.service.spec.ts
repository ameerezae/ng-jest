import {FakeService} from "./fake.service";
import {of, throwError} from "rxjs";
import {TodosComponent} from "./todos.component";
import {HttpErrorResponse} from "@angular/common/http";

describe('FakeService', () => {
  let fakeService: FakeService;
  let httpClientMock: any;
  let component: TodosComponent;

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn()
    }
    fakeService = new FakeService(httpClientMock)
    component = new TodosComponent(fakeService);
  })

  it('should set todos in TodosComponent', function () {
    const response: number[] = [1,2,3];
    jest.spyOn(httpClientMock, 'get').mockReturnValue(of(response));
    component.callFakeService();
    expect(component.todos.length).toBe(3)

    expect(httpClientMock.get).toHaveBeenCalledWith('https://example.com/todos')
  });

  it('should throw new error',  (done) => {
    const errorResponse: HttpErrorResponse = new HttpErrorResponse({error: '404 not found', status: 404});
    jest.spyOn(httpClientMock, 'get').mockReturnValue(throwError(() => errorResponse));
    fakeService.getDataV1().subscribe({
      error: err => {
        expect(err.message).toContain('404');
        expect(err.status).toBe(404);
        done();
      }
    })
  });

})
