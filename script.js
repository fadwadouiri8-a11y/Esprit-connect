function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let msg = document.getElementById("msg");

  if(user === "student" && pass === "1234"){
    msg.innerHTML = "Login success ✅";
    window.location.href = "dashboard.html";
  } else {
    msg.innerHTML = "Login failed ❌";
  }
}

function apply() {
  alert("Candidature envoyée ✅");
}
