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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <title>TEMPLATE 3</title>

  <style>
    body {
      background-color: black;
    }

    #content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      color: lime;
    }

      @media only screen and (max-width: 600px) {
#content {
    font-size: 0.3rem;
  }
}
  </style>
</head>

<body>

  <div id="content">
    <pre class="animate__animated animate__flash animate__repeat-3">


//eslint-disable
 ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄    ▄       ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄ //eslint-disable-line
▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░▌  ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌ //eslint-disable-line
 ▀▀▀▀█░█▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░▌ ▐░▌      ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌ //eslint-disable-line
     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌▐░▌       ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌ //eslint-disable-line
     ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌▐░▌░▌        ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌       ▐░▌ //eslint-disable-line
     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░▌         ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌ //eslint-disable-line
     ▐░▌     ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▐░▌ ▐░▌▐░▌░▌         ▀▀▀▀█░█▀▀▀▀ ▐░▌       ▐░▌▐░▌       ▐░▌ //eslint-disable-line
     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌    ▐░▌▐░▌▐░▌▐░▌            ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌ //eslint-disable-line
     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌     ▐░▐░▌▐░▌ ▐░▌           ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌ //eslint-disable-line
     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌      ▐░░▌▐░▌  ▐░▌          ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌ //eslint-disable-line
      ▀       ▀         ▀  ▀         ▀  ▀        ▀▀  ▀    ▀            ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ //eslint-disable-line


  </pre>
  </div>

</body>

</html>

<!-- <h1>Thank You template 1</h1> -->
  `)
}
