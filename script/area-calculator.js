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
          console.log(width)

          // get rectangle length
          const lengthField = document.getElementById('rectangle-length')
          const lengthValueText = lengthField.value;
          const length = parseFloat(lengthValueText)
          console.log(length)

          // calculate area
          const area = width * length

          // show rectangle area
          const rectangleAreaSpan = document.getElementById('rectangle-area')
          rectangleAreaSpan.innerText = area;
}

//reuseable function --> reduce duplicate code
function calculateParallelogramArea() {
          const base = getInputValue('parallelogram-base')
          console.log(base)

          const height = getInputValue('parallelogram-height')
          console.log(height)
          const area = base * height;
          setElementInnerText('parallelogram-area', area)

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