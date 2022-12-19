import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url ="http://localhost:3000/user";
  public getAllUser():Observable<any>{
    return this.http.get<any>(this.url);
  }
  public addUser(user: User):Observable<any>{
    // console.log("đây là sản phẩm muốn thêm: ", product);
    return this.http.post<any>(this.url,user);
  }
}
