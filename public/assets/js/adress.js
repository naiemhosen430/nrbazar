{/* <script>
// Define the address data
var addressData = {
    "dhaka": {
        "districts": {
            "dhaka-sadar": {
                "upazilas": {
                    "banani": {
                        "unions": ["banani", "mohakhali"]
                    },
                    "mohammadpur": {
                        "unions": ["mohammadpur", "adabor"]
                    },
                    "dhanmondi": {
                        "unions": ["dhanmondi", "shankar"]
                    }
                }
            },
            "savar": {
                "upazilas": {
                    "savar": {
                        "unions": ["savar", "ashulia"]
                    },
                    "ashulia": {
                        "unions": ["ashulia", "baipail"]
                    }
                }
            }
        }
    },
    "chittagong": {
        "districts": {
            "chittagong-sadar": {
                "upazilas": {
                    "bahaddarhat": {
                        "unions": ["bahaddarhat", "halishahar"]
                    },
                    "halishahar": {
                        "unions": ["halishahar", "chandgaon"]
                    }
                }
            }
        }
    },
    "rajshahi": {
        "districts": {
            "rajshahi-sadar": {
                "upazilas": {
                    "boalia": {
                        "unions": ["boalia", "talaimari"]
                    },
                    "shahmokhdum": {
                        "unions": ["shahmokhdum", "matihar"]
                    }
                }
            }
        }
    }
};

// Populate the district dropdown based on the selected division
function populateDistricts() {
    var divisionDropdown = document.getElementById("division");
    var districtDropdown = document.getElementById("district");
    var selectedDivision = divisionDropdown.value;
    
    // Reset the district


    

// Remove all options except the first one
while (districtDropdown.options.length > 1) {
    districtDropdown.remove(1);
}

// Populate the district dropdown
if (selectedDivision in addressData) {
    var districts = addressData[selectedDivision]["districts"];
    for (var district in districts) {
        var option = document.createElement("option");
        option.value = district;
        option.text = district;
        districtDropdown.add(option);
    }
}

// Reset the upazila and union dropdowns
populateUpazilas();
populateUnions();
}

// Populate the upazila dropdown based on the selected district
function populateUpazilas() {
var districtDropdown = document.getElementById("district");
var upazilaDropdown = document.getElementById("upazila");
var selectedDistrict = districtDropdown.value;

// Remove all options except the first one
while (upazilaDropdown.options.length > 1) {
    upazilaDropdown.remove(1);
}

// Populate the upazila dropdown
var divisionDropdown = document.getElementById("division");
var selectedDivision = divisionDropdown.value;
if (selectedDivision in addressData) {
    var districts = addressData[selectedDivision]["districts"];
    if (selectedDistrict in districts) {
        var upazilas = districts[selectedDistrict]["upazilas"];
        for (var upazila in upazilas) {
            var option = document.createElement("option");
            option.value = upazila;
            option.text = upazila;
            upazilaDropdown.add(option);
        }
    }
}

// Reset the union dropdown
populateUnions();
}

// Populate the union dropdown based on the selected upazila
function populateUnions() {
var upazilaDropdown = document.getElementById("upazila");
var unionDropdown = document.getElementById("union");
var selectedUpazila = upazilaDropdown.value;

// Remove all options except the first one
while (unionDropdown.options.length > 1) {
    unionDropdown.remove(1);
}

// Populate the union dropdown
var districtDropdown = document.getElementById("district");
var selectedDistrict = districtDropdown.value;
var divisionDropdown = document.getElementById("division");
var selectedDivision = divisionDropdown.value;
if (selectedDivision in addressData) {
    var districts = addressData[selectedDivision]["districts"];
    if (selectedDistrict in districts) {
        var upazilas = districts[selectedDistrict]["upazilas"];
        if (selectedUpazila in upazilas) {
            var unions = upazilas[selectedUpazila]["unions"];
            for (var i = 0; i < unions.length; i++) {
                var option = document.createElement("option");
                option.value = unions[i];
                option.text = unions[i];
                unionDropdown.add(option);
            }
        }
    }
}
}
</script>










<!-- <script>
    
function pricechange(){
    deliveryprice.value= area.value;

    let pricee = mainselectprice.value;
    let totalprice = (+pricee);
    mainprice.innerHTML = totalprice ;
    mainpricee.innerHTML = area.value ;

    district.style.display= "block";
}

function aredateshow() {
    const deliverydateon = +areadate.value
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // getMonth() returns 0-11
    const year = today.getFullYear();

    deliverydatee.value = `Your product will be delivered on ${day+deliverydateon}/${month}/${year}`
    deliverydate.innerHTML= `Your product will be delivered on ${day+deliverydateon}/${month}/${year}`;
}

 -->


// function divisiontodistrict() {
//     if (divisiovalue.value === "Dhaka") {
//         dhaka.style.display = "block"
//         chattogram.style.display = "none"
//         khulna.style.display = "none"
//         rajshahi.style.display = "none"
//         rangpur.style.display = "none"
//         mymensingh.style.display = "none"
//         sylhet.style.display = "none"
//         barishal.style.display = "none"
//     } else if (divisiovalue.value === "Chattogram") {
//         dhaka.style.display = "none"
//         chattogram.style.display = "block"
//         khulna.style.display = "none"
//         rajshahi.style.display = "none"
//         rangpur.style.display = "none"
//         mymensingh.style.display = "none"
//         sylhet.style.display = "none"
//         barishal.style.display = "none"
//     } else if (divisiovalue.value === "Khulna") {
//         dhaka.style.display = "none"
//         chattogram.style.display = "none"
//         khulna.style.display = "block"
//         rajshahi.style.display = "none"
//         rangpur.style.display = "none"
//         mymensingh.style.display = "none"
//         sylhet.style.display = "none"
//         barishal.style.display = "none"
//     } else if (divisiovalue.value === "Rajshahi") {
//         dhaka.style.display = "none"
//         chattogram.style.display = "none"
//         khulna.style.display = "none"
//         rajshahi.style.display = "block"
//         rangpur.style.display = "none"
//         mymensingh.style.display = "none"
//         sylhet.style.display = "none"
//         barishal.style.display = "none"
//     } else if (divisiovalue.value === "Rangpur") {
//         dhaka.style.display = "none"
//         chattogram.style.display = "none"
//         khulna.style.display = "none"
//         rajshahi.style.display = "none"
//         rangpur.style.display = "block"
//         mymensingh.style.display = "none"
//         sylhet.style.display = "none"
//         barishal.style.display = "none"
//     } else if (divisiovalue.value === "Mymensingh") {
//         dhaka.style.display = "none"
//         chattogram.style.display = "none"
//         khulna.style.display = "none"
//         rajshahi.style.display = "none"
//         rangpur.style.display = "none"
//         mymensingh.style.display = "block"
//         sylhet.style.display = "none"
//         barishal.style.display = "none"
//     } else if (divisiovalue.value === "Sylhet") {
//         dhaka.style.display = "none"
//         chattogram.style.display = "none"
//         khulna.style.display = "none"
//         rajshahi.style.display = "none"
//         rangpur.style.display = "none"
//         mymensingh.style.display = "none"
//         sylhet.style.display = "block"
//         barishal.style.display = "none"
//     } else if (divisiovalue.value === "Barishal") {
//         dhaka.style.display = "none"
//         chattogram.style.display = "none"
//         khulna.style.display = "none"
//         rajshahi.style.display = "none"
//         rangpur.style.display = "none"
//         mymensingh.style.display = "none"
//         sylhet.style.display = "none"
//         barishal.style.display = "block"
//     }
// }

// </script>






---division--->
<div class="my-4 " id="district">
    
    <label class="d-block px-5 fs-4 p-2" for="area">Select Your division</label>
    <select class="d-block  mx-5 w-75 fs-5 p-2" onchange="divisiontodistrict()" name="divisiovalue" id="divisiovalue">
        <option disabled selected>Select</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Chattogram">Chattogram</option>
        <option value="Khulna">Khulna</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Rangpur">Rangpur</option>
        <option value="Mymensingh">Mymensingh</option>
        <option value="Sylhet">Sylhet</option>
        <option value="Barishal">Barishal</option>
    </select>
</div>




<!----district--->
<div class="my-4 " id="dhaka">
    
    <label class="d-block px-5 fs-4 p-2" for="area">Select Your district</label>
    <select class="d-block  mx-5 w-75 fs-5 p-2" onchange="districttoupozella()" name="dhaka" id="dhak">
        <option disabled selected>Select</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Gazipur">Gazipur</option>
        <option value="Kishoreganj">Kishoreganj</option>
        <option value="Manikganj">Manikganj</option>
        <option value="Munshiganj">Munshiganj</option>
        <option value="Narayanganj">Narayanganj</option>
        <option value="Narsingdi">Narsingdi</option>
        <option value="Tangail">Tangail</option>
        <option value="Faridpur">Faridpur</option>
        <option value="Gopalganj">Gopalganj</option>
        <option value="Madaripur">Madaripur</option>
        <option value="Rajbari">Rajbari</option>
        <option value="Shariatpur">Shariatpur</option>
    </select>
</div>
<div class="my-4 " id="chattogram">
    
    <label class="d-block px-5 fs-4 p-2" for="area">Select Your district</label>
    <select class="d-block  mx-5 w-75 fs-5 p-2" onchange="pricechange()" name="dhaka" id="dhak">
        <option disabled selected>Select</option>
        <option value="Brahmanbaria">Brahmanbaria</option>
        <option value="Comilla">Comilla</option>
        <option value="Chandpur">Chandpur</option>
        <option value="Lakshmipur">Lakshmipur</option>
        <option value="Maijdee">Maijdee</option>
        <option value="Feni">Feni</option>
        <option value="Khagrachhari">Khagrachhari</option>
        <option value="Rangamati">Rangamati</option>
        <option value="Bandarban">Bandarban</option>
        <option value="Chittagong">Chittagong</option>
        <option value="Cox's Bazar">Cox's Bazar</option>
    </select>
</div>
<div class="my-4 " id="khulna">
    
    <label class="d-block px-5 fs-4 p-2" for="area">Select Your district</label>
    <select class="d-block  mx-5 w-75 fs-5 p-2" onchange="pricechange()" name="dhaka" id="dhak">
        <option disabled selected>Select</option>
        <option value="Khulna">Khulna</option>
        <option value="Bagherhat">Bagherhat</option>
        <option value="Sathkhira">Sathkhira</option>
        <option value="Jessore">Jessore</option>
        <option value="Magura">Magura</option>
        <option value="Jhenaidah">Jhenaidah</option>
        <option value="Narail">Narail</option>
        <option value="Kushtia">Kushtia</option>
        <option value="Chuadanga">Chuadanga</option>
        <option value="Meherpur">Meherpur</option>
    </select>
</div>
<div class="my-4 " id="rajshahi">
    
    <label class="d-block px-5 fs-4 p-2" for="area">Select Your district</label>
    <select class="d-block  mx-5 w-75 fs-5 p-2" onchange="pricechange()" name="dhaka" id="dhak">
        <option disabled selected>Select</option>
        <option value="Natore">Natore</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Sirajganj">Sirajganj</option>
        <option value="Pabna">Pabna</option>
        <option value="Bogura">Bogura</option>
        <option value="Chapainawabganj">Chapainawabganj</option>
        <option value="Naogaon">Naogaon</option>
        <option value="Joypurhat">Joypurhat</option>
    </select>
</div>
<div class="my-4 " id="rangpur">
    
    <label class="d-block px-5 fs-4 p-2" for="area">Select Your district</label>
    <select class="d-block  mx-5 w-75 fs-5 p-2" onchange="pricechange()" name="dhaka" id="dhak">
        <option disabled selected>Select</option>
        <option value="Dinajpur">Dinajpur</option>
        <option value="Kurigram">Kurigram</option>
        <option value="Gaibandha">Gaibandha</option>
        <option value="Lalmonirhat">Lalmonirhat</option>
        <option value="Nilphamar">Nilphamar</option>
        <option value="Panchagarh">Panchagarh</option>
        <option value="Rangpur">Rangpur</option>
        <option value="Thakurgaon">Thakurgaon</option>
    </select>
</div>
<div class="my-4 " id="mymensingh">
    
    <label class="d-block px-5 fs-4 p-2" for="area">Select Your district</label>
    <select class="d-block  mx-5 w-75 fs-5 p-2" onchange="pricechange()" name="dhaka" id="dhak">
        <option disabled selected>Select</option>
        <option value="Mymensingh">Mymensingh</option>
        <option value="Jamalpur">Jamalpur</option>
        <option value="Netrokona">Netrokona</option>
        <option value="Sherpur">Sherpur</option>
    </select>
</div>
<div class="my-4 " id="sylhet">
    
    <label class="d-block px-5 fs-4 p-2" for="area">Select Your district</label>
    <select class="d-block  mx-5 w-75 fs-5 p-2" onchange="pricechange()" name="dhaka" id="dhak">
        <option disabled selected>Select</option>
        <option value="Habiganj">Habiganj</option>
        <option value="Moulvibazar">Moulvibazar</option>
        <option value="Sunamganj">Sunamganj</option>
        <option value="Sylhet">Sylhet</option>
    </select>
</div>
<div class="my-4 " id="barishal">
    
    <label class="d-block px-5 fs-4 p-2" for="area">Select Your district</label>
    <select class="d-block  mx-5 w-75 fs-5 p-2" onchange="pricechange()" name="dhaka" id="dhak">
        <option disabled selected>Select</option>
        <option value="Barisal">Barisal</option>
        <option value="Barguna">Barguna</option>
        <option value="Bhola">Bhola</option>
        <option value="Jhalokati">Jhalokati</option>
        <option value="Pirojpur ">Pirojpur </option>
        <option value="Patuakhali ">Patuakhali </option>
    </select>
</div>


<!------upozella------> */}
