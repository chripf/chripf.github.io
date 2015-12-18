 ghost.init({
            clientId: "ghost-frontend",
            clientSecret: "40b8f9ac72ad"
        });

var postsUrl = ghost.url.api('posts',
          {limit: postlimit});

var skip = 0;
var postlimit = 10;

$(document).ready(function () {   
   
    fetchPosts();
});

function fetchPosts(){
    var $blogDiv = $('#blogEntries');
    
      ghost.init({
            clientId: "ghost-frontend",
            clientSecret: "40b8f9ac72ad"
        });
    postsUrl=ghost.url.api('',
          {limit: postlimit});
     
    $.get(postsUrl).done(function (data) {
        $.each(data.posts, function(i,p){
            if(i>=skip){
                $blogDiv.append('<a href="http://christianpfanner.at'+p.url+'"><h2>'+p.title+'</h2></a>');
            }
        });
        skip = postlimit;
    }).fail(function (err) {
        console.log(err);
    });
}

lastScrollTop = 0; 
$(window).scroll(function(event){
    // test if we are near the bottom of the window
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      // where are we in the page? 
      var scrollTop = $(this).scrollTop();
      // test if we are going down
      if (scrollTop > lastScrollTop){
        // yes we are heading down...
        postlimit = postlimit + 5;
        fetchPosts();
      }

      lastScrollTop = scrollTop;
    }
        
  })