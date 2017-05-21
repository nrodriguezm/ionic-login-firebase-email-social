import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataProvider {
  constructor(private afDatabase: AngularFireDatabase) {}

  push(path: string, data: any): Observable<any> {
    return Observable.create(observer => {
      this.afDatabase.list(path).push(data).then(firebaseNewData => {
        // Return the uid created
        let newData: any = firebaseNewData;
        observer.next(newData.path.o[newData.path.o.length - 1]);
      }, error => {
        observer.error(error);
      });
    });
  }

  update(path: string, data: any) {
    this.afDatabase.object(path).update(data);
  }

  list(path: string, listQuery: any): FirebaseListObservable<any> {
    return this.afDatabase.list(path, {query: listQuery});
  }

  object(path: string): FirebaseObjectObservable<any> {
    return this.afDatabase.object(path);
  }

  remove(path: string): Observable<any> {
    return Observable.create(observer => {
      this.afDatabase.object(path).remove().then(data => {
        observer.next();
      }, error => {
        observer.error(error);
      });
    });
  }
}
