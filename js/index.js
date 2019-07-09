// Your code goes here

//elements
const header = document.querySelector('header h2')
const body = document.querySelector('body')
const buttons = Array.from(document.querySelectorAll('.btn'))
const headerImg = document.querySelector('.intro img')
const letsGoHead = document.querySelector('.disappear')
const letsGoText = document.querySelector('.text-content p')
const destinationHeadings = Array.from(document.querySelectorAll('.destination h4'))
const midImages = Array.from(document.querySelectorAll('.mid-images'))
let navLinks = Array.from(document.querySelectorAll('.nav a'))
const navContainer = document.querySelector('.nav-container')

console.log(navLinks)

//variables
const colors = ['#B0C4DE', '#778899', '#87CEFA' , '#20B2AA', '#FFA07A', '#FFB6C1', '#90EE90', '#FAFAD2', '#E0FFFF', '#F08080', '#FFF0F5']

///change body background color of page
function changeBackgroundColor(event){
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}
body.onwheel = changeBackgroundColor
body.addEventListener('wheel', changeBackgroundColor)

//change font color of heading:
header.addEventListener('click', function(event){
    event.target.style.color = colors[Math.floor(Math.random() * colors.length)]

    setTimeout(function(){
        event.target.style.color = ''
    }, 250)
})

//no text to type
navLinks.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();
        event.target.style.fontWeight = 700;
    })
})

//change link color
navLinks.forEach(link => {
    link.addEventListener('mouseover', function(event){
        event.target.style.color = colors[Math.floor(Math.random() * colors.length)];
    })
})

//stop propagation
navContainer.addEventListener('mouseover', function(event){
    event.stopPropagation()
    event.target.style.color = colors[Math.floor(Math.random() * colors.length)];
})


//make image resize:
headerImg.addEventListener('dblclick', function(event){
  event.target.style.width = `${Math.floor(Math.random() * 101 * 2)}%`
})

//resize go header text:
letsGoHead.addEventListener('mouseenter', function(event){
    event.target.style.fontSize = '80px'

    setTimeout(function(){
        event.target.textContent = 'Let\'s Go!'
        event.target.style.fontSize = ''
    }, 1000)
})

//change p text to 'get off me'
letsGoText.addEventListener('mouseover', function(event){
    let text = 'Get Off Me'
    event.target.textContent = text
    event.target.style.fontWeight = 800
    event.target.style.fontSize = '10rem'

    setTimeout(function(){
        event.target.textContent = 'Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.'
        event.target.style.fontWeight = 400
        event.target.style.fontSize = '1.6rem'
    }, 2000)
})

//mid section images 
midImages.forEach((image) => {
    image.addEventListener('dragstart', function(event){
        event.preventDefault()
        alert('You Cant Drag This')
    })
})

// sign up buttons
buttons.forEach((button) => {
    button.addEventListener('click', function(event){
        event.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        event.target.textContent = 'Click for color code'
        alert(`This buttons background color is ${event.target.style.backgroundColor}`)
    })
})




//destination headings
destinationHeadings.forEach((heading) => {
    heading.addEventListener('mouseover', function(event){
        event.target.style.fontWeight = 1000

    setTimeout(function(){
        event.target.style.fontWeight = ''  
    }, 1500)
    })
})


//load message
window.addEventListener('load', (event) => {
    alert('Welcome to the Fun Bus');
});