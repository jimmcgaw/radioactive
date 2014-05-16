if (Meteor.isClient) {

  // ROUTES ///
  /**
  * Routing
  */
  Router.map(function() {
    this.route('home', {path: '/'});
  });
  // /ROUTES //


  Template.hello.greeting = function () {
    return "Welcome to radioactive.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  /** @jsx React.DOM */
  var HelloMessage = React.createClass({
    render: function() {
      return '<div>Hello {this.props.name}</div>';
    }
  });

  Template.person.rendered = function(){
    /** @jsx React.DOM */
    React.renderComponent(
      '<h1>Hello, cerdos!</h1>',
      document.getElementById('example')
    );
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
