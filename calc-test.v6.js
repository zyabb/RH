let ms = 300,
  hide = 0,
  query = !1;
const getStateFromQueryAndSaveToCookie = () => {
  const e = new URLSearchParams(window.location.search).get("state"),
    t = new URLSearchParams(window.location.search).get("submit");
  switch ((null != e && Cookies.set("state", e), e)) {
    case "TN":
      $("#ribbon-state-selector").val("Tennessee").change(), (query = !0);
      break;
    case "AL":
      $("#ribbon-state-selector").val("Alabama").change(), (query = !0);
      break;
    case "VA":
      $("#ribbon-state-selector").val("Virginia").change(), (query = !0);
      break;
    case "GA":
      $("#ribbon-state-selector").val("Georgia").change();
      break;
    case "FL":
      $("#ribbon-state-selector").val("Florida").change();
      break;
    case "NC":
      $("#ribbon-state-selector").val("North Carolina").change();
      break;
    case "SC":
      $("#ribbon-state-selector").val("South Carolina").change();
      break;
    case "TX":
      $("#ribbon-state-selector").val("Texas").change(), (query = !0);
  }
  sleep(1e3).then(() => {
    t && document.getElementById("ribbon-state-go-btn").click();
  });
};
getStateFromQueryAndSaveToCookie();

let map = new Map();
Webflow.push(function () {
  $(document).ready(function () {
    const e = new XMLHttpRequest();
    function t(t) {
      e.open("GET", t),
        e.send(),
        (e.onreadystatechange = function () {
          if (4 == this.readyState && 200 == this.status) {
            const e = JSON.parse(this.responseText).principalSubdivision;
            $("#ribbon-state-selector option").filter(function () {
              this.value === e && $("#ribbon-state-selector").val(e).change();
            });
          }
        });
    }
    var i;
    $("#ribbon-state-go-btn").click(function () {
      if ("none" === $("#ribbon-state-selector").val()) return cbc(), !1;
      Cookies.set("state", $("#ribbon-state-selector").find("option:selected").text()),
        "Tennessee" !== $("#ribbon-state-selector").val() &&
        "Virginia" !== $("#ribbon-state-selector").val() &&
        "Alabama" !== $("#ribbon-state-selector").val() &&
        "Texas" !== $("#ribbon-state-selector").val()
          ? (window.location.href = "https://www.ribbonhome.com/guides/appraisal-protection")
          : ($("#tabs").show(),
            $("#flexible-options").css("display", "flex"),
            $("#questionnaire").show(),
            $([document.documentElement, document.body]).animate(
              query ? { scrollTop: $("#calculator").offset().top } : { scrollTop: $("#flexible-options").offset().top },
              2e3
            )),
        $(".mask.overflow-visible.w-slider-mask")
          .find(".slide-calc.w-slide")
          .each(function (e) {
            const t = $(this).closest(".slide-calc").height();
            map.set(e, t);
          }),
        $(document).ready(function () {
          changeHeight(0);
        });
    }),
      (i = "https://api.bigdatacloupdateDigits.net/data/reverse-geocode-client"),
      navigator.geolocation.getCurrentPosition(
        (e) => {
          t(
            (i =
              i +
              "?latitupdateDigitse=" +
              e.coords.latitupdateDigitse +
              "&longitupdateDigitse=" +
              e.coords.longitupdateDigitse +
              "&localityLanguage=en")
          );
        },
        (e) => {
          t(i);
        },
        { enableHighAccuracy: !0, timeout: 5e3, maximumAge: 0 }
      );
  }),
    //initial values
    // step 1
    $("#ribbon-offer-price").val("$320,000"),
    $("#ribbon-max-value").val("$310,000"),
    $("#ribbon-cash-on-close").text("$10,000"),
    //step 2
    // $("#ribbon-appraised-value").val("$310,000");
    $("#ribbon-appraised-value").val("$290,000"),
    $("#ribbon-value").val("$300,000"),
    $("#ribbon-funded-ap").text("$10,000"),
    //step 3
    $("#ribbon-amount-to-seller").text("$320,000"),
    $("#ribbon-final-contract").text("$300,000"),
    $("#ribbon-difference").text("$20,000"), //new value - DIFFERENCE
    $("#ribbon-funded").text("$10,000"), //new value
    $(".ribbon-appraisal-gap-amount").text("$10,000"), //new value - presented on step 3 and 4
    // $(".ribbon-appraisal-protection").text("$10,000"),
    //step 4

    $("#ribbon-appraisal-value").val("$50,000"),
    //
    $("#payment-to-ribbon").text("$22,500"),
    $("#ribbon-service-fee").text("$12,500"),
    $("#ribbon-cap-payout").text("$30,000");
  $("#email-form1, #email-form2, #email-form3, #email-form4, #email-form5, #ribbon-select-state-form").submit(
    function () {
      return !1;
    }
  );
});
//fields - step 1
let ribbonOfferPriceInput = $("#ribbon-offer-price"),
  ribbonMaxValueInput = $("#ribbon-max-value"),
  ribbonCashOnClose = $("#ribbon-cash-on-close"),
  // step 2 done
  ribbonAppraisedValueInput = $("#ribbon-appraised-value"),
  ribbonValueInput = $("#ribbon-value"),
  ribbonFundedAP = $("#ribbon-funded-ap"),
  //step 3 - done
  ribbonAmountToSeller = $("#ribbon-amount-to-seller"),
  ribbonFinalContract = $("#ribbon-final-contract"),
  ribbonDifference = $("#ribbon-difference"),
  ribbonFunded = $("#ribbon-funded"),
  ribbonAppraisalGapAmount = $(".ribbon-appraisal-gap-amount"),
  ribbonAppraisalGapAmountId = $("#ribbon-appraisal-gap-amount"),
  //step 4
  ribbonAppraisalValueInput = $("#ribbon-appraisal-value"),
  paymentToRibbon = $("#payment-to-ribbon"),
  ribbonServiceFee = $("#ribbon-service-fee"),
  capOnRibbonPayout = $("#ribbon-cap-payout"),
  // utils
  ribbonOfferPriceValue = "$320,000",
  ribbonFundedHide = $(".ribbon-funded-hide"),
  appraisalGapHide = $(".gap-hide"),
  ribbonAppraisedValue = ribbonAppraisedValueInput.val();
