
var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var mz_image = "";

mz_x= 0;
mz_y = 0;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height); 
        block_image_object.set( 
            { 
                top:block_y, 
                left:block_x 
            });
        canvas.add(block_image_object);
    }
    );
}

function add_megazord()
{
fabric.Image.fromURL("megazord.jpg", function(Img)
{
    mz_image = Img;
    mz_image.scaleToWidth(1100);
    mz_image.scaleToHeight(450); 
    mz_image.set( 
        { 
            top:mz_y, 
            left:mz_x 
        });
    canvas.add(mz_image);
}
)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image("rr1.png");
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png");
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png");
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png");
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	    new_image("br.png");
		console.log("b");
	}
	if(keyPressed == '32')
	{
	    add_megazord();
		console.log("MEGAZORD");
	}
}

