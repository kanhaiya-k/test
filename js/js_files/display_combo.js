import appendData_product from "./combo.js"
import sort from "./sort.js"


function display_combo(data) {

    document.getElementById("result").innerHTML = `<p style="color: red; font-size: 20px; font-weight: bold;">${data.length} RESULT</p>`

    let details = document.getElementById("details");
    sort(data)

    // top seller
    let top_seller = document.createElement("div");
    top_seller.setAttribute("class", "detail_div");

    let image_1_div = document.createElement("div");
    image_1_div.setAttribute("class", "image_container");
    let image_1 = document.createElement("img");
    image_1.src = data[0].imageUrl[0];
    image_1_div.append(image_1);

    let name_1_div = document.createElement("div");
    name_1_div.setAttribute("class", "name_container");
    let name_1 = document.createElement("p");
    name_1.innerText = "Top Sellers";
    name_1_div.append(name_1);

    top_seller.append(image_1_div, name_1_div);
    top_seller.addEventListener("click", () => {
        appendData_product(data)
        sort(data)
    })

    //below 999
    let below_999 = document.createElement("div");
    below_999.setAttribute("class", "detail_div");

    let image_2_div = document.createElement("div");
    image_2_div.setAttribute("class", "image_container");
    let image_2 = document.createElement("img");
    image_2.src = data[1].imageUrl[0];
    image_2_div.append(image_2);
    let name_2_div = document.createElement("div");
    name_2_div.setAttribute("class", "name_container");
    let name_2 = document.createElement("p");
    name_2.innerText = "Below 999 Combos";
    name_2_div.append(name_2);

    below_999.append(image_2_div, name_2_div);
    below_999.addEventListener("click", () => {
        let arr = []
        data.forEach((ele) => {

            let a = ele.price.split("");
            a.shift();
            a = +a.join("")
            if (a <= 999) {
                arr.push(ele);
            }

        })
        document.getElementById("result").innerHTML = `<p style="color: red; font-size: 20px; font-weight: bold;">${arr.length} RESULT</p>`
        console.log(arr)
        appendData_product(arr)
        sort(arr)
    })



    // below 499

    let below_499 = document.createElement("div");
    below_499.setAttribute("class", "detail_div");

    let image_3_div = document.createElement("div");
    image_3_div.setAttribute("class", "image_container");
    let image_3 = document.createElement("img");
    image_3.src = data[1].imageUrl[4];
    image_3_div.append(image_3);
    let name_3_div = document.createElement("div");
    name_3_div.setAttribute("class", "name_container");
    let name_3 = document.createElement("p");
    name_3.innerText = "Below 999 Combos";
    name_3_div.append(name_3);

    below_499.append(image_3_div, name_3_div);
    below_499.addEventListener("click", () => {
        let arr = []
        data.forEach((ele) => {

            let a = ele.price.split("");
            a.shift();
            a = +a.join("")
            if (a <= 499) {
                arr.push(ele);
            }

        })
        document.getElementById("result").innerHTML = `<p style="color: red; font-size: 20px; font-weight: bold;">${arr.length} RESULT</p>`
        console.log(arr)
        appendData_product(arr)
        sort(arr)
    })

    details.append(top_seller, below_999, below_499);

}

export default display_combo;