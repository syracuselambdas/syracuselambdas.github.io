$(document).ready(function(){  
    var feed = new Instafeed ({
        get:"user",
        userId:"1531587193",
        limit: 4,
        sortBy: "most-recent",
        resolution: "standard_resolution",
        accessToken: "1531587193.1677ed0.a24077c78de34f6a9fcd7538c6fb6c98",
        template: '<div class="image-box "><a href="{{link}}" target="_blank"><div class="instafeed-image-square with-background" style="background-image:url({{image}}); width="85px;"></div></a></div>'
});
    feed.run(); 

    $('.nav-link').on('click', function(){
        $('#navbarNav').removeClass('show');
    });
});