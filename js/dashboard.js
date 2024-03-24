(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2019", "2020", "2021", "2022", "2023"],
            datasets: [{
                    label: "Kota Samarahan",
                    data: [150, 300, 350, 450, 500],
                    backgroundColor: "rgba(91, 140, 81, .7)"
                },
                {
                    label: "Kuching",
                    data: [80, 350, 400, 600, 700],
                    backgroundColor: "rgba(237, 221, 94, .5)"
                },
            ]
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["2019", "2020", "2021", "2022", "2023"],
            datasets: [{
                    label: "Revenue",
                    data: [99, 135, 170, 130, 190],
                    backgroundColor: "rgba(91, 140, 81, .7)",
                    fill: true
                },
                {
                    label: "Sales",
					data: [150, 300, 550, 450, 700],
                    backgroundColor: "rgba(237, 221, 94, .5)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    
})(jQuery);

	function logout() {
		var confirmLogout = confirm("Are you sure you want to log out?");
		if (confirmLogout) {
			window.location.href = "index.html";
		}
	}

	function showAlert() {
    alert("The features will come soon, stay tuned!");
	}

    $(document).ready(function() {
        $('#lightSwitch').change(function() {
            if ($(this).is(':checked')) {
                // Send command to turn on the light
                console.log('Light turned on');
            } else {
                // Send command to turn off the light
                console.log('Light turned off');
            }
        });
    });

	function updateTemperatureAndHumidity() {

		var temperature = 25.5;
		var humidity = 60.2;

		$('#temperature').text(temperature.toFixed(1));
		$('#humidity').text(humidity.toFixed(1));
	}
	// Call the function to update values initially
	updateTemperatureAndHumidity();

	// Update values every 1 seconds (example)
	setInterval(updateTemperatureAndHumidity, 1000);

	$(document).ready(function() {
		$('#wateringSwitch').change(function() {
			if ($(this).is(':checked')) {
				// Send command to turn on the watering system
				console.log('Watering system turned on');
			} else {
				// Send command to turn off the watering system
				console.log('Watering system turned off');
			}
		});
	});

	function updateSoilMoisture() {
		var moistureLevel = 35.8;

		$('#moistureLevel').text(moistureLevel.toFixed(1));
	}
	// Call the function to update values initially
	updateSoilMoisture();

	// Update values every 5 seconds (example)
	setInterval(updateSoilMoisture, 5000);