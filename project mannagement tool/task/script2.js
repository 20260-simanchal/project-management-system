


document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('app-form');
const list = document.getElementById('app-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const jobTitle = document.getElementById('blog-title').value;
        const content = document.getElementById('contents').value;
        const status = document.getElementById('status').value;
        const date = document.getElementById('date').value;
        const uploadFile = document.getElementById('file').value;
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${jobTitle}</strong> at ${content}, Status: ${status}, Applied on: ${date}, File: ${uploadFile}`;
        list.appendChild(listItem);
        // Clear the form inputs
        form.reset();
    });
});