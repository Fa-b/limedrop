function Font16() {
    var kerning = [10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 8, 10, 8, 10, 7, 10, 8, 10, 8, 10, 13, 10, 12, 10, 4, 10, 5, 10, 5, 10, 6, 10, 8, 10, 5, 10, 5, 10, 5, 10, 9, 10, 12, 10, 5, 10, 9, 10, 8, 10, 9, 10, 9, 10, 8, 10, 8, 10, 7, 10, 8, 10, 5, 10, 5, 10, 6, 10, 7, 10, 6, 10, 8, 10, 11, 10, 12, 10, 7, 10, 9, 10, 10, 10, 8, 10, 8, 10, 10, 10, 9, 10, 5, 10, 5, 10, 9, 10, 8, 10, 12, 10, 10, 10, 11, 10, 9, 10, 12, 10, 10, 10, 7, 10, 11, 10, 12, 10, 13, 10, 16, 10, 12, 10, 12, 10, 10, 10, 5, 10, 9, 10, 5, 10, 5, 10, 9, 10, 5, 10, 10, 10, 7, 10, 8, 10, 8, 10, 7, 10, 7, 10, 9, 10, 7, 10, 4, 10, 4, 10, 8, 10, 7, 10, 10, 10, 9, 10, 10, 10, 7, 10, 10, 10, 9, 10, 7, 10, 9, 10, 10, 10, 10, 10, 13, 10, 10, 10, 10, 10, 7, 10, 6, 10, 3, 10, 6, 10, 6, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 5, 10, 6, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 8, 10, 8, 10, 7, 10, 8, 10, 7, 10, 12, 10, 3, 10, 6, 10, 6, 10, 11, 10, 9, 10, 7, 10, 10, 10, 4, 10, 11, 10, 9, 10, 7, 10, 9, 10, 7, 10, 7, 10, 5, 10, 13, 10, 9, 10, 7, 10, 7, 10, 3, 10, 8, 10, 8, 10, 11, 10, 13, 10, 12, 10, 8, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 12, 10, 11, 10, 10, 10, 8, 10, 7, 10, 8, 10, 8, 10, 5, 10, 5, 10, 5, 10, 7, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 12, 10, 11, 10, 10, 10, 11, 10, 13, 10, 13, 10, 13, 10, 12, 10, 12, 10, 8, 10, 9, 10, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 10, 7, 10, 6, 10, 7, 10, 7, 10, 4, 10, 5, 10, 4, 10, 5, 10, 8, 10, 9, 10, 10, 10, 9, 10, 9, 10, 10, 10, 10, 10, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 7, 10, 10];
    
    var font = new Promise((resolve, reject) => {
        var cStart = Date.now();
        var img = new Image();
		img.crossOrigin = "anonymous";
        img.src = "https://blizzhackers.github.io/ItemScreenshot/assets/font16.png";

        img.onload = () => {
            var fonts = [];
            var cWidth = 14;
            var cHeight = 16;
            
            for (var color = 0; color < 14; color++) {
                fonts[color] = [];
                
                for (var ch = 0; ch < 256; ch++) {
                    let newChar = document.createElement('canvas');
                    newChar.width = cWidth;
                    newChar.height = cHeight;
                    let ctx = newChar.getContext('2d');
                    ctx.drawImage(img, ch * cWidth, (color > 0 ? color + 1 : 0) * cHeight, cWidth, cHeight, 0, 0, newChar.width, newChar.height);
                    fonts[color].push(newChar);
                }
            }
            
            console.log("Prefetching font took " + (Date.now() - cStart) + "ms");
            resolve(fonts);
        };
	}).then(result => font = result);

    this.measureText = function(text) {
        var lines = Array.isArray(text) ? text : text.split("\n");
        var width = 0;
        var height = 0;

        lines.forEach((line) => {
            var tmpw = 0;
            var tmph = 0;
            
            for (var i = 0; i < line.length; i++) {
                let ch = line.charCodeAt(i);
                if (ch < 256) {
                    tmpw += kerning[ch * 2 + 1];
                    tmph += kerning[ch * 2];
                }
            }
            
            width = (tmpw > width ? tmpw : width);
            height = (tmph > height ? tmph : height);
        });
        
        return { width: width, height: height };
    }
    
    this.drawText = function(graphics, x, y, text, color) {
        var x_pos = Math.round(x);
        var y_pos = Math.round(y);
        var lines = Array.isArray(text) ? text : text.split("\n");
        
        lines.forEach((line) => {
            for (var i = 0; i < line.length; i++) {
                let ch = line.charCodeAt(i);
                if (ch < 256) {
                    graphics.drawImage(font[color][ch], x_pos, y_pos);
                    x_pos += kerning[ch * 2 + 1];
                }
            }
            x_pos = x;
            y_pos += 16;
        });
    }
}

var Font16 = new Font16();