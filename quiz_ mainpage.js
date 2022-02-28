player1_score=0;
player2_score=0;
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn- " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+ player2_name;

function send(){
    no1=document.getElementById("no1").value;
    no2=document.getElementById("no2").value;
    actual_answer=parseInt(no1)* parseInt(no2);

    question_no="<h4>" + no1 + " X " + no2 + "</h4";

    input_box="<br><br><center>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'> Check </button></center>";

    row=question_no+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";
}