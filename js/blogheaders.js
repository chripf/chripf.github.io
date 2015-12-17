$(document).ready(function () {
    var blogDiv = $('#blogEntries');
   
    $.get("http://christianpfanner.at/ghost/api/v0.1/posts?client_id=ghost_frontend&client_secret=40b8f9ac72ad",
          {limit: 10, fields: "title"}).done(function (data) {
        $(data.posts).each(function(i,p){
            blogDiv.append("<h2>"+p.title+"</h2>");
        });
    }).fail(function (err) {
        console.log(err);
    });
});