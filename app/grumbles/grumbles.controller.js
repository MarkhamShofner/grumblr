var app = angular.module('grumble');
app.controller("grumblesController", function() {
  this.grumbles = [{
    title: "title1",
    author_name: "Name1",
    content: "1this is content",
    photo_url: "1.com"
  }, {
    title: "title2",
    author_name: "Name2",
    content: "2this is content",
    photo_url: "2.com"
  }, {
    title: "title3",
    author_name: "Name3",
    content: "3this is content",
    photo_url: "3.com"
  }, {
    title: "title4",
    author_name: "Name4",
    content: "4this is content",
    photo_url: "4.com"
  }, {
    title: "title5",
    author_name: "Name5",
    content: "5this is content",
    photo_url: "5.com"
  }, ];
  this.formIsVisible = false;
  this.toggleForm = function() {
    if (this.formIsVisible) {
      this.formIsVisible = false;
    } else {
      this.formIsVisible = true;
    }
  };
});
