// Hamburger menu functionality with toggle//
let menu=function(){
    if (document.getElementById("menu").style.display=="flex"){
        document.getElementById("menu").style.display="none";
        return;
    }
    else{
        document.getElementById("menu").style.display="flex";
    }
}

// Map building via Google Maps API
let holder=document.getElementById("maphold");
	let locater=function(){
		let myfunc=function(location){
        	let results=location.coords;
			let imag=new Image();
 			imag.src="https://maps.googleapis.com/maps/api/staticmap?center=" + results.latitude + "," + results.longitude+"&zoom=16&size=850x500&key=AIzaSyBAACnxYrk7BaKlO9HLon7RpU5srEzAo_c";
            holder.appendChild(imag);
            console.log(location); 
 			}
 		let err=function(){
  			holder.innerHTML="Failure";
 		}
 		navigator.geolocation.getCurrentPosition(myfunc,err);
    }

