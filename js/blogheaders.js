 ghost.init({
            clientId: "ghost-frontend",
            clientSecret: "40b8f9ac72ad"
        });

$(document).ready(function () {
    var $blogDiv = $('#blogEntries');
   
    $.get(ghost.url.api('posts',
          {limit: 3})).done(function (data) {
        $.each(data.posts, function(i,p){
            $blogDiv.append('<a href="http://christianpfanner.at'+p.url+'"><h2>'+p.title+'</h2></a>');
        });
    }).fail(function (err) {
        console.log(err);
    });
});