let detailsVisible = true;
let important = false;

function toggleImportant() {
    if(important) {
        $("#iImportant").removeClass('fas').addClass('far');
        important = false;
    }
    else{
        $("#iImportant").removeClass('far').addClass('fas');
        important = true;
    }
}

function categorySel() {
    let selVal = $("#selCategory").val();
    console.log(selVal);

    if(selVal === "7"){
        $("#txtCategory").removeClass('hide');
    }
    else{
        $("#txtCategory").addClass('hide');
    }
    console.log(selVal);
}

function toggleDetails() {
    if(detailsVisible) {
        $("#capture-form").hide();
        detailsVisible = false;
    }
    else{
        $("#capture-form").show();
        detailsVisible = true;    
    }
}

function saveTask(){
    console.log("Saving Task");

    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let location = $("#txtLocation").val();
    let dueDate = $("#selDueDate").val();
    let category = $("#selCategory").val();
    if(category === "7") category = $("#txtCategory").val();
    let color = $("#selColor").val();

    let task = new Task(title, important, description, location, dueDate, category, color);
    console.log(task);
}


function init(){
    console.log("Task manager")

    //load prev data
    
    //hook events
    $("#selCategory").change(categorySel);
    $("#btnDetails").click(toggleDetails);
    $("#iImportant").click(toggleImportant);
    $("#saveBtn").click(saveTask);
    
}


window.onload = init;

