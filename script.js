const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
// console.log(arrows);
// console.log(movieLists);
// console.log(movieLists[0]);
arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth/300);//ekran kaç tane 300px den oluşuyor
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    //console.log(imageItem);
    
        arrow.addEventListener("click", function () {
            clickCounter++;
            if ((imageItem - (4 + clickCounter)+(4-widthRatio)) >= 0) {
                
            // arrow.style.background = "red"
            // console.log(i);
            //console.log(i)
            //movieLists[i].style.transform = "translateX(-300px)";//270+30px
            //console.log(movieLists[i].computedStyleMap().get("height"));//.movie-list css sınıfının height bilgisini döner=300px
            //console.log(movieLists[i].computedStyleMap().get("transform"));//.movie-list css sınıfının transform değerini döner
            //console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value);//.movie-list css sınıfının transform değerinin x değerini döner
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;

        }
        else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter=0;
        }
    });
    console.log(window.innerWidth)
});
/*Dark Mode */

    const ball = document.querySelector(".toggle-ball");
    console.log("deneme0")
    const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select, .movie-list-title");
    console.log("deneme1")
    console.log(ball);
    ball.addEventListener("click", function(){
        //console.log("deneme");
        //console.log(items);
        items.forEach((item)=>item.classList.toggle("active"));
    })