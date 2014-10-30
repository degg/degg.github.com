window.oauthcp = (function(){
    var t = false;
    try { 
        var h = document.location.hash.substr(1);
        t = h.substr(h.indexOf('access_token=')).split('&')[0].split('=')[1];
    } catch(e){}

    return {
        token:t,
        tokenAvailable: function() { return !!this.token; },
        getToken: function() { return this.token; }
    };
})();
