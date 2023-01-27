(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
    var items1 = document.querySelectorAll(".luncher-timeline li");
    var items2 = document.querySelectorAll(".rocket");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
    function callbackFunc2() {
      for (var i = 0; i < items2.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = items2[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            items2[i].classList.add("active");
          } else {
            items2[i].classList.remove("active");
          }
       
      }
    }
    function callbackFunc1() {
       

      for (var i = 0; i < items1.length; i++) {
        if (isElementInViewport(items1[i])) {
          items1[i].classList.add("in-view");
        }
      }
    }
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }

      }
  
    // listen for events
    window.addEventListener("load", callbackFunc1);
    window.addEventListener("resize", callbackFunc1);
    window.addEventListener("scroll", callbackFunc1);
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    window.addEventListener("scroll", callbackFunc2);
    window.addEventListener("scroll", reveal);
  })();
  
