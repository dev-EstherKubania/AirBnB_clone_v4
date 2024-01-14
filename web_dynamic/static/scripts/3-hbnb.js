$(document).ready(function () {
    const apiUrl = 'http://0.0.0.0:5001/api/v1/places_search/';

    // Function to update places based on the API response
    function updatePlaces() {
        // Send a POST request to the API endpoint
        $.ajax({
            url: apiUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: function (data) {
                // Clear existing places
                $('.places').empty();

                // Loop through the results and create article tags
                data.forEach(function (place) {
                    const placeHtml = `<article>
                                          <h2>${place.name}</h2>
                                          <p>${place.description}</p>
                                          <!-- Add other details as needed -->
                                      </article>`;
                    $('.places').append(placeHtml);
                });
            },
            error: function () {
                console.error('Error fetching places');
            }
        });
    }

    // Call the function to update places initially
    updatePlaces();

    // Set an interval to periodically update places
    setInterval(updatePlaces, 5000); // Update every 5 seconds
});

