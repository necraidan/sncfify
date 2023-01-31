const icon = "icons/train.png";
const title = "Alerte dispo train direct";

const sendNotification = (title, body) => {
  if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    const notification = new Notification(title, { body, icon });
  } else {
    Notification.requestPermission((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification(title, { body, icon });
      }
    });
  }
};

const titleScroller = (text) => {
  document.title = text;
  setTimeout(() => {
    titleScroller(text.substr(1) + text.substr(0, 1));
  }, 1000);
};

setTimeout(() => {
  const test = Array.from(
    document.querySelectorAll(
      '[data-test="proposal-card"] [data-test="transporters"]'
    )
  ).some((node) => node.innerText.indexOf("correspondance") === -1);
  console.log(test);

  const body = test
    ? "Incroyable, au moins 1 train direct !"
    : "Il n'y a pas de trains direct...";
  console.log(new Date());
  console.log(title);
  console.log(body);

  sendNotification(title, body);
  titleScroller(body);
}, 2000);

setTimeout(() => {
  location.reload();
}, 1200000);
