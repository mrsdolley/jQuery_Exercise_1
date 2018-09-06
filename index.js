// const main;
function main() {
  

    $('.big').removeClass('#shrink-me').addClass('#grow-me');
    
    //Without index numbers and quotes
    $( "li" ).each(function( index ) {
    console.log($( this ).text() );
    });
  
    //With index numbers and quotes
    //$( "li" ).text(console.log);
    
    
    $('.link').attr('href',
    'https://www.example.com').text('Somewhere');
    
    
    $('#hide-me').css("display", "none");
    
    
    $('#show-me').css('display', 'block');
    
    
    $("h1").html("Welcome " + $('#name').val() );
    
    }
    
    $("#action").on("click", main);