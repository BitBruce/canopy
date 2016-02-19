SC.initialize({
  client_id: '4eaca5a5564f25e7afc7b242b4e300a0'
});

var track_url = 'https://soundcloud.com/conveyor94/power-base';
SC.oEmbed(track_url, { maxheight: 166, maxwidth: 400, auto_play: false, element: document.getElementById('soundcloud') }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});
