function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if(user && pass){
    alert("Login successful!");
    window.location.href = "forum.html";
  } else {
    alert("Fill all fields!");
  }
}

function addPost() {
  let text = document.getElementById("post").value;
  let posts = document.getElementById("posts");

  if(text){
    posts.innerHTML += "<p>" + text + "</p>";
  }
}
