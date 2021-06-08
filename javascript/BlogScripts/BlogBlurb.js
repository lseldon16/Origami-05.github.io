// Origami_05

/**
 * BlogBlurb - Contains data for each blog blurb
 */
class BlogBlurb {
    /**
     * Creates a new blog blurb
     * @param {*} title title of the model
     * @param {*} author author of the model
     * @param {*} blurb short blurb based off of blog
     * @param {*} image thumbnail image of the model (file path)
     * @param {*} date date object representing date blurb posted
     * @param {*} instructionType type of instructions used to fold model
     */
    constructor(title, author, blurb, image, date, instructionType, link) {
        this._title = title;
        this._author = author;
        this._blurb = blurb;
        this._image = "<image src=\"" + image + "\" class=\"blogblurbimage\">";
        this._datePublished = date;
        this._instructionType = instructionType;
        this._link = link;
    }

    getTitle() {
        return this._title;
    }
    getAuthor() {
        return this._author;
    }
    getDatePublished() {
        return this._datePublished;
    }
    getInstructionType() {
        return this._instructionType;
    }

    getDate() {
        return this._datePublished;
    }

    /**
     * @return the html to display this blog blurb
     */
    getHTML() {
        var temp = "<a href=\"" + this._link + "\"><table class=\"blogblurb\">";
        temp += " <tr class=\"titleRow\"><td rowspan=\"4\" class=\"blogblurbimagecontainer\">" + this._image + "</td>";
        temp += " <td class=\"title\">" + this._title + "</td> </tr>";
        temp += "<tr class=\"authorRow\"><td class=\"author\">" + this._author + "</td></tr>";
        temp += "<tr class=\"dateRow\"><td class=\"date\">" + this._datePublished.getDay() + "/" + this._datePublished.getMonth() + "/" + this._datePublished.getYear() + "</td></tr>";
        temp += "<tr><td class=\"blurb\">" + this._blurb + "</td></tr>";
        temp += "</table> </a>";
        return temp;
    }

    /*     _title; //title of model string
        _author; //author of model string
        _blurb; //blurb summarizing blog string
        _image; //image tag of blog thumbnail
        _datePublished; //date object of date blog put up
        _instructionType; //type of instruction the blog is
        _link; //link to html page of the blog */

}