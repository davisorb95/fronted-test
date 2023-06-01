import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private _url: string = '../../assets/mocks/MOCK_DATA.json';

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this._url);
  }
}
