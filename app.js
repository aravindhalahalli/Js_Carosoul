// Carousel Part
$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $(".carousel-item")
                        .eq(i)
                        .appendTo(".carousel-inner");
                } else {
                    $(".carousel-item")
                        .eq(0)
                        .appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    });
});
let data = {
    "GATE" : `<div id="cat-242">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner row w-100 mx-auto">
            <div class="carousel-item col-md-4 active">
                <div class="studyPack_slider_single">
                    <img src="https://static.kopykitab.com/catalog/view/theme/new/img/premium_icon_new.png"
                        alt="Premium" style="width: 20px;position: absolute;top: 8px;right: 10px;">
                    <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                    <div class="premiumPacks_details">
                        <div class="premiumPacks_subtext">2 Mock Tests</div>
                        <div class="premiumPacks_subtext">2012-2019 Papers</div>
                        <div class="premiumPacks_subtext">Study Material</div>
                    </div>
                    <div class="studyPack_button">Explore Pack</div>
                </div>
            </div>
            <div class="carousel-item col-md-4">
                <div class="studyPack_slider_single">
                    <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                    <div class="premiumPacks_details">
                        <div class="premiumPacks_subtext">2 Mock Tests</div>
                        <div class="premiumPacks_subtext">2012-2019 Papers</div>
                        <div class="premiumPacks_subtext">Study Material</div>
                    </div>
                    <div class="studyPack_button">Explore Pack</div>
                </div>
            </div>
            <div class="carousel-item col-md-4">
                <div class="studyPack_slider_single">
                    <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                    <div class="premiumPacks_details">
                        <div class="premiumPacks_subtext">2 Mock Tests</div>
                        <div class="premiumPacks_subtext">2012-2019 Papers</div>
                        <div class="premiumPacks_subtext">Study Material</div>
                    </div>
                    <div class="studyPack_button">Explore Pack</div>
                </div>
            </div>
            <div class="carousel-item col-md-4">
                <div class="studyPack_slider_single">
                    <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                    <div class="premiumPacks_details">
                        <div class="premiumPacks_subtext">2 Mock Tests</div>
                        <div class="premiumPacks_subtext">2012-2019 Papers</div>
                        <div class="premiumPacks_subtext">Study Material</div>
                    </div>
                    <div class="studyPack_button">Explore Pack</div>
                </div>
            </div>
            <div class="carousel-item col-md-4">
                <div class="studyPack_slider_single">
                    <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                    <div class="premiumPacks_details">
                        <div class="premiumPacks_subtext">2 Mock Tests</div>
                        <div class="premiumPacks_subtext">2012-2019 Papers</div>
                        <div class="premiumPacks_subtext">Study Material</div>
                    </div>
                    <div class="studyPack_button">Explore Pack</div>
                </div>
            </div>
            <div class="carousel-item col-md-4">
                <div class="studyPack_slider_single">
                    <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                    <div class="premiumPacks_details">
                        <div class="premiumPacks_subtext">2 Mock Tests</div>
                        <div class="premiumPacks_subtext">2012-2019 Papers</div>
                        <div class="premiumPacks_subtext">Study Material</div>
                    </div>
                    <div class="studyPack_button">Explore Pack</div>
                </div>
            </div>
            <div class="carousel-item col-md-4">
                <div class="studyPack_slider_single">
                    <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                    <div class="premiumPacks_details">
                        <div class="premiumPacks_subtext">2 Mock Tests</div>
                        <div class="premiumPacks_subtext">2012-2019 Papers</div>
                        <div class="premiumPacks_subtext">Study Material</div>
                    </div>
                    <div class="studyPack_button">Explore Pack</div>
                </div>
            </div>
        </div>
    </div>
</div>`,
"IIT JEE" : `<div id="cat-243" >
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner row w-100 mx-auto">
        <div class="carousel-item col-md-4 active">
            <div class="studyPack_slider_single">
                <img src="https://static.kopykitab.com/catalog/view/theme/new/img/premium_icon_new.png"
                    alt="Premium" style="width: 20px;position: absolute;top: 8px;right: 10px;">
                <div class="studyPack_name">IIT JEE Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
    </div>
</div>
</div>`,
"CAT":`<div id="cat-238" >
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner row w-100 mx-auto">
        <div class="carousel-item col-md-4 active">
            <div class="studyPack_slider_single">
                <img src="https://static.kopykitab.com/catalog/view/theme/new/img/premium_icon_new.png"
                    alt="Premium" style="width: 20px;position: absolute;top: 8px;right: 10px;">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">CAT Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
        <div class="carousel-item col-md-4">
            <div class="studyPack_slider_single">
                <div class="studyPack_name">GATE Computer Science Exam Guide</div>
                <div class="premiumPacks_details">
                    <div class="premiumPacks_subtext">2 Mock Tests</div>
                    <div class="premiumPacks_subtext">2012-2019 Papers</div>
                    <div class="premiumPacks_subtext">Study Material</div>
                </div>
                <div class="studyPack_button">Explore Pack</div>
            </div>
        </div>
    </div>
</div>
</div>`
}
/* Let's Build: With JavaScript - Web-Crunch.com
   Subscribe on YouTube - https://youtube.com/c/webcrunch.
*/

function onTabClick(event) {
    // console.log(event.target.innerHTML)
    let activeTabs = document.querySelectorAll('.active');
    activeTabs.forEach(function(tab) {
    //   console.log(tab.className)
      tab.className = tab.className.replace(' active', '');
    });
    event.target.parentElement.className += ' active';
    document.getElementById("tabdata").innerHTML = data[event.target.innerHTML]
    // console.log(data[event.target.innerHTML])
}
  
  const element = document.getElementById('nav-tab');

  element.addEventListener('click', onTabClick, false);
  document.getElementById("tabdata").innerHTML = data["GATE"]
