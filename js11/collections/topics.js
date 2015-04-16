/**
 * @module  '../collections/topics.js'
 * @extends '../models/topic.js'
 * @exports Topics
 */
import {Topic} from '../models/topic.js';
/**
 * @class Topics
 * @extends Backbone.Collection
 */
export class Topics extends Backbone.Collection {
    constructor() {
        super({
            model: Topic
        });
    }
}