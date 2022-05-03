$("#ribbon-offer-price-paynow").val("$350,000"),
  $("#ribbon-value-paynow").val("$346,000"),
  $("#ribbon-max-value-paynow").val("$346,000"),
  $("#paynow-fees").text("$346,000");

//step 2
let ribbonOfferPriceInputPayNow = $("#ribbon-offer-price-paynow"),
  ribbonValueInputPayNow = $("#ribbon-value-paynow"),
  ribbonMaxValueInputPayNow = $("#ribbon-max-value-paynow"),
  payNowFees = $("#paynow-fees"),
  cashOnClosePayNow = $("#ribbon-cash-on-close-paynow"),
  cashOnCloseLine = $("#cash-on-close-hide");

ribbonOfferPriceInputPayNow
  .focus(function () {
    "$0" == $(this).val() && $(this).val("$");
  })
  .blur(function () {
    "$" == $(this).val() && ($(this).val("$0"), ribbonMaxValueInput.val("$0"));
  }),
  ribbonValueInputPayNow
    .focus(function () {
      "$0" == $(this).val() && $(this).val("$");
    })
    .blur(function () {
      "$" == $(this).val() && ($(this).val("$0"), ribbonMaxValueInput.val("$0"));
    }),
  ribbonMaxValueInputPayNow
    .focus(function () {
      "$0" == $(this).val() && $(this).val("$");
    })
    .blur(function () {
      "$" == $(this).val() && ($(this).val("$0"), ribbonMaxValueInput.val("$0"));
    });

const showErrorRangeForAll = () => {
    const a = parseInt(ribbonOfferPriceInputPayNow.val().replace(/\D/g, ""));
    const b = parseInt(ribbonValueInputPayNow.val().replace(/\D/g, ""));
    const c = parseInt(ribbonMaxValueInputPayNow.val().replace(/\D/g, ""));
    a < 150000 ||
    a > 1e6 ||
    "$0" == ribbonOfferPriceInputPayNow.val() ||
    "$" == ribbonOfferPriceInputPayNow.val() ||
    b < 150000 ||
    b > 1e6 ||
    "$0" == ribbonValueInputPayNow.val() ||
    "$" == ribbonValueInputPayNow.val() ||
    c < 150000 ||
    c > 1e6 ||
    "$0" == ribbonMaxValueInputPayNow.val() ||
    "$" == ribbonMaxValueInputPayNow.val()
      ? $("#calc-content-error-for-all").css("opacity", "100")
      : $("#calc-content-error-for-all").css("opacity", "0");
  },
  updatePayNowFees = () => {
    const offerPricePayNow = parseInt(ribbonOfferPriceInputPayNow.val().replace(/\D/g, ""));
    const ribbonValuePayNow = parseInt(ribbonValueInputPayNow.val().replace(/\D/g, ""));
    const ribbonMaxValue = parseInt(ribbonMaxValueInputPayNow.val().replace(/\D/g, ""));

    if (offerPricePayNow <= ribbonValuePayNow) {
      console.log(1);
      payNowFees.text("$0");
      cashOnCloseLine.addClass("hide");
      return;
    }

    if (offerPricePayNow > ribbonValuePayNow && offerPricePayNow <= ribbonMaxValue) {
      console.log(2);
      const result = Math.floor((offerPricePayNow - ribbonValuePayNow) * 0.25);
      payNowFees.text("$" + updateDigits(result));
      cashOnCloseLine.addClass("hide");
      return;
    }

    if (offerPricePayNow > ribbonMaxValue) {
      console.log(3);
      const result = Math.floor((ribbonMaxValue - ribbonValuePayNow) * 0.25);
      const cashOnClose = Math.floor(offerPricePayNow - ribbonMaxValue);
      payNowFees.text("$" + updateDigits(result));
      cashOnClosePayNow.text("$" + updateDigits(cashOnClose));
      cashOnCloseLine.removeClass("hide");
      return;
    }
  };

// Step 1
ribbonOfferPriceInputPayNow.keyup(function (e) {
  sleep(ms).then(() => {
    if (e.which >= 37 && e.which <= 40) return;
    $(this).val(function (e, t) {
      return updateDigits(t);
    }),
      (ribbonOfferValuePayNow = $(this).val()),
      $(this).val("$" + ribbonOfferValuePayNow);

    //error if of range
    showErrorRangeForAll();
    updatePayNowFees();
  });
});

ribbonValueInputPayNow.keyup(function (e) {
  sleep(ms).then(() => {
    if (e.which >= 37 && e.which <= 40) return;
    $(this).val(function (e, t) {
      return updateDigits(t);
    }),
      (ribbonOfferValuePayNow = $(this).val()),
      $(this).val("$" + ribbonOfferValuePayNow);

    //error if of range
    showErrorRangeForAll();
    updatePayNowFees();
  });
});

ribbonMaxValueInputPayNow.keyup(function (e) {
  sleep(ms).then(() => {
    if (e.which >= 37 && e.which <= 40) return;
    $(this).val(function (e, t) {
      return updateDigits(t);
    }),
      (ribbonOfferValuePayNow = $(this).val()),
      $(this).val("$" + ribbonOfferValuePayNow);

    //error if of range
    showErrorRangeForAll();
    updatePayNowFees();
  });
});
