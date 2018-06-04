
function main() {


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
