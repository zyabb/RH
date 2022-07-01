
setTimeout(() => {
	const colors = {
  activeStateColor: "#7569CF",
  nonActiveStateColor: "#B9B8D8",
};

const stateModals = {};

$($(".available-states")[0])
  .find(".available-state-item div")
  .each((idx, el) => {
    const stateName = $(el).find(".state-name").text();
    const stateDescription = $(el).find(".state-description p").html();
    //TODO:
    stateModals[stateName] = stateDescription;
    //add to stateModals
  });

const stateEnabled = {
  Alaska: false,
  Florida: true,
  Michigan: {
    "MI-": false,
    "SP-": false,
  },
  Vermont: false,
  Maine: false,
  Rhode_Island: false,
  New_York: false,
  Pennsylvania: false,
  New_Jersey: false,
  Delaware: false,
  Maryland: false,
  Virginia: true,
  West_Virginia: false,
  Ohio: true,
  Indiana: true,
  Illinois: false,
  Connecticut: false,
  Wisconsin: false,
  North_Carolina: true,
  District_of_Columbia: false,
  Massachusetts: false,
  Tennessee: true,
  Arkansas: false,
  Missouri: true,
  Georgia: true,
  South_Carolina: true,
  Kentucky: false,
  Alabama: true,
  Louisiana: false,
  Mississippi: false,
  Iowa: false,
  Minnesota: false,
  Oklahoma: true,
  Texas: true,
  Nevada: false,
  South_Dakota: false,
  North_Dakota: false,
  Wyoming: false,
  Montana: false,
  Colorado: true,
  Idaho: false,
  Utah: false,
  Arizona: false,
  Oregon: false,
  Washington: false,
  California: false,
  Nebraska: false,
  Kansas: false,
  New_Mexico: false,
  Hawaii: false,
};

$description = $(".description");

Object.keys(stateEnabled)
  .filter((element) => {
    return stateEnabled[element] === true;
  })
  .forEach((element) => {
    $(`#${element}`).addClass("enabled");
    $(`#${element}`).attr("fill", colors.activeStateColor);
    $(`#${element}`).hover(
      //on hover over
      function () {
        $(this).attr("class", "enabled heyo");
        $description.addClass("active");
        $description.html(stateModals[element]);
      },
      //on hover out
      function () {
        $description.removeClass("active");
        $description.html("");
      }
    );
  });

// $(".enabled").hover(
//   //on hover over
//   function () {
//     $(this).attr("class", "enabled heyo");
//     $description.addClass("active");

$(document).on("mousemove", function (e) {
  $description.css({
    left: e.pageX,
    top: e.pageY - 70,
  });
});

}, 5000)
