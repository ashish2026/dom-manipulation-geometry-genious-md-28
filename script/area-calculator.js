function calculateTriangleArea() {

     //get triangle base value
     const baseField = document.getElementById('triangle-base');
     const baseValueText = baseField.value;
     const base = parseFloat(baseValueText)


     // get triangle height value
     const heightField = document.getElementById('triangle-height')
     const heightValueText = heightField.value;
     const height = parseFloat(heightValueText)


     const area = 0.5 * base * height;


     // show triangle area
     const areaSpan = document.getElementById('triangle-area');
     areaSpan.innerText = area;
}

function calculateRectangleArea() {
     // get rectangle width
     const withField = document.getElementById('rectangle-width')
     const widthValueText = withField.value
     const width = parseFloat(widthValueText)
     

     // get rectangle length
     const lengthField = document.getElementById('rectangle-length')
     const lengthValueText = lengthField.value;
     const length = parseFloat(lengthValueText)

     // validate input 
     if (isNaN(width) || isNaN(length)) {
          alert('Please insert a number')
          return;
     }

     // calculate area
     const area = width * length

     // show rectangle area
     const rectangleAreaSpan = document.getElementById('rectangle-area')
     rectangleAreaSpan.innerText = area;
}

//reuseable function --> reduce duplicate code
function calculateParallelogramArea() {
     const base = getInputValue('parallelogram-base')
     const height = getInputValue('parallelogram-height')
     // validate
     if(isNaN(base) || isNaN(height)){
          alert('Please insert number')
          return;

     }

     const area = base * height;
     setElementInnerText('parallelogram-area', area)

     addToCalculationEntry('parallelogram', area)
}

function calculateEllipseArea() {
     const majorRadius = getInputValue('ellipse-major-radius')
     const minorRadius = getInputValue('ellipse-minor-radius')
     const area = 3.14 * majorRadius * minorRadius;
     setElementInnerText('ellipse-area', area)
}

// reuseable get input value field in number 
function getInputValue(fieldId) {
     const inputField = document.getElementById(fieldId);
     const InputValueText = inputField.value;
     const value = parseFloat(InputValueText);
     return value;

}

//  reuseable set span , p , div , etc text
function setElementInnerText(elementId, area) {
     const element = document.getElementById(elementId)
     element.innerText = area;

}


/* 
1.set the proper type of the input field .(number, data, email)
2.check type using typeOf
3.NaN means: not a number. isNan checking whether the input is not a number or not 

*/