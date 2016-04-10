$(document).ready(function(){
    breadcrumbs();
});

$(window).resize(function(){
    breadcrumbs();
});


function breadcrumbs() {

     if ($(window).width() <= 768) { 

        $( ".container-portfolio" ).append( $( "#breadcrumb-end" ) );
        $( ".container-portfolio" ).prepend( $( "#breadcrumb-top" ) );

     } else {  

        $( ".container-breadcrumb" ).append( $( "#breadcrumb-end" ) );
        $( ".container-breadcrumb" ).prepend( $( "#breadcrumb-top" ) );
     }

}
