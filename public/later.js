alert('later.js loaded4');

// reminder.js
document.addEventListener('DOMContentLoaded', function() {
    const buttonremind = document.getElementById('buttonremind');

    buttonremind.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission to allow AJAX call

        const message = document.getElementById('reminderMessage').value;
        const date = document.getElementById('reminderDate').value;
        const time = document.getElementById('reminderTime').value;

        fetch('/setReminder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, date, time }),
        })
        .then(response => response.json())
        .then(data => console.log('Reminder set:', data))
        .catch(error => console.error('Error setting reminder:', error));
    });
});






// document.addEventListener('DOMContentLoaded', function() {
//     function addReminder(message, date, time) {
//         const datetime = `${date}T${time}`;
        
//         const scheduleDate = new Date(datetime);

//         const schedule = later.parse.recur().on(scheduleDate).fullDate();

//         later.setInterval(() => {
//             alert(message); // Display the alert
//             document.getElementById('reminderList').innerHTML += `<li>${message} - ${datetime}</li>`; // Update the list
//         }, schedule);
//     }

//     buttonremind.addEventListener('click', function() {
//         const message = document.getElementById('reminderMessage').value; // Assuming you want to send this message
//         const date = document.getElementById('reminderDate').value;
//         const time = document.getElementById('reminderTime').value;
    
//         // Send the reminder setup to your backend
//         fetch('/setReminder', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ message, date, time }),
//         })
//         .then(response => response.json())
//         .then(data => console.log('Reminder set:', data))
//         .catch(error => console.error('Error setting reminder:', error));
//     });
    
// });



// const buttonremind = document.getElementById('buttonremind');
// buttonremind.addEventListener('click', function() {
//     alert('buttonremind clicked');
// });

/*
working!!::
document.addEventListener('DOMContentLoaded', function() {
    function addReminder(message, date, time) {
        const datetime = `${date}T${time}`;
        
        const scheduleDate = new Date(datetime);

        const schedule = later.parse.recur().on(scheduleDate).fullDate();

        later.setInterval(() => {
            alert(message); // Display the alert
            document.getElementById('reminderList').innerHTML += `<li>${message} - ${datetime}</li>`; // Update the list
        }, schedule);
    }

    document.getElementById('reminderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const message = document.getElementById('reminderMessage').value;
        const date = document.getElementById('reminderDate').value;
        const time = document.getElementById('reminderTime').value;

        addReminder(message, date, time);

        // Reset the form
        this.reset();
    });
});


does not work but sends the written message immidietly to frontend::
document.addEventListener('DOMContentLoaded', function() {
    const reminders = []; // This will store your reminders

    function addReminder(message, time) {
        const schedule = later.parse.text(`at ${time}`);
        const reminder = { message, schedule, timer: null };

        // Schedule the reminder
        reminder.timer = later.setTimeout(() => {
            alert(reminder.message); // Display an alert
            // Existing line for updating the frontend, might be removed or modified
            document.getElementById('reminders').innerHTML += `<p>${reminder.message}</p>`;
        }, schedule);

        reminders.push(reminder);

        // New part: Append the reminder to the list
        const listItem = document.createElement("li");
        listItem.textContent = `${time} - ${message}`;
        document.getElementById('reminderList').appendChild(listItem);
    }

    document.getElementById('reminderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const message = document.getElementById('reminderMessage').value;
        const time = document.getElementById('reminderTime').value;

        addReminder(message, time);

        // Reset the form
        this.reset();
    });
});
*/