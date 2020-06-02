/*1. claer previous content */
document.querySelector('.js-go').addEventListener('click',function(e){
    var container = document.querySelector(".js-container");
    container.innerHTML =  "";
});

document.querySelector('.js-userinput').addEventListener('keyup',function(e){
    var container = document.querySelector(".js-container");
    // if the key press ENTER then execute.......
    if(e.which === 13) {      
        container.innerHTML =  ""; /* Learn keycode in javascript*/
    }
    
}); 

/*2. Grab the input */
document.querySelector('.js-go').addEventListener('click',function(e){
    var input = document.querySelector('input').value;
    search(input);
});

document.querySelector('.js-userinput').addEventListener('keyup',function(e){
    var input = document.querySelector('input').value;
    // if the key press ENTER then execute.......
    if(e.which === 13) {      
        search(input);  /* Learn keycode in javascript*/
    }
    
});


/*3. Do the data stuff with the API */
function search(nem){
    var url ;
    nem.replace(/ /g, "+");
    url = "http://api.giphy.com/v1/gifs/search?q="+nem+"&api_key=ogzSa9f2LexAOyvoZcXlARLx8tohqRhh";
    
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){
    var data = e.target.response;
    pushToDOM(data);  
    });
}

/*4. Show the GIF */
function pushToDOM(alldata){
    var response = JSON.parse(alldata);
    var imageURLs = response.data;

    // Get the link for all the images
    imageURLs.forEach(function(image){
       var src = image.images.fixed_height.url ;
       show(src);
    });

    // will display images
    function show(src){
        var container = document.querySelector(".js-container");
        container.innerHTML +=  "<img src="+ src+"class=\"container-image\">";
    }    
}   
    