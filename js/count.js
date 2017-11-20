
$('#hide').click(function() {
	alert('!');
            // $(this).css(' color', '#fff');
        });


// if(window.jQuery) alert("УРА");
//   else alert("1111");

$('#hide').on('click', function() {
      $('.show').removeClass("google-block").addClass("active");
      });

$('#button').on('click', function(e) {
      $('#block').slideToggle(function() {
        $(e.target).text($(this).is(':visible') ? 'Меньше' : 'Больше');
      });
});


$('li').click(function() {
	alert('!');
});



$("#hide]").click(function() {
	alert('!');
            // $(this).css(' color', '#fff');
        });