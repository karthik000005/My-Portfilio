// function sendMessage(event) {
//   event.preventDefault();
//   alert("Message sent! Thank you for contacting me.");
// }
function sendMessage(event) {
    event.preventDefault(); // Stop form from reloading page

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    alert(`Message sent!Thank you for contacting me.\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // ✅ Clear the form inputs properly
    document.querySelector('#contact form').reset();

    return false;
  }
  // Show or hide the top button
window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll to top smoothly
document.getElementById("topBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

  // document.addEventListener("DOMContentLoaded", () => {
  //   const navLinks = document.querySelectorAll("nav a");
  //   const sections = document.querySelectorAll("section");
  
  //   // Hide all sections initially
  //   sections.forEach(section => section.classList.remove("active"));
  
  //   // Listen for nav link clicks
  //   navLinks.forEach(link => {
  //     link.addEventListener("click", function (e) {
  //       e.preventDefault();
  
  //       const targetId = this.getAttribute("href").substring(1);
  
  //       // Hide all sections
  //       sections.forEach(section => section.classList.remove("active"));
  
  //       // Show clicked section
  //       const target = document.getElementById(targetId);
  //       if (target) {
  //         target.classList.add("active");
  //       }
  //     });
  //   });
  // });
  