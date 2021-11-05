$(document).ready(function() {
    $('#calendar').evoCalendar({
        theme: "Orange Coral",
        calendarEvents: [
      {
        id: 'event 1', // Event's ID (required)
        name: "TAREFA", // Event name (required)
        date: "January/1/2020", // Event date (required)
        type: "SOMATIVA", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        name: "PROVA",
        badge: "02/13 - 02/15", // Event badge (optional)
        date: ["February/13/2020", "February/15/2020"], // Date range
        description: "PROVA DE (curso_select)", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      }
    ]
    })
})

function btn(){
    window.location.replace("./");
}