// function getValue(){
// var x = document.getElementById("blank");
// document.getElementById("demo").innerHTML = x.value;
// var = document.getElementById("1.2.1");document.getElementById("demo").innerHTML = x.value;
//
// }姓名: <input type="text" id="name" value=""><br>
// <button type="button" onclick="getValue()">提交</button><input type="submit" value="查看分数" >
function getBlankPoints(){
  var v1 = document.getElementById("blank1.1.1");
  var v2 = document.getElementById("blank1.2.1");
  var v3 = document.getElementById("blank1.2.2");
  var v4 = document.getElementById("blank1.2.3");
  var a = "统一建模语言";
  var blankPoints = 0;
  var blankPoints1 = 0;
  var blankPoints2 = 0;
    if (v1.value === a ){
      blankPoints1 = 5;
  }
  var k =['封装性','继承性','多态性'];
  var a1 = [v2.value,v3.value,v4.value];
  for(var i = 0; i < 3; i++){
   for(var j = 0; j < 3; j++){
     if(k[i] === a1[j]){
       blankPoints2 += 5;
       break;
     }
   }
  }
  blankPoints = blankPoints1 + blankPoints2;
  return blankPoints;
}
function getSelectionPoints(){
  var v5 = document.getElementById("blank2.1.2").checked;
  var v6 = document.getElementById("blank2.2.1").checked;
  var selectionPoints1 = 0;
  var selectionPoints2 = 0;
  if(v5) {
    selectionPoints1 = 10;
  }
  if(v6) {
    selectionPoints2 = 10;
  }
  var selectionPoints = selectionPoints1 + selectionPoints2;
  return selectionPoints;
}
function getMutiPoints(){
  var v7 = document.getElementById("blank3.1.1").checked;
  var v8 = document.getElementById("blank3.1.2").checked;
  var v9 = document.getElementById("blank3.1.3").checked;
  var v10 = document.getElementById("blank3.1.4").checked;
  var v11 = document.getElementById("blank3.2.1").checked;
  var v12 = document.getElementById("blank3.2.2").checked;
  var v13 = document.getElementById("blank3.2.3").checked;
  var v14 = document.getElementById("blank3.2.4").checked;
  var MutiPoints1 = 0;
  var MutiPoints2 = 0;
  var v = (v7&&v8&&v10)&&(!v9);
  var vv = (v11&&v12&&v13)&&(!v14);
  if(v){
      MutiPoints1 = 10;
     }
  if(vv) {
      MutiPoints2 = 10;
     }
  var MutiPoints =MutiPoints1 + MutiPoints2;
  return MutiPoints;
}
function getJudgePoints(){
var v15 = document.getElementById("blank4.1.2").checked;
var v16 = document.getElementById("blank4.2.1").checked;
var JudgePoints1 = 0;
var JudgePoints2 = 0;
if(v15) {
   JudgePoints1 = 10;
 }
 if(v16) {
   JudgePoints2 = 10;
 }
 var JudgePoints = JudgePoints1 + JudgePoints2;
 return JudgePoints;
}
function getShortAnswerPoints(){
var v17 = document.getElementById("b");
var ShortAnswerPoints = 0;
var k5 = '模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。';
if(v17.value === k5){
  ShortAnswerPoints = 20;
  }
  return ShortAnswerPoints;
}
function getTotalpoints(){
  var v18 = document.getElementById("scores");
  var totalpoints = 0;
  totalpoints = getBlankPoints() + getSelectionPoints()+ getMutiPoints() + getJudgePoints() + getShortAnswerPoints();

  v18.value =totalpoints;
}
