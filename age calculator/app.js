function age(){

    let userDate = document.querySelector('#date').value;
    let userMonth = document.querySelector('#month').value;
    let userYear =  document.querySelector('#year').value;
    let newDate = new Date();
    let currentDate = newDate.getDate();
    let currentMonth = 1+newDate.getMonth();
    let currentYear = newDate.getFullYear();
    let allMonth = [31 , 28 , 31 , 30 ,31,,30,31,31,30,31,30,31]
    
    if(userDate > currentDate){
        currentDate = currentDate + allMonth[currentMonth - 1];
        currentMonth = currentMonth -1;
    }

    if(userMonth > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear -1;
    }
     let day = currentDate - userDate;
     let month = currentMonth - userMonth;
     let year = currentYear - userYear;
     document.getElementById('age').innerHTML = 'Your Age Is '+year+' Years '+month+' Months '+day+' Days';
   
}







