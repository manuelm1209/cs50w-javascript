// Implementing Local Storage
// let counter = 0;

// Check if there is a counter in local storage
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('p').innerHTML = counter;
    localStorage.setItem('counter', counter);

    // if (counter % 10 === 0) {
    //     alert(`Count is now ${counter}`);
    // }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('p').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
    // The following is the same
    // document.querySelector('button').addEventListener('click', count)

    // setInterval(count, 1000);
});