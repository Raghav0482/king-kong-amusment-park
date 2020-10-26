// <!-- For 3-11 -->

function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}

// <!--For 12 +-->

function up1(max) {
    document.getElementById("myNumber1").value = parseInt(document.getElementById("myNumber1").value) + 1;
    if (document.getElementById("myNumber1").value >= parseInt(max)) {
        document.getElementById("myNumber1").value = max;
    }
}
function down1(min) {
    document.getElementById("myNumber1").value = parseInt(document.getElementById("myNumber1").value) - 1;
    if (document.getElementById("myNumber1").value <= parseInt(min)) {
        document.getElementById("myNumber1").value = min;
    }
}



//Sing in//


$(document).ready(function () {
    $("#myBtn5").click(function () {
        $("#myModal").modal();
    });
});


//Sign up
$(document).ready(function () {
    $("#myBtn6").click(function () {
        $("#modal-signup").modal();
    });
});


