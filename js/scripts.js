$(document).ready(function() {

  $("#formOne").submit(function(event) {
    $("#equilateral, #isosceles, #scalene, #not").hide();
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());
    if (side1 > 0 && side2 > 0 && side3 > 0) {
      if (side1 === side2 || side2 === side3 || side3 === side1) {
        if (side1 === side2 && side2 === side3) {
          $("#equilateral").show();
        } else if (side1 !== side2 || side2 !== side3 || side3 !== side1) {
          $("#isosceles").show();
        }
      } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
          $("#scalene").show();
      } else {
        $("#not").show();
      }
    } else {
      $("#not").show();
    }
    event.preventDefault();
  });
});
