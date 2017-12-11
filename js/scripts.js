function Places(location, landmark, date, notes) {
  this.locationName = location;
  this.landmark = landmark;
  this.date = date;
  this.notes = notes;
}

$(function() {
  $('form#new-place').submit(function(event) {
    event.preventDefault();

    var inputLocation = $("input#inputLocation").val();
    var inputLandmark = $("#inputLandmark").val();
    var inputDate = $('#inputDate').val();
    var inputNote = $('#inputNote').val();

    var newPlace = new Places(inputLocation, inputLandmark, inputDate, inputNote);
    // <div class="card mb-3">
    //   <div class="card-body">
    //     <h4 class="card-title">London</h4>
    //     <h6 class="card-subtitle mb-2 text-muted">Manchester</h6>
    //     <p class="card-text">London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.</p>
    //     <a href="#" class="card-link">More Info</a>
    //   </div>
    // </div>
    $("#card-cont").append("<div class='card mb-3'><div class='card-body'><h4 class='card-title'>" + newPlace.locationName + "</h4><h6 class='card-subtitle mb-2 text-muted'>" + newPlace.landmark + "</h6><p class='card-text'>" + newPlace.notes + "</p></div></div>");
    $("input#inputLocation").val("");
    $("input#inputLandmark").val("");
    $("input#inputDate").val("");
    $("input#inputNote").val("");
  });
});