// appraisalProtectionValue = 1e4;
ribbonOfferPriceInput
  .focus(function () {
    "$0" == $(this).val() && $(this).val("$");
  })
  .blur(function () {
    "$" == $(this).val() && ($(this).val("$0"), ribbonMaxValueInput.val("$0"));
  }),
  ribbonAppraisedValueInput
    .focus(function () {
      "$0" == $(this).val() && $(this).val("$");
    })
    .blur(function () {
      "$" == $(this).val() && $(this).val("$0");
    }),
  ribbonAppraisalValueInput
    .focus(function () {
      "$0" == $(this).val() && $(this).val("$");
    })
    .blur(function () {
      "$" == $(this).val() && $(this).val("$0");
    });
const updateDigits = (e) => (
    "number" == typeof e && (e = String(e)), e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  ),
  showErrorRange = () => {
    const e = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, ""));
    e < 150000 || e > 1e6 || "$0" == ribbonOfferPriceInput.val() || "$" == ribbonOfferPriceInput.val()
      ? (showAndHideBoxes(), $("#calc-content-error-2").css("opacity", "100"))
      : // $("#next-btn").hide()
        (showAndHideBoxes(), $("#calc-content-error-2").css("opacity", "0"));
    // , $("#next-btn").show()
  },
  showErrorRange2 = () => {
    const e = parseInt(ribbonMaxValueInput.val().replace(/\D/g, ""));
    e < 150000 || e > 1e6 || "$0" == ribbonMaxValueInput.val() || "$" == ribbonMaxValueInput.val()
      ? (showAndHideBoxes(), $("#calc-content-error-4").css("opacity", "100"))
      : // $("#next-btn").hide()
        (showAndHideBoxes(), $("#calc-content-error-4").css("opacity", "0"));
    // , $("#next-btn").show()
  },
  // showErrorRangeRibbonValue = () => {
  //   const e = parseInt(ribbonValueInput.val().replace(/\D/g, ""));
  //   e < 150000 || e > 1e6 || "$0" == ribbonValueInput.val() || "$" == ribbonValueInput.val()
  //     ? ($("#calc-content-error-5").css("opacity", "100"), showAndHideBoxes())
  //     : ($("#calc-content-error-5").css("opacity", "0"), showAndHideBoxes());
  // },
  updatePaymentToRibbon = () => {
    const ribbonAppraisalValue = parseInt(ribbonAppraisalValueInput.val().replace(/,/g, "").replace("$", "")), //e
      serviceFee = updateDigits(String(Math.floor(0.25 * ribbonAppraisalValue))); //t
    let paymentToRibbonValue; //a
    const appraisalGapAmount = parseInt(ribbonAppraisalGapAmountId.text().replace(/\D/g, "")); //n

    if (ribbonAppraisalValue > 0) {
      ribbonServiceFee.text("$" + serviceFee);
      paymentToRibbonValue = Math.floor(0.25 * ribbonAppraisalValue + appraisalGapAmount);

      if (paymentToRibbonValue > 3 * appraisalGapAmount) {
        paymentToRibbon.text("$" + updateDigits(3 * appraisalGapAmount)), $(".cap").css("opacity", "100");
      } else {
        paymentToRibbon.text("$" + updateDigits(paymentToRibbonValue));
        $(".cap").css("opacity", "0");
      }
    } else {
      paymentToRibbon.text("$10");
      ribbonServiceFee.text("$10");
      ribbonAppraisalGapAmount.text("Not applicable");
      $(".cap").css("opacity", "0");
    }
  };

