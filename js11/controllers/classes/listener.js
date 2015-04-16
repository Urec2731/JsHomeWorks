/**
 * @module  '../controllers/classes/listener.js'
 * @exports listener
 */
export var listener = function () {
    var prefix = 'root:view';
    var args = _.toArray(arguments);
    var rootEvent = args[0];
    args[0] = prefix + ':' + rootEvent;
    //args.splice(1, 0, view);

    this.triggerMethod.apply(this, args);
};