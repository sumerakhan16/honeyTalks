$(document).ready(function(){
  // var $commentul = $(".form");

  // Event listener for search button
  $("#searchClick").on("click", function() {
    const searchResult = $("#search").val();
    console.log(searchResult);
    // return if they didn't put anything in the form-controlbox
    if (searchResult == "") {
      alert('Please enter a movie/show name.');
    }
    // Set form control box to null
    $("#search").val("");
    

    //TODO: Build an ajax call that hits /search/movie
    var settings = {
      "url": "/search/movie/" +  searchResult,
      "method": "GET",
      "timeout": 0,
    };
    
    $.ajax(settings) 
      .then((response) => {
      // TODO: Render results to the page
      mediaTitle.textContent= response.title;
      mediaSynopsis.textContent= response.plot;
      mediaRating.textContent= response.rating;
      $("#mediaCoverPhoto").attr("src", response.poster);
     
     


    })
    .catch(error => console.log(error))

  

  })

  // Comment Section
  function render(data){
    const { name, date, bodyText } = data
    var html= "<div class='commentBox'><div class='leftPaneling'><div class='rightPanel'> <span>" + name +"</span><div class='date'>" + date + "</div><p>" + bodyText+ "</p><br> </br> <div class='clear'></div> </div> </div></div></div>"
    $('#commentSection').append(html);

    
    
  }

$('#addComment').click(function(){
  console.log("working");
  var addObj = {
    "name": $('#name').val(),
    "date": $('#date').val(),
    "bodyText": $('#bodyText').val()
  };
  console.log(addObj);
  
  render(addObj);
  // $('#name').val('');
  // $('#date').val('yyyy-MM-dd');
  // $('#bodyText').val('');
});


});

var $commentText = $("");
var $addCommentButton = $("#addComment");
var $commentsList = $("#bodyText");

var activeComments = {};

var getComments = function() {
  return $.ajax({
    url: "/api/comments",
    method: "GET"
  });
};

var saveComments = function(comments) {
  return $.ajax({
    url: "/api/comments",
    data: note,
    method: "POST"
  });
};

