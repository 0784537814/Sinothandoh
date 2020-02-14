// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBhfPS-RFMzpU-5ABSVi8qywmc1b3rVllY",
    authDomain: "contact-form-320c8.firebaseapp.com",
    databaseURL: "https://contact-form-320c8.firebaseio.com",
    projectId: "contact-form-320c8",
    storageBucket: "contact-form-320c8.appspot.com",
    messagingSenderId: "442248022259"
  };
  firebase.initializeApp(config);
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contact-form').addEventListener('submit',submitForm);
// Submit form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name  = getInputVal('name');
    var surname  = getInputVal('surname');
    var email = getInputVal('email');
    var message = getInputVal('message');

//Save message
    saveMessage(name, surname, email, message);

    
    
}

// Function to get get form values\
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, surname, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        surname: surname,
        email: email,
        message: message,
        

    })
}