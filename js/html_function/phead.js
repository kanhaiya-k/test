function productHead() {
  return ` <div id="nav2Container">
    <a href="../landing/landing.html" >
    <img style="width: 120px; height:30px; margin-top:40px"
      class="nav2Img"
      id="logoHeader"
      src="https://www.beardo.in/images/logo-white.png"
  /></a>
  
      <h4 id="show">Products</h4>
      <h4>Concerns</h4>
      <input id="search" type="text" placeholder="Search" />
  
      <div id="logo">
        <div class="hLogo">
          <img
            class="nav2Img"
            src="https://www.beardo.in/images/vip-text.svg"
            alt=""
          />
          <img
            class="nav2Img"
            src="https://www.beardo.in/images/wallet-text.svg"
            alt=""
          />
          <a href="./cart.html">
          <img style="width: 50px"
            class="bag"
            id="check"
            src="https://www.beardo.in/images/home-2018-05-cart.png"
            alt=""
          />
        </a>
        </div>
      </div>
    </div>
    `
}

export default productHead