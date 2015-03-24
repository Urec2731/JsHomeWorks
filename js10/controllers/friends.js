import {names} from '../data/names.js';
import {Friends} from '../collections/friends.js';

    friends = new Friends();
    friends.set(names.map(function (friendName) {
        return {friendName: friendName};
    }));

export var friends;