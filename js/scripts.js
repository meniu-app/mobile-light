'use strict';

$(document).ready(function() {
  const API_URL = 'https://meniu-server-dev.herokuapp.com/api/v1/';
  const PREFIX = {
    restaurants: 'restaurants/',
  };
  const STATUS = { success: 'success', error: 'error' };

  const populateRestaurantsList = function(data) {
    let result = '';
    if (data && data.length) {
      data.forEach(function(item) {
        let restaurantContent = '';
        if (item && item.id) {
          restaurantContent = '<li class="list-group-item">' +
            '<a href="./restaurant.html?restaurant=' + item.id + '" class="restaurant--card__item m-2">' +
              '<div class="row">' +
                '<div class="col-8">' +
                  '<h5 class="mb-2">' + item.name + '</h5>' +
                  '<p class="mb-2">' + item.address + '</p>' +
                '</div>' +
                '<div class="col-4">' +
                  '<img src="' + item.logo_url + '" alt="' + item.name + '" class="image--restaurant">' +
                '</div>' +
              '</div>' +
            '</a>' +
          '</li>';
        }
        result += restaurantContent;
      });
    }
    return '<ul class="list-group mt-3">' + result + '</ul>';
  }

  $.get(API_URL + PREFIX.restaurants, function(data, status) {
    if (status === STATUS.success) {
      $("#root").html(populateRestaurantsList(data));
    }
  });

});
