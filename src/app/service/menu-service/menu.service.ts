import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly collapsed = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsed.asObservable();

  toggleCollapsed() {
    this.collapsed.next(!this.collapsed.value);
  }

  constructor() { }
}
