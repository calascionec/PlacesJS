$(document).ready(function(){
  $("#add-note").click(function(){
    $("#add-notes").append('<div class="add-note">' + '<div class="form-group">' +
                            '<label for="new-note">Add Note</label>' +
                            '<input type="text" class="form-control new-note">' +
                            '</div>' + '</div>');
  });

  $("form#new-place").submit(function(event){
    event.preventDefault();

    var inputtedCity = $("input#city-name").val();
    var inputtedSeason = $("input#season").val();

    var newPlace = { city: inputtedCity, season: inputtedSeason, notes: []};

    $(".add-note").each(function() {
      var inputtedNote = $(this).find("input.new-note").val();

      newPlace.notes.push(inputtedNote);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.city + "</span></li>" );

  $(".place").last().click(function() {
    $("#show-place").show();

    $("#show-place h2").text(newPlace.city);
    $(".city-name").text(newPlace.city);
    $(".season").text(newPlace.season);

    $("ul#notes").text("");
    newPlace.notes.forEach(function(note) {
      $("ul#notes").append("<li>" + note + "</li>")
    });
  });

  $(".show-button").click(function(){
    $(".show-button").hide();
    $("#after-note").show();
  });

  $("input#city-name").val("");
  $("input#season").val("");
  $("input.new-note").val("");
  });
});
