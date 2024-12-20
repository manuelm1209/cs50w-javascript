let counter = 0;
function count() {
    counter++;
    document.querySelector('p').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
    <!-- The following is the same -->
    <!-- document.querySelector('button').addEventListener('click', count) -->
});