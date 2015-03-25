/**
 * @module  '../collections/friends.js'
 * @extends '../models/friend.js'
 * @exports Friends
 */
import {Friend} from '../models/friend.js';
/**
 * @class Friends
 * @extends Backbone.Collection
 */
export class Friends extends Backbone.Collection {
    constructor() {
        super({
            model: Friend
        });
    }
}