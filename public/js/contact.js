const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	contactForm.querySelector("#submitContact").disabled = true;
	const formData = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("question").value,
		message: document.getElementById("message").value,
	};
	console.log(JSON.stringify(formData));
	fetch("https://shinonomekazanvn.chinh-94f.workers.dev/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: JSON.stringify(formData),
	})
		.then((ret) => {
			if (ret.status >= 300) {
				throw "Can not sent";
			}
			contactForm.querySelector("#name").value = "";
			contactForm.querySelector("#email").value = "";
			contactForm.querySelector("#question").value = "";
			contactForm.querySelector("#message").value = "";
			alert("Đã gửi yêu cầu thành công. Cảm ơn bạn đã liên hệ với chúng tôi.");
		})
		.catch((error) => {
			alert(error);
			contactForm.querySelector("#submitContact").disabled = false;
		});
});