const updateCap = (gapAmount) => {
  capOnRibbonPayout.text("$" + updateDigits(gapAmount * 3));
};

const updateCashOnClose = () => {
  // 1. Get Ribon Max Value
  // 2. Get Offer Price
  // 3. Update Cash On Close
  const ribbonMaxValue = parseInt(ribbonMaxValueInput.val().replace(/\D/g, ""));
  const offerPrice = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, ""));

  if (offerPrice > ribbonMaxValue) {
    const newVal = offerPrice - ribbonMaxValue;

    ribbonCashOnClose.text("$" + updateDigits(newVal));
  } else {
    ribbonCashOnClose.text("$0");
  }
  // TODO: update Final Contract Logic
  updateFinalContract();
};

const updateFinalContract = () => {
  // appraisal - cash on lose
  const appraisal = parseInt(ribbonAppraisedValueInput.val().replace(/\D/g, "")); //
  const cashOnClose = parseInt(ribbonCashOnClose.text().replace(/\D/g, ""));
  const offerPrice = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, ""));
  const ribbonMaxValue = parseInt(ribbonMaxValueInput.val().replace(/\D/g, ""));

  //   const result = appraisal + cashOnClose;
  //   // console.log("final contract update");
  //   ribbonFinalContract.text("$" + updateDigits(result));

  //updated
  if (appraisal >= offerPrice) {
    ribbonFinalContract.text("$" + updateDigits(offerPrice));
  } else {
    const firstSummand = appraisal < ribbonMaxValue ? appraisal : ribbonMaxValue;
    const result = firstSummand + cashOnClose;
    ribbonFinalContract.text("$" + updateDigits(result));
  }

  updateDifferece();
};

const updateDifferece = () => {
  //logic to update the differece
  //Difference = Offer Price - Final Contrac
  const offerPrice = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, ""));
  const finalContract = parseInt(ribbonFinalContract.text().replace(/\D/g, ""));

  // if (offerPrice > finalContract) {
  const result = Math.floor(offerPrice - finalContract);
  ribbonDifference.text("$" + updateDigits(result));
  // }

  showAndHideBoxes(); //checking if difference is $0
};

const checkAppraisedValueOrRibbonValue = () => {
  // const offerPrice = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, ""));
  // const appraisal = parseInt(ribbonAppraisedValueInput.val().replace(/\D/g, "")); //
  // const ribbonValue = parseInt(ribbonValueInput.val().replace(/\D/g, ""));
  // // TODO: NEW CoDE APR 28
  // // if (appraisal >= offerPrice || ribbonValue >= offerPrice && ) {
  // // || ribbonAppraisalGapAmount.text() == "$0"
  // //question here
  // // if (appraisal >= offerPrice || ribbonValue >= offerPrice || ribbonAppraisalGapAmount.text() == "$0") {
  // if (appraisal >= offerPrice) {
  //   // console.log("triggering, appraisal, offer, ribbonVlaue", appraisal, ribbonValue, offerPrice);
  //   $(".appraisedshow").show();
  //   $(".appraisedhide").hide();
  //   //hide 3 and 4
  //   // showAndHideBoxes();
  // } else {
  //   $(".appraisedshow").hide();
  //   $(".appraisedhide").show();
  //   // showAndHideBoxes();
  // }
};

