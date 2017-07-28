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