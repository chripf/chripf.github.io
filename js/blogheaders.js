 ghost.init({
            clientId: "ghost-frontend",
            clientSecret: "40b8f9ac72ad"
        });

skip = 0;
postlimit = 10;

$(document).ready(function () {
    var $blogDiv = $('#blogEntries');
   
    fetchPosts();
});

function fetchPosts(){
    $.get(ghost.url.api('posts',
          {limit: 3})).done(function (data) {
        $.each(data.posts, function(i,p){
            if(i>skip){
                $blogDiv.append('<a href="http://christianpfanner.at'+p.url+'"><h2>'+p.title+'</h2></a>');
            }
        });
        skip = postlimit;
    }).fail(function (err) {
        console.log(err);
    });
}


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