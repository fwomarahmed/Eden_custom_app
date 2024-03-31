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
});
