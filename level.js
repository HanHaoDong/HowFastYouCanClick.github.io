



document.addEventListener('DOMContentLoaded', function () {

	const submitSecondsbutton = document.getElementById('submit-seconds-button');




	submitSecondsbutton.addEventListener('click', function () {

		const secondsInput = document.getElementById('seconds-input');
		const seconds = secondsInput.value;

		if (parseInt(seconds) < 5 || parseInt(seconds) > 60) {
			alert(' 5 to 60 seconds only')
		} else {


			const submitSecondsbutton_feedback = '<script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script> <lord-icon src="https://cdn.lordicon.com/osralwsf.json" trigger="loop"colors="primary:#000000,secondary:#000000"stroke="100"style="width:25px;height:25px"></lord-icon>'
			submitSecondsbutton.innerHTML = submitSecondsbutton_feedback

			const url = `http://localhost:5000/seconds/?seconds=${seconds}`
			setTimeout(() => {
				fetch(url, { method: 'POST' })
					.then(function (response) {
						return response.json();
					})
					.then(function (json) {
						if (json.error) {
							throw new Error(json.error);
						}

						var changeBox = '<h3 class="login100-form-title p-b-34 p-t-27">' + json.Name + '</h3>' + '<p class="login100-form-title p-b-34 p-t-27">Are you ready to start clicking?</p>' + '<h3 class="login100-form-title p-b-34 p-t-27">' + json.Seconds + ' seconds</h3>' + "<button class='login100-form-btn' style='margin-left:7.5em;''  onclick='window.location.href = `Game.html`'>Start Challenge</button>"
						var changeTest = document.getElementById('Start?')
						changeTest.innerHTML = changeBox;
						console.log(changeBox)
						submitSecondsbutton.innerHTML = '<script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script><lord-icon src="https://cdn.lordicon.com/jvihlqtw.json" trigger="hover"colors="primary:#121331,secondary:#08a88a" stroke="100" style="width:25px;height:25px"></lord-icon>'
					})
					.catch(function (err) {
						alert(err.message);
					});
			}, 1000);
		}
	})





})