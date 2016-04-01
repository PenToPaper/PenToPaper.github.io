$(document).ready(function(){
    $(".node").hover(function(){
        $(this).children(".info-panel").toggleClass("hovering-node");
    });
    var previousNode
    $(".node").on("click", function(){
        var nodeNumber = $(this).data("node");
        if (previousNode != nodeNumber) {
            $(".info-all").slideUp(500);
            $(".node").removeClass("node-selected");
            
            $(".info-"+nodeNumber).slideDown(500);
            $(this).addClass("node-selected");
        } else {
            $(".info-"+nodeNumber).slideToggle(500);
            $(this).toggleClass("node-selected");
        }
        previousNode = nodeNumber;
    });
});