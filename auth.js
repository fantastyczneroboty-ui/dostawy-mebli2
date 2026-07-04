// Sprawdza czy użytkownik jest zalogowany. Jeśli nie — przenosi na stronę logowania.
function requireLogin() {
  if (localStorage.getItem("dm_logged_in") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("dm_logged_in");
  window.location.href = "index.html";
}
