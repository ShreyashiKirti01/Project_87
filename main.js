var canvas= new fabric.Canvas("myCanvas");
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 200;
block_image_height =300;

var block_image_object= "";

function new_image(get_image)
{
fabric.Image.fromURL(get_image, function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top:block_y,
left:block_x
});
canvas.add(block_image_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
	new_image("ironman.jpg");
	block_x= 100;
	}
	if(keyPressed == '71')
	{
		new_image("captain.jpg");
		block_x = 450;
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		new_image("blackwidow.jpg");
		block_x =800;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		new_image("thor.jpg");
		block_x = 300;
		block_y= 300;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		new_image("AvengersHulk.webp");
		block_x = 650;
		block_y= 300;
	// upload blue ranger
	}
	
}

