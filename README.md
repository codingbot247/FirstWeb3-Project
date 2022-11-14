<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Made with love in India for WEB3</title>
</head>
    <style>body {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  h1.heading{
    color: blueviolet;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    animation: color-change 1s infinite alternate;
  }

  div {
    width: 20%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }


  button {
    width: 100%;
    margin: 10px 0px 5px 0px;
    border-radius: 4%;
    border-color: aqua;
  }
    </style>
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
