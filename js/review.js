document.addEventListener("DOMContentLoaded", function () {
  const reviewForm = document.getElementById("review-form");
  const reviewsContainer = document.getElementById("reviews");

  reviewForm.addEventListener("submit", function () {
      getreview()
  });
function getreview(){
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  //Отправляю запрос на сервер с отзывами
  const apiUrl = "https://provence-backend.onrender.com/provence/reviews/add";

  const review = {
    reviewersName: name,
    review: comment,
  };

  const getData = (method, url, review) => {
    const headers = {
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: method,
      body: JSON.stringify(review),
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Что то пошло не так");
        }
      })
      .then((dat) => console.log(dat))
      .catch((error) => console.log(error.message));
  };
  getData("POST", apiUrl, review);
  setTimeout(() => {
    location.reload()
  }, 600); 

}
  // Принимаем запрос с сервера и выводим его на страницу
  const fetchDataServer = () => {
    fetch("https://provence-backend.onrender.com/provence/reviews")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Что то пошло не так");
        }
      })
      .then((data) => {
        displayFetch(data);
      })
      .catch((error) => console.log(error.massage));
  };

  fetchDataServer();

  const displayFetch = (data) => {
    data.forEach((review) => {
      const reviewElement = document.createElement("div");
      reviewElement.classList.add("review");

      const nameElement = document.createElement("strong");
      nameElement.textContent = `${review.reviewersName}`;

      const commentElement = document.createElement("p");
      commentElement.textContent = `${review.review}`;

      reviewElement.appendChild(nameElement);
      reviewElement.appendChild(commentElement);

      reviewsContainer.appendChild(reviewElement);
    });
  };

  // Авторизация по почте для публикаций отзыва
  const kodModalBtn = document.querySelector("#email-btn");
  const emailKodForm = document.querySelector("#kod-podtverd");

  kodModalBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const emailRequest = document.querySelector("#email-request").value;

    const url =
      "https://provence-backend.onrender.com/provence/orders/verificate";

    const email = {
      email: emailRequest,
    };

    const dataEmail = (method, url, email) => {
      const headers = {
        "Content-Type": "application/json",
      };

      fetch(url, {
        method: method,
        body: JSON.stringify(email),
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Что то пошло не так");
          }
        })
        .then((data) => alert("Если вы не видите код в почте проверьте папку СПАМ."))
        .catch((error) => console.log(error.message));
    };

    dataEmail("POST", url, email);
  });

  // Запрос на отправку кода
  emailKodForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailKod = document.querySelector("#kodi").value;

    const url = "https://provence-backend.onrender.com/provence/orders/code";

    const kod = emailKod;

    const dataKod = (method, url, kod) => {
      const headers = {
        "Content-Type": "application/json",
      };

      fetch(url, {
        method: method,
        body: JSON.stringify(kod),
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Что то пошло не так");
          }
        })
        .then((data) => {
          if (data === true) {
            console.log(data);

            localStorage.setItem("isAuthorized", "true");
            getreview()
          } else {
            alert("Подтверждение не удалось. Проверьте код подтверждения.");
          }
        })
        .catch((error) => console.error(error));
    };

    dataKod("POST", url, kod);
  });

  //Функционал модалки
  const reviewButton = document.querySelector("[data-review-button]");
  const modalPodd = document.querySelector("[data-modal-podd]");
  const closeMod = document.querySelector("[data-modal-kod-close]");

  const autoriBtn = document.querySelector(".autoriBtn");
  const isAuthorized = localStorage.getItem("isAuthorized");

  //Проверяем авторизован ли пользователь
  if (isAuthorized === null) {
    reviewButton.classList.add("hidden");
    autoriBtn.classList.remove("hidden");

    autoriBtn.addEventListener("click", function () {
      modalPodd.classList.remove("hidden");
    });
  } else if (isAuthorized === "true") {
    reviewButton.classList.remove("hidden");
  } else {
    reviewButton.classList.add("hidden");
  }

  closeMod.addEventListener("click", function () {
    modalPodd.classList.add("hidden");
  });
});
