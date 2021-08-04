var images=["https://post.healthline.com/wp-content/uploads/2020/09/689574-the-family-book.png",
"https://us.123rf.com/450wm/ylivdesign/ylivdesign1605/ylivdesign160500244/56085314-dad-icon-in-cartoon-style-on-a-white-background.jpg?ver=6",
"https://previews.123rf.com/images/djvstock/djvstock1807/djvstock180719805/114964492-cartoon-mom-icon-over-white-background-vector-illustration.jpg",
"https://image.shutterstock.com/image-illustration/adult-guys-men-two-best-260nw-655205473.jpg",
"https://i.pinimg.com/originals/e6/bb/e8/e6bbe8330b41e3dccb7679ef2ce93345.jpg"];


var names=["My Family Book","Sanjay Dhanani","Jigisha Dhanani","Jeneel Dhanani","Zeeshan Dhanani"];

var i=0;
function update(){
    i++;
    var number_array=4;
    if(i>number_array){i=0};
    var updateimage=images[i];
    var updatename=names[i];
    document.getElementById("picture").src=updateimage;
    document.getElementById("name").innerHTML=updatename;
}