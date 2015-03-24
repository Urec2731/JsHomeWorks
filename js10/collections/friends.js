import {Friend} from '../models/friend.js';
export class Friends extends Backbone.Collection {
    constructor() {
        super({
            model: Friend
        });
    }
}