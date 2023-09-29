document.addEventListener("DOMContentLoaded", function () {
  const reviewForm = document.getElementById("review-form");
  const reviewsContainer = document.getElementById("reviews");

  reviewForm.addEventListener("submit", function () {
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
  });

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
});
