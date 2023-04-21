function chnagebgimage(){                
   
  let resultValue = parseInt($('#resultant').text());
  let resulttype = parseInt($('#unit').text());
  const myDiv = document.getElementById('resultcard');
  if(resulttype='C'){
          if (resultValue <= 26) {
          myDiv.style.backgroundImage = 'url("Assets/snow.svg")';
          } 
          else if (resultValue > 26){
          myDiv.style.backgroundImage = 'url("Assets/sun.svg")';
          } 
          else {
          myDiv.style.backgroundColor =  "white";
          }
        }
        else{
          if (resultValue <= 78.80) {
            myDiv.style.backgroundImage = 'url("Assets/snow.svg")';
            } 
            else if (resultValue > 78.80){
            myDiv.style.backgroundImage = 'url("Assets/sun.svg")';
            } 
            else {
            myDiv.style.backgroundColor =  "white";
            }
        }
}


function fTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
  
    switch (conversionDegreeType) {
      case 'F':
        temperature = inputDegreeValue;
        break;
      case 'C':
        temperature = eval((inputDegreeValue - 32) * (5 / 9));
        break;
    }
    return temperature;
  }


function cTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
  
    switch (conversionDegreeType) {
  
      case 'C':
        temperature = inputDegreeValue;
        break;
      case 'F':
        temperature = eval((inputDegreeValue * (9 / 5)) + 32);
        break;
    }
  
    return temperature;
  }



function calculate() {

    let inputDegree = parseInt($('#inputDegree').val());
    let inputtype = $('#inputtype').val();
    let conversionType = $('#to').val();
  
    let resultValue = "";
  
    switch (inputtype) {
  
      case "C":
        resultValue = cTo(inputDegree, conversionType);
        break;
  
      case "F":
        resultValue = fTo(inputDegree, conversionType);
        break;
    }
  

    if (isNaN(inputDegree)) {
      $('#resultant').text('');
      return;
    }
  

    $('#unit').text(conversionType)
  

    if (conversionType === inputtype) {
  
      $('#resultant').text(inputDegree);
    } else {
  
      return $('#resultant').text(resultValue.toFixed(2));
  
    }
  
  }



 