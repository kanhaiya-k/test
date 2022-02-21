

function appendData_product(value) {
    products.innerHTML = "";

    value.forEach((ele) => {
        let giftBox = document.createElement("div");
        giftBox.className = "giftBox"

        let imageDiv = document.createElement("div");
        imageDiv.className = "imageDiv"

        let image1 = document.createElement("img");
        image1.className = "image1"
        image1.src = ele.imageUrl[0];

        let image2 = document.createElement("img");
        image2.className = "image2"
        image2.src = ele.discountSticker;

        imageDiv.append(image1, image2)

        let nameDiv = document.createElement("div")

        let name = document.createElement("h3");

        name.innerText = ele.name;
        nameDiv.append(name)

        let priceDiv = document.createElement("div");

        let acPrice = document.createElement("p");
        acPrice.className = "acPrice"
        acPrice.innerText = ele.cutPrice;

        let fPrice = document.createElement("p");
        fPrice.innerText = ele.price;

        priceDiv.append(acPrice, fPrice)
        giftBox.append(imageDiv, nameDiv, priceDiv)

        let cartDiv = document.createElement("div");

        let cart = document.createElement("p");
        cart.innerText = "ADD TO CART"


        cartDiv.append(cart)
        let wrapper = document.createElement("div");
        wrapper.className = "wrapper"
        wrapper.append(giftBox, cartDiv)

        cartDiv.addEventListener("click", () => {

            let cartData = JSON.parse(localStorage.getItem("cartDataLocal")) || [];
            cartData.push(ele)
            localStorage.setItem("cartDataLocal", JSON.stringify(cartData))
            // window.location.href = "../html/cart.html"
        })

        giftBox.addEventListener("click", () => {
            localStorage.setItem("singleData", JSON.stringify(ele));
            window.location.href = "../html/view.html"
            console.log("check")
        })



        products.append(wrapper);


    })


}

export default appendData_product;