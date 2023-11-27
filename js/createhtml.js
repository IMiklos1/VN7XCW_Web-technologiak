function showMoreNews(){
    // Get the container where additional tickets will be added
    var additionalTicketsContainer = document.getElementById('additionalTickets');

    // Create new ticket elements
    for (var i = 0; i < 3; i++) { // Creating 3 additional tickets for demonstration purposes
        var newTicket = document.createElement('div');
        newTicket.className = 'ticket';
        newTicket.innerHTML = `
            <img class="ticket-img" src="https://hd-ebike.com/wp-content/uploads/2022/04/20220428-102651-1024x644.jpg" />
            <h2>Another Electric Bike News</h2>
            <p>Additional content goes here...</p>
            <p class="news-date">Published: November ${i + 5}, 2023</p>
            <p class="news-source">Source: Bike News Outlet</p>
        `;
        additionalTicketsContainer.appendChild(newTicket);
    }

    // Show the container with additional tickets
    additionalTicketsContainer.classList.remove('hidden');
}
