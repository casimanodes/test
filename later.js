alert('later.js loaded');

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


document.addEventListener('DOMContentLoaded', function() {
    function addReminder(message, date, time) {
        // Combine date and time into a single datetime string
        const datetime = `${date}T${time}`;
        
        // Parse the datetime string into a Date object
        const scheduleDate = new Date(datetime);

        // Calculate the schedule based on the specific datetime
        const schedule = later.parse.recur().on(scheduleDate).fullDate();

        // Schedule the reminder
        later.setInterval(() => {
            alert(message); // Display the alert
            document.getElementById('reminderList').innerHTML += `<li>${datetime} - ${message}</li>`; // Update the list
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



const buttonremind = document.getElementById('buttonremind');
buttonremind.addEventListener('click', function() {
    alert('buttonremind clicked');
});
