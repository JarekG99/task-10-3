// scripts.js

$(function() {
  var carouselList = $("#carousel ul");
  var change = setInterval(changeSlide(), 3000);

  function changeSlide() {
    $(carouselList).animate({'marginLeft':-400}, 1000, moveSlide())
  };
  function moveSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    $(carouselList.lastItem).after("firstItem");
    $(carouselList).css({marginLeft:0});
  };
});
