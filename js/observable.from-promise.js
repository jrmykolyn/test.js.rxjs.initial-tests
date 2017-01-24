/* -------------------------------------------------- */
/* '.fromPromise()' TESTS */
/* -------------------------------------------------- */
// DECLARE VARS
var resolvedPromise = new Promise( function( resolve, reject ) {
    resolve( 'This Promise (`resolvedPromise`) was resolved immediately from within the `executor` function.' );
} );

var rejectedPromise = new Promise( function( resolve, reject ) {
    reject( 'This Promise (`rejectedPromise`) was rejected immediately from within the `executor` function.' );
} );

// DECLARE `steams`
var resolvedPromiseStream = Rx.Observable.fromPromise( resolvedPromise );

var rejectedPromiseStream = Rx.Observable.fromPromise( rejectedPromise );

// DECLARE `subscriptions`
var reslovedPromiseSubscription = resolvedPromiseStream.subscribe(
    logData,
    logError,
    logComplete
);

var rejectedPromiseSubscription = rejectedPromiseStream.subscribe(
    logData,
    logError,
    logComplete
);