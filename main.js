window.addEventListener("pageshow", function(){
    setTimeout(function() {

        var url = location.href
        var checkArtworks = url.indexOf("/artworks");
        var checkArtworks2 = url.indexOf("/artworks/");
        var checkArtworks3 = url.indexOf("?s_mode=s_tag");
        var checkSpace = url.indexOf("%20");
        if(checkArtworks !== -1 && checkArtworks2 === -1 && checkArtworks3 !== -1 && checkSpace === -1){
            var urlCutter = url.length -21;
            var newURL = url.substr( 0, urlCutter);
            console.log(newURL); 
            location.href = newURL;
        }else if(checkArtworks !== -1 && checkArtworks2 === -1 && checkSpace === -1){
            var urlCutter = url.length -8;
            var newURL = url.substr( 0, urlCutter);
            console.log(newURL); 
            location.href = newURL;
        }


        let btnElement = document.querySelector(".Button__StyledButton-fj5adc-0.dHVcoU.jn70pf-6.dVxCdV");
        if(btnElement != null){
            btnElement.id = "ButtonToPremium";
        }
        const btn = document.getElementById("ButtonToPremium");
        if(btn !=null){
            btn.addEventListener("click", function(){
                location.href = "https://www.pixiv.net/premium.php";
            }, false);
        }

        var targetName;

        document.body.onclick = get_target;
        function get_target(e){
            var target = e.target;
            targetName = target.textContent;
        }
        var tagURLFront = "https://www.pixiv.net/tags/"

        $("a.gtm-new-work-tag-event-click").click(function(event){
            event.preventDefault();
            setTimeout(function() {
                var tagURL = tagURLFront + targetName;
                location.href = tagURL;
            },100);
        });
    }, 100);
},false);