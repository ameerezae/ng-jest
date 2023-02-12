import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FakeService {
  constructor(private http: HttpClient) {
  }

  getDataV1(): Observable<any> {
    const url = 'https://example.com/todos';
    return this.http.get(url).pipe(catchError((error) => {
      throw error
    }));
  }
}
