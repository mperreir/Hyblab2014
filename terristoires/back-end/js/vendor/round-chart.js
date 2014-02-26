var CanvasRenderer = function(el) {
      
   /*
   Inspired from https://github.com/rendro/easy-pie-chart
   */

   var cachedBackground;
   var canvas = document.createElement('canvas');

   el.appendChild(canvas);

   if (typeof(G_vmlCanvasManager) !== 'undefined') {
      G_vmlCanvasManager.initElement(canvas);
   }

   var ctx = canvas.getContext('2d');

   // options
   options = new Object();
   options.size = el.parentNode.clientWidth-20;
   
   $(".villes").css("width",options.size/2);
   $(el).css("height",options.size);
   
   options.lineWidth = 10;
   options.easing =function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
	      t = t / (d/2);
	      if (t < 1) {
		      return c / 2 * t * t + b;
	      }
	      return -c/2 * ((--t)*(t-2) - 1) + b;
      };
   options.animate= {
	   duration: 1000,
	   enabled: true
	};
  
  
   canvas.width = canvas.height = options.size;

   // canvas on retina devices
   var scaleBy = 1;
   if (window.devicePixelRatio > 1) {
      scaleBy = window.devicePixelRatio;
      canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
      canvas.width = canvas.height = options.size * scaleBy;
      ctx.scale(scaleBy, scaleBy);
   }

   // move 0,0 coordinates to the center
   ctx.translate(options.size / 2, options.size / 2);

   // rotate canvas -90deg
   ctx.rotate((-1 / 2) * Math.PI);

   var radius = (options.size - options.lineWidth) / 2 -10;
   if (options.scaleColor && options.scaleLength) {
      radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
   }

   // IE polyfill for Date
   Date.now = Date.now || function() {
      return +(new Date());
   };
   
   
   var drawCircle = function(lineWidth, percent) {
      percent1 = Math.min(Math.max(-1, percent.greenLine || 0), 1);
      percent2 = Math.min(Math.max(-1, percent.whiteLine || 0), 1);
      percent3 = Math.min(Math.max(-1, percent.redLine || 0), 1);
      percent4 = Math.min(Math.max(-1, percent.yellowLine || 0), 1);

      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2 * (percent1*75/100), false);
      ctx.strokeStyle = '#6BB0AF';
      ctx.lineWidth = lineWidth +8;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(0, 0, radius - 30, 0, Math.PI * 2 * (percent2*75/100), false);
      ctx.strokeStyle = '#EBE9E4';
      ctx.lineWidth = lineWidth+2;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(0, 0, radius - 60, 0, Math.PI * 2 * (percent3*75/100), false);
      ctx.strokeStyle = '#BE615C';
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(0, 0, radius - 90, 0, Math.PI * 2 * (percent4*75/100), false);
      ctx.strokeStyle = '#F7DE8C';
      ctx.lineWidth = lineWidth-2;
      ctx.stroke();
   };
   
   var reqAnimationFrame = (function() {
      return  window.requestAnimationFrame ||
		      window.webkitRequestAnimationFrame ||
		      window.mozRequestAnimationFrame ||
		      function(callback) {
			      window.setTimeout(callback, 1000 / 60);
		      };
   }());
   
   this.clear = function() {
      ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
   };

   /**
    * Draw the complete chart
    * @param {number} percent Percent shown by the chart between -100 and 100
    */
   this.draw = function(percents) {
   
      // do we need to render a background
      if (!!options.scaleColor || !!options.trackColor) {
         // getImageData and putImageData are supported
         if (ctx.getImageData && ctx.putImageData) {
	         if (!cachedBackground) {
		         //drawBackground();
		         cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
	         } else {
		         ctx.putImageData(cachedBackground, 0, 0);
	         }
         } else {
	         this.clear();
         }
      } else {
         this.clear();
      }

      ctx.lineCap = options.lineCap;
      
      percents.greenLine = percents.greenLine / 100;
      percents.whiteLine = percents.whiteLine / 100;
      percents.redLine = percents.redLine / 100;
      percents.yellowLine = percents.yellowLine / 100;

      // draw bar
      drawCircle(options.lineWidth, percents);
   }.bind(this);

   /**
    * Animate from some percent to some other percentage
    * @param {number} from Starting percentage
    * @param {number} to   Final percentage
    */
   var from;
   var process;
   this.animate = function(to) {
      var startTime = Date.now();
      
      if(typeof(from) == 'undefined') {
         from = {'greenLine':0,'whiteLine':0,'redLine':0,'yellowLine':0}
      }
      
      var animation = function() {
         process = Math.min(Date.now() - startTime, options.animate.duration);
         var currentValue = {
            'greenLine' : options.easing(this, process, from.greenLine, to.greenLine - from.greenLine, options.animate.duration),
            'whiteLine' : options.easing(this, process, from.whiteLine, to.whiteLine - from.whiteLine, options.animate.duration),
            'redLine' : options.easing(this, process, from.redLine, to.redLine - from.redLine, options.animate.duration),
            'yellowLine' : options.easing(this, process, from.yellowLine, to.yellowLine - from.yellowLine, options.animate.duration)
         }
         
         this.draw(currentValue);
         if (process < options.animate.duration) {
	         reqAnimationFrame(animation);
         } else {
            from = to;
         }
      }.bind(this);

      reqAnimationFrame(animation);
   }.bind(this);

}
