function createDesertComment(){
    var text = $('#desert-comment-text');
    var $par = $('<p>').text(text.val());
    $('#desert-comment-holder').append($par);    
    text.val('');
}




$(document).ready(function(){
    $('#desert-comment-submit').click(createDesertComment);
});

function createJungleComment(){
    var text = $('#jungle-comment-text');
    var $par = $('<p>').text(text.val());
    $('#jungle-comment-holder').append($par);
    text.val('');
}



$(document).ready(function(){
    $('#jungle-comment-submit').click(createJungleComment);
});



 function createStory(){
   var $noun1 = $('#noun-1').val();
   var $adjective1 = $('#adjective-1').val();
   var $verb1 = $('#verb-1').val();
   
   
    $('#noun-1-place').html($noun1);
    $('#adjective-1-place').html($adjective1);
    $('#verb-1-place').html($verb1);
    $('input').val('');
}
            
$('#create-story').click(createStory);