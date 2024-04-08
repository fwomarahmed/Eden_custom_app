$(document).ready(function () {
  // Select the search input element
  var searchInput = $("#navbar-search");

  if (searchInput.length > 0) {
    // If the search input element exists, set its placeholder attribute
    searchInput.attr("placeholder", "Eden Search");
  }

  // Select the navbar brand element
  var $navbarBrand = $(".navbar-brand");

  // Append the text next to the logo image
  $navbarBrand.append("<span> Eden ERP</span>");




    // Select the heart icon element
    var $heartIcon = $('.like-icon');
console.log($heartIcon);
    // Replace the heart icon with the star icon
    $heartIcon.attr('href', '#icon-star');
    $heartIcon.attr('class', 'bg-info');
});
