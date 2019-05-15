function openNav() {
    var opener = document.getElementById('btn-open');
    opener.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('mySideNav').style.width = "250px";
        document.querySelectorAll(".container > div:not(.side-nav)").style.transform = "translateX(250px)";
        
        
        


        //document.getElementById('js-container').style.transform= "translateXb(250px)";

    })

}

openNav();

function closeNav(){
    var btnClose = document.getElementById('btn-close');
    btnClose.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('mySideNav').style.width = "0";
    })
}

closeNav();


function popOut(){
    var btnMore = document.getElementById('viewMoreBtn');
    btnMore.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('gallery-more').style.display = 'block';
    })
}

popOut();




