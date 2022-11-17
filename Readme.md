<!DOCTYPE html>
<html lang="en">
<head>
 
</head>
   
  h1.heading{
    color: blueviolet;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    animation: color-change 1s infinite alternate;
  }

<body>
    <div>
     <h1 class="heading"> Welcome To The Website</h1>
      <label for="mood">Input Mood:</label> <br />
       <input type="text" id="mood" />
       <button onclick="getMood()">Get Mood</button>
       <button onclick="setMood()">Set Mood</button>
    </div>
</body>
</html>
