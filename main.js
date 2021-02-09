
 const ques=[
  {que:"Are you watching closely? Who repeatedly poses this question in Prestige(2006)",option:["Alfred Borden","Robert Angier","The Great Danton","Sarah"],crt:0},

  {que:"Borden sets up his own magic show, the best trick being the Transported Man. What object passes between the two doors to show how quickly the trick is done?",option:["A Bullet","A Ring","A Red Rubber Ball","A Pigeon"],crt:2},

  {que:"What is the name of the AI in the movie Transcendence",option:["BINN (Basically independent neural network)","BINN (Barely independent neural network)","PINN (Physically independent neural network)","PINN (Psychologically independent neural network)"],crt:2},

  {que:"Will Caster is targeted by an anti-technology extremist group called?",option:["SIFT (Social ly Independence From Technology)","RIFT (Revolutionary Independence From Technology)","NIFT (Nationally Independence From Technology)","GIFT (Graffiti Independence From Technology)"],crt:1},

  {que:"When The Joker goes to propose his idea for killing Batman, a man asks why he shouldn't have one of his boys rip his head off. What does the Joker do?",option:["Pushes the guy from top of the building","Kills the guy with the pencil","Makes a pencil disappear, and explains it to the guy","Makes a pencil disappear, but really puts it up a guy's head"],crt:3},

  {que:"Who has the ability to break the fourth wall in these following movies",option:["Deadpool","Joker","Iron man","Spiderman"],crt:0},

  {que:"The movie deadpool was shot in how many days?",option:["64","93","48","103"],crt:2},

  {que:"Which suit made Peter Parker stronger, but also changed his personality?",option:["Symbiote","Iron Spidey","Scarlet","Stealth"],crt:0},

  {que:"What is the name of the Spiderman's AI",option:["Jarvis","Friday","Edith","Karen"],crt:3},

  {que:"What type of technology keeps the shrapnel from entering Tony's heart and powers Iron Man?",option:["Nano Technology","Arc Reactor Technology","Symbiote Technology","Quantum Technology"],crt:1},

];

let score = 0,name = "",index = 0,answer = [],times;
 
 
$(document).ready(function(){
   $(".continue-btn").click(function(){
     $(".sec1").fadeIn();
   });
   $(".start-quiz").click(function(){
     name = $(".input").val();
     if(name === '') {
      alert("Please Enter Your Name")
      return;
     }
     $(".sec1").fadeOut();
     $(".sec2").fadeIn();
     newQuestion()
   });
   $(".quiz").on("click","li", function(){
     $(".quiz .select").removeClass("select");
     $(this).addClass("select");
   })
   $(".submit").click(function(){
    const select = $(".quiz li").hasClass("select");
    if(!select) {
     alert("please select any option");
     return;
    }
    const key = $(".quiz .select").attr("data-key");
    checkAns(key)
   })
   $(".check-ans").click(function(){
     $(".sec3").fadeOut();
     $(".sec4").fadeIn();
     showYourAns()
   });
   $(".back-btn").click(function(){
     $(".sec4").fadeOut();
     $(".sec3").fadeIn();
   });
   
});
 
 let s = 0, m = "0"+0;
 function newQuestion(){
   const que = ques[index];
   showIndex()
   $(".question").text(que.que);
   $(".quiz").html("");
   que.option.forEach((q,i) => {
    const li = document.createElement('li');
    li.setAttribute('data-key',i);
    li.textContent = q;
    $(".quiz").append(li)
   })
 }
 
 function checkAns(key) {
  const que = ques[index];
  answer.push(key);
  if(que.crt == key) {
   score++;
  }
  index++;
  if(index < ques.length) {
   newQuestion()
  } else{
   showResult()
   clearInterval(times)
  }
 }
 
 function showIndex(){
  $(".index").text(1 + index+"/"+ques.length)
 }
 
 function showResult(){
  $(".sec2").fadeOut();
  $(".sec3").fadeIn();
  $(".name").text(name);
  const scores = Math.round(score / ques.length * 100);
  $("#score").text("Score : "+ scores +"%");
 }

 function showYourAns() {
  $(".ans-list").html("");
  $(".sc").text(score+ "/"+ques.length)
  ques.forEach((que,i) => {
   const li = document.createElement('li');
   const p = document.createElement('p');
   const span = document.createElement('span');
   p.textContent = 1+i +" : "+ que.que;
   const chrt = que.crt == answer[i] ? '✔' : '❌';
   span.textContent = chrt +" "+ que.option[answer[i]];
   const cls = que.crt == answer[i] ? 'green' : 'red';
   span.classList.add(cls);
   li.appendChild(p)
   li.appendChild(span)
   $(".ans-list").append(li);
  })
 }