/* Origami_05
 * This controls the blog blurb display 
 */

/**
 * BlogBlurbControl - contains and controls all blogs to be displayed
 */
class BlogBlurbControl {
    /**
     * Creates a new blogblurbcontrol object
     */
    constructor() {
        this._blogs = [];
        this._blogsDisplayed = [];
        this._blogsDisplayedOrder = [];
        this._sortMethod = "dateRecent";
        this._restriction = "all";
    }

    /**
     * 
     * @param {*} blogblurb 
     */
    addBlog(blogblurb) {
        this._blogs.push(blogblurb);
    }

    bloglisttodisplay() {
        this._blogsDisplayed = this._blogs;
    }

    sortBlogs() { // This does not work yet!!
        console.log("sorting!");
        this._sortMethod = document.getElementById("sortInput").value;
        console.log(this._sortMethod);
        switch (this._sortMethod) {
            case "dateRecent":
                //alert(this._blogsDisplayed);
                function dateRecent(a, b) {
                    var tempa = a.getDate();
                    var tempb = b.getDate();
                    if (tempa.getYear() < tempb.getYear()) return 1;
                    if (tempa.getYear() > tempb.getYear()) return -1;

                    if (tempa.getMonth() < tempb.getMonth()) return 1;
                    if (tempa.getMonth() > tempb.getMonth()) return -1;

                    if (tempa.getDay() < tempb.getDay()) return 1;
                    if (tempa.getDay() > tempb.getDay()) return -1;

                    return 0;
                }
                this._blogsDisplayedOrder = this._blogsDisplayed.sort(dateRecent);
                //sort blogs by date posted, most recent
                break;
            case "dateOldest":
                function dateOldest(a, b) {
                    var tempa = a.getDate();
                    var tempb = b.getDate();
                    if (tempa.getYear() > tempb.getYear()) return 1;
                    if (tempa.getYear() < tempb.getYear()) return -1;

                    if (tempa.getMonth() > tempb.getMonth()) return 1;
                    if (tempa.getMonth() < tempb.getMonth()) return -1;

                    if (tempa.getDay() > tempb.getDay()) return 1;
                    if (tempa.getDay() < tempb.getDay()) return -1;


                    return 0;
                }
                this._blogsDisplayedOrder = this._blogsDisplayed.sort(dateOldest);

                //sort blogs by date posted, oldest
                break;
            case "authorAZ":
                function authorAZ(a, b) {
                    if (a.getAuthor() > b.getAuthor()) return 1;
                    if (a.getAuthor() < b.getAuthor()) return -1;
                    return 0;
                }
                this._blogsDisplayedOrder = this._blogsDisplayed.sort(authorAZ);
                //sort blogs by author alphabetically
                break;
            case "authorZA":
                function authorZA(a, b) {
                    if (a.getAuthor() < b.getAuthor()) return 1;
                    if (a.getAuthor() > b.getAuthor()) return -1;
                    return 0;
                }
                this._blogsDisplayedOrder = this._blogsDisplayed.sort(authorZA);
                //sort blogs by author reverse-alphabetically
                break;
            case "titleAZ":
                function titleAZ(a, b) {
                    if (a.getTitle() > b.getTitle()) return 1;
                    if (a.getTitle() < b.getTitle()) return -1;
                    return 0;
                }
                this._blogsDisplayedOrder = this._blogsDisplayed.sort(titleAZ);
                //sort blogs by title alphabetically
                break;
            case "titleZA":
                function titleZA(a, b) {
                    if (a.getTitle() < b.getTitle()) return 1;
                    if (a.getTitle() > b.getTitle()) return -1;
                    return 0;
                }
                this._blogsDisplayedOrder = this._blogsDisplayed.sort(titleZA);
                //sort blogs by title reverse-alphabetically
                break;

        }
    }

    restrictBlogs() {
        //console.log("starting restriction");
        this._restriction = document.getElementById("restrictionInput").value;
        //console.log(this._restriction);
        switch (this._restriction) {
            case "all":
                //alert(" restriction all");
                this._blogsDisplayed = this._blogs;
                break;
            case "online":
                //alert("online restrict");
                function checkOnline(blogblurb) {
                    //console.log(blogblurb.getInstructionType() == "online");
                    return blogblurb.getInstructionType() == "online";
                }
                this._blogsDisplayed = this._blogs.filter(checkOnline);
                //sort blogs by instruction type, showing only online ones
                break;
            case "video":
                //alert("video restrict");
                function checkVideo(blogblurb) {
                    //console.log(blogblurb.getInstructionType() == "video");
                    return blogblurb.getInstructionType() == "video";
                }
                this._blogsDisplayed = this._blogs.filter(checkVideo);
                //sort blogs by instruction type, showing only videos
                break;
            case "book":
                //alert("book restrict");
                function checkBook(blogblurb) {
                    //console.log(blogblurb.getInstructionType() == "book");
                    return blogblurb.getInstructionType() == "book";
                }
                this._blogsDisplayed = this._blogs.filter(checkBook);
                //sort blogs by instruction type, showing only books
                break;
            default:
                alert("error");
        }
        this.sortBlogs();
    }

