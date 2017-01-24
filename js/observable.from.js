var numberStream = Rx.Observable.from( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );

var doubleNumberStream = numberStream
    .map( function( num ) { return num + num; } );

var evenNumberStream = numberStream
    .filter( function( num ) { return num % 2 === 0 } );

var numberSubscription = numberStream.subscribe(
    logData,
    logError,
    logComplete
);

var doubleNumberSubscription = doubleNumberStream.subscribe(
    logData,
    logError,
    logComplete
)

var evenNumberSubscription = evenNumberStream.subscribe(
    logData,
    logError,
    logComplete
);