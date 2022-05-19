let ms = 300;
const scrollToTheTab = () => {
  const e = new URLSearchParams(window.location.search).get("scroll");
  switch (e) {
    case "paylater":
      $("#paylater-btn").click(),
        $([document.documentElement, document.body]).animate({ scrollTop: $("#scroll-tabs").offset().top - 100 }, 2e3);
      break;
    case "paynow":
      $("#paynow-btn").click(),
        $([document.documentElement, document.body]).animate({ scrollTop: $("#scroll-tabs").offset().top - 100 }, 2e3);
  }
};
Webflow.push(function () {
  scrollToTheTab(),
    $("#ribbon-offer-price").val("$320,000"),
    $("#ribbon-max-value").val("$310,000"),
    $("#ribbon-cash-on-close").text("$10,000"),
    $("#ribbon-appraised-value").val("$290,000"),
    $("#ribbon-value").val("$300,000"),
    $("#ribbon-funded-ap").text("$10,000"),
    $("#ribbon-amount-to-seller").text("$320,000"),
    $("#ribbon-final-contract").text("$300,000"),
    $("#ribbon-difference").text("$20,000"),
    $("#ribbon-funded").text("$10,000"),
    $(".ribbon-appraisal-gap-amount").text("$10,000"),
    $("#ribbon-appraisal-value").val("$50,000"),
    $("#payment-to-ribbon").text("$22,500"),
    $("#ribbon-service-fee").text("$12,500"),
    $("#ribbon-cap-payout").text("$30,000"),
    $("#email-form1, #email-form2, #email-form3, #email-form4, #email-form5, #ribbon-select-state-form").submit(
      function () {
        return !1;
      }
    );
});
let ribbonOfferPriceInput = $("#ribbon-offer-price"),
  ribbonMaxValueInput = $("#ribbon-max-value"),
  ribbonCashOnClose = $("#ribbon-cash-on-close"),
  ribbonAppraisedValueInput = $("#ribbon-appraised-value"),
  ribbonValueInput = $("#ribbon-value"),
  ribbonFundedAP = $("#ribbon-funded-ap"),
  ribbonAmountToSeller = $("#ribbon-amount-to-seller"),
  ribbonFinalContract = $("#ribbon-final-contract"),
  ribbonDifference = $("#ribbon-difference"),
  ribbonFunded = $("#ribbon-funded"),
  ribbonAppraisalGapAmount = $(".ribbon-appraisal-gap-amount"),
  ribbonAppraisalGapAmountId = $("#ribbon-appraisal-gap-amount"),
  ribbonAppraisalValueInput = $("#ribbon-appraisal-value"),
  paymentToRibbon = $("#payment-to-ribbon"),
  ribbonServiceFee = $("#ribbon-service-fee"),
  capOnRibbonPayout = $("#ribbon-cap-payout"),
  ribbonOfferPriceValue = "$320,000",
  ribbonFundedHide = $(".ribbon-funded-hide"),
  appraisalGapHide = $(".gap-hide"),
  ribbonAppraisedValue = ribbonAppraisedValueInput.val();
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
    e < 1e5 || e > 1e6 || "$0" == ribbonOfferPriceInput.val() || "$" == ribbonOfferPriceInput.val()
      ? (showAndHideBoxes(), $("#calc-content-error-2").css("opacity", "100"))
      : (showAndHideBoxes(), $("#calc-content-error-2").css("opacity", "0"));
  },
  showErrorRange2 = () => {
    const e = parseInt(ribbonMaxValueInput.val().replace(/\D/g, ""));
    e < 1e5 || e > 1e6 || "$0" == ribbonMaxValueInput.val() || "$" == ribbonMaxValueInput.val()
      ? (showAndHideBoxes(), $("#calc-content-error-4").css("opacity", "100"))
      : (showAndHideBoxes(), $("#calc-content-error-4").css("opacity", "0"));
  },
  updatePaymentToRibbon = () => {
    const e = parseInt(ribbonAppraisalValueInput.val().replace(/,/g, "").replace("$", "")),
      a = updateDigits(String(Math.floor(0.25 * e)));
    let n;
    const i = parseInt(ribbonAppraisalGapAmountId.text().replace(/\D/g, ""));
    e > 0
      ? (ribbonServiceFee.text("$" + a),
        (n = Math.floor(0.25 * e + i)),
        n > 3 * i
          ? (paymentToRibbon.text("$" + updateDigits(3 * i)), $(".cap").css("opacity", "100"))
          : (paymentToRibbon.text("$" + updateDigits(n)), $(".cap").css("opacity", "0")))
      : (paymentToRibbon.text("$10"),
        ribbonServiceFee.text("$10"),
        ribbonAppraisalGapAmount.text("Not applicable"),
        $(".cap").css("opacity", "0"));
  },
  updateCap = (e) => {
    capOnRibbonPayout.text("$" + updateDigits(3 * e));
  },
  updateCashOnClose = () => {
    const e = parseInt(ribbonMaxValueInput.val().replace(/\D/g, "")),
      a = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, ""));
    if (a > e) {
      const n = a - e;
      ribbonCashOnClose.text("$" + updateDigits(n));
    } else ribbonCashOnClose.text("$0");
    updateFinalContract();
  },
  updateFinalContract = () => {
    const e = parseInt(ribbonAppraisedValueInput.val().replace(/\D/g, "")),
      a = parseInt(ribbonCashOnClose.text().replace(/\D/g, "")),
      n = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, "")),
      i = parseInt(ribbonMaxValueInput.val().replace(/\D/g, ""));
    if (e >= n) ribbonFinalContract.text("$" + updateDigits(n));
    else {
      const n = e < i ? e : i,
        t = n + a;
      ribbonFinalContract.text("$" + updateDigits(t));
    }
    updateDifferece();
  },
  updateDifferece = () => {
    const e = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, "")),
      a = parseInt(ribbonFinalContract.text().replace(/\D/g, "")),
      n = Math.floor(e - a);
    ribbonDifference.text("$" + updateDigits(n)), showAndHideBoxes();
  },
  updateRibbonFundedAppraisalAmount = () => {
    const e = parseInt(ribbonAppraisedValueInput.val().replace(/\D/g, "")),
      a = parseInt(ribbonValueInput.val().replace(/\D/g, "")),
      n = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, ""));
    if (e >= n) ribbonFundedAP.text("$0"), ribbonFunded.text("$0");
    else {
      const i = a < n ? a : n;
      let t = Math.floor(i - e);
      (t = t > 0 ? t : 0), ribbonFundedAP.text("$" + updateDigits(t)), ribbonFunded.text("$" + updateDigits(t));
    }
  },
  updateAppraisalGapAmount = () => {
    const e = parseInt(ribbonDifference.text().replace(/\D/g, "")),
      a = parseInt(ribbonFundedAP.text().replace(/\D/g, "")),
      n = Math.floor(e - a);
    ribbonAppraisalGapAmount.text("$" + updateDigits(n)), updateCap(n), updatePaymentToRibbon(), showAndHideBoxes();
  },
  showAndHideBoxes = () => {
    const e = parseInt(ribbonDifference.text().replace(/\D/g, "")),
      a = parseInt(ribbonOfferPriceInput.val().replace(/\D/g, "")),
      n = parseInt(ribbonMaxValueInput.val().replace(/\D/g, "")),
      i = parseInt(ribbonAppraisedValueInput.val().replace(/\D/g, ""));
    return a < 1e5 ||
      a > 1e6 ||
      "$0" == ribbonOfferPriceInput.val() ||
      "$" == ribbonOfferPriceInput.val() ||
      n < 1e5 ||
      n > 1e6 ||
      "$0" == ribbonMaxValueInput.val() ||
      "$" == ribbonMaxValueInput.val()
      ? ($($(".pricing-wrap")[1]).hide(), $($(".pricing-wrap")[2]).hide(), void $($(".pricing-wrap")[3]).hide())
      : ($($(".pricing-wrap")[1]).show(),
        $($(".pricing-wrap")[2]).show(),
        $($(".pricing-wrap")[3]).show(),
        i >= a
          ? ($(".appraisedshow").show(),
            $(".appraisedhide").hide(),
            $($(".pricing-wrap")[2]).hide(),
            void $($(".pricing-wrap")[3]).hide())
          : ($(".appraisedshow").hide(),
            $(".appraisedhide").show(),
            $($(".pricing-wrap")[2]).show(),
            $($(".pricing-wrap")[3]).show(),
            void (e > 0 && "$0" == ribbonAppraisalGapAmountId.text()
              ? $($(".pricing-wrap")[3]).hide()
              : ($($(".pricing-wrap")[3]).show(),
                "$0" == ribbonDifference.text()
                  ? (ribbonFundedHide.hide(), appraisalGapHide.hide(), $($(".pricing-wrap")[3]).hide())
                  : (ribbonFundedHide.show(), appraisalGapHide.show())))));
  };
