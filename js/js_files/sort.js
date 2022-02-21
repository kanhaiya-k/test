import appendData_product from "./combo.js"
function sort(data) {
    document.querySelector("select").addEventListener("change", () => {
        let value = document.getElementById("sort").value;
        if (value == "high_to_low") {
            data.sort((a, b) => {
                a = a.price.split("");
                a.shift();
                a = +a.join("")
                // console.log(a)
                b = b.price.split("");
                b.shift();
                b = +b.join("")
                //console.log(a)
                return b - a
            })
            appendData_product(data)
        }
        else if (value == "low_to_high") {
            data.sort((a, b) => {
                data.sort((a, b) => {
                    a = a.price.split("");
                    a.shift();
                    a = +a.join("")
                    // console.log(a)
                    b = b.price.split("");
                    b.shift();
                    b = +b.join("")
                    //console.log(a)
                    console.log(a)
                    return a - b
                })
            })
            appendData_product(data)

        }
    });
}

export default sort;