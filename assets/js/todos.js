//select <li> annd cross it when it is clicked
$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

//delete button
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //grabbing text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li tag and add it to the ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + " </li>");
    };
});


$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})