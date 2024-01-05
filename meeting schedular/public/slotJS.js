const formDisplay = document.getElementById('formDispaly');
const outerDiv = document.getElementById('outerdiv');
const innerDiv = document.getElementsByName('innerDiv');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const myForm = document.getElementById('userForm');
const meetid = document.getElementById('hidden-Id');
const time = document.getElementById('hidden-time');

function displayForm(id) {
    console.log(id);
    formDisplay.style.display = 'block';
}

function displayForm(id,Time) {
    meetid.value = id;
    time.value = Time;
    console.log(time);
    formDisplay.style.display = 'block';
    
}

formDisplay.addEventListener('mouseleave', ()=> {
    formDisplay.style.display = 'none';
})

async function sendData(e) {
    e.preventDefault();
    const slot = {
        meetId: meetid,
        username: userName.value,
        useremail: userEmail.value,
        time: meetTime
    }
  const data = await axios.post('http://localhost:4000/scheduleMeeting',slot);
  console.log(data);

}
// myForm.addEventListener('submit',sendData);