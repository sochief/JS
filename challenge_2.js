var teamJohn;
var teamMike;
var teamMary;
teamMary = (97+134+105)/3;
teamJohn = (89+120+103)/3;
teamMike = (116+94+123)/3;
switch(true){
    case (teamMary > teamJohn && teamMary > teamMike):
        console.log('Marys team won with an average score: '+ teamMary);
        break;
    case (teamMike > teamMary && teamMike > teamJohn):
        console.log('Mikes team won with an average score: '+ teamMike);
        break;
    case (teamJohn > teamMary && teamJohn > teamMike):
        console.log('Johns team won with an average score '+ teamJohn);
        break;
    case (teamMary === teamJohn && teamJohn > teamMike):
        console.log('Mary and Jonh at the first place with a score:' + teamMary);
        break;
    case (teamJohn === teamMike && teamJohn > teamMary):
        console.log('Jonh and Mike at the first place with a score' + teamJohn);
        break;
}