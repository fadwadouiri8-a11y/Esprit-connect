function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let msg = document.getElementById("msg");

  if(user === "fadwa" && pass === "04959277Stic"){
    msg.innerHTML = "Login successful ✅";
    window.location.href = "courses.html";
  } else {
    msg.innerHTML = "Wrong username or password ❌";
  }
}
