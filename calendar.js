var date = new Date();
const renderCalendar = () => {
date.setDate(1);
var day = date.getDay();
let year = date.getFullYear(); 
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
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

document.getElementById("month").innerHTML = monthNames[date.getMonth()];
document.getElementById("year").innerHTML = year;

var cells = "";

for(x=day;x>0;x--)
{
    cells+="<div>"+(PrevEndDate-x)+"</div>";
}
for(i=1;i<=EndDate;i++)
{
    cells += "<div>"+i+"</div>";
    document.getElementsByClassName("days")[0].innerHTML = cells; 
    
}
};

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
