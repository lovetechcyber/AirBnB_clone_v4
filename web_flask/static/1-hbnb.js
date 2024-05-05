$(document).ready(function() {
    // Define a variable to store checked amenity IDs
    var checkedAmenities = [];

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).parent().data('id');
        var amenityName = $(this).parent().data('name');
        
        // If the checkbox is checked, store the Amenity ID
        if ($(this).prop('checked')) {
            checkedAmenities.push(amenityId);
        } else { // If the checkbox is unchecked, remove the Amenity ID
            var index = checkedAmenities.indexOf(amenityId);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }
        
        // Update the h4 tag inside the div Amenities with the list of checked amenities
        var checkedAmenitiesList = "";
        checkedAmenities.forEach(function(amenity) {
            checkedAmenitiesList += "<li>" + amenityName + "</li>";
        });
        $('#checkedAmenities').html(checkedAmenitiesList);
    });
});
