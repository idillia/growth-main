import fs from 'fs';
import cheerio from 'cheerio'; // cheerio creates in memory DOM that could be query using jQuery selectors
import colors from 'colors';
/*eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if(err){
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="/styles.css">');
  $('head').prepend('<link rel="stylesheet" href="http://d22hhoe037sl7u.cloudfront.net/1.5/css/link_texting.min.css">');
  $('head').prepend("<script type='text/javascript'>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-39725983-11', 'auto');ga('send', 'pageview'); document.addEventListener('touchmove',function(e) {e.preventDefault();},false);</script>");
  $('head').prepend("<script type='text/javascript'>(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:351643,hjsv:5}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r);})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');</script>");
  $('head').prepend("<script type='text/javascript'>$(function(){ if (window.location.pathname == 'screenshot/scrappymcgyver') {$('#hideNav').hide();} else {$('#hideNav').show();}});</script>");
  $('head').prepend("<script type='text/javascript' src='//cdn.zarget.com/111795/201188.js'></script>");


  fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
    if(err){
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});

