
/********************************************** */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InnerServiceService {

// export class DataService {
  // Create a BehaviorSubject to hold the shared data
  private sharedDataSubject = new BehaviorSubject<any>(null);

  // Expose an observable to subscribe to changes in the shared data
  sharedData$ = this.sharedDataSubject.asObservable();


  // Function to set the shared data
  setSharedData(data: any) {
    this.sharedDataSubject.next(data);
  }
}
