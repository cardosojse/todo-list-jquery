// $(document).ready(function(){
//     $(".submit").click(function(){
//         var input = $(".new-task").val();
//         if (input == ''){
//             alert("Empty field!");
//         }else{
//             $("ul").append("<li>" 
//                 + "<img class='check' width='25' height='25' src='https://img.icons8.com/material-outlined/24/checkmark.png'/>"
//                 + "<p class='item'>" + input + "</p>"
//                 + "<img class='remove' width='25' height='25' src='https://img.icons8.com/color/48/delete-sign--v1.png'/>"
//                 + "</li>");
//         }
//         $(".new-task").val('');
//     });''    
//     $("ul").on("click", ".check", function(){
//         $(this).parent("li").toggleClass("check");
//     });
//     $("ul").on("click", ".remove", function(){
//         $(this).parent("li").fadeOut(200);
//     });
// });