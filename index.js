// const main;
function main() {
  

    $('.big').removeClass('#shrink-me').addClass('#grow-me');
    
    // $( "li" ).each(function( index ) {
    //   console.log($( this ).text() );
    // });
    
    $( "li" ).text(console.log);
    
    
    $('.link').attr('href',
    'https://www.example.com').text('Somewhere');
    
    
    $('#hide-me').css("display", "none");
    
    
    $('#show-me').css('display', 'block');
    
    
    $("h1").html("Welcome " + $('#name').val() );
    
    }
    
    $("#action").on("click", main);