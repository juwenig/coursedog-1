function changeText(idx){

    var t1 = 'Search courses by degree requirements, professor, class times and more.'
    var t2 = "Automatically check that students have met course prerequisites before selecting a course.";
    var t3 = 'Recommend courses to students based on institutional goals or to support out-of-major course exploration.';
    var t4 = 'Notify administrators in advance about courses that may have too heavy demand. See courses that students are searching for that do not exist.';
    var t5 =  'Easily program drop deadlines, registration weeks, breaks and other relevant dates.';

    var text = [
    t1,t2,t3, t4, t5];
    document.getElementById('txtbx1').innerHTML = text[idx];

    var arrows = ['arrow1', 'arrow2', 'arrow3', 'arrow4', 'arrow5'];
    var lines = ['line1', 'line2', 'line3', 'line4', 'line5'];

 //changing display of arrow icon
    arrowChange(arrows, idx);

    //changing the color of the link text
   lineColorChange(lines,idx);
}


function changeText2(idx){

    var t1 = 'Input any requirement. Easy, fast and flexible.'
    var t2 = "Simple interface makes it easy to build, alter and make exceptions for degree requirements.";
    var t3 = 'Audit permissions and levels can be provided to different members of staff.';
    var t4 = 'Link with Coursedog search platform to find courses that fulfill requirements.';
    //var t5 =  'Easily program drop deadlines, registration weeks, breaks and other relevant dates.';

    var text = [
    t1,t2,t3, t4];
    document.getElementById('txtbx2').innerHTML = text[idx];

    var arrows = ['arrow6', 'arrow7', 'arrow8', 'arrow9'];
    var lines = ['line6', 'line7', 'line8', 'line9'];

 //changing display of arrow icon
    arrowChange(arrows, idx);

    //changing the color of the link text
   lineColorChange(lines,idx);
}

function changeText3(idx){

    var t1 = 'See relevant, important information about advisees on a modern dashboard.'
    var t2 = "Email notifications to advisors when a student has a significant GPA drop or is put on probation. Ability to add other notifications based on the advisors preference.";
    var t3 = 'See the most important notes other advisors have left for the student in the past.';
    var t4 = 'Forum for advisors to raise questions and receive answers directly from the dean.';

    var text = [
    t1,t2,t3, t4];
    document.getElementById('txtbx3').innerHTML = text[idx];

    var arrows = ['arrow11', 'arrow12', 'arrow13', 'arrow14'];
    var lines = ['line11', 'line12', 'line13', 'line14'];

 //changing display of arrow icon
    arrowChange(arrows, idx);

    //changing the color of the link text
   lineColorChange(lines,idx);
}



function arrowChange(arrows, idx){
    var element = document.getElementById(arrows[idx]);
    if (element.classList.contains("hidden")){
        element.classList.remove("hidden");
    }

    arrows.splice(idx, 1);
    for (i =0; i <arrows.length; i++){
        var element = document.getElementById(arrows[i]);
        element.classList.add("hidden");
    }
}


function lineColorChange(lines, idx){
    var element = document.getElementById(lines[idx]);
    if (element.classList.contains("gray-3")){
        element.classList.remove("gray-3");
        element.classList.add("link-clicked");
    }

    lines.splice(idx, 1);
    for (i =0; i <lines.length; i++){
        var element = document.getElementById(lines[i]);
        element.classList.remove("link-clicked");
        element.classList.add("gray-3");
    }
}
