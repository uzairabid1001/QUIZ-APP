
var displayQuestion = document.getElementById("displayQuestion" )
var displayOption = document.getElementById('displayOption')
var curentQues = document.getElementById('curentQues')
var totalques = document.getElementById('totalques')
var indexval=0;
var mark = 0;
var questdislay =document.getElementById('questdislay')
var displayresult =document.getElementById('displayresult')
var perc =document.getElementById('perc')
var pes =document.getElementById('pes')


var questions =[
    {
        question : "HTML stand for _________",
        Options : ['hypertext markup language','HTML','CSS','JS'],
        correctAnswer : 'hypertext markup language'
    },
    {
        question :'CSS stands for_________',
        Options : ['Cascading Style Sheet','HTML','CSS','JS'],
        correctAnswer : 'Cascading Style Sheet'
    },
    {
        question : 'JS stands for_________',
        Options : ['Javascript','HTML','CSS','JS'],
        correctAnswer : 'Javascript'
    },

    {
        question : 'DOM stands for_________',
        Options : ['Document Object Model','HTML','CSS','JS'],
        correctAnswer : 'Document Object Model'
    },

    {
        question : 'RAM stands for_________',
        Options : ['Randon Acces memory','HTML','CSS','JS'],
        correctAnswer : 'Randon Acces memory'
    },

    {
        question : 'ROM stands for_________',
        Options : ['Read only memory','HTML','CSS','JS'],
        correctAnswer : 'Read only memory'
    }
]


function renderQuestion(){
    displayQuestion.innerHTML = questions[indexval].question;
    for (var i = 0; i < questions[indexval].Options.length; i++) {
          displayOption.innerHTML +=`  <div class="col-md-6 my-3">
          <button onclick="checkqst('${questions[indexval].Options[i]}','${questions[indexval].correctAnswer}')" class="btn btn-outline-primary rounded-pill w-100 py-2 shadow" style="background-color: #56cfe1;"><b>${questions[indexval].Options[i]}</b></button>
      </div>`
        
    }
    totalques.innerHTML=questions.length;
    curentQues.innerHTML = indexval + 1 ;


}
renderQuestion()

function nextbtn(){
    displayOption.innerHTML =""
    if (indexval +1 ==questions.length) {
        var pe =mark/6*100
        perc.innerHTML=pe.toFixed(2)
        displayresult.style.display="block"
        questdislay.style.display="none"
    }else{
        indexval++
        renderQuestion()
        
    }
    
    
}


function checkqst(optionvalue,correctvalue){
 if (optionvalue==correctvalue) {
     mark++
     console.log(mark)
     
 }
 
 nextbtn()
}