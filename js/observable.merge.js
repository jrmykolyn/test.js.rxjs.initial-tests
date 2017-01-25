/* -------------------------------------------------- */
/* `.merge()` TESTS */
/* -------------------------------------------------- */
// DECLARE VARS
var p1 = fetch( 'https://api.github.com/users/jrmykolyn' )
    .then(
        returnPromiseDataAsJSON,
        handlePromiseError
    );

var p2 = fetch( 'https://api.github.com/users/zakkain' )
    .then(
        returnPromiseDataAsJSON,
        handlePromiseError
    );

// DECLARE `streams`
var userStream1 = Rx.Observable.fromPromise( p1 );
var userStream2 = Rx.Observable.fromPromise( p2 );

var userStreams = Rx.Observable.merge( userStream1, userStream2 );

// DECLARE `subscriptions`
var userStreamsSubscription = userStreams.subscribe(
    logData,
    logError,
    logComplete
);



/* -------------------------------------------------- */
/* HELPER FUNCTIONS
/* -------------------------------------------------- */
function returnPromiseDataAsJSON( response ) {
    return response.json();
}

function handlePromiseError( error ) {
    return new Error( 'Failed to fetch user data.' );
}