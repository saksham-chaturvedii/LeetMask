let username = document.title;

username = username.replace(" - LeetCode Profile", "");
if (window.location.pathname === `/${username}/`) {
  alert("yo");
}