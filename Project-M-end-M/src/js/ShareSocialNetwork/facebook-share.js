window.fbAsyncInit = function() {
    FB.init({
        appId      : '1105361366181803',
        xfbml      : true,
        version    : 'v2.5'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function FBShare()
{
    FB.ui(
        {
            method: 'share',
            href: 'http://project-m.com/'
        }, function(response){});
};

function FBShareToOpenGraph()
{
    FB.ui(
        {
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object:'https://project-m.com/',
            })
        }, function(response){});
};

