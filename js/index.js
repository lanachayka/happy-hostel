let rooms;

async function fetchRooms() {
     const response = await fetch("rooms.json");
     rooms = await response.json();
     renderRooms();
}

fetchRooms();

function renderRooms() {
  const roomsContainer = document.querySelector(".rooms-list");
  roomsContainer.innerHTML = "";
  for (const room of rooms) {
    roomsContainer.innerHTML += `
            <article class="rooms-article">
                <img class="rooms-photo" src="${room.photo}" alt="${room.category}">
                <h3 class="rooms-category">${room.category}</h3>
                <p class="rooms-price-night"><span class="rooms-price">from $${room.price}</span>/ Night/ Person</p>
                <p class="rooms-description">${room.description}</p>
                <a href="#book-now" class="rooms-button">BOOK NOW</a>
            </article>`;
  }
}

renderRooms();


