/*!
 * itemScreenshot Library v1.0
 * https://github.com/Fa-b/ItemScreenshot
 * 
 * A pure js solution to generate Diablo II item tooltips from json objects
 * Obj format is the standard kolbot mulelogged item
 * 
 * Authors: Fa-b, laztheripper
 * Date: 2020/03/11
 */

window.ItemScreenshot = {
    // Settings
    
	fastMode			: false,	// Draw text using webfont (less pwetty but faster ofc)
    hideItemLevel       : true,		// Hide the item level
    hideRequirements    : false,	// Hide the red text when you can't wear an item
    hideSetCompletion   : false,	// Hide the set completion
    showItemColor       : false,	// Show the item color at the end of the desc
    drawCursor          : "rnd",	// Draw the cursor ("rnd" is random cursor position)
    drawSockets         : true,		// Draw sockets and socketed items
    drawEthereal        : true,		// Draw ethereal item gfx
    forceItemVisible    : false,    // Expand the background to fully show items when the description does not fit

    // ------ No touchy ------

    font:   (function () { WebFont.load({custom: {families: ['AvQuest']}}); return "AvQuest";   }).call(),
    
    hand:   (function () { let img = new Image(); img.crossOrigin = "anonymous"; img.src = "https://blizzhackers.github.io/ItemScreenshot/assets/hand.png";      return img; }).call(),
    socket: (function () { let img = new Image(); img.crossOrigin = "anonymous"; img.src = "https://blizzhackers.github.io/ItemScreenshot/assets/gemsocket.png"; return img; }).call(),

    bgnd: [
        (function () { let img = new Image(); img.crossOrigin = "anonymous"; img.src = "https://blizzhackers.github.io/ItemScreenshot/assets/bgnd1.png"; return img; }).call(),
        (function () { let img = new Image(); img.crossOrigin = "anonymous"; img.src = "https://blizzhackers.github.io/ItemScreenshot/assets/bgnd2.png"; return img; }).call(),
        (function () { let img = new Image(); img.crossOrigin = "anonymous"; img.src = "https://blizzhackers.github.io/ItemScreenshot/assets/bgnd3.png"; return img; }).call(),
        (function () { let img = new Image(); img.crossOrigin = "anonymous"; img.src = "https://blizzhackers.github.io/ItemScreenshot/assets/bgnd4.png"; return img; }).call()
    ],

    textColorMap: {
        0: "#C4C4C4",      // WHITE
        1: "#B04434",      // RED
        2: "#18FC00",      // SET
        3: "#787CE7",      // MAGIC
        4: "#948064",      // UNIQUE
        5: "#505050",      // DARK GRAY
        6: "#000000",      // BLACK (UNUSED)
        7: "#AC9C64",      // OCHER (UNUSED)
        8: "#D08420",      // CRAFT
        9: "#D8B864",      // RARE
        10: "#186408",     // DARK GREEN (UNUSED)
        11: "#A420FC",     // PURPLE (UNUSED)
        12: "#287C14"      // GREEN (UNUSED)
    },

    colorStrings: [
        "Unknown Color",//0
        "Black",		//1
        "Unknown Color",//2
        "Black",		//3
        "Light Blue", 	//4
        "Dark Blue",	//5
        "Crystal Blue",	//6
        "Light Red",	//7
        "Dark Red",		//8
        "Crystal Red",	//9
        "Light Green",	//10
        "Dark Green",	//11
        "Crystal Green",//12
        "Light Yellow",	//13
        "Dark Yellow",	//14
        "Light Gold",	//15
        "Dark Gold",	//16
        "light Purple",	//17
        "Dark Purple",	//18
        "Orange",		//19
        "White"			//20
    ],

    getItemDesc: function (desc) {
        var i, out = [], setCompletionInd,
            stringColor = 0;
    
        if (!desc) {
            return out;
        }

        var lines = desc.split("\n");
        
        for (var line in lines) {
            out.push({ text: lines[line], color: [0] });
        }

        for (i = out.length - 1; i >= 0; i -= 1) {
            if (out[i].text.indexOf("Sell value: ") > -1) {
                out.splice(i, 1);
    
                i += 1;
            } else {
                if (i === 0 && this.hideItemLevel && out[i].text.indexOf(" (") > -1) {
                    out[i].text = out[i].text.split(" (")[0];
                }

                out[i].text = out[i].text.replace(/^((xffc)|ÿc)/, "");
				out[i].text = out[i].text.replace(/[0-9]((xffc)|ÿc)/g, "");
                
                // Check if one of the requirements is not met or if we decided to hide them
                if (this.hideRequirements && out[i].text.match(/^1/) &&
                    (out[i].text.match(/(strength:)/i) ||
                    out[i].text.match(/(dexterity:)/i) ||
                    out[i].text.match(/(level:)/i) ||
                    out[i].text.match(/(only\))$/i)) ){
                    // Clear red colors if necessary
                    out[i].color[0] = 0;
                } else {
                    // .. Otherwise get the real color
                    out[i].color[0] = parseInt(out[i].text[0]);
                }

                if (i > 3 && out[i].color[0] === 4) {
                    setCompletionInd = i;
                }

				out[i].text = out[i].text.substring(1);
				
				// second color in same row will always be blue/'magic'
                if (out[i].text.match(/((xff)|ÿc)/))
                    out[i].color.push(3);
            }

            out[i].text = out[i].text.replace(/((xffc)|ÿc)([0-9!"+<;.*])/g, "\$");
            out[i].text = out[i].text.replace(/\\/g, "");
        }

        if (this.hideSetCompletion && setCompletionInd) {
            out = out.slice(0, setCompletionInd);
        }
        
        return out;
    },

    cleanDecription: function (description) {
        return this.getItemDesc(description.toString().split("$")[0]);
    },

    drawScreenshot: function (item) {
        return new Promise((resolve, reject) => {
            var iStart = Date.now();
            var strArray1 = this.cleanDecription(item.description);
            var num1 = 0;
            var tmp = document.createElement('canvas');
            var ctx = tmp.getContext('2d');
            ctx.font = "bold 1.5em AvQuest";
            
            for (var line in strArray1) {
                let size = this.fastMode ? ctx.measureText(strArray1[line].text) : Font16.measureText(strArray1[line].text);
                if (size.width > num1) {
                    num1 = size.width;
                }
            }

            if (this.showItemColor && item.itemColor !== -1) {
                strArray1.push({ text: "", color: [5]});
                strArray1.push({ text: this.colorStrings[item.itemColor], color: [5]});
            }

            if (num1 < 100)
                num1 = 100;
                
            num2 = 16;

            item.onload = () => {
                var X, Y, Top, Left = 0
            
                if (item.Y === 1) {
                    Top = 33; // 32 originally
                } else if (item.Y === 2) {
                    Top = 62; // 61 originally
                } else if (item.Y === 3) {
                    Top = 91; // 90 originally
                } else {
                    Top = 120; // 119 originally
                }
                
                if (item.X === 1) {
                    Left = 213; // 212 originally
                } else {
                    Left = 226;
                }
                
                var canvas = document.createElement('canvas');
                canvas.width = num1 + 14;
                canvas.height = num2 * strArray1.length + Top + 1;                
                
                var y_cor = (canvas.height - 401);
                var x_cor = (canvas.width/2 - Left);
                
                var x_ref = Math.round(canvas.width / 2);
                
                
                
                if(this.forceItemVisible || (x_cor <= 0)) {
                    x_cor = 0;
                }
                
                var graphics = canvas.getContext('2d');
                
                if(this.forceItemVisible) {
                    //console.log("Setting black canvas")
                    graphics.fillStyle = "rgba(10, 10, 10, 1)";
                    graphics.fillRect(0, 0, canvas.width, canvas.height);
                } else if(canvas.width > 480) {
                    canvas.width = 480;
                }
                
                //console.log("Drawing background");
                graphics.drawImage(this.bgnd[item.Y-1], x_ref - x_cor - Left, -9); // top -10 originally

                //console.log("Drawing item-active background");
                if (this.drawCursor) {
                    graphics.fillStyle = "rgba(0, 128, 0, 0.1)";
                } else {
                    graphics.fillStyle = "rgba(0, 0, 255, 0.1)";
                }
                graphics.fillRect(x_ref - item.width / 2 - x_cor, 5, item.width, item.height);
                
                //console.log("Drawing item gfx")
                item.drawItem(graphics, Math.round(x_ref - item.width / 2 - x_cor), 5).then(graphics => {

                    if (!this.forceItemVisible && (y_cor > 0)) {
                        graphics.fillStyle = "rgba(0, 0, 0, 0.75)";
                        graphics.fillRect(0, Top - y_cor, canvas.width, y_cor);
                    } else {
                        y_cor = 0;
                    }

                    //console.log("Drawing text");
                    if (this.fastMode) {
                        graphics.font = ctx.font;
                        graphics.filter = "blur(0.2px)";
                        
                        for (var index in strArray1) {
                            let pos = {
                                x: x_ref,
                                y: (index * num2 + Top + num2 - 3 - y_cor) // -1 originally
                            };
                            
                            graphics.fillStyle = this.textColorMap[strArray1[index].color[0]];
                            
                            if(strArray1[index].color.length > 1) {
                                leftText = strArray1[index].text.split("$")[0];
                                rightText = strArray1[index].text.split("$")[1];
                                shift = (ctx.measureText(leftText).width + ctx.measureText(rightText).width) / 2;
                                graphics.textAlign = "left";
                                graphics.fillText(leftText, Math.round(pos.x - shift), Math.round(pos.y));
                                graphics.fillStyle = this.textColorMap[strArray1[index].color[1]];
                                graphics.fillText(strArray1[index].text.split("$")[1], Math.round(pos.x + ctx.measureText(leftText).width - shift), Math.round(pos.y));
                            } else {
                                graphics.textAlign = "center";
                                graphics.fillText(strArray1[index].text, Math.round(pos.x), Math.round(pos.y));
                            }
                        }
                        graphics.filter = "None";
                    } else {
                        var index = 0;
                        strArray1.forEach((line) => {
                            let pos = {
                                x: x_ref,
                                y: (index * num2 + Top - 1 - y_cor)
                            };
                            
                            shift = Font16.measureText(line.text).width / 2;
                            
                            if(line.color.length > 1) {
                                leftText = line.text.split("$")[0];
                                rightText = line.text.split("$")[1];
                                // Apply back half the wrong measured kerning for char '$' width 10 / 2 = 5
                                Font16.drawText(graphics, pos.x - shift + 5, pos.y, leftText, line.color[0]);
                                Font16.drawText(graphics, pos.x - shift + 5 + Font16.measureText(leftText).width, pos.y, rightText, line.color[1]);
                            } else {
                                Font16.drawText(graphics, pos.x - shift, pos.y, line.text, line.color[0]);
                            }
                            index += 1;
                        });
                    }
                    
                    if (this.drawCursor) {
                        //console.log("Drawing cursor");
                        function rnd(min, max) {
                          return Math.floor(Math.random() * (max - min + 1) ) + min;
                        }
                        graphics.drawImage(this.hand, x_ref + item.width / 2 - x_cor - (this.drawCursor=="rnd"?rnd(2,15):5), 5 + (this.drawCursor=="rnd"?rnd(2,15):5));
                    }

                    console.log("Creating item screenshot took " + (Date.now() - iStart) + "ms");
                    resolve(graphics);
                });
            }
        });
	},
		
    drawCompilation: function (items) {
        var packer = new GrowingPacker(window.innerWidth * 0.8);
        var blocks = [];
		var padding = 10;//parseInt($("#itemList").css("padding"));
		
        var screenshots = [];
		
        for (var idx in items) {
			var img = items[idx].itemImage;
			img = new ItemImage(img?items[idx].itemImage:items[idx]);
			screenshots.push(ItemScreenshot.drawScreenshot(img));
        }
        
        return Promise.all(screenshots).then(results => {
            results.forEach(item => {
                blocks.push({item: $(item.canvas), w: item.canvas.width + padding, h: item.canvas.height + padding});
            });
            
            blocks.sort(function(a,b) { return (b.h - a.h); });
            packer.fit(blocks);

			var htmlTemplate = `<div style="
									display:inline-flex;
									align-items:start;
									justify-content:center;
									flex-wrap:wrap;
									width:` + packer.root.w + `px">`;
			
            for(var n = 0 ; n < blocks.length ; n++) {
                var block = blocks[n];
                if (block.fit) {
					htmlTemplate += `<img src="` + block.item[0].toDataURL() + `" style="padding:`+ padding + `px; border-radius: 20px"/>`;
                } else {
                    console.error("Couldn't pack image to canvas (Width Height):", block.w, block.h, "max. allowed size (Width Height):", packer.root.w, packer.root.h);
                }
            }
			
			htmlTemplate += `</div>`;

			return htmlTemplate;			
        });
		
    }
}