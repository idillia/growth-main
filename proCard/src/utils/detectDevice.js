window.onload = function () 
    {
        if(navigator.userAgent.toLowerCase().indexOf("mobile") > -1)
        {

                // var timeout;

                // function preventPopup() {
                //     clearTimeout(timeout);
                //     timeout = null;
                //     window.removeEventListener('pagehide', preventPopup);
                // }

                // function openApp() {    
                //     $('<iframe />')
                //     .attr('src', 'https://app.adjust.com/hzrze7')
                //     .attr('style', 'display:none;')
                //     .appendTo('body');

                //     timeout = setTimeout(function() {
                //             document.location = 'https://app.adjust.com/hzrze7';
                //     }, 500);
                //     window.addEventListener('pagehide', preventPopup);
                // } 



            // location.replace('https://app.adjust.com/hzrze7');
             window.location.href = 'https://app.adjust.com/hzrze7';
            console.log("mobile")
        }
        else {
            console.log("desktop1")
        }
    }
  

