function Login() {
    Swal.fire({
        title: "Login Successfully!",
        icon: "success",
        timer: 2000, // Alert will close automatically after 2 seconds
        showConfirmButton: false // Hides the OK button
    }).then(() => {
        window.location.href = "index.html"; // Redirects to the Login page
    });
}
function Register() {
    Swal.fire({
        title: "User Register Successfully!",
        icon: "success",
        timer: 2000, // Alert will close automatically after 2 seconds
        showConfirmButton: false // Hides the OK button
    }).then(() => {
        window.location.href = "auth.html"; // Redirects to the Login page
    });
}

function logout() {
    Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Logged Out!",
                text: "You have been successfully logged out.",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                window.location.href = "auth.html"; // Redirect to login page
            });
        }
    });
}