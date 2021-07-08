        /* En kommentar
        som kan sträcka sig över flera rader. */

        //En kommerntar på en rad.
        function visaDialog(){
            alert("Den här sidan är skapade av Gabriel, 2020-03-23!");
            changeText();
        }

        function changeText(){
            document.getElementById("demo").innerHTML = "Hello javaScript;"
        }

        function writeText(){
            var namn = document.getElementById("fnamn").nodeValue;
            document.getElementById("text").innerHTML = namn;
        }

        function bild(sw) {
            var pic;
            if (sw == 0) {
              pic = "bild1.jpg."
            } else {
              pic = "bild2.jpg"
            }
            document.getElementById('myImage').src = pic;
          }


