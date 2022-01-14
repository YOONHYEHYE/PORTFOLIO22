$(function(){
//--------------------------------------------------------------------------------------------------------------------------------    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').pagepiling({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
        afterLoad:function(origin, destination, direction){
            console.log(destination.index);
            let idx=destination.index;
            sc.eq(idx).addClass("on").siblings().removeClass('on');
            sideBar.eq(idx).addClass("on").siblings().removeClass('on');
        },
    });

$('.cover_btn').on('click', function(){
    $('#cover').fadeToggle();
})

let cloneMenu = $('nav>ul').clone();
console.log(cloneMenu);
$('#cover').append(cloneMenu)

//--------------------------------------------------------------------------------------------------------------------------------   
})
