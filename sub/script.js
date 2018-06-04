
function main() {


    var slide = function(){
          var afbeeldingslinks = document.getElementsByClassName("foto");
          var mijnArray = [];
          var originele = [];
          var i = 0;
          while (i < afbeeldingslinks.length) {


                mijnArray[i] = afbeeldingslinks[i].getAttribute("src");
                originele[i] = afbeeldingslinks[i].getAttribute("src");

                i++;


          }
          var ii = 0;
          while (ii < afbeeldingslinks.length) {
              if(window.innerWidth > 900){
                if (ii === (7)) {
                      afbeeldingslinks[ii].setAttribute("src",mijnArray[0]);
                } else {
                      afbeeldingslinks[ii].setAttribute("src",mijnArray[ii+1]);
                }
              }
              else
                if (window.innerWidth <= 900){
                  afbeeldingslinks[i].setAttribute("src",originele[i]);
                }
                  ii++;
          }
    }

    setInterval(slide,1000);



  var link = document.getElementsByClassName("link");
  var i = 0;
  while (i < link.length) {

        link[i].onmouseover = function() {
                if(this.className === "link insta"){
                  this.className = "breder insta";
                }
                  else {
                        if(this.className === "link facebook"){
                            this.className = "breder facebook";
                        }
                        else {
                            if(this.className === "link twitter")
                            this.className = "breder twitter";
                        }
                  }

        }

        link[i].onmouseout = function(){
          if(this.className === "breder insta"){
            this.className = "link insta";
          }
            else {
                  if(this.className === "breder facebook"){
                      this.className = "link facebook";
                  }
                  else {
                    if(this.className === "breder twitter"){
                    this.className = "link twitter";
                  }
                }
            }
        }
  i++;
  }

}

window.onload = function() {
       main();
}
