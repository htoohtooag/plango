$(document).ready(function(){

    // start backtotop 
    $('.btn-backtotops').hide();
    $(window).scroll(function(){
        var getscrollttops = $(this).scrollTop();

        if(getscrollttops >= 378){
            $('.btn-backtotops').fadeIn(1000);
        }else{
            $('.btn-backtotops').fadeOut(1000);
        }
    });
    // end backtotop 
    //start Nav abr 
    $(window).scroll(function(){
        let position = $(this).scrollTop();

        if(position >= 200){
            $('.navbar').addClass('navmenus')
        }else{
            $('.navbar').removeClass('navmenus')
        }
    });

     $('.navbuttons').click(function(){
        $(this).toggleClass('crossxs');
     });
    //end Nav abr 

    // start properties section 
    $('.propertylists').click(function(){
        // console.log('hay');
        $(this).addClass('activeitems').siblings().removeClass('activeitems');

        let filtervalue = $(this).attr('data-filter');
            filtervalue = $(this).data('filter');

        if(filtervalue === 'all'){
            $('.filters').show('slide',500);
        }else{
            $('.filters').hide();

            $('.filters').not('.'+filtervalue).hide('slide',500);
            $('.filters').filter('.'+filtervalue).show('slide',500);

        }
    });
    // end properties section 

    // start adv section 
    $(window).scroll(function(){
        var getscrolltt = $(this).scrollTop();

        if(getscrolltt >= 900){
            $('.advimages').addClass('fromlefts');
            $('.advtexts').addClass("fromrights");
        }else{
            $('.advimages').removeClass('fromlefts');
            $('.advtexts').removeClass("fromrights");
        }
    });
    // end adv section 

   // end footer section 
   const getyear = $('#getyear');
   const getfullyear = new Date().getFullYear();
   getyear.html(getfullyear);
   // end footer section 



});