    /**
     * Displays the blogs
     * @param {*} element element that the html is put in to
     */
    displayBlogs(element) {
        element = document.getElementById("blogdiv");
        this.restrictBlogs();
        var blogsDisplay = "";
        //alert(mainControl._blogsDisplayedOrder.toString());

        for (var i = 0; i < this._blogsDisplayedOrder.length; i++) {
            //alert(this._blogs[i].getHTML());
            blogsDisplay += this._blogsDisplayedOrder[i].getHTML();
        }
        //alert("HTML \n" + blogsDisplay);
        element.innerHTML = blogsDisplay;
        return blogsDisplay;
        //document.getElementById(element).innerHTML = blogsDisplay;
    }

    /*     _blogs;
        _blogsDisplayed;
        _blogsDisplayedOrder;
        _sortMethod;
        _restriction; */
}


/**
 * Creates the BlogBlurbControl object, populates it with the blurbs, and displays
 */
function initialize() {
    //alert("initializing");
    mainControl = new BlogBlurbControl();

    aDate = new MyDate(9, 11, 2019);

    var origamidoDate = new MyDate(30, 11, 2019);
    var origamido = new BlogBlurb("Origamido", "Michale G. LaFosse", "The Origamido Butterfly is pretty and makes a great gift paired with a flower or two. The instructions are thorough and geared towards someone without a lot of experience with origami and the origami language. The only issue I have with the model is that it can be difficult to fold the head with paper smaller than the recommended size. I prefer to fold the model with smaller paper because I feel that the resulting butterfly looks better. This is not really a big issue though because you cannot see much of a difference at that size.", "../images/origamido_butterflies_small.JPG", origamidoDate, "book", "../blogpages/origamado_butterfly.html");

    var babyDragonDate = new MyDate(1, 12, 2019);
    var babyDragon = new BlogBlurb("Baby Dragon", "Jo Nakashima", "This model is really cute and fairly easy to fold. There is one point that can pose an issue and that is the tail of the dragon. Sometimes getting the correct proportions can be difficult. The video is easy to follow along especially if you put the subtitles on. I find the little models in the top corner that are the written instructions for the step Jo Nakashima is on an added bonus for people who are familiar with the origami \"language\". The video and written instructions really work together to provide as many ways possible to convey what's going on. ", "../images/baby_dragon_jo_nakashima_small.JPG", babyDragonDate, "video", "../blogpages/baby_dragon.html");

    var kusudamaFlowerBallDate = new MyDate(2, 12, 2019);
    var kusudamaFlowerBall = new BlogBlurb("Kusudama Flower Ball", "Unknown", "The first thing I have to say about the Kusudama flower ball is that it is a time commitment to make it. It's very simple to make. 5 petals are made and then those are glued together to form a Kusudama flower. 12 of those flowers are glued together to make the flower ball. However, that means 60 petals are required to make the full flower ball and a whole lot of glue. The result is stunning though. <br/> The way I made this is I folded 5 petals and glued them (because each petal also requires glue) and I used paperclips to make sure they set properly. I then folded more petals while I waited for the previous ones to dry and when they were dry I glued 5 together to make a flower and used paper clips to make sure that set properly. Rinse and repeat until I had 12 flowers and then I glued the 12 flowers together.", "../images/kusudama_flower_ball_small.JPG", kusudamaFlowerBallDate, "online", "../blogpages/kusudama_flower_ball.html");

    var eightPetalFlowerDate = new MyDate(3, 12, 2019);
    var eightPetalFlower = new BlogBlurb("8 Petal Flower", "Origami_05", "This model I actually designed and made the instructions for myself. I am happy with the solution I found to getting another four flaps to make petals from. The model is not too hard to fold except for step 25. Most of the instructions is prep-work for that step. Step 25 is a little bit tricky to execute and I am unsure if I made itapparent what was happening.", "../images/8_petal_flowers_landscape.jpeg", eightPetalFlowerDate, "online", "../blogpages/8_petal_flower.html");

    mainControl.addBlog(origamido);
    mainControl.addBlog(babyDragon);
    mainControl.addBlog(kusudamaFlowerBall);
    mainControl.addBlog(eightPetalFlower);

    mainControl.displayBlogs();

}
