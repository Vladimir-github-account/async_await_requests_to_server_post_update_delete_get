'use strict';

/*fetch('./items.json')
    .then(console.log)
    .catch(console.error);

function fetchResolve(response) {
    return response.json();
}*/

/*
async function getJsonItemsHandler() {
    const response = await fetch('./items.json');
    const data = await response.json();
    console.log(data);
}
getJsonItemsHandler();*/

/*const promise1 = Promise.resolve("test");
const promise2 = Promise.resolve(12);
const promise3 = Promise.resolve({});
const promise4 = Promise.resolve(null);
const promise5 = Promise.resolve(true);
const promise6 = Promise.resolve(Symbol("description"));
const promise7 = Promise.resolve(undefined);
const promise8 = new Promise(((resolve, reject ) => {
    setTimeout(function () {
        resolve("first");
    },500)
}));
const promise9 = new Promise(((resolve, reject ) => {
    setTimeout(function () {
        resolve("second promise");
    }, 500)
}));


async function getItem() {
    try {
        console.group("CATCH");
        const string = await promise1;
        console.log(string);
        const number = await promise2;
        console.log(number);
        const object = await promise3;
        console.log(object);
        const myNull = await promise4; //остановился и выбросил ошибку, код дальше не пошел
        console.log(myNull);
        const bool = await promise5;
        console.log(bool);
        const symbol = await promise6;
        console.log(symbol);
        const myUndefined = await promise7;
        console.log(myUndefined);
        console.log("success");
        console.groupEnd();
    }catch (e) {
        console.group("CATCH");
        console.log(e);
        console.groupEnd();
    }
}
console.log("before getItem");
getItem();
console.log("after getItem");*/


/*const promises =  [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3),

];

async function startRace() {
    try {
        const winner = await Promise.race(promises);
        console.log(winner);
    } catch (e) {
        console.log(e);
    }
}
startRace();*/

/*
//1
const successPromise = new Promise(function (resolve, reject) {
    resolve("SUCCESS");
});

async function successHandler() {
    try {
        const result = await successPromise;
        alert(result)
    } catch (e) {
        console.log(e);
    }

}

successHandler();
*/



/*
successPromise
    .then(function (result) {
         alert(result)
})
    .catch(function (error) {
        alert("not enough");
    });
*/


/*
//2
const resolvedPromise = Promise.resolve(4);


//3
const anotherResolvedPromise = getResolvedPromise(4);

async function getResolvedPromise(value) {
    return value;
}
*/

/*
fetch('http://192.168.0.106:3000/tasks')
    .then(response=> response.json())
    .then(console.log); //getting tasks from server*/


const [loadTasksButton, postTaskButton, putTask, deleteTask] = document.getElementsByTagName("button");

loadTasksButton.onclick = async function () {
    try {
        const response = await fetch('http://192.168.0.106:3000/tasks')
        const tasks = await response.json();

        console.log(tasks);
    } catch (e) {
        console.error(e);
    }
};

postTaskButton.onclick = async function () {
    const task = {
        value: `${document.getElementsByTagName("input")[0].value}`,
    };

    const response = await fetch('http://192.168.0.106:3000/task',{
        method: "POST",
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(task) // body data type must match "Content-Type" header
    });
    const resultTask = await response.json();
    console.log(resultTask);
};

putTask.onclick = async function () {
    try {
        const task = {
            value: "UPDATED TASK LEARN JS",
        };
        const response = await fetch('http://192.168.0.106:3000/task/7', {
            method: "PUT",
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(task) // body data type must match "Content-Type" header

        })
    } catch (e) {
        console.error(e);
    }
};

deleteTask.onclick = async function () {
    try{
        const response = await fetch('http://192.168.0.106:3000/task/43', {
            method: "DELETE",
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
        })
    }catch (e) {
        console.error(e);
    }
};