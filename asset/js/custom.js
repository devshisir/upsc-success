$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
   
    // $('#videoPopup').modal('show');


    //vimeo video modal close function
    function stopVideo(){
        var $frame = $('iframe#popupvieoSourch');
       // saves the current iframe source
       var vidsrc = $frame.attr('src');
       // sets the source to nothing, stopping the video
       $frame.attr('src',''); 
       // sets it back to the correct link so that it reloads immediately on the next window open
       $frame.attr('src', vidsrc);
    }
    $('#videoPopup').on('hidden.bs.modal', function (e) {
        stopVideo();
    })





});