const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
// const phone = document.getElementById("phone")
const course = document.getElementById("course");
const comments = document.getElementById("comments");


x=5 

function sendEmail(){
    const bodyMessage = `Full Name:${fullName.value}<br> Email: ${email.value
    // }<br>phone:${phone.value} <br> course : ${course.value} <br> Comments: ${comments.value}
    }`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mohammedmoustafa232001@gmail.com",
        Password : "E335F094E28451867361845ACDEAE6E854BB",
        To : 'mohammedmoustafa232001@gmail.com',
        From : "mohammedmoustafa232001@gmail.com",
        Subject : comments.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});