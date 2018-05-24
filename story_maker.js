function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.
    //alert("It works!");

    // get form values
    var adj1 = document.getElementById('adj1').value;
    var noun1 = document.getElementById('noun1').value;
    var pnoun1 = document.getElementById('pnoun1').value;
    var femalename = document.getElementById('femalename').value;
    var adj2 = document.getElementById('adj2').value;
    var clothing = document.getElementById('clothing').value;
    var noun2 = document.getElementById('noun2').value;
    var city = document.getElementById('city').value;
    var pnoun2 = document.getElementById('pnoun2').value;
    var adj3 = document.getElementById('adj3').value;
    var bodypart = document.getElementById('bodypart').value;
    var letter = document.getElementById('letter').value;
    var celebrity = document.getElementById('celebrity').value;
    var pnoun3 = document.getElementById('pnoun3').value;
    var adj4 = document.getElementById('adj4').value;
    var place = document.getElementById('place').value;
    var bodypart2 = document.getElementById('bodypart2').value;
    var adj5 = document.getElementById('adj5').value;
    var adj6 = document.getElementById('adj6').value;
    var verb = document.getElementById('verb').value;
    var pnoun4 = document.getElementById('pnoun4').value;
    var number = document.getElementById('number').value;



    // Set title of story.
    var title = "Book";


    // Build story.
    var paragraph1 = "There are many " + adj1 + " ways to choose a/an " + noun1 + " to read. First, you could ask recommendations from your friends and " + pnoun1 + ". Just don't ask Aunt " + femalename + "-she only reads " + adj2 + " books with " + clothing + "-ripping godesses on the cover. If your friends and family are no help, try checking out the " + noun2 + " review in The " + city + " Times. If the " + pnoun2 + " featured there are too " + adj3 + " for your taste, try something a little more low-" + bodypart + ", like " + letter +
    ": The " + celebrity + " Magazine, or " + pnoun3 + " Magazine. You could also choose a book the " + adj4 + "-fashioned way. Head to your local library or " + place + " and browse the shelves until something catches your " + bodypart2 + ". Or, you could save a whole lot of " + adj5 + " trouble and log on to www.bookish.com, the " + adj6 + "new website to " + verb + " for books! With all the time you'll save not having to search for " + pnoun4 + ", you can read " + number + " more books!";
    var paragraph2 = "";
    var paragraph3 = "";


    // Display story.
    document.getElementById('one').innerHTML = paragraph1;

}
