(function() {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCNwQawqcisZevqPOA-HKubRkEQl-CGX0Y",
        authDomain: "real-issue-tracker.firebaseapp.com",
        databaseURL: "https://real-issue-tracker.firebaseio.com",
        projectId: "real-issue-tracker",
        storageBucket: "real-issue-tracker.appspot.com",
        messagingSenderId: "817361783935"
    };
    firebase.initializeApp(config);

    const email = document.getElementById('email-txt');
    const password = document.getElementById('password-txt');
    const btnLogin = document.getElementById('login');

    btnLogin.addEventListener('click', e => {
        const emailVal = email.value;
        const pass = password.value;
        firebase.auth().signInWithEmailAndPassword(emailVal, pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password lmao');
            } else {
                alert('No recognizable email exists, please register the account first!');
            }
            console.log(error);
        });
    });

    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            window.location = 'issuelist.html';
            alert('You are now logged in!')
        } else {}
    });
}());