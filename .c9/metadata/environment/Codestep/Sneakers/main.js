{"filter":false,"title":"main.js","tooltip":"/Codestep/Sneakers/main.js","undoManager":{"mark":53,"position":53,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["$(function(){","\t$(window).on('scroll',function(){","\t\tif($(window).scrollTop() > 700){","\t\t\t$('.totop').fadeIn();","\t\t}else{","\t\t\t$('.totop').fadeOut();","\t\t}","\t});","\t$('a[href^=\"#').click(function(){","\t\tlet href = $(this).attr(\"href\");","\t\tlet target = $(href == \"#\" || href == \"\" ? 'html' : href);","\t\tlet position = target.offset().top;","\t\t$(\"html, body\").animate({scrollTop:position}, 600, \"swing\");","\t});","\t$('.hamburger').on('click',function(){","\t\tif($('header').hasClass('open')){","\t\t\t$('header').removeClass('open');","\t\t}else{","\t\t\t$('header').addClass('open');","\t\t}","\t});","\t$('nav').on('click',function(){","\t\t$('header').removeClass('open');","\t});","\t$('.mask').on('click',function(){","\t\t$('header').removeClass('open');","\t});","});"],"id":1}],[{"start":{"row":1,"column":1},"end":{"row":7,"column":4},"action":"remove","lines":["$(window).on('scroll',function(){","\t\tif($(window).scrollTop() > 700){","\t\t\t$('.totop').fadeIn();","\t\t}else{","\t\t\t$('.totop').fadeOut();","\t\t}","\t});"],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":19,"column":4},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":20,"column":0},"end":{"row":20,"column":1},"action":"insert","lines":["\t"]}],[{"start":{"row":20,"column":1},"end":{"row":20,"column":2},"action":"insert","lines":["$"],"id":4}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":4},"action":"insert","lines":["()"],"id":5}],[{"start":{"row":20,"column":3},"end":{"row":20,"column":5},"action":"insert","lines":["()"],"id":6}],[{"start":{"row":20,"column":3},"end":{"row":20,"column":5},"action":"remove","lines":["()"],"id":7}],[{"start":{"row":20,"column":3},"end":{"row":20,"column":5},"action":"insert","lines":["''"],"id":8}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":["s"],"id":9}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"remove","lines":["s"],"id":10}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":["."],"id":11},{"start":{"row":20,"column":5},"end":{"row":20,"column":6},"action":"insert","lines":["s"]},{"start":{"row":20,"column":6},"end":{"row":20,"column":7},"action":"insert","lines":["l"]},{"start":{"row":20,"column":7},"end":{"row":20,"column":8},"action":"insert","lines":["i"]}],[{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"insert","lines":["d"],"id":12},{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["e"]},{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["."],"id":13},{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["o"]},{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"insert","lines":["m"]}],[{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"remove","lines":["m"],"id":14},{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"remove","lines":["o"]}],[{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["s"],"id":15},{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"insert","lines":["l"]},{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"insert","lines":["i"]},{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"insert","lines":["c"]},{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["k"]}],[{"start":{"row":20,"column":19},"end":{"row":20,"column":21},"action":"insert","lines":["()"],"id":16}],[{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":[";"],"id":17}],[{"start":{"row":20,"column":20},"end":{"row":20,"column":22},"action":"insert","lines":["{}"],"id":18}],[{"start":{"row":20,"column":21},"end":{"row":22,"column":1},"action":"insert","lines":["","\t\t","\t"],"id":19}],[{"start":{"row":21,"column":2},"end":{"row":23,"column":19},"action":"insert","lines":["infinite: true,","  slidesToShow: 3,","  slidesToScroll: 3"],"id":20}],[{"start":{"row":22,"column":2},"end":{"row":22,"column":3},"action":"insert","lines":["\t"],"id":21}],[{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"insert","lines":["\t"],"id":22}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"remove","lines":["3"],"id":23}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["1"],"id":24}],[{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"remove","lines":["3"],"id":25}],[{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":["5"],"id":26}],[{"start":{"row":23,"column":20},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":27},{"start":{"row":24,"column":0},"end":{"row":24,"column":3},"action":"insert","lines":["  \t"]}],[{"start":{"row":24,"column":3},"end":{"row":26,"column":19},"action":"insert","lines":["infinite: true,","  slidesToShow: 3,","  slidesToScroll: 3"],"id":28}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["\t"],"id":29}],[{"start":{"row":26,"column":2},"end":{"row":26,"column":3},"action":"insert","lines":["\t"],"id":30}],[{"start":{"row":24,"column":3},"end":{"row":26,"column":20},"action":"remove","lines":["infinite: true,","\t  slidesToShow: 3,","  \tslidesToScroll: 3"],"id":31},{"start":{"row":24,"column":3},"end":{"row":26,"column":21},"action":"insert","lines":["slidesToShow: 1,","  centerMode: true,","  variableWidth: true"]}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"remove","lines":[" "],"id":32},{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["\t"]}],[{"start":{"row":25,"column":1},"end":{"row":25,"column":2},"action":"insert","lines":["\t"],"id":33}],[{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"remove","lines":[" "],"id":34}],[{"start":{"row":26,"column":2},"end":{"row":26,"column":3},"action":"insert","lines":["\t"],"id":35}],[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"remove","lines":[","],"id":36},{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"remove","lines":["5"]},{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"remove","lines":[" "]},{"start":{"row":22,"column":15},"end":{"row":22,"column":16},"action":"remove","lines":[":"]},{"start":{"row":22,"column":14},"end":{"row":22,"column":15},"action":"remove","lines":["w"]},{"start":{"row":22,"column":13},"end":{"row":22,"column":14},"action":"remove","lines":["o"]},{"start":{"row":22,"column":12},"end":{"row":22,"column":13},"action":"remove","lines":["h"]},{"start":{"row":22,"column":11},"end":{"row":22,"column":12},"action":"remove","lines":["S"]},{"start":{"row":22,"column":10},"end":{"row":22,"column":11},"action":"remove","lines":["o"]},{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"remove","lines":["T"]},{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"remove","lines":["s"]},{"start":{"row":22,"column":7},"end":{"row":22,"column":8},"action":"remove","lines":["e"]},{"start":{"row":22,"column":6},"end":{"row":22,"column":7},"action":"remove","lines":["d"]},{"start":{"row":22,"column":5},"end":{"row":22,"column":6},"action":"remove","lines":["i"]},{"start":{"row":22,"column":4},"end":{"row":22,"column":5},"action":"remove","lines":["l"]},{"start":{"row":22,"column":3},"end":{"row":22,"column":4},"action":"remove","lines":["s"]},{"start":{"row":22,"column":2},"end":{"row":22,"column":3},"action":"remove","lines":["\t"]},{"start":{"row":22,"column":1},"end":{"row":22,"column":2},"action":"remove","lines":[" "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":21,"column":17},"end":{"row":22,"column":0},"action":"remove","lines":["",""],"id":37}],[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":[","],"id":38}],[{"start":{"row":19,"column":4},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":39},{"start":{"row":20,"column":0},"end":{"row":20,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":20,"column":1},"end":{"row":20,"column":2},"action":"insert","lines":["s"]},{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":["l"]},{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"insert","lines":["i"]},{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":["d"]},{"start":{"row":20,"column":5},"end":{"row":20,"column":6},"action":"insert","lines":["e"]},{"start":{"row":20,"column":6},"end":{"row":20,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":20,"column":1},"end":{"row":20,"column":4},"action":"insert","lines":["// "],"id":40}],[{"start":{"row":27,"column":4},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":41},{"start":{"row":28,"column":0},"end":{"row":28,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":28,"column":1},"end":{"row":28,"column":2},"action":"insert","lines":["i"]},{"start":{"row":28,"column":2},"end":{"row":28,"column":3},"action":"insert","lines":["n"]}],[{"start":{"row":28,"column":3},"end":{"row":28,"column":4},"action":"insert","lines":["v"],"id":42},{"start":{"row":28,"column":4},"end":{"row":28,"column":5},"action":"insert","lines":["i"]},{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"insert","lines":["e"]},{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["w"]}],[{"start":{"row":28,"column":1},"end":{"row":28,"column":4},"action":"insert","lines":["// "],"id":43}],[{"start":{"row":28,"column":10},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":44},{"start":{"row":29,"column":0},"end":{"row":29,"column":1},"action":"insert","lines":["\t"]}],[{"start":{"row":29,"column":1},"end":{"row":29,"column":3},"action":"insert","lines":["\"\""],"id":45}],[{"start":{"row":29,"column":1},"end":{"row":29,"column":3},"action":"remove","lines":["\"\""],"id":46}],[{"start":{"row":29,"column":1},"end":{"row":33,"column":5},"action":"insert","lines":["$('.reason1').on('inview',function(event, isInView, visiblePartX, visiblePartY){","    if (isInView){","      $(this).addClass('is-inview');","    }","  });"],"id":47}],[{"start":{"row":29,"column":5},"end":{"row":29,"column":12},"action":"remove","lines":["reason1"],"id":48},{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"insert","lines":["f"]},{"start":{"row":29,"column":6},"end":{"row":29,"column":7},"action":"insert","lines":["e"]},{"start":{"row":29,"column":7},"end":{"row":29,"column":8},"action":"insert","lines":["a"]}],[{"start":{"row":29,"column":8},"end":{"row":29,"column":9},"action":"insert","lines":["t"],"id":49},{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"insert","lines":["u"]},{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"insert","lines":["r"]},{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"insert","lines":["e"]},{"start":{"row":29,"column":12},"end":{"row":29,"column":13},"action":"insert","lines":["-"]}],[{"start":{"row":29,"column":13},"end":{"row":29,"column":14},"action":"insert","lines":["i"],"id":50},{"start":{"row":29,"column":14},"end":{"row":29,"column":15},"action":"insert","lines":["m"]},{"start":{"row":29,"column":15},"end":{"row":29,"column":16},"action":"insert","lines":["a"]},{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":["g"]},{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":[" "],"id":51},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["+"]}],[{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":[" "],"id":52},{"start":{"row":4,"column":39},"end":{"row":4,"column":40},"action":"insert","lines":["1"]},{"start":{"row":4,"column":40},"end":{"row":4,"column":41},"action":"insert","lines":["0"]},{"start":{"row":4,"column":41},"end":{"row":4,"column":42},"action":"insert","lines":["0"]}],[{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"remove","lines":["+"],"id":53}],[{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["-"],"id":54}]]},"ace":{"folds":[],"scrolltop":180,"scrollleft":0,"selection":{"start":{"row":34,"column":3},"end":{"row":34,"column":3},"isBackwards":false},"options":{"tabSize":2,"useSoftTabs":false,"guessTabSize":false,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1661919547596,"hash":"d2e9eb3adc17ac1f15fcff9ba339723e940eb713"}