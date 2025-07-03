
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

 
