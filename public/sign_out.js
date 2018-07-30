(function() {
    const btnSignOut = document.getElementById('sign-out-btn');
    const btnSignOut2 = document.getElementById('sign-out-btn-2');

    btnSignOut.addEventListener('click', e => {
        firebase.auth().signOut().then(function() {
            alert('successfully logged out!');
            window.location = 'login_form.html';
        }).catch(function(error) {
            alert(error);
        });
    });

    btnSignOut2.addEventListener('click', e => {
        firebase.auth().signOut().then(function() {
            alert('successfully logged out!');
            window.location = 'login_form.html';
        }).catch(function(error) {
            alert(error);
        });
    });

}());