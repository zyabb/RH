let ms=300,hide=0,query=!1;const getStateFromQueryAndSaveToCookie=()=>{const e=new URLSearchParams(window.location.search).get("state"),a=new URLSearchParams(window.location.search).get("submit");switch(null!=e&&Cookies.set("state",e),e){case"TN":$("#ribbon-state-selector").val("Tennessee").change(),query=!0;break;case"AL":$("#ribbon-state-selector").val("Alabama").change(),query=!0;break;case"VA":$("#ribbon-state-selector").val("Virginia").change(),query=!0;break;case"GA":$("#ribbon-state-selector").val("Georgia").change();break;case"FL":$("#ribbon-state-selector").val("Florida").change();break;case"NC":$("#ribbon-state-selector").val("North Carolina").change();break;case"SC":$("#ribbon-state-selector").val("South Carolina").change();break;case"TX":$("#ribbon-state-selector").val("Texas").change(),query=!0}sleep(1e3).then(()=>{a&&document.getElementById("ribbon-state-go-btn").click()})};getStateFromQueryAndSaveToCookie();let map=new Map;Webflow.push(function(){$(document).ready(function(){function e(e){a.open("GET",e),a.send(),a.onreadystatechange=function(){if(4==this.readyState&&200==this.status){const e=JSON.parse(this.responseText).principalSubdivision;$("#ribbon-state-selector option").filter(function(){this.value===e&&$("#ribbon-state-selector").val(e).change()})}}}const a=new XMLHttpRequest;var t;$("#ribbon-state-go-btn").click(function(){if("none"===$("#ribbon-state-selector").val())return cbc(),!1;Cookies.set("state",$("#ribbon-state-selector").find("option:selected").text()),"Tennessee"!==$("#ribbon-state-selector").val()&&"Virginia"!==$("#ribbon-state-selector").val()&&"Alabama"!==$("#ribbon-state-selector").val()&&"Texas"!==$("#ribbon-state-selector").val()?window.location.href="https://www.ribbonhome.com/guides/appraisal-protection":($("#tabs").show(),$("#flexible-options").css("display","flex"),$("#questionnaire").show(),$([document.documentElement,document.body]).animate(query?{scrollTop:$("#calculator").offset().top}:{scrollTop:$("#flexible-options").offset().top},2e3)),$(".mask.overflow-visible.w-slider-mask").find(".slide-calc.w-slide").each(function(e){const a=$(this).closest(".slide-calc").height();map.set(e,a)}),$(document).ready(function(){changeHeight(0)})}),t="https://api.bigdatacloupdateDigits.net/data/reverse-geocode-client",navigator.geolocation.getCurrentPosition(a=>{e(t=t+"?latitupdateDigitse="+a.coords.latitupdateDigitse+"&longitupdateDigitse="+a.coords.longitupdateDigitse+"&localityLanguage=en")},a=>{e(t)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}),$("#ribbon-offer-price").val("$320,000"),$("#ribbon-max-value").val("$310,000"),$("#ribbon-cash-on-close").text("$10,000"),$("#ribbon-appraised-value").val("$290,000"),$("#ribbon-value").val("$300,000"),$("#ribbon-funded-ap").text("$10,000"),$("#ribbon-amount-to-seller").text("$320,000"),$("#ribbon-final-contract").text("$300,000"),$("#ribbon-difference").text("$20,000"),$("#ribbon-funded").text("$10,000"),$(".ribbon-appraisal-gap-amount").text("$10,000"),$("#ribbon-appraisal-value").val("$50,000"),$("#payment-to-ribbon").text("$22,500"),$("#ribbon-service-fee").text("$12,500"),$("#ribbon-cap-payout").text("$30,000"),$("#email-form1, #email-form2, #email-form3, #email-form4, #email-form5, #ribbon-select-state-form").submit(function(){return!1})});let ribbonOfferPriceInput=$("#ribbon-offer-price"),ribbonMaxValueInput=$("#ribbon-max-value"),ribbonCashOnClose=$("#ribbon-cash-on-close"),ribbonAppraisedValueInput=$("#ribbon-appraised-value"),ribbonValueInput=$("#ribbon-value"),ribbonFundedAP=$("#ribbon-funded-ap"),ribbonAmountToSeller=$("#ribbon-amount-to-seller"),ribbonFinalContract=$("#ribbon-final-contract"),ribbonDifference=$("#ribbon-difference"),ribbonFunded=$("#ribbon-funded"),ribbonAppraisalGapAmount=$(".ribbon-appraisal-gap-amount"),ribbonAppraisalGapAmountId=$("#ribbon-appraisal-gap-amount"),ribbonAppraisalValueInput=$("#ribbon-appraisal-value"),paymentToRibbon=$("#payment-to-ribbon"),ribbonServiceFee=$("#ribbon-service-fee"),capOnRibbonPayout=$("#ribbon-cap-payout"),ribbonOfferPriceValue="$320,000",ribbonFundedHide=$(".ribbon-funded-hide"),ribbonAppraisedValue=ribbonAppraisedValueInput.val();ribbonOfferPriceInput.focus(function(){"$0"==$(this).val()&&$(this).val("$")}).blur(function(){"$"==$(this).val()&&($(this).val("$0"),ribbonMaxValueInput.val("$0"))}),ribbonAppraisedValueInput.focus(function(){"$0"==$(this).val()&&$(this).val("$")}).blur(function(){"$"==$(this).val()&&$(this).val("$0")}),ribbonAppraisalValueInput.focus(function(){"$0"==$(this).val()&&$(this).val("$")}).blur(function(){"$"==$(this).val()&&$(this).val("$0")});const updateDigits=e=>("number"==typeof e&&(e=String(e)),e.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")),showErrorRange=()=>{const e=parseInt(ribbonOfferPriceInput.val().replace(/\D/g,""));e<15e4||e>1e6||"$0"==ribbonOfferPriceInput.val()||"$"==ribbonOfferPriceInput.val()?(showAndHideBoxes(),$("#calc-content-error-2").css("opacity","100")):(showAndHideBoxes(),$("#calc-content-error-2").css("opacity","0"))},showErrorRange2=()=>{const e=parseInt(ribbonMaxValueInput.val().replace(/\D/g,""));e<15e4||e>1e6||"$0"==ribbonMaxValueInput.val()||"$"==ribbonMaxValueInput.val()?(showAndHideBoxes(),$("#calc-content-error-4").css("opacity","100")):(showAndHideBoxes(),$("#calc-content-error-4").css("opacity","0"))},updatePaymentToRibbon=()=>{const e=parseInt(ribbonAppraisalValueInput.val().replace(/,/g,"").replace("$","")),a=updateDigits(String(Math.floor(.25*e)));let t;const n=parseInt(ribbonAppraisalGapAmountId.text().replace(/\D/g,""));e>0?(ribbonServiceFee.text("$"+a),t=Math.floor(.25*e+n),t>3*n?(paymentToRibbon.text("$"+updateDigits(3*n)),$(".cap").css("opacity","100")):(paymentToRibbon.text("$"+updateDigits(t)),$(".cap").css("opacity","0"))):(paymentToRibbon.text("$10"),ribbonServiceFee.text("$10"),ribbonAppraisalGapAmount.text("Not applicable"),$(".cap").css("opacity","0"))},updateCap=e=>{capOnRibbonPayout.text("$"+updateDigits(3*e))},updateCashOnClose=()=>{const e=parseInt(ribbonMaxValueInput.val().replace(/\D/g,"")),a=parseInt(ribbonOfferPriceInput.val().replace(/\D/g,""));if(a>e){const t=a-e;ribbonCashOnClose.text("$"+updateDigits(t))}else ribbonCashOnClose.text("$0");updateFinalContract()},updateFinalContract=()=>{const e=parseInt(ribbonAppraisedValueInput.val().replace(/\D/g,"")),a=parseInt(ribbonCashOnClose.text().replace(/\D/g,"")),t=e+a;ribbonFinalContract.text("$"+updateDigits(t)),updateDifferece()},updateDifferece=()=>{const e=parseInt(ribbonOfferPriceInput.val().replace(/\D/g,"")),a=parseInt(ribbonFinalContract.text().replace(/\D/g,"")),t=Math.floor(e-a);ribbonDifference.text("$"+updateDigits(t))},checkAppraisedValueOrRibbonValue=()=>{const e=parseInt(ribbonOfferPriceInput.val().replace(/\D/g,"")),a=parseInt(ribbonAppraisedValueInput.val().replace(/\D/g,"")),t=parseInt(ribbonValueInput.val().replace(/\D/g,""));a>=e||t>=e?($(".appraisedshow").show(),$(".appraisedhide").hide(),showAndHideBoxes()):($(".appraisedshow").hide(),$(".appraisedhide").show(),showAndHideBoxes())},updateRibbonFundedAppraisalAmount=()=>{const e=parseInt(ribbonAppraisedValueInput.val().replace(/\D/g,"")),a=parseInt(ribbonValueInput.val().replace(/\D/g,""));if(a>e){const t=Math.floor(a-e);ribbonFundedHide.show(),ribbonFundedAP.text("$"+updateDigits(t)),ribbonFunded.text("$"+updateDigits(t))}else ribbonFundedAP.text("$0"),ribbonFunded.text("$0"),ribbonFundedHide.hide(),showAndHideBoxes()},updateAppraisalGapAmount=()=>{const e=parseInt(ribbonMaxValueInput.val().replace(/\D/g,"")),a=parseInt(ribbonValueInput.val().replace(/\D/g,"")),t=parseInt(ribbonOfferPriceInput.val().replace(/\D/g,"")),n=parseInt(ribbonAppraisedValueInput.val().replace(/\D/g,"")),i=t<e?t:e,r=n>a?n:a,o=Math.floor(i-r);console.log(i,r,o),ribbonAppraisalGapAmount.text("$"+updateDigits(o)),updateCap(o),updatePaymentToRibbon(),showAndHideBoxes()},edgeCase=()=>{const e=parseInt(ribbonAppraisedValueInput.val().replace(/\D/g,"")),a=parseInt(ribbonValueInput.val().replace(/\D/g,""));e>a&&($($(".pricing-wrap")[1]).show(),$($(".pricing-wrap")[2]).show(),$($(".pricing-wrap")[3]).show())},showAndHideBoxes=()=>{const e=parseInt(ribbonOfferPriceInput.val().replace(/\D/g,"")),a=parseInt(ribbonMaxValueInput.val().replace(/\D/g,""));if(e<15e4||e>1e6||"$0"==ribbonOfferPriceInput.val()||"$"==ribbonOfferPriceInput.val()||a<15e4||a>1e6||"$0"==ribbonMaxValueInput.val()||"$"==ribbonMaxValueInput.val())return $($(".pricing-wrap")[1]).hide(),$($(".pricing-wrap")[2]).hide(),void $($(".pricing-wrap")[3]).hide();const t=parseInt(ribbonValueInput.val().replace(/\D/g,""));if(t<15e4||t>1e6||"$0"==ribbonValueInput.val()||"$"==ribbonValueInput.val()||"$0"==ribbonAppraisalGapAmountId.text()||"$"==ribbonAppraisalGapAmountId.text()||"$0"==ribbonFundedAP.text()||"$"==ribbonFundedAP.text())return $($(".pricing-wrap")[1]).show(),$($(".pricing-wrap")[2]).hide(),$($(".pricing-wrap")[3]).hide(),void("$0"!=ribbonAppraisalGapAmountId.text()&&"$"!=ribbonAppraisalGapAmountId.text()&&"$0"!=ribbonFundedAP.text()&&"$"!=ribbonFundedAP.text()||(console.log("ribbon funded",ribbonFundedAP.text()),$(".appraisedshow").show(),$(".appraisedhide").hide()));$($(".pricing-wrap")[1]).show(),$($(".pricing-wrap")[2]).show(),$($(".pricing-wrap")[3]).show(),$(".appraisedshow").hide(),$(".appraisedhide").show()};ribbonOfferPriceInput.keyup(function(e){sleep(ms).then(()=>{e.which>=37&&e.which<=40||($(this).val(function(e,a){return updateDigits(a)}),ribbonOfferValue=$(this).val(),$(this).val("$"+ribbonOfferValue),ribbonAmountToSeller.text("$"+ribbonOfferValue),showErrorRange(),updateCashOnClose())})}),ribbonMaxValueInput.keyup(function(e){sleep(ms).then(()=>{e.which>=37&&e.which<=40||($(this).val(function(e,a){return updateDigits(a)}),ribbonMaxValue=$(this).val(),$(this).val("$"+ribbonMaxValue),showErrorRange2(),updateCashOnClose(),updateAppraisalGapAmount())})}),ribbonAppraisedValueInput.keyup(function(e){sleep(ms).then(()=>{e.which>=37&&e.which<=40||($(this).val(function(e,a){return updateDigits(a)}),ribbonAppraisedValue=$(this).val(),$(this).val("$"+ribbonAppraisedValue),updateFinalContract(),updateAppraisalGapAmount(),updateRibbonFundedAppraisalAmount(),checkAppraisedValueOrRibbonValue(),edgeCase())})}),ribbonValueInput.keyup(function(e){sleep(ms).then(()=>{e.which>=37&&e.which<=40||($(this).val(function(e,a){return updateDigits(a)}),ribbonValue=$(this).val(),$(this).val("$"+ribbonValue),updateRibbonFundedAppraisalAmount(),updateAppraisalGapAmount(),checkAppraisedValueOrRibbonValue(),edgeCase())})}),ribbonAppraisalValueInput.keyup(function(e){sleep(ms).then(()=>{let e=$(this).val(),a=updateDigits(e);-1!==e.indexOf("-")?($(this).val("-$"+a),$("#ribbon-appraisal-value").attr("maxlength",9)):($(this).val("$"+a),$("#ribbon-appraisal-value").attr("maxlength",8)),updateAppraisalGapAmount()})});
