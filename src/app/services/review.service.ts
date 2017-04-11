import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class ReviewService {
	reviews: FirebaseListObservable<any>;

  	constructor(public af: AngularFire) {}

  	getReviewsForArtist(artist_id): FirebaseListObservable<any> {
  		this.reviews = this.af.database.list('reviews/' + artist_id);
  		return this.reviews;
 	} 
 	
 	// Use this too add a review to an artist. Will replace reviews if a user
 	// already has a review for that artist in the BD.
 	addReviewForArtist(artistID, objectToAdd): void {
 		const items = this.af.database.list('reviews');
 		items.update(artistID, objectToAdd);
 	}

 	addReviewForUser(userID, objectToAdd): void {
 		this.af.database.list('users/' + userID + '/reviews/')
 			.push(objectToAdd);
 	}
}
