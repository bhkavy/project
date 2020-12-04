import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // have one variable to hold cartItems -- an array
  private currentCartItems: any[] = [
    {
      id: 2,
      name: 'Butter',
      category: 'Dairy',
      price: '$10'
    }
  ];

  // step1: create BehaviorSubject with default value for making it obeservable
  private cartItemsList = new BehaviorSubject<any[]>(this.currentCartItems);

  // step2: make the cartitemslist as observable
  // create observable for above behavioursubject
  // so tat any comp can subscribe to it
  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable();// latestcartitems will be subscribeable

  constructor() { }

  updateCart(product): void {
    console.log(product);

    // send the above product to the backend to get it saved within cart.
    // handle success and error
    // if success do the following
    // keep the exisiting items and add one more into it
    this.latestCartItems.pipe(take(1)).subscribe(val => {
      console.log(val);
      console.log(...val); // spread operator
      const newArr = [...val, product];
      console.log(newArr);
      this.cartItemsList.next(newArr);
    });

    // if error
    // return the error from here so as to display toast message from the comp
  }

}
