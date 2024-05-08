
function getCurrentDateTime() {
   
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  
    function updateTime() {
      
        var currentDate = new Date();
        var day = days[currentDate.getDay()];
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();

      
        var period = (hours >= 12) ? 'PM' : 'AM';
        hours = (hours > 12) ? hours - 12 : hours;

        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        var currentTime = hours + ' ' + period + ' : ' + minutes + ' : ' + seconds;

        document.getElementById('day').textContent = day;
        document.getElementById('time').textContent = currentTime;
    }
    updateTime();
    setInterval(updateTime, 1000);
}

getCurrentDateTime();








