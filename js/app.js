let students = [
  {
    name: 'Ravi',
    usn: '1by18cs122'
  },
  {
    name: 'Ayush',
    usn: '1by18cs036'
  },
  {
    name: 'Ashish',
    usn: '1by20cs031'
  }
];

const checkbox = document.getElementById("remember-me");
const signInButton = document.getElementById("sign-btn");

checkbox.addEventListener('click', onCheckboxClick);

function onCheckboxClick() {
  if(checkbox.checked) {
    signInButton.style.display = 'none';
  } else {
    signInButton.style.display = 'block';
  }
}
