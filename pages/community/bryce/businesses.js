$.getJSON('https://blacklatinoit.com/api/businesses', function(businesses){
    $.each(businesses, function( key, business ){
        $('#simple-businesses').append('<li>' + business['name'] + '</li>');
    });
});