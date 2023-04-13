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
  <title>TEMPLATE 2</title>
</head>

<style>

  body {
    background: black;
  }
#content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.8)

}

  @media only screen and (max-width: 600px) {
#content {
    transform: translate(-50%, -50%) scale(0.3)
  }
}

  </style>

<body>
  <div id="content">
  <svg width="927.3" height="72" viewBox="0 0 927.3 72" xmlns="http://www.w3.org/2000/svg" style="">
<defs>
  <linearGradient id="e" x1="40" y1="210" x2="460" y2="290" gradientUnits="userSpaceOnUse">
    <stop stop-color="red" offset="0" />
      <stop stop-color="aquamarine" offset="0.2" />
   <stop stop-color="steelblue" offset="0.5" />
    <stop stop-color="yellow" offset="0.8" />
    <stop stop-color="#6e88ff" offset="1" />
  </linearGradient>
</defs>
    <g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#6e88ff" stroke-width="1mm"
      fill="#000000" style="stroke:url(#e);stroke-width:1mm;fill:#000000">
      <path
        d="M 63 9 L 67.5 9 L 67.5 4.5 L 63 0 L 40.5 0 L 40.5 22.5 L 27 22.5 L 27 4.5 L 22.5 0 L 0 0 L 0 45 L 4.5 40.5 L 4.5 4.5 L 22.5 4.5 L 22.5 27 L 40.5 27 L 45 22.5 L 45 4.5 L 63 4.5 L 63 9 Z M 0 45 L 0 72 L 22.5 72 L 27 67.5 L 27 49.5 L 40.5 49.5 L 40.5 72 L 54 72 L 58.5 67.5 L 45 67.5 L 45 49.5 L 40.5 45 L 22.5 45 L 22.5 67.5 L 4.5 67.5 L 4.5 45 L 0 45 Z M 67.5 18 L 63 18 L 63 9 L 67.5 13.5 L 67.5 18 Z M 63 18 L 63 27 L 67.5 27 L 67.5 22.5 L 63 18 Z M 63 27 L 63 36 L 67.5 36 L 67.5 31.5 L 63 27 Z M 63 36 L 63 45 L 67.5 45 L 67.5 40.5 L 63 36 Z M 63 45 L 63 54 L 67.5 54 L 67.5 49.5 L 63 45 Z M 63 54 L 63 63 L 67.5 63 L 67.5 58.5 L 63 54 Z M 58.5 67.5 L 58.5 72 L 63 72 L 63 67.5 L 58.5 67.5 Z M 63 63 L 63 67.5 L 67.5 67.5 L 63 63 Z"
        id="0" class="qtJdmIVh_0"></path>
      <path
        d="M 95.2 72 L 72.7 72 L 72.7 54 L 77.2 54 L 77.2 45 L 81.7 40.5 L 81.7 27 L 86.2 27 L 86.2 18 L 90.7 13.5 L 90.7 9 L 95.2 4.5 L 95.2 0 L 122.2 0 L 126.7 4.5 L 131.2 4.5 L 131.2 18 L 135.7 22.5 L 135.7 31.5 L 140.2 31.5 L 140.2 45 L 144.7 49.5 L 144.7 58.5 L 149.2 58.5 L 149.2 63 L 140.2 63 L 140.2 49.5 L 135.7 45 L 135.7 36 L 131.2 36 L 131.2 22.5 L 126.7 18 L 126.7 9 L 122.2 9 L 122.2 4.5 L 99.7 4.5 L 95.2 9 L 95.2 13.5 L 90.7 18 L 90.7 31.5 L 86.2 31.5 L 86.2 40.5 L 81.7 45 L 81.7 58.5 L 77.2 58.5 L 77.2 67.5 L 95.2 67.5 L 95.2 63 L 99.7 58.5 L 122.2 58.5 L 122.2 63 L 126.7 67.5 L 144.7 67.5 L 144.7 63 L 149.2 67.5 L 144.7 72 L 122.2 72 L 122.2 67.5 L 117.7 63 L 99.7 63 L 99.7 67.5 L 95.2 72 Z M 113.2 45 L 104.2 45 L 104.2 27 L 108.7 31.5 L 108.7 27 L 113.2 31.5 L 117.7 31.5 L 117.7 40.5 L 113.2 45 Z M 108.7 36 L 108.7 40.5 L 113.2 40.5 L 113.2 36 L 108.7 36 Z"
        id="1" class="qtJdmIVh_1"></path>
      <path
        d="M 179.7 72 L 152.7 72 L 152.7 0 L 197.7 0 L 202.2 4.5 L 211.2 4.5 L 211.2 9 L 215.7 13.5 L 215.7 18 L 220.2 22.5 L 220.2 27 L 215.7 27 L 215.7 22.5 L 211.2 18 L 211.2 13.5 L 206.7 9 L 197.7 9 L 197.7 4.5 L 157.2 4.5 L 157.2 67.5 L 179.7 67.5 L 179.7 54 L 184.2 49.5 L 193.2 49.5 L 193.2 45 L 206.7 45 L 211.2 40.5 L 211.2 36 L 215.7 31.5 L 215.7 27 L 220.2 31.5 L 215.7 36 L 215.7 40.5 L 211.2 45 L 211.2 49.5 L 197.7 49.5 L 193.2 54 L 184.2 54 L 184.2 67.5 L 179.7 72 Z M 184.2 36 L 175.2 36 L 175.2 18 L 188.7 18 L 193.2 22.5 L 193.2 31.5 L 188.7 31.5 L 184.2 36 Z M 179.7 22.5 L 179.7 31.5 L 184.2 31.5 L 184.2 27 L 188.7 27 L 188.7 22.5 L 179.7 22.5 Z"
        id="2" class="qtJdmIVh_2"></path>
      <path
        d="M 250.2 72 L 223.2 72 L 223.2 0 L 268.2 0 L 272.7 4.5 L 281.7 4.5 L 281.7 9 L 286.2 13.5 L 286.2 18 L 290.7 22.5 L 290.7 27 L 286.2 27 L 286.2 22.5 L 281.7 18 L 281.7 13.5 L 277.2 9 L 268.2 9 L 268.2 4.5 L 227.7 4.5 L 227.7 67.5 L 250.2 67.5 L 250.2 54 L 254.7 49.5 L 263.7 49.5 L 263.7 45 L 277.2 45 L 281.7 40.5 L 281.7 36 L 286.2 31.5 L 286.2 27 L 290.7 31.5 L 286.2 36 L 286.2 40.5 L 281.7 45 L 281.7 49.5 L 268.2 49.5 L 263.7 54 L 254.7 54 L 254.7 67.5 L 250.2 72 Z M 254.7 36 L 245.7 36 L 245.7 18 L 259.2 18 L 263.7 22.5 L 263.7 31.5 L 259.2 31.5 L 254.7 36 Z M 250.2 22.5 L 250.2 31.5 L 254.7 31.5 L 254.7 27 L 259.2 27 L 259.2 22.5 L 250.2 22.5 Z"
        id="3" class="qtJdmIVh_3"></path>
      <path
        d="M 316.2 58.5 L 311.7 63 L 311.7 49.5 L 307.2 45 L 307.2 40.5 L 302.7 36 L 302.7 31.5 L 298.2 27 L 298.2 22.5 L 293.7 18 L 293.7 13.5 L 289.2 9 L 289.2 0 L 311.7 0 L 316.2 4.5 L 320.7 4.5 L 320.7 13.5 L 325.2 13.5 L 325.2 18 L 329.7 13.5 L 329.7 9 L 334.2 4.5 L 334.2 0 L 356.7 0 L 361.2 4.5 L 361.2 9 L 356.7 9 L 356.7 4.5 L 338.7 4.5 L 334.2 9 L 334.2 13.5 L 329.7 18 L 329.7 22.5 L 325.2 27 L 320.7 27 L 320.7 18 L 316.2 18 L 316.2 9 L 311.7 9 L 311.7 4.5 L 293.7 4.5 L 293.7 9 L 298.2 13.5 L 298.2 18 L 302.7 22.5 L 302.7 27 L 307.2 31.5 L 307.2 36 L 311.7 40.5 L 311.7 45 L 316.2 49.5 L 316.2 58.5 Z M 311.7 63 L 311.7 72 L 320.7 72 L 325.2 67.5 L 325.2 72 L 334.2 72 L 338.7 67.5 L 338.7 49.5 L 343.2 49.5 L 343.2 40.5 L 347.7 40.5 L 347.7 31.5 L 352.2 31.5 L 352.2 22.5 L 356.7 22.5 L 356.7 13.5 L 361.2 13.5 L 356.7 9 L 352.2 9 L 352.2 18 L 347.7 18 L 347.7 27 L 343.2 27 L 343.2 36 L 338.7 36 L 338.7 45 L 334.2 45 L 334.2 67.5 L 325.2 67.5 L 316.2 67.5 L 316.2 63 L 311.7 63 Z"
        id="4" class="qtJdmIVh_4"></path>
      <path
        d="M 387.8 4.5 L 383.3 0 L 383.3 72 L 437.3 72 L 441.8 67.5 L 446.3 67.5 L 446.3 63 L 450.8 58.5 L 446.3 54 L 450.8 54 L 450.8 49.5 L 446.3 45 L 446.3 54 L 446.3 58.5 L 441.8 63 L 437.3 63 L 437.3 67.5 L 387.8 67.5 L 387.8 4.5 Z M 432.8 4.5 L 392.3 4.5 L 392.3 0 L 432.8 0 L 437.3 4.5 L 446.3 4.5 L 446.3 13.5 L 450.8 13.5 L 450.8 18 L 441.8 18 L 441.8 9 L 432.8 9 L 432.8 4.5 Z M 446.3 27 L 441.8 27 L 441.8 31.5 L 437.3 36 L 441.8 40.5 L 441.8 45 L 450.8 45 L 450.8 40.5 L 446.3 40.5 L 441.8 36 L 446.3 31.5 L 450.8 31.5 L 446.3 27 Z M 410.3 58.5 L 405.8 54 L 405.8 45 L 410.3 40.5 L 419.3 40.5 L 419.3 45 L 423.8 49.5 L 423.8 58.5 L 410.3 58.5 Z M 423.8 31.5 L 410.3 31.5 L 405.8 27 L 405.8 18 L 419.3 18 L 423.8 22.5 L 423.8 31.5 Z M 414.8 45 L 410.3 45 L 410.3 54 L 419.3 54 L 419.3 49.5 L 414.8 45 Z M 419.3 22.5 L 410.3 22.5 L 410.3 27 L 419.3 27 L 419.3 22.5 Z M 450.8 27 L 446.3 27 L 446.3 18 L 450.8 22.5 L 450.8 27 Z M 392.3 4.5 L 387.8 4.5 L 387.8 0 L 392.3 4.5 Z"
        id="6" class="qtJdmIVh_5"></path>
      <path
        d="M 456.7 27 L 456.7 72 L 479.2 72 L 483.7 67.5 L 479.2 63 L 483.7 63 L 483.7 58.5 L 479.2 54 L 483.7 54 L 483.7 49.5 L 479.2 45 L 483.7 45 L 483.7 40.5 L 479.2 36 L 479.2 45 L 479.2 54 L 479.2 63 L 479.2 67.5 L 461.2 67.5 L 461.2 31.5 L 456.7 27 Z M 479.2 9 L 483.7 9 L 483.7 4.5 L 479.2 0 L 456.7 0 L 456.7 27 L 461.2 22.5 L 461.2 4.5 L 479.2 4.5 L 479.2 9 Z M 483.7 18 L 479.2 18 L 479.2 9 L 483.7 13.5 L 483.7 18 Z M 479.2 18 L 479.2 27 L 483.7 27 L 483.7 22.5 L 479.2 18 Z M 479.2 27 L 479.2 36 L 483.7 36 L 483.7 31.5 L 479.2 27 Z"
        id="7" class="qtJdmIVh_6"></path>
      <path
        d="M 556.5 27 L 561 27 L 561 22.5 L 556.5 18 L 556.5 13.5 L 552 9 L 552 4.5 L 543 4.5 L 538.5 0 L 493.5 0 L 493.5 72 L 516 72 L 520.5 67.5 L 520.5 54 L 525 54 L 525 63 L 529.5 67.5 L 529.5 72 L 556.5 72 L 561 67.5 L 556.5 63 L 556.5 58.5 L 552 58.5 L 552 63 L 556.5 67.5 L 534 67.5 L 529.5 63 L 529.5 49.5 L 520.5 49.5 L 516 54 L 516 67.5 L 498 67.5 L 498 4.5 L 538.5 4.5 L 538.5 9 L 547.5 9 L 552 13.5 L 552 18 L 556.5 22.5 L 556.5 27 Z M 534 31.5 L 520.5 31.5 L 516 27 L 516 18 L 529.5 18 L 534 22.5 L 534 31.5 Z M 552 45 L 547.5 45 L 552 40.5 L 552 36 L 556.5 31.5 L 556.5 27 L 561 31.5 L 556.5 36 L 556.5 40.5 L 552 45 Z M 547.5 45 L 547.5 54 L 552 58.5 L 552 49.5 L 547.5 45 Z M 529.5 22.5 L 520.5 22.5 L 520.5 27 L 529.5 27 L 529.5 22.5 Z"
        id="8" class="qtJdmIVh_7"></path>
      <path
        d="M 624.2 18 L 624.2 22.5 L 610.7 22.5 L 606.2 27 L 606.2 67.5 L 583.7 67.5 L 583.7 22.5 L 565.7 22.5 L 565.7 4.5 L 624.2 4.5 L 624.2 9 L 628.7 9 L 628.7 4.5 L 624.2 0 L 561.2 0 L 561.2 27 L 579.2 27 L 579.2 72 L 606.2 72 L 610.7 67.5 L 610.7 27 L 624.2 27 L 628.7 22.5 L 624.2 18 Z M 628.7 18 L 624.2 18 L 624.2 9 L 628.7 13.5 L 628.7 18 Z"
        id="9" class="qtJdmIVh_8"></path>
      <path
        d="M 696.1 9 L 700.6 9 L 700.6 4.5 L 696.1 0 L 673.6 0 L 673.6 22.5 L 660.1 22.5 L 660.1 4.5 L 655.6 0 L 633.1 0 L 633.1 45 L 637.6 40.5 L 637.6 4.5 L 655.6 4.5 L 655.6 27 L 673.6 27 L 678.1 22.5 L 678.1 4.5 L 696.1 4.5 L 696.1 9 Z M 633.1 45 L 633.1 72 L 655.6 72 L 660.1 67.5 L 660.1 49.5 L 673.6 49.5 L 673.6 72 L 687.1 72 L 691.6 67.5 L 678.1 67.5 L 678.1 49.5 L 673.6 45 L 655.6 45 L 655.6 67.5 L 637.6 67.5 L 637.6 45 L 633.1 45 Z M 700.6 18 L 696.1 18 L 696.1 9 L 700.6 13.5 L 700.6 18 Z M 696.1 18 L 696.1 27 L 700.6 27 L 700.6 22.5 L 696.1 18 Z M 696.1 27 L 696.1 36 L 700.6 36 L 700.6 31.5 L 696.1 27 Z M 696.1 36 L 696.1 45 L 700.6 45 L 700.6 40.5 L 696.1 36 Z M 696.1 45 L 696.1 54 L 700.6 54 L 700.6 49.5 L 696.1 45 Z M 696.1 54 L 696.1 63 L 700.6 63 L 700.6 58.5 L 696.1 54 Z M 691.6 67.5 L 691.6 72 L 696.1 72 L 696.1 67.5 L 691.6 67.5 Z M 696.1 63 L 696.1 67.5 L 700.6 67.5 L 696.1 63 Z"
        id="10" class="qtJdmIVh_9"></path>
      <path
        d="M 773.3 54 L 768.8 54 L 768.8 63 L 759.8 63 L 759.8 67.5 L 714.8 67.5 L 714.8 4.5 L 755.3 4.5 L 755.3 9 L 764.3 9 L 768.8 13.5 L 768.8 18 L 777.8 18 L 777.8 13.5 L 773.3 13.5 L 768.8 9 L 768.8 4.5 L 759.8 4.5 L 755.3 0 L 710.3 0 L 710.3 72 L 759.8 72 L 764.3 67.5 L 773.3 67.5 L 773.3 58.5 L 777.8 58.5 L 773.3 54 Z M 746.3 54 L 732.8 54 L 732.8 18 L 746.3 18 L 750.8 22.5 L 750.8 27 L 755.3 31.5 L 755.3 40.5 L 750.8 45 L 750.8 49.5 L 746.3 54 Z M 737.3 22.5 L 737.3 49.5 L 746.3 49.5 L 746.3 45 L 750.8 40.5 L 750.8 31.5 L 746.3 27 L 746.3 22.5 L 737.3 22.5 Z M 777.8 27 L 773.3 27 L 773.3 18 L 777.8 22.5 L 777.8 27 Z M 773.3 27 L 773.3 36 L 777.8 36 L 777.8 31.5 L 773.3 27 Z M 773.3 36 L 773.3 45 L 777.8 45 L 777.8 40.5 L 773.3 36 Z M 773.3 45 L 773.3 54 L 777.8 54 L 777.8 49.5 L 773.3 45 Z"
        id="11" class="qtJdmIVh_10"></path>
      <path
        d="M 802.3 72 L 779.8 72 L 779.8 54 L 784.3 54 L 784.3 45 L 788.8 40.5 L 788.8 27 L 793.3 27 L 793.3 18 L 797.8 13.5 L 797.8 9 L 802.3 4.5 L 802.3 0 L 829.3 0 L 833.8 4.5 L 838.3 4.5 L 838.3 18 L 842.8 22.5 L 842.8 31.5 L 847.3 31.5 L 847.3 45 L 851.8 49.5 L 851.8 58.5 L 856.3 58.5 L 856.3 63 L 847.3 63 L 847.3 49.5 L 842.8 45 L 842.8 36 L 838.3 36 L 838.3 22.5 L 833.8 18 L 833.8 9 L 829.3 9 L 829.3 4.5 L 806.8 4.5 L 802.3 9 L 802.3 13.5 L 797.8 18 L 797.8 31.5 L 793.3 31.5 L 793.3 40.5 L 788.8 45 L 788.8 58.5 L 784.3 58.5 L 784.3 67.5 L 802.3 67.5 L 802.3 63 L 806.8 58.5 L 829.3 58.5 L 829.3 63 L 833.8 67.5 L 851.8 67.5 L 851.8 63 L 856.3 67.5 L 851.8 72 L 829.3 72 L 829.3 67.5 L 824.8 63 L 806.8 63 L 806.8 67.5 L 802.3 72 Z M 820.3 45 L 811.3 45 L 811.3 27 L 815.8 31.5 L 815.8 27 L 820.3 31.5 L 824.8 31.5 L 824.8 40.5 L 820.3 45 Z M 815.8 36 L 815.8 40.5 L 820.3 40.5 L 820.3 36 L 815.8 36 Z"
        id="12" class="qtJdmIVh_11"></path>
      <path
        d="M 882.3 58.5 L 877.8 63 L 877.8 49.5 L 873.3 45 L 873.3 40.5 L 868.8 36 L 868.8 31.5 L 864.3 27 L 864.3 22.5 L 859.8 18 L 859.8 13.5 L 855.3 9 L 855.3 0 L 877.8 0 L 882.3 4.5 L 886.8 4.5 L 886.8 13.5 L 891.3 13.5 L 891.3 18 L 895.8 13.5 L 895.8 9 L 900.3 4.5 L 900.3 0 L 922.8 0 L 927.3 4.5 L 927.3 9 L 922.8 9 L 922.8 4.5 L 904.8 4.5 L 900.3 9 L 900.3 13.5 L 895.8 18 L 895.8 22.5 L 891.3 27 L 886.8 27 L 886.8 18 L 882.3 18 L 882.3 9 L 877.8 9 L 877.8 4.5 L 859.8 4.5 L 859.8 9 L 864.3 13.5 L 864.3 18 L 868.8 22.5 L 868.8 27 L 873.3 31.5 L 873.3 36 L 877.8 40.5 L 877.8 45 L 882.3 49.5 L 882.3 58.5 Z M 877.8 63 L 877.8 72 L 886.8 72 L 891.3 67.5 L 891.3 72 L 900.3 72 L 904.8 67.5 L 904.8 49.5 L 909.3 49.5 L 909.3 40.5 L 913.8 40.5 L 913.8 31.5 L 918.3 31.5 L 918.3 22.5 L 922.8 22.5 L 922.8 13.5 L 927.3 13.5 L 922.8 9 L 918.3 9 L 918.3 18 L 913.8 18 L 913.8 27 L 909.3 27 L 909.3 36 L 904.8 36 L 904.8 45 L 900.3 45 L 900.3 67.5 L 891.3 67.5 L 882.3 67.5 L 882.3 63 L 877.8 63 Z"
        id="13" class="qtJdmIVh_12"></path>
    </g>
    <style data-made-with="vivus-instant">
      .qtJdmIVh_0 {
        stroke-dasharray: 747 749;
        stroke-dashoffset: 748;
        animation: qtJdmIVh_draw_0 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_1 {
        stroke-dasharray: 641 643;
        stroke-dashoffset: 642;
        animation: qtJdmIVh_draw_1 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_2 {
        stroke-dasharray: 600 602;
        stroke-dashoffset: 601;
        animation: qtJdmIVh_draw_2 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_3 {
        stroke-dasharray: 600 602;
        stroke-dashoffset: 601;
        animation: qtJdmIVh_draw_3 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_4 {
        stroke-dasharray: 593 595;
        stroke-dashoffset: 594;
        animation: qtJdmIVh_draw_4 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_5 {
        stroke-dasharray: 758 760;
        stroke-dashoffset: 759;
        animation: qtJdmIVh_draw_5 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_6 {
        stroke-dasharray: 404 406;
        stroke-dashoffset: 405;
        animation: qtJdmIVh_draw_6 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_7 {
        stroke-dasharray: 683 685;
        stroke-dashoffset: 684;
        animation: qtJdmIVh_draw_7 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_8 {
        stroke-dasharray: 525 527;
        stroke-dashoffset: 526;
        animation: qtJdmIVh_draw_8 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_9 {
        stroke-dasharray: 747 749;
        stroke-dashoffset: 748;
        animation: qtJdmIVh_draw_9 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_10 {
        stroke-dasharray: 726 728;
        stroke-dashoffset: 727;
        animation: qtJdmIVh_draw_10 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_11 {
        stroke-dasharray: 641 643;
        stroke-dashoffset: 642;
        animation: qtJdmIVh_draw_11 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      .qtJdmIVh_12 {
        stroke-dasharray: 593 595;
        stroke-dashoffset: 594;
        animation: qtJdmIVh_draw_12 13450ms linear 0ms infinite, qtJdmIVh_fade 13450ms linear 0ms infinite;
      }

      @keyframes qtJdmIVh_draw {
        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_fade {
        0% {
          stroke-opacity: 1;
        }

        97.02602230483271% {
          stroke-opacity: 1;
        }

        100% {
          stroke-opacity: 0;
        }
      }

      @keyframes qtJdmIVh_draw_0 {
        0.37174721189591076% {
          stroke-dashoffset: 748
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_1 {
        0.37174721189591076% {
          stroke-dashoffset: 642
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_2 {
        0.37174721189591076% {
          stroke-dashoffset: 601
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_3 {
        0.37174721189591076% {
          stroke-dashoffset: 601
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_4 {
        0.37174721189591076% {
          stroke-dashoffset: 594
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_5 {
        0.37174721189591076% {
          stroke-dashoffset: 759
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_6 {
        0.37174721189591076% {
          stroke-dashoffset: 405
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_7 {
        0.37174721189591076% {
          stroke-dashoffset: 684
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_8 {
        0.37174721189591076% {
          stroke-dashoffset: 526
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_9 {
        0.37174721189591076% {
          stroke-dashoffset: 748
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_10 {
        0.37174721189591076% {
          stroke-dashoffset: 727
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_11 {
        0.37174721189591076% {
          stroke-dashoffset: 642
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes qtJdmIVh_draw_12 {
        0.37174721189591076% {
          stroke-dashoffset: 594
        }

        74.72118959107806% {
          stroke-dashoffset: 0;
        }

        100% {
          stroke-dashoffset: 0;
        }
      }
    </style>
  </svg>
  </div>
</body>
</html>
  `)
}
