document.getElementById("regForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    document.getElementById("message").innerHTML =
    "Registration Successful! Welcome " + name;
});
