
function submit(){
//get the input
var input = document.getElementById("albumTitle").value;
//save the data to local storage
localStorage.setItem("Album Title", input);
console.log(localStorage.getItem("Album Title"))
}
//link to myreview page
function mreviews(){
    document.location.href = "../myreview/myreview.html";
}

// var input = document.getElementById("#albumTitle");
// localStorage.setItem("albumTitle",input)

// // Check browser support
// if (typeof(Storage) != "undefined") {
//     // Retrieve
//     document.getElementById("#albumTitle").innerHTML = localStorage.getItem("albumTitle");
//         // Store
//     localStorage.setItem("albumTitle", "Smith");
// } else {
//     document.getElementById("#albumTitle").innerHTML = "Sorry, your browser does not support Web Storage...";
// }
