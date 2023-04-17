let imageURL_Array = [
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/372073/60ad2eda9638fa38.jpg"
];

var n = 100;

$(function(){
    $("input").on("click",function(){
        //var n = 0;
        var numberOfListItem = $("li").length;
        console.log(n);
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        while(randomChildNumber == n){
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }
        n = randomChildNumber;
        console.log(randomChildNumber);
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",imageURL_Array[randomChildNumber]);
    });
});