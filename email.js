function sendMail() {
  console.log("Email field:", document.getElementById("userEmail"));
  console.log("Phone field:", document.getElementById("userPhone") || document.getElementById("phone"));

  var params = {
    name: document.getElementById("name").value,
    userEmail: document.getElementById("userEmail")?.value,
    userPhone: document.getElementById("userPhone")?.value,
    message: document.getElementById("message").value,
    address: document.getElementById("address").value,
  };

  console.log("Params being sent:", params);

  emailjs.send("service_ol1loci", "template_t6z7t5j", params)
    .then((res) => {
      alert("Your Message Sent Successfully");
      console.log(res);
    })
    .catch((err) => console.log(err));
}
