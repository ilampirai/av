if (Meteor.isClient) {

  Template.videogroup.helpers({
    video: [
      { text: "This is task 1" },
	  { text: "This is task 1" },
	  { text: "This is task 1" },
	  { text: "This is task 1" },
	  { text: "This is task 1" },
	  { text: "This is task 1" },
	  { text: "This is task 1" },
	  { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
