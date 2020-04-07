// PLUS BUTTON TOGGLES INPUT FOR NEW TODO
$('#addTodo').on('click', function() {
  $('#newTodo').fadeToggle();
});

// ADD NEW TODO FUNCTIONALITY
$("input[type='text']").on('keydown', function(e) {
  if(e.which == 13) {
    // Grabbing new todo text from input
    let todoText = $(this).val();
    $(this).val("");
    // Create a new li and add to ul
    $('ul').append('<li><span class="delete"><i class="far fa-trash-alt"></i></span> ' + todoText + '</li>');
  }
});

// COMPLETED TODO - LINE-THROUGH
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// DELETE TODO
$('ul').on('click', 'span', function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
});

