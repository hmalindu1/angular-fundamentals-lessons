import { Injectable } from '@angular/core';
import { data, User } from './data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData: User[] = data;

  constructor() {}

  /**
   * Retrieves user data as a promise of an array of User objects.
   *
   * @return {Promise<User[]>} a promise of an array of User objects
   */
  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.userData);
    });
  }
}
