const Methods = {
  init() {
    Methods.showPopup();

    setTimeout(() => {
      Methods.isLogged();
    }, 1000);
  },

  isLogged() {
    const login = document.querySelector(".j-list-login");
    const account = document.querySelector(".j-popup-user");
    const userName = document.querySelector(".js--user-name");

    for (var i = 0; i < dataLayer.length; i++) {
      if (dataLayer[i].visitorLoginState) {
        account.classList.add("is--active");
        login.classList.add("is--inactive");

        userName.textContent = dataLayer[i].visitorContactInfo[1];
      }
    }
  },

  showPopup() {
    const popup = document.querySelector(".j-list-user");
    const btn = document.querySelector(".j-open-popup__account");

    btn.addEventListener("click", () => {
      popup.classList.toggle("is--active");
    });
  }
};

export default {
  init: Methods.init
};
