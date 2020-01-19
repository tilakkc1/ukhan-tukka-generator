fetch('http://192.168.43.7:8888/api/ukhan-list')
    .then(function (blob) {
        return blob.json();
    })
    .then(ukhanItems)
    .catch(function (err){
        console.log(err);
        const container = document.querySelector(".container");
        container.textContent = "Network Error, Please Connect and Try Again";
        container.style.color = "#FF0000";
        container.align = "center";
    })
function ukhanItems(responce) {
    Ukhan.innerHTML = responce[0];
    const click = document.querySelector("#Button");
    click.addEventListener('click', function () {
        const Ukhan = document.querySelector("#Ukhan");
        const randomUkhan = Math.floor(Math.random() * responce.length);
        ukhanTukks = responce[randomUkhan]
        Ukhan.innerHTML = ukhanTukks;
    });
}
//AD TO BS And Vice Versa
//Currency Convetor