var date = new Date();          /* Creating a new date object. */
/* Creating a function that will render the calendar. */
const renderCalendar = () => {
var day = date.getDay();
let year = date.getFullYear(); 
var today = new Date();


const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

/* Getting the last day of the previous month and the last day of the current month. */
var EndDate = new Date(
    date.getFullYear(),
    date.getMonth()+1,
    0
).getDate();
var PrevEndDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
).getDate();

/* This is setting the month and year to the current month and year. */
document.getElementById("month").innerHTML = monthNames[date.getMonth()];
document.getElementById("year").innerHTML = year;

/* This is adding the dates from the previous month to the calendar. */
var cells = "";

for(x=day;x>0;x--)
{
    cells+="<div class = 'previous_dates'>"+(PrevEndDate-x+1)+"</div>";
}

/* This is adding the dates from the current month to the calendar. */
for(i=1;i<=EndDate;i++)
{
  if(i == today.getDate() && date.getMonth() == today.getMonth())
  {
    cells += "<div class = 'today'>" + i + "</div>";
  }
  else
  {
    cells += "<div>"+i+"</div>";
    document.getElementsByClassName("days")[0].innerHTML = cells; 
  }
}
};

/* This is adding an event listener to the previous and next buttons. When the previous button is
clicked, the month is set to the previous month. When the next button is clicked, the month is set
to the next month. */
document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });
  
  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  document.querySelector(".up").addEventListener("click", () => {
    date.setFullYear(date.getFullYear() - 1);
    renderCalendar();
  });

  document.querySelector(".down").addEventListener("click", () => {
    date.setFullYear(date.getFullYear() + 1);
    renderCalendar();
  });
  
  renderCalendar();
