setTimeout(() => {
  const colors = {
    activeStateColor: "#7569CF",
    nonActiveStateColor: "#B9B8D8",
  };

  const stateModals = {};

  $(".close-info-block").click(() => {
    clearTableAndState();
    $(".info-block").removeClass("show");
    $(".tint").hide();
  });

  const clearTableAndState = () => {
    $(".counties").remove();
    $(".msa").remove();
  };

  const stateEnabled = {
    Alaska: false,
    Florida: true,
    Michigan: {
      "MI-": true,
      "SP-": true,
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
    Illinois: true,
    Connecticut: false,
    Wisconsin: false,
    North_Carolina: true,
    District_of_Columbia: false,
    Massachusetts: false,
    Tennessee: true,
    Arkansas: true,
    Missouri: true,
    Georgia: true,
    South_Carolina: true,
    Kentucky: true,
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

  // $description = $(".description");
  const getMSAs = (state) => {
    return Object.keys(states[state].MSA);
  };

  const getCountiesByMSA = (state, msa) => {
    return Object.keys(states[state].MSA[msa]);
  };

  Object.keys(stateEnabled)
    .filter((element) => {
      return stateEnabled[element] === true;
    })
    .forEach((element) => {
      $(`#${element}`).addClass("enabled");
      $(`#${element}`).attr("fill", colors.activeStateColor);
      $(`#${element}`).click(() => {
        clearTableAndState();
        console.log("clicked", element, states[element]);

        const msas = getMSAs(element);
        $(".state").text(element);
        msas.forEach((el, idx) => {
          $(`<div class=msa><div class=msa-text>${el}</div></div>`).appendTo(".table");
          $("<div class=counties></div>").appendTo(".table");

          const lastCounties = $(".counties").length - 1;
          const counties = getCountiesByMSA(element, el);

          const append = $(".counties")[lastCounties];

          counties.forEach((el) => {
            $(`<div class=county><div class=county-text>${el}</div></div>`).appendTo(append);
          });
        });
        $(".tint").show();
        $(".info-block").addClass("show");
      });
    });
}, 5000);
