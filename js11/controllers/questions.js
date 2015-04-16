/**
 * @module '../controllers/questions.js'
 * @extends '../data/questions.js'
 * @extends '../collections/topics.js'
 * @exports topics
 */
import {questions} from '../data/questions.js';
import {Topics} from '../collections/topics.js';

topics = new Topics();
topics.set(questions);

export var topics;