const updateRibbonFundedAppraisalAmount = () => {
  //done
  const appraisedValue = parseInt(ribbonAppraisedValueInput.val().replace(/\D/g, ""));
  const ribbonValue = parseInt(ribbonValueInput.val().replace(/\D/g, ""));
  const offerPrice = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, ""));

  console.log("Recalculating Ribbon Funde AP");
  if (appraisedValue >= offerPrice) {
    //in that case ribbon funded ap is $0
    console.log("Ribbon Funded is $0");
    // ribbonFundedHide.hide(); // - temp hidden
    ribbonFundedAP.text("$0");
    ribbonFunded.text("$0");
  } else {
    //ribbon Funded = Offer Price - appraisedValue;
    const firstSummand = ribbonValue < offerPrice ? ribbonValue : offerPrice;
    let result = Math.floor(firstSummand - appraisedValue);
    result = result > 0 ? result : 0;
    // result > 0 ? ribbonFundedHide.show() : ribbonFundedHide.hide(); - temp hidden
    console.log("Ribbon Funded is $", result);
    ribbonFundedAP.text("$" + updateDigits(result));
    ribbonFunded.text("$" + updateDigits(result));
  }
};

const updateAppraisalGapAmount = () => {
  //updated code
  const difference = parseInt(ribbonDifference.text().replace(/\D/g, ""));
  const ribbonFunded = parseInt(ribbonFundedAP.text().replace(/\D/g, ""));

  const result = Math.floor(difference - ribbonFunded);
  ribbonAppraisalGapAmount.text("$" + updateDigits(result));
  updateCap(result);

  updatePaymentToRibbon();
  //hiding boxes
  showAndHideBoxes(); // TODO: NEW
};

const showAndHideBoxes = () => {
  //in step 3, let's always show BOTH the ribbon-funded amount AND the appraisal gap line items,
  //even if one of them is $0... let's only hide them if BOTH are $0 (aka the difference = $0) (purple issue)
  const difference = parseInt(ribbonDifference.text().replace(/\D/g, ""));
  const offerPrice = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, ""));
  const ribbonMaxValue = parseInt(ribbonMaxValueInput.val().replace(/\D/g, ""));
  const appraisal = parseInt(ribbonAppraisedValueInput.val().replace(/\D/g, ""));

  //Range error for Offer Price and MRV - MUST BE THE FIRST IN THE FUNCTION
  if (
    offerPrice < 150000 ||
    offerPrice > 1e6 ||
    "$0" == ribbonOfferPriceInput.val() ||
    "$" == ribbonOfferPriceInput.val() ||
    ribbonMaxValue < 150000 ||
    ribbonMaxValue > 1e6 ||
    "$0" == ribbonMaxValueInput.val() ||
    "$" == ribbonMaxValueInput.val()
  ) {
    //hide from 2
    console.log("Hiding script 1");
    $($(".pricing-wrap")[1]).hide();
    $($(".pricing-wrap")[2]).hide();
    $($(".pricing-wrap")[3]).hide();
    return;
  } else {
    console.log("Showing script 1");
    $($(".pricing-wrap")[1]).show();
    $($(".pricing-wrap")[2]).show();
    $($(".pricing-wrap")[3]).show();
  }

  //anytime the appraisal value > offer price, let's hide steps 3 & 4 completely (blue issue) - MUST GO SECOND
  if (appraisal >= offerPrice) {
    console.log("appraisal >= offerPrice");
    //show positive message
    $(".appraisedshow").show();
    $(".appraisedhide").hide();
    //hide step 3 and 4
    $($(".pricing-wrap")[2]).hide();
    $($(".pricing-wrap")[3]).hide();
    return;
  } else {
    $(".appraisedshow").hide();
    $(".appraisedhide").show();
    //hide step 3 and 4
    $($(".pricing-wrap")[2]).show();
    $($(".pricing-wrap")[3]).show();
  }

  //in step 3, let's always show BOTH the ribbon-funded amount AND the appraisal gap line items, even if one of them is $0...
  // let's only hide them if BOTH are $0 (aka the difference = $0) (purple issue)
  if (ribbonDifference.text() == "$0") {
    console.log("Diff is $0");
    //hide
    // ribbonFunded.hide();
    // ribbonAppraisalGapAmountId.hide();
    ribbonFundedHide.hide();
    appraisalGapHide.hide();
    $($(".pricing-wrap")[3]).hide(); //step 4... can we hide step 4 anytime the difference
    //from step 3 = $0? it's confusing to show step 4 when they won't have anything to pay
  } else {
    console.log("Diff is not $0 anymore");
    // ribbonFunded.show();
    // ribbonAppraisalGapAmountId.show();
    ribbonFundedHide.show();
    appraisalGapHide.show();
  }

  //anytime step 3 has a difference > $0, but the difference is
  //completely ribbon-funded (Appraisal gap is $0), let's hide step 4 completely (green issue)
  if (difference > 0 && ribbonAppraisalGapAmountId.text() == "$0") {
    console.log("difference > $0, but the difference is completely ribbon-funded ");
    $($(".pricing-wrap")[3]).hide();
    return;
  } else {
    $($(".pricing-wrap")[3]).show();
  }

  //default values
  // $(".appraisedshow").hide();
  // $(".appraisedhide").show();
  // $($(".pricing-wrap")[1]).show();
  // $($(".pricing-wrap")[2]).show();
  // $($(".pricing-wrap")[3]).show();
};

