import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import {historyRecord} from '../../models/history-record';
/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  private historyArray: Array<historyRecord>;

  constructor(private storage: Storage) {
    console.log('Hello HistoryProvider Provider');
  }

}
