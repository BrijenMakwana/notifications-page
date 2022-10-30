const totalUnreadNotifications = document.getElementById("total-notifications");
const markAllRead = document.getElementById("mark-all-read");
const notificationContainer = document.querySelectorAll("div.unread");

markAllRead.addEventListener("click", () => {
  totalUnreadNotifications.innerHTML = 0;
  notificationContainer.forEach((item) => item.classList.remove("unread"));
});
