
function doHomework(subject, callback) {
    setTimeout(() => {
        console.log('a');
        callback()
    }, 2000);
}

doHomework('math', function() {
    console.log('b');
});


// ----------------------------------------------------------------------

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { 
        console.log("I love You !!");
        myResolve({
            name: 'aa'
        }); 
    }, 3000);
});

let myPromise2 = (exVar) => {
    return new Promise(function(myResolve, myReject) {
        console.log({ exVar });
        console.log("I love You 2 !!");
        myResolve("I love You 2 !!"); 
    });
}

let myPromise3 = (exVar3) => {
    return new Promise(function(myResolve, myReject) {
        console.log({ exVar3 });
        console.log("I love You 3 !!");
        myReject("I love You 3 !!"); 
    });
}


myPromise
.then((data) => myPromise2(data))
.then((data) => myPromise3(data))
.then((data) => {
    console.log({ data });
})
.catch((data) => my)


////-----------------------


async function testAsyncAwait() {
    const myPromiseData = await myPromise
    const myPromiseData2 = await myPromise2(myPromiseData)
    const myPromiseData3 = await myPromise3(myPromiseData2, myPromiseData)

    console.log({ myPromiseData3 });
}

testAsyncAwait()