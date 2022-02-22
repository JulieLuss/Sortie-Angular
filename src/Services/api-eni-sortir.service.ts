import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestModel } from 'src/Models/test-model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiEniSortirService {
  public url='http://127.0.0.1:8000/test';


  constructor(private httpClient: HttpClient) { }

  public testGet(): Observable<TestModel>{
    return this.httpClient.get<TestModel>(this.url);
  }

  public testPost(info: TestModel): Observable<any>{
    return this.httpClient.post(this.url, info);

  }
}
