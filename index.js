/**
 * BÀI TẬP 1:TÍNH THUẾ THU NHẬP CÁ NHÂN
 *
 * INPUT: HỌ TÊN, TỔNG THU NHẬP NĂM , SỐ NGƯỜI PHỤ THUỘC
 * PROCESS:
 * 1: LẤY INPUT
 * 2: THU NHẬP CHỊU THUẾ = TỔNG THU NHẬP NĂM - 4TR - SỐ NGƯỜI PHỤ THUỘC * 1.6TR
 * NẾU THU NHẬP <=60 THÌ THU NHẬP CHỊU THUẾ * 5%
 * THU NHẬP <=120 THÌ THU NHẬP CHỊU THUẾ * 10%
 * THU NHẬP <=210 THÌ THU NHẬP CHỊU THUẾ * 15%
 * THU NHẬP <=384 THÌ THU NHẬP CHỊU THUẾ * 20%
 * THU NHẬP <=624 THÌ THU NHẬP CHỊU THUẾ * 25%
 * THU NHẬP <=960 THÌ THU NHẬP CHỊU THUẾ * 30%
 * THU NHẬP >960 THÌ THU NHẬP CHỊU THUẾ * 35%

 * OUTPUT:
 */
var fullName = "lucas";
var totalIncome = 80;
var dependPersion = 2;
var personalIncomeTax;

function calcTax() {
  var incomeTaxes = totalIncome - 4 - dependPersion * 1.6;
  if (totalIncome <= 60) {
    return personalIncomeTax = incomeTaxes * (5 / 100);
  } else if (totalIncome <= 120) {
    return personalIncomeTax = incomeTaxes * (10 / 100);
  } else if (totalIncome <= 210) {
    return personalIncomeTax = incomeTaxes * (15 / 100);
  } else if (totalIncome <= 384) {
    return personalIncomeTax = incomeTaxes * (20 / 100);
  } else if (totalIncome <= 624) {
    return personalIncomeTax = incomeTaxes * (25 / 100);
  } else if (totalIncome <= 960) {
    return personalIncomeTax = incomeTaxes * (30 / 100);
  }
  return personalIncomeTax = incomeTaxes * (35 / 100);
}

console.log("Thuế thu nhập cá nhân của",fullName, calcTax());


