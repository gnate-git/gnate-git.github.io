const headerImage = document.getElementById("headerImage");

var imgsSelection = [
    "img/profile/at_home_0.JPG",
    "img/profile/bean_flower_0.jpg",
    "img/profile/butter_flower_0.jpg",
    "img/profile/butter_flower_0_Disk_Open_paint.jpg",
    "img/profile/butter_flower_0_paint_3.jpg",
    "img/profile/butter_flower_0_paint_9.jpg",
    "img/profile/cereal_0.JPG",
    "img/profile/cereal_1.JPG",
    "img/profile/cereal_2.JPG",
    "img/profile/cereal_0_shin_and_i_level_c_0.JPG",
    "img/profile/chi-chi_garden_0.jpg",
    "img/profile/chi-chi_garden_0_paint_5.jpg",
    "img/profile/garden_fall_peak_0.jpg",
    "img/profile/garden_fall_peak_0_paint_5.jpg",
    "img/profile/garden_fall_peak_0_paint_7.jpg",
    "img/profile/library_full_0.png",
    "img/profile/library_full_1.png",
    "img/profile/library_full_2.png",
    "img/profile/me_library_cc.png",
    "img/profile/RX-78-2_walk_0.JPG",
    "img/profile/RX-78-2_walk_1.JPG",
    "img/profile/shin_alone_0.JPG",
    "img/profile/shin_alone_1.JPG",
    "img/profile/shin_alone_2.JPG",
    "img/profile/shin_and_i_0.JPG",
    "img/profile/shin_and_i_1.JPG"
];

function chooseImage(){
    var num = Math.floor(Math.random()* imgsSelection.length);
    headerImage.src = imgsSelection[num];
}

headerImage.onload = chooseImage();