// Step 1
ribbonOfferPriceInput.keyup(function (e) {
  sleep(ms).then(() => {
    if (e.which >= 37 && e.which <= 40) return;
    $(this).val(function (e, t) {
      return updateDigits(t);
    }),
      (ribbonOfferValue = $(this).val()),
      $(this).val("$" + ribbonOfferValue),
      ribbonAmountToSeller.text("$" + ribbonOfferValue);
    showErrorRange(); //Error showing that a number must be between $100k and $1mln
    // checkOfferPrice();
    //Check Ribbon Value
    //UPDATED CODE
    updateRibbonFundedAppraisalAmount();
    updateCashOnClose();
  });
});

//• Ribbon Max Value should be editable, but a number between $100,000 and $1,000,000.
//• It should not be updated with changes to Offer Price as today.

ribbonMaxValueInput.keyup(function (e) {
  sleep(ms).then(() => {
    if (e.which >= 37 && e.which <= 40) return;
    $(this).val(function (e, t) {
      return updateDigits(t);
    }),
      (ribbonMaxValue = $(this).val()),
      $(this).val("$" + ribbonMaxValue),
      // console.log("qwerty");
      showErrorRange2(); //Error showing that a number must be between $100k and $1mln
    // checkOfferPrice();
    //Check Ribbon Value
    updateCashOnClose();
    updateAppraisalGapAmount();
  });
});

//step 2

ribbonAppraisedValueInput.keyup(function (e) {
  sleep(ms).then(() => {
    if (e.which >= 37 && e.which <= 40) return;
    $(this).val(function (e, t) {
      return updateDigits(t);
    });
    (ribbonAppraisedValue = $(this).val()), $(this).val("$" + ribbonAppraisedValue);

    updateFinalContract();
    updateAppraisalGapAmount(); // TODO: NEW
    //updated code
    updateRibbonFundedAppraisalAmount();
    // checkAppraisedValueOrRibbonValue();
    // showAndHideBoxes(); //UPDATED

    // updateRibbonFundedAP();
    // updatePaymentToRibbon();
  });
});

ribbonValueInput.keyup(function (e) {
  sleep(ms).then(() => {
    if (e.which >= 37 && e.which <= 40) return;
    $(this).val(function (e, t) {
      return updateDigits(t);
    }),
      (ribbonValue = $(this).val()),
      $(this).val("$" + ribbonValue);

    // checkRibbonValue();
    //showErrorRangeRibbonValue();
    updateRibbonFundedAppraisalAmount();
    updateAppraisalGapAmount();
    // checkAppraisedValueOrRibbonValue();
  });
});

//step 4
ribbonAppraisalValueInput.keyup(function (e) {
  sleep(ms).then(() => {
    // if (e.which >= 37 && e.which <= 40) return;
    // $(this).val(function (e, t) {
    //   return updateDigits(t);
    // });

    let e = $(this).val(),
      t = updateDigits(e);
    -1 !== e.indexOf("-")
      ? ($(this).val("-$" + t), $("#ribbon-appraisal-value").attr("maxlength", 9))
      : ($(this).val("$" + t), $("#ribbon-appraisal-value").attr("maxlength", 8)),
      // (ribbonAppraisedValue = $(this).val()), $(this).val("$" + ribbonAppraisedValue);

      //   updateFinalContract();
      // updateRibbonFundedAP();
      updateAppraisalGapAmount(); // TODO:

    // updatePaymentToRibbon();
  });
});