ribbonOfferPriceInput.keyup(function (e) {
  const el = document.getElementById($(this).attr("id"));
  const position = el.selectionStart;
  sleep(ms).then(() => {
    (e.which >= 37 && e.which <= 40) ||
      ($(this).val(function (e, a) {
        return updateDigits(a);
      }),
      (ribbonOfferValue = $(this).val()),
      $(this).val("$" + ribbonOfferValue),
      el.setSelectionRange(position, position),
      ribbonAmountToSeller.text("$" + ribbonOfferValue),
      showErrorRange(),
      updateRibbonFundedAppraisalAmount(),
      updateCashOnClose());
  });
}),
  ribbonMaxValueInput.keyup(function (e) {
    const el = document.getElementById($(this).attr("id"));
    const position = el.selectionStart;
    sleep(ms).then(() => {
      (e.which >= 37 && e.which <= 40) ||
        ($(this).val(function (e, a) {
          return updateDigits(a);
        }),
        (ribbonMaxValue = $(this).val()),
        $(this).val("$" + ribbonMaxValue),
        el.setSelectionRange(position, position),
        showErrorRange2(),
        updateCashOnClose(),
        updateAppraisalGapAmount());
    });
  }),
  ribbonAppraisedValueInput.keyup(function (e) {
    const el = document.getElementById($(this).attr("id"));
    const position = el.selectionStart;
    sleep(ms).then(() => {
      (e.which >= 37 && e.which <= 40) ||
        ($(this).val(function (e, a) {
          return updateDigits(a);
        }),
        (ribbonAppraisedValue = $(this).val()),
        $(this).val("$" + ribbonAppraisedValue),
        el.setSelectionRange(position, position),
        updateFinalContract(),
        updateAppraisalGapAmount(),
        updateRibbonFundedAppraisalAmount());
    });
  }),
  ribbonValueInput.keyup(function (e) {
    const el = document.getElementById($(this).attr("id"));
    const position = el.selectionStart;
    sleep(ms).then(() => {
      (e.which >= 37 && e.which <= 40) ||
        ($(this).val(function (e, a) {
          return updateDigits(a);
        }),
        (ribbonValue = $(this).val()),
        $(this).val("$" + ribbonValue),
        el.setSelectionRange(position, position),
        updateRibbonFundedAppraisalAmount(),
        updateAppraisalGapAmount());
    });
  }),
  ribbonAppraisalValueInput.keyup(function (e) {
    const el = document.getElementById($(this).attr("id"));
    const position = el.selectionStart;
    sleep(ms).then(() => {
      let e = $(this).val(),
        a = updateDigits(e);
      -1 !== e.indexOf("-")
        ? ($(this).val("-$" + a), $("#ribbon-appraisal-value").attr("maxlength", 9))
        : ($(this).val("$" + a), $("#ribbon-appraisal-value").attr("maxlength", 8)),
        el.setSelectionRange(position, position),
        updateAppraisalGapAmount();
    });
  });
