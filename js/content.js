$(document).ready(function(){
/*  var data = [
      { 
        parter: 'Disneyland',
        hasRead: '1',
        lastMessage: 'Hello how are you today?',
        updated: 'Today'
      }
  ];

var template = Handlebars.compile( $('#template').html() );
    $('.detail-container').append( template(data) );*/


var data = { 
    parter_title: 'Disneyland',
    body: "My first post. Wheeeee!"
  };

var parter_info = Handlebars.compile( $('#template').html() );
    $('.detail-container').append( parter_info(data) );

});