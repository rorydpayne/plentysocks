/**
 *	Module Dependencies
 */
var mongoose = require('mongoose'),
	async = require('async'),
	Subscription = mongoose.model('Subscription');

/**
 *	Find by subscription id
 */
exports.subscription = function(request, response, next, id) {
	Subscription.load(id, function(err, subscription) {
		if (err) {
			return next(err);
		}
		if (!subscription) {
			return next(new Error('Failed to load subscription: ' + id));
		}
		request.subscription = subscription;
		next();
	});
};
