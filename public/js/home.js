function tab(number){
  if(number==0){
    $("#0").addClass("highlighted");
    $("#1").removeClass("highlighted");
    $("#21st_century").html(" 21st century academic scheduling. ");
  }
  else{
    $("#1").addClass("highlighted");
    $("#0").removeClass("highlighted");
    $("#21st_century").html(" 21st century course selection. ");
  }
}
