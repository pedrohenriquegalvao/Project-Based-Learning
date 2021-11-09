$(document).ready(function() {
    $('#calendar').evoCalendar({
        theme: "Orange Coral",
        calendarEvents: [
      {
        id: 'event 1', 
        name: "TAREFA", 
        date: "January/1/2020", 
        type: "SOMATIVA", 
        everyYear: true 
      },
      {
        name: "PROVA",
        badge: "02/13 - 02/15", 
        date: ["February/13/2020", "February/15/2020"],
        description: "PROVA DE (curso_select)",
        type: "event",
        color: "#63d867" 
      }
    ]
    })
})

function btn(){
    window.location.replace("./");
}