let menu=document.querySelector('#menu i')
let sidebarCon=document.querySelector('.sidebar .sidebar-content')
let sidebar=document.querySelector('.sidebar')
let content=document.querySelector('.content')
menu.addEventListener('click',()=>{
    sidebarCon.classList.toggle('s1resize')
    sidebar.classList.toggle('s1resize')
})

    $(document).ready(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });

let editProfile=document.getElementById('editProfile')
let editInfo=document.getElementById('editInfo')
let detailsModel=document.querySelector('.details-model')
let updateProfileBtn=document.getElementById('updateProfileBtn')
editProfile.addEventListener('click',()=>{
  detailsModel.classList.add('hide')
  editInfo.classList.add('hide')
})
updateProfileBtn.addEventListener('click',()=>{
    detailsModel.classList.remove('hide')
  editInfo.classList.remove('hide')
})


let logoutbtn=document.getElementById('logoutbtn')
let updateList=document.getElementById('updateList')
let logoutPopup=document.querySelector('.logoutPopup')
let updateContainer=document.getElementById('updateContainer')
logoutbtn.addEventListener('click',()=>{
 setTimeout(()=>{
  logoutPopup.classList.add('slide')
 })
},2000)

updateList.addEventListener('click',()=>{
  setTimeout(()=>{
    updateContainer.classList.add('updateslide')
   })
  },2000)



//Section Change
let sections=document.querySelectorAll('section')
let listGroupItem=document.querySelectorAll('.list-group-item')
listGroupItem.forEach(i=>{
  i.addEventListener('click',()=>{
   sections.forEach(j=>{
    if(i.attributes['data-item'].value==j.attributes['data-filter'].value){
       j.classList.remove('d-none')
    }
    else{
     j.classList.add('d-none')
      logoutPopup.classList.remove('slide')
    }
   })
  })
})


function sendIcon(){
  let skillInput=document.getElementById('skillInput')
  if(skillInput.value){
    document.querySelector('.sendIcon').classList.remove('d-none')
}
else{
    document.querySelector('.sendIcon').classList.add('d-none')
}
}
function adjustTextareaHeight(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = (textarea.scrollHeight > 60) ? 70 + "px" : "50px";
  if (textarea.value.trim() === "") {
    textarea.style.height = "45px";
}
}
let mesContent=document.querySelector('.mesContent')
var downIcon = document.querySelector(".downIcon");
var lastScrollPosition = mesContent.scrollTop;

// Function to check if scrolling up within mescontent
function isScrollingUp() {
  var currentScrollPosition = mesContent.scrollTop;
  var isScrollingUp = currentScrollPosition < lastScrollPosition;
  lastScrollPosition = currentScrollPosition;
  return isScrollingUp;
}

// Function to toggle arrow visibility
function toggleArrowVisibility() {
  if (isScrollingUp()) {
    downIcon.style.display="block";
  } else {
    // Check if scrolling down to the bottom
    var isAtBottom = mesContent.scrollTop + mesContent.clientHeight+100 >= mesContent.scrollHeight;
    console.log(isAtBottom)
    if (isAtBottom) {
          downIcon.style.display = 'none'; // Hide the down arrow
    } 
  }
}


// Check scroll position on page load
toggleArrowVisibility();
mesContent.addEventListener('scroll', toggleArrowVisibility);

if(mesContent.scrollHeight > mesContent.clientHeight){
  downIcon.style.display="none"
}
downIcon.addEventListener('click',scrollToBottom);
function scrollToBottom() {
  var scrollOptions = {
    top: mesContent.scrollHeight,
    behavior: 'smooth'
};
mesContent.scrollTo(scrollOptions);
downIcon.style.display = "none";
}
mesContent.scrollTo(0,mesContent.scrollHeight)

function mesSendIcon(e){
  let msgSendIcon=document.getElementById('msgSendIcon')
  if(e.value){
    msgSendIcon.classList.remove('d-none')
  }
  else{
    msgSendIcon.classList.add('d-none')
  }
 
}
