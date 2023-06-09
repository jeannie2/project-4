// pages/api/embed/[id].js
export default (req, res) => {
  res.setHeader('content-type', 'text/html')
  res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Codystar&display=swap" rel="stylesheet">
  <title>TEMPLATE 1</title>

  <style>
    body {
      background-image: url('https://i.imgur.com/F8ebbX1.jpg');
      background-size: cover;

    }

    #content {
      position: absolute;

      left: 30%;
      top: 60%;
      transform: translate(-30%, -60%) rotate(5deg);
      width: 50vw;
      height: 40vh;

      text-align: center;
    }

    h1 {

      font-size: 5em;
      color: black;
      font-family: impact;
      position: relative;
      top: 10%;
      transform: translateY(-10%);
       /*  animation:  glow 0.5s ease-in-out infinite alternate; */
    }


    @keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #ccee4f, 0 0 50px #e60073, 0 0 60px #eadb38, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #76c144, 0 0 70px #e5ffbb, 0 0 80px blue;
  }
}

span {
  font-size: 3rem;
}

  </style>
</head>
<body>

  <div id="content">
<span class="animate__animated animate__heartBeat">&#x2606; &#x2606; &#x2606; &#x2606; &#x2606;</span>
    <h1 class="animate__animated animate__zoomIn">Congratulations!</h1>
  </div>
</body>
</html>

<!--<h1>Congrats template 1</h1> -->

  `)
}
