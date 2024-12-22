function showSection(section, position) {
  $( 'div.container' ).each(function( index ) {
    if ( $( this ).attr('id') != section){
      $( this ).css('display','none');
    }else{
      $( this ).css('display','block');
    }
  });
  changeColorOfNavSelected(position);
 }

function changeColorOfNavSelected(position){
  $('div#nav > h1').each(function (index){
    $( this).css('color','#B3B3B3')
  });
  $('div#nav > h1')[position].style.setProperty('color', 'white');
}

function showLanguage(language){
  $('div.language_info' ).each(function( index ) {
    if ( $( this ).attr('id') != language){
      $( this ).css('display','none');
    }else{
      $( this ).css('display','block');
    }
  });    
  changeOpacityOfaImage(language);
  if($(window).width()>=981){
    changeStyleOfknowledgeDesktop();      
  }else{
    changeStyleOfknowledgeMobile();
  }
  
}

function changeOpacityOfaImage(language){
  $('img.language').each(function( index ) {
    if ( $( this ).attr('src').indexOf(language) != -1){
      $( this ).css('opacity','1');
    }else{
      $( this ).css('opacity','0.25');
    }
  });
}

function changeStyleOfknowledgeDesktop(){
  $('head').append('<style>'
  +'#knowledge_imgs { margin: 0% 2% 0% 10%; width: 40%; float: left; text-align: center; } '
  +'#knowledge_text{ margin: 2.5% 0% 0% 5%; width: 80%;  } '
  +'#knowledge{ margin: 0% !important;}'
 +'</style>'); 
}

function changeStyleOfknowledgeMobile(){
  $('head').append('<style>'
  +'#knowledge_imgs { margin: 0% 2% 0% 10%;  } '
  +'.language {width: 20%;}'
  +'#knowledge_text{ margin: 2.5% 0% 0% 5%; width: 80%; font-size: 30px;  } '
  +'#knowledge{ margin: 0% !important;}'
 +'</style>'); 
}