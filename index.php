<!DOCTYPE html>
<html class="skrollr skrollr-desktop">
  <head>
    <meta charset="utf-8">
    <title>Bureau O'Clock</title>
    <link rel="stylesheet" href="css/style.css"/>
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/oclock.js"></script>
    <script src="//use.edgefonts.net/source-sans-pro.js"></script>
  </head>
  <body style="">

    <div id="skrollr-body">
      <div class="projContainer" style="z-index: 999">
        <div id="logo" data-0="top:50%;font-size: 4vw" data-700="top:5%;font-size: 3vw">
          <span class="logo alignLogo" >bureau</span>
          <span id="clock" class="logo underline" data-0="color:rgba(0,0,0,0)" data-400="color:rgba(0,0,0,0)" data-500="color:rgba(0,0,0,1)">&nbsp;4&nbsp;</span>
          <span class="logo alignLogo">o'clock</span>
        </div>
      </div>
      <div id="menu">
        <div id="about" class="menu" data-0="color:rgba(0,0,0,0)" data-500="color:rgba(0,0,0,0)" data-700="color:rgba(0,0,0,1)">about</div>
        <div id="category" class="menu"></div>
        <div id="aboutPanel" class="panel">
        </div>
        <div id="printPanel" class="panel">
        </div>
      </div>

      <div id="project01">
          <div id="project01-1" class="simpleBlock portrait simpleBlockLeft blockhover" data-category="print" data-clock="3"><figure><img src="img/portrait01.jpg" /></figure></div>
          <div id="captionProject01-1" class="caption" data-captionLeftStart="5" data-captionLeftDist="20" data-captionTopStart="15" data-captionTopDist="50">
            <h3>Slimi Magazine</h3> <br/>Fashion magazine<br/>& website</div>
          <div id="project01-2" class="simpleBlock portrait simpleBlockRight blockhover" data-category="website" data-clock="5"><figure><img src="img/portrait02.jpg" /></figure></div>
          <div id="captionProject01-2" class="caption" data-captionLeftStart="70" data-captionLeftDist="20" data-captionTopStart="15" data-captionTopDist="50">
            <h3>Block02</h3> <br/> BlaBla BlaBla <br/> BlaBla BlaBla</div>
      </div>
      <div id="project02" class="projContainer" data-0="display:none;" data-1500="display:block;">
        <div id="project02-1" class="projElement landscape blockhover" data-1500="left:-50%" data-2500="left:100%" style="top:50%;"><figure><img src="img/portrait01.jpg" /></div>
        <div id="captionProject02-1" class="caption" data-captionLeftStart="70" data-captionLeftDist="20" data-captionTopStart="15" data-captionTopDist="50">
          <h3>Block03</h3> <br/> BlaBla BlaBla <br/> BlaBla BlaBla</div>
      </div>

      <div id="project03" class="projContainer" data-0="display:none;" data-3000="display:block;">
        <div id="project03-1" class="projElement landscape blockhover" style="top:50%;" data-3000="left:100%" data-4000="left:-50%"><figure><img src="img/portrait01.jpg" /></div>
        <div id="captionProject03-1" class="caption" data-captionLeftStart="10" data-captionLeftDist="20" data-captionTopStart="15" data-captionTopDist="50">
          <h3>Block04</h3> <br/> BlaBla BlaBla <br/> BlaBla BlaBla</div>
      </div>

      <div id="project04">
        <div id="project04-1" class="landscape block blockhover" style="top:3550px; left:22%;"><figure><img src="img/portrait01.jpg" /></div>
        <div id="captionProject04-1" class="caption" data-captionLeftStart="60" data-captionLeftDist="30" data-captionTopStart="50" data-captionTopDist="30">
          <h3>Block05</h3> <br/> BlaBla BlaBla <br/> BlaBla BlaBla</div>
      </div>
      <div id="project05">
        <div id="project05-1" class="landscape block blockhover anchorCenter" style="top:4900px; left:50%;"><figure><img src="img/portrait01.jpg" /></div>
        <div id="captionProject05-1" class="caption" data-captionLeftStart="10" data-captionLeftDist="40" data-captionTopStart="20" data-captionTopDist="50">
          <h3>Block06</h3> <br/> BlaBla BlaBla <br/> BlaBla BlaBla</div>
      </div>

      <div class="projContainer" data-0="display:none;" data-3000="display:block;">
        <div class="projElement landscape blockhover" data-4800="top:-50%" data-6200="top:120%" style="position:absolute;right:22.3%;margin-right:0;"><figure><img src="img/portrait01.jpg" /></div>
      </div>

      <div class="landscape block blockhover" style="top:5900px; left:22.3%;">
<figure><img src="img/portrait01.jpg" />
      </div>

      <div class="projContainer" data-0="display:none;" data-7500="display:block;">
        <div class="projElement landscape blockhover" data-7500="left:-25%" data-8500="left:100%" style="top:50%;"><figure><img src="img/portrait01.jpg" /></div>
      </div>

      <div class="landscape block blockhover anchorCenter" style="top:7200px; left:50%;">
<figure><img src="img/portrait01.jpg" />
      </div>

    </div>
    <script type="text/javascript" src="js/skrollr.min.js"></script>
    <script type="text/javascript">
      var s = skrollr.init();
	  </script>

  </body>
</html>
