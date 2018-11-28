$.getJSON('https://blacklatinoit.com/api/businesses', function(businesses){
    $.each(businesses, function( business ){
        $('#simple-businesses').innerHTML += '<li>' + business + '</li>';
    });
});