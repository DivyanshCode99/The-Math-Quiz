player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

question_turn ="player1";
answer_turn="player2";

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " +player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " +player2_name;



function send(){
    get_number1 = document.getElementById("number1").value;
    get_number2 = document.getElementById("number2").value;
    console.log("number1 =  "+ get_number1);
    console.log("number2 =  "+ get_number2);

    number=get_number1+" X "+get_number2;
    question_word="<h4 id='word_display'>"+number+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info'  onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    answer=get_number1*get_number2;
    console.log(answer);
    
}
function check(){
    get_answer=document.getElementById("input_check_box").value;
   
    if(get_answer == answer){
        if(answer_turn =="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player1_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }        
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn - " +player2_name;
    }
    else{
        question_turn=="player1";
        document.getElementById("player_question").innerHTML="Question Turn - " +player1_name;
    }


    if(answer_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - " +player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - " +player1_name;
    }
    document.getElementById("output").innerHTML="";
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}