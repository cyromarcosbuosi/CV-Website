
var graphicDesign = true;
var webDeveloper = true;
var backEnd = true;
var dataAnalist = true;
var photoshop = true;

$(document).ready(function () {
    $("#btnGraphicDesign").click(function () {
        $("#barGraphicDesign").toggle(900);
        if (graphicDesign === true){
            graphicDesign = false;
            $(".btnGraphicDesign").removeClass("fa fa-plus").addClass("fa fa-minus")
        }else if(graphicDesign === false){
            graphicDesign = true;
            $(".btnGraphicDesign").removeClass("fa fa-minus").addClass("fa fa-plus")
        }
    });
    $("#barGraphicDesign").hide();


    $("#btnWebDevelopment").click(function () {
        $("#barWebDevelopment").toggle(900);
        if (webDeveloper === true){
            webDeveloper = false;
            $(".btnWebDevelopment").removeClass("fa fa-plus").addClass("fa fa-minus")
        }else if(webDeveloper === false){
            webDeveloper = true;
            $(".btnWebDevelopment").removeClass("fa fa-minus").addClass("fa fa-plus")
        }
    });
    $("#barWebDevelopment").hide();

    $("#btnBackend").click(function () {
        $("#barBackend").toggle(900);
        if (backEnd === true){
            backEnd = false;
            $(".btnBackend").removeClass("fa fa-plus").addClass("fa fa-minus")
        }else if(backEnd === false){
            backEnd = true;
            $(".btnBackend").removeClass("fa fa-minus").addClass("fa fa-plus")
        }
    });
    $("#barBackend").hide();

    $("#btnDataAnalytics").click(function () {
        $("#barDataAnalytics").toggle(900);
        if (dataAnalist === true){
            dataAnalist = false;
            $(".btnDataAnalytics").removeClass("fa fa-plus").addClass("fa fa-minus")
        }else if(dataAnalist === false){
            dataAnalist = true;
            $(".btnDataAnalytics").removeClass("fa fa-minus").addClass("fa fa-plus")
        }
    });
    $("#barDataAnalytics").hide();

     $("#btnPhotoshop").click(function () {
        $("#barPhotoshop").toggle(900);
        if (photoshop === true){
            photoshop = false;
            $(".btnPhotoshop").removeClass("fa fa-plus").addClass("fa fa-minus")
        }else if(photoshop === false){
            photoshop = true;
            $(".btnPhotoshop").removeClass("fa fa-minus").addClass("fa fa-plus")
        }
    });
    $("#barPhotoshop").hide();


});