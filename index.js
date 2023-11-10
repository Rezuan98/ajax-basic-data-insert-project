var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var url = "insert.php";
    var data = {user_name:name,user_email:email};

    axios.post(url,data)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})