var number1_name = localStorage.getItem("number1_name");
var number2_name = localStorage.getItem("number2_name");

function send(){

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_number = parseInt(number1) *  parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "<h4>";
    question_turn = "player1";
    answer_turn = "player2";
    input_number = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_number + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check(){
    document.getElementById(input_number);
    if(number1 == actual_number){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        if(question_turn == "player1"){
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "questionturn-" + player2_name;
        }
        else{
            
            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "questionturn-" + player1_name;
        }
    
        if(answer_turn == "player1"){
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "answerturn-" + player2_name;
        }
        else{
            
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "answerturn-" + player1_name;
        }
        document.getElementById("output").innerHTML = "";
    
    

    }

    }

