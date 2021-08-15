
function Back() {

              window.location.assign('https://hanhaodong.github.io/HowFastYouCanClick.github.io/')

}


document.addEventListener('DOMContentLoaded', function () {

    var Name = ''
    var sec = 0
    const url = `https://hosting-ca3.herokuapp.com/Game`;
    fetch(url, { method: 'GET' })
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            if (json.error) {
                throw new Error(json.error);
            }
            Name = json.Name
            sec = json.Seconds

        })
        .catch(function (err) {
            alert(err.message);
        });


    var seconds = 3, $seconds = document.querySelector('#countdown');
    (function countdown() {

        $seconds.textContent = seconds + ' second' + (seconds == 1 ? '' : 's')
        if (seconds == 0) {
            console.log('test')
            var seconds2 = sec, $seconds2 = document.querySelector('#countdown2');
            const headings = document.getElementById('headings')
            headings.innerHTML = 'Game will Ends in ' + seconds2 + 's'

            const countdownEnd = document.querySelector('#countdown');
            countdownEnd.textContent = ''

            const countButton = document.getElementById('countButton')
            countButton.disabled = false


            var count = 0;


            (function countdown() {

                $seconds2.textContent = seconds2 + ' second' + (seconds2 == 1 ? '' : 's')
                if (seconds2 == 0) {
                    console.log(count)

                    const countdownEnd = document.querySelector('#countdown2');
                    countdownEnd.textContent = ''

                    const countButton = document.getElementById('countButton')
                    countButton.disabled = true

                    const Clearbutton = document.getElementById('Clear-button')
                    const countButtonhide = document.getElementById('countButtonhide')
                    const url = `https://hosting-ca3.herokuapp.com/Count?counts=${count}`;
                    fetch(url, { method: 'PUT' })
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (json) {
                            if (json.error) {
                                throw new Error(json.error);
                            }
                            console.log(json.topScore)
                            Clearbutton.innerHTML = '<h3 class="login100-form-title p-b-34 p-t-27">' + count + ' times clicked by ' + Name + '</h3>' + '<button  class="login100-form-btn" id="Retry" style="margin-left:8.3em;" onclick="window.location.reload();">Retry</button><button  class="login100-form-btn" id="BackHomePage" style="margin-left:6.5em;" onclick="Back()">Back to Home Page</button> <h4 class="login100-form-title p-b-34 p-t-27"> Current highest score for ' + sec + 's is ' + json.topScore + '</h4>'

                            countButtonhide.innerHTML =''

                        })
                        .catch(function (err) {
                            alert(err.message);
                        });


                }
                if (seconds2-- > 0)
                    setTimeout(countdown, 1000)
            })();





            countButton.addEventListener('click', function () {

                count++
                console.log(count)
            })


        }
        if (seconds-- > 0)
            setTimeout(countdown, 1000)
    })();










})
