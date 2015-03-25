/**
 * @module  '../controllers/root.js'
 * @extends '../views/layout.js'
 * @extends '../views/footer.js'
 * @extends '../views/friends-list.js'
 * @exports rootView
 */
import {RootView} from '../views/layout.js';
import {FooterView} from '../views/footer.js';
import {FriendsListView} from '../views/friends-list.js';

rootView = new RootView();
rootView.getRegion('contacts').show(new FriendsListView());
rootView.getRegion('footer').show(new FooterView());

export var rootView;