'use strict';
import Reflux from 'reflux';
import PageActions from '../actions/pageActions';

var PageStore = Reflux.createStore({
  init(){
    this._pageStore = null;
    PageActions.getPageData();
  },
  getInititalState(){
    return this._pageStore;
  },
  onUpdatePage(changes){
    this._pageStore =changes;
    this.updatePageStore(this._pageStore);
  },
  updatePageStore(pageStore){
    this.trigger(pageStore);
  }
});

export default PageStore;