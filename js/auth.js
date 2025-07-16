function checkLogin() {
  return localStorage.getItem("loggedIn") === "true";
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
  window.location.href = "index.html";
}

// Bu fonksiyonu EKLE!
function handleForumClick(event) {
  if (event) event.preventDefault(); // <-- bu satır çok önemli!

  const isLoggedIn = checkLogin();
  if (isLoggedIn) {
    window.location.href = "forum.html";
  } else {
    alert("Z2Forum'a erişmek için giriş yapmalısınız.");
    window.location.href = "login.html";
  }
}

