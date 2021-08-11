let hehe = window.location.href;
let a = hehe.split("?")[1].split("=")[1].split("+");
console.log(a);
const category = `${hehe.split("&")[1].split("=")[1]}`;
if (category != "dl_info") {
  a = `${a[0]} ${a[1]} ${a[2]} ${a[3].split("&")[0]}`;
  document.querySelector("#np").textContent = `${a}`;
  a = a.replaceAll(" ", "");
} else {
  a = `${a[0]} ${a[1].split("&")[0]}`;
  document.querySelector("#np").textContent = `${a}`;
}
console.log(a);

function call_api(a, category) {
  console.log(`the number is ${a}`);

  if (a == "MH14DH5676") {
    set_html({
      owner_name: "Ramesh Kushwaha",
      fitness_upto: "8 yrs",
      fuel_type: "petrol",
      brand_name: "HONDA",
      brand_model: "Activa",
      insurance_expiry: "5yrs",
      engine_number: "1JH09C8",
      chassis_number: "09SFG25",
      registration_date: "12-03-2008",
      rto: "Jhansi - 284001",
    });
  }
  if (a == "UP93AR4917") {
    set_html({
      owner_name: "Darpan Agarwal",
      fitness_upto: "9 yrs",
      fuel_type: "petrol",
      brand_name: "HONDA",
      brand_model: "Activa",
      insurance_expiry: "3 yrs",
      engine_number: "987AD6E5",
      chassis_number: "091KQ4J5",
      registration_date: "12-03-2014",
      rto: "Jhansi - 284001",
    });
  }
  if (a == "UP93BN1007") {
    set_html({
      owner_name: "Ashu Bhatia",
      fitness_upto: "17 yrs",
      fuel_type: "petrol",
      brand_name: "HONDA",
      brand_model: "Activa",
      insurance_expiry: "4 yrs",
      engine_number: "987AD6E5",
      chassis_number: "091KQ4J5",
      registration_date: "12-03-2005",
      rto: "Jhansi - 284001",
    });
  }
  if (a == "AP07DV8710") {
    set_html({
      owner_name: "Kaushik Mohanty",
      fitness_upto: "17 yrs",
      fuel_type: "petrol",
      brand_name: "HONDA",
      brand_model: "Activa",
      insurance_expiry: "4 yrs",
      engine_number: "987AD6E5",
      chassis_number: "091KQ4J5",
      registration_date: "12-03-2005",
      rto: "Jhansi - 284001",
    });
  }
  if (a == "UP93BP1060") {
    set_html({
      owner_name: "Harsh Vardhan",
      fitness_upto: "08 yrs",
      fuel_type: "petrol",
      brand_name: "HONDA",
      brand_model: "Activa",
      insurance_expiry: "3 yrs",
      engine_number: "20TAD615",
      chassis_number: "011WQ4F5",
      registration_date: "12-03-2002",
      rto: "Jhansi - 284001",
    });
  }
  if (a == "UP93AQ4676") {
    set_html({
      owner_name: "Kaushik Mohanty",
      fitness_upto: "08 yrs",
      fuel_type: "petrol",
      brand_name: "HONDA",
      brand_model: "DIO",
      insurance_expiry: "3 yrs",
      engine_number: "20TAD615",
      chassis_number: "011WQ4F5",
      registration_date: "12-03-2014",
      rto: "Jhansi - 284001",
    });
  }
  if (a == "RJ01CE8696") {
    set_html({
      owner_name: "Rohit Kumawat",
      fitness_upto: "08 yrs",
      fuel_type: "petrol",
      brand_name: "HONDA",
      brand_model: "Activa",
      insurance_expiry: "3 yrs",
      engine_number: "20TAD615",
      chassis_number: "011WQ4F5",
      registration_date: "12-03-2015",
      rto: "Jaipur - 302021",
    });
  }
  if (a == "MP43DS8812") {
    set_html({
      owner_name: "Harsh Kachhawa",
      fitness_upto: "08 yrs",
      fuel_type: "petrol",
      brand_name: "HONDA",
      brand_model: "Activa",
      insurance_expiry: "3 yrs",
      engine_number: "20TAD615",
      chassis_number: "011WQ4F5",
      registration_date: "12-03-2020",
      rto: "Ratlam - 457001",
    });
  }
  if (a == "UP93BK7570") {
    set_html({
      owner_name: "Khushmeet Singh Bhatia",
      fitness_upto: "16 yrs",
      fuel_type: "petrol",
      brand_name: "HONDA",
      brand_model: "Activa",
      insurance_expiry: "2 yrs",
      engine_number: "21DFG621",
      chassis_number: "0K1WL435",
      registration_date: "12-03-2017",
      rto: "Jhansi - 284001",
    });
  }
}

const handleErrors = () => {
  console.log("ERROR");
  document.querySelector(".div4").style.display = "none";
  document.querySelector(".div3").style.display = "none";

  document.querySelector(".div5").style.display = "flex";
};

function set_html(y) {
  console.log("heelo");
  console.log(y);
  const b = document.querySelectorAll(".lb");
  const d = document.querySelectorAll(".img-caption");
  const img = document.querySelectorAll(".grid-img");
  document.querySelector(".div4").style.display = "none";
  document.querySelector(".div3").style.display = "flex";
  if (category == "vehicle_info") {
    img.forEach((item) => {
      item.style.visibility = "visible";
    });
    b[0].textContent = y.owner_name;
    b[1].textContent = y.fitness_upto;
    b[2].textContent = y.fuel_type;
    b[3].textContent = `${y.brand_name} ${y.brand_model}`;
    b[4].textContent = y.insurance_expiry;
    b[5].textContent = y.engine_number;
    b[6].textContent = y.chassis_number;
    b[7].textContent = y.registration_date;
    b[8].textContent = y.rto;
  } else if (category == "dl_info") {
    d[0].textContent = "Status";
    b[0].textContent = y.status;
    d[1].textContent = "RTO Code";
    b[1].textContent = y.rto_code;
    d[2].textContent = "Date Of Birth";
    b[2].textContent = y.dob;
    d[3].textContent = "Vehicle Class";
    b[3].textContent = y.vehicle_class;
    d[4].textContent = "Holder Name";
    b[4].textContent = y.holder_name;
    d[5].textContent = "Gender";
    b[5].textContent = y.gender;
    d[6].textContent = "RTO";
    b[6].textContent = y.rto;
    d[7].textContent = "Valid From";
    b[7].textContent = y.valid_from;
    d[8].textContent = "Valid Upto";
    b[8].textContent = y.valid_upto;
  } else if (category == "fast_tag_info") {
    d[0].textContent = "Status";
    b[0].textContent = y.isValid;
    d[1].textContent = "Owner Name";
    b[1].textContent = y.owner_name;
    d[2].textContent = "Biller ID";
    b[2].textContent = y.biller_id;
    d[3].textContent = "Fast tag Balance";
    b[3].textContent = y.fastag_balance;
    d[4].textContent = "Issuer name";
    b[4].textContent = y.issuer_name;
    d[5].textContent = "Min Amount";
    b[5].textContent = y.min_amount;
    d[6].textContent = "Max Amount";
    b[6].textContent = y.max_amount;
    d[7].textContent = "";
    b[7].textContent = "";
    d[8].textContent = "";
    b[8].textContent = "";
  }
}

call_api(a, category);
