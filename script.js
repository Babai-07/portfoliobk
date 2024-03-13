/* =================== typing animation ===================== */
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "Web Developer",
    "Front-end Web Developer",
    "YouTuber",
  ],
  typeSpeed: 100,
  BackSpeed: 70,
  loop: true,
});

const handleSubmit = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    msg: document.getElementById("msg").value,
  });
  console.log(raw);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch(
    "https://my-portfolio-backend-mjl9.onrender.com/api/v1/saveContact",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};
