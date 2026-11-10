function setFeeStructure(id, value) {
  const field = document.getElementById("feesStucture_" + id);
  if (field) {
      field.value = value;
  }
}

function setDownloadBrochure(id, value) {
  const field = document.getElementById("downloadBrochure_" + id);
  if (field) {
      field.value = value;
  }
}

function getQueryParam(param) {
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get(param) || '';
}

document.addEventListener("DOMContentLoaded", function () {
const utm_source = getQueryParam('utm_source');
const utm_medium = getQueryParam('utm_medium');
const utm_campaign = getQueryParam('utm_campaign');

// Set UTM values in hidden inputs
// document.querySelector('input[name="utm_source"]').value = utm_source;
// document.querySelector('input[name="utm_medium"]').value = utm_medium;
// document.querySelector('input[name="utm_campaign"]').value = utm_campaign;
document.getElementById('utm_source_1').value = utm_source;
document.getElementById('utm_medium_1').value = utm_medium;
document.getElementById('utm_campaign_1').value = utm_campaign;

document.getElementById('utm_source_2').value = utm_source;
document.getElementById('utm_medium_2').value = utm_medium;
document.getElementById('utm_campaign_2').value = utm_campaign;

document.getElementById('utm_source_3').value = utm_source;
document.getElementById('utm_medium_3').value = utm_medium;
document.getElementById('utm_campaign_3').value = utm_campaign;

document.getElementById('utm_source_4').value = utm_source;
document.getElementById('utm_medium_4').value = utm_medium;
document.getElementById('utm_campaign_4').value = utm_campaign;

document.getElementById('utm_source_5').value = utm_source;
document.getElementById('utm_medium_5').value = utm_medium;
document.getElementById('utm_campaign_5').value = utm_campaign;

document.getElementById('utm_source_100').value = utm_source;
document.getElementById('utm_medium_100').value = utm_medium;
document.getElementById('utm_campaign_100').value = utm_campaign;
});

function getBranch(val, id) {
  if (val == 'Bardhaman') {
     $('#branch_' + id).html('<option value="">Select Branch</option><option value="Asansol">Asansol</option><option value="Bardhaman">Bardhaman</option><option value="Durgapur">Durgapur</option>');
   } else if (val == 'Contai') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Contai">Contai</option>');
  } else if (val == 'Coochbehar') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Coochbehar">Coochbehar</option>');
  } else if (val == 'Darjeeling') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Fulbari">Fulbari</option><option value="Darjeeling">Darjeeling</option><option value="Dagapur">Siliguri - Dagapur</option><option value="Siliguri">Siliguri - Salugara</option>');
  } else if (val == 'East Midnapore') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Haldia">Haldia</option><option value="Midnapore">Midnapore</option>');
  } else if (val == 'Hooghly') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Bally">Bally</option><option value="Rishra">Rishra</option>');
  } else if (val == 'Howrah') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Howrah">Howrah</option><option value="Andul">Andul</option><option value="Bally">Bally</option><option value="Salap Junction, Kona (Credmont International School)">Salap Junction, Kona (Credmont International School)</option><option value="Maheshtala">Maheshtala</option><option value="Rishra">Rishra</option><option value="Ulluberia">Ulluberia</option>');
  } else if (val == 'Kalimpong') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Kalimpong">Kalimpong</option><option value="Kalimpong 12th mile">Kalimpong 12th mile</option>');
  } else if (val == 'Kolkata') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Bhawanipur">Bhawanipur</option><option value="Behala (Silpara)">Behala (Silpara)</option><option value="Esplanade (New Market)">Esplanade (New Market)</option><option value="Joka">Joka</option><option value="Khidderpore">Khidderpore</option><option value="Maheshtala">Maheshtala</option><option value="New Town">New Town</option><option value="Park Circus">Park Circus</option><option value="Rajarhat">Rajarhat</option><option value="Sonarpur">Sonarpur</option><option value="Sonarpur (Ramchandrapur)">Sonarpur (Ramchandrapur)</option>');
  } else if (val == 'Murshidabad') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Murshidabad-berhampore">Murshidabad-berhampore</option><option value="Jiaganj">Jiaganj</option>');
  } else if (val == 'Malda') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Malda">Malda</option>');
  }
  else if (val == 'Nadia') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Nadia-ranaghat">Nadia-ranaghat</option><option value="Kalyani-town">Kalyani-town</option><option value="Krishnanagar City">Krishnanagar City</option>');
  } else if (val == 'North 24 Parganas') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Basirhat">Basirhat</option><option value="Barasat">Barasat</option><option value="Kalyani Express (Sodepur)">Kalyani Express (Sodepur)</option>');
  } else if (val == 'North Dinajpur') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Uttar dinajpur raiganj">Uttar dinajpur raiganj</option>');
  } else if (val == 'Purulia') {
    $('#branch_' + id).html('<option value="">Select Branch</option><option value="Raghunathpur">Raghunathpur</option>');
  }

  getRefresh(val, id);

}
function getReservationType(val, id) {
  //alert(val);
  //alert(id);
  // if ($('#city_' + id).val() == 'Bardhaman' && $('#branch_' + id).val() == 'Andal') {
  //   //alert('hi');
  //   $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel">Hostel</option>');

  // } else 
  if ($('#city_' + id).val() == 'Darjeeling' && $('#branch_' + id).val() == 'Siliguri') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel (Only Girls)">Hostel (Only Girls)</option>');

  } else if ($('#city_' + id).val() == 'Coochbehar' && $('#branch_' + id).val() == 'Coochbehar') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option>');

  } else if ($('#city_' + id).val() == 'Darjeeling' && $('#branch_' + id).val() == 'Fulbari') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel (Only Boys)">Hostel (Only Boys)</option>');

  } else if ($('#city_' + id).val() == 'Howrah' && $('#branch_' + id).val() == 'Howrah') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel">Hostel</option>');

  } else if ($('#city_' + id).val() == 'Howrah' && ($('#branch_' + id).val() == 'Bally' || $('#branch_' + id).val() == 'Rishra' || $('#branch_' + id).val() == 'Maheshtala')) {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option>');

  } else if ($('#city_' + id).val() == 'Kalimpong' && $('#branch_' + id).val() == 'Kalimpong') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel (Only Boys)">Hostel (Only Boys)</option>');

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'New Town') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel">Hostel</option>');

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Sonarpur (Ramchandrapur)') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel (Only Boys)">Hostel (Only Boys)</option>');

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Esplanade (New Market)') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option>');
    

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Behala (Silpara)') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option>');

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Khidderpore') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option>');

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Bhawanipur') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option>');

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Joka') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel">Hostel</option>');

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Sonarpur') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel">Hostel</option>');

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Rajarhat') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option>');

  } else if ($('#city_' + id).val() == 'Nadia' && $('#branch_' + id).val() == 'Kalyani-town') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel (Only Girls)">Hostel (Only Girls)</option>');

  }else if ($('#city_' + id).val() == 'Malda' && $('#branch_' + id).val() == 'Malda') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option>');

  } else if ($('#city_' + id).val() == 'North 24 Parganas' && $('#branch_' + id).val() == 'Barasat') {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option><option value="Hostel (Only Boys)">Hostel (Only Boys)</option>');

  } else {

    $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option><option value="Day Scholar">Day Scholar</option>');

  }
  //getRefresh(val,id);
}

function getCourse(val, id) {

  // if ($('#city_' + id).val() == 'Bardhaman' && $('#branch_' + id).val() == 'Andal') {
  //   if (val == 'Day Scholar') {
  //     $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option><option value="XII">XII</option>');
  //   } else {
  //     $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option><option value="XII">XII</option>');
  //   }
  // } else 
  if ($('#city_' + id).val() == 'Bardhaman' && $('#branch_' + id).val() == 'Asansol') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Bardhaman' && $('#branch_' + id).val() == 'Bardhaman') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Bardhaman' && $('#branch_' + id).val() == 'Durgapur') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Contai' && $('#branch_' + id).val() == 'Contai') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  } else if ($('#city_' + id).val() == 'Darjeeling' && $('#branch_' + id).val() == 'Dagapur') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option>');
    }
  } else if ($('#city_' + id).val() == 'Darjeeling' && $('#branch_' + id).val() == 'Darjeeling') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Darjeeling' && $('#branch_' + id).val() == 'Siliguri') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option><option value="XII">XII</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  } else if ($('#city_' + id).val() == 'Darjeeling' && $('#branch_' + id).val() == 'Fulbari') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  } else if ($('#city_' + id).val() == 'East Midnapore' && $('#branch_' + id).val() == 'Midnapore') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option>');
    }
  } else if ($('#city_' + id).val() == 'East Midnapore' && $('#branch_' + id).val() == 'Haldia') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Hooghly' && $('#branch_' + id).val() == 'Bally') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Hooghly' && $('#branch_' + id).val() == 'Rishra') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Howrah' && $('#branch_' + id).val() == 'Howrah') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  } else if ($('#city_' + id).val() == 'Howrah' && $('#branch_' + id).val() == 'Andul') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  }else if ($('#city_' + id).val() == 'Howrah' && $('#branch_' + id).val() == 'Salap Junction, Kona (Credmont International School)') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option>');
    }
  } else if ($('#city_' + id).val() == 'Howrah' && $('#branch_' + id).val() == 'Ulluberia') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Howrah' && $('#branch_' + id).val() == 'Bally') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Howrah' && $('#branch_' + id).val() == 'Rishra') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Howrah' && $('#branch_' + id).val() == 'Maheshtala') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Kalimpong' && $('#branch_' + id).val() == 'Kalimpong') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  } else if ($('#city_' + id).val() == 'Kalimpong' && $('#branch_' + id).val() == 'Kalimpong 12th mile') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option><option value="XII">XII</option>');
    }

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Esplanade (New Market)') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option><option value="XII">XII</option>');
    }

  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'New Town') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }

  } else if ($('#city_' + id).val() == 'Coochbehar' && $('#branch_' + id).val() == 'Coochbehar') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option>');
    }
  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Maheshtala') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Sonarpur') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Joka') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  }
  else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Khidderpore') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option>');
    }
  }
  else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Sonarpur (Ramchandrapur)') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  }
  else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Behala (Silpara)') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  }
  else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Park Circus') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Bhawanipur') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option>');
    }
  } else if ($('#city_' + id).val() == 'Kolkata' && $('#branch_' + id).val() == 'Rajarhat') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option>');
    }
  } else if ($('#city_' + id).val() == 'Murshidabad' && $('#branch_' + id).val() == 'Murshidabad-berhampore') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option>');
    }
  } else if ($('#city_' + id).val() == 'Murshidabad' && $('#branch_' + id).val() == 'Jiaganj') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option>');
    }
  } else if ($('#city_' + id).val() == 'Nadia' && $('#branch_' + id).val() == 'Nadia-ranaghat') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'Nadia' && $('#branch_' + id).val() == 'Kalyani-town') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  } else if ($('#city_' + id).val() == 'Nadia' && $('#branch_' + id).val() == 'Krishnanagar City') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'North 24 Parganas' && $('#branch_' + id).val() == 'Basirhat') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option>');
    }
  } else if ($('#city_' + id).val() == 'North 24 Parganas' && $('#branch_' + id).val() == 'Barasat') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    } else {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="X">X</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  } else if ($('#city_' + id).val() == 'North 24 Parganas' && $('#branch_' + id).val() == 'Kalyani Express (Sodepur)') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option>');
    }
  } else if ($('#city_' + id).val() == 'North Dinajpur' && $('#branch_' + id).val() == 'Uttar dinajpur raiganj') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option><option value="XI">XI</option><option value="XII">XII</option>');
    }
  } else if ($('#city_' + id).val() == 'Purulia' && $('#branch_' + id).val() == 'Raghunathpur') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option>');
    }
  }else if ($('#city_' + id).val() == 'Malda' && $('#branch_' + id).val() == 'Malda') {
    if (val == 'Day Scholar') {
      $('#class_' + id).html('<option value="">Select Class</option><option value="E-KIDZ-N (Nursery)">E-KIDZ-N (Nursery)</option><option value="E-KIDZ-PP1 (L.K.G)">E-KIDZ-PP1 (L.K.G)</option><option value="E-KIDZ-PP2 (U.K.G)">E-KIDZ-PP2 (U.K.G)</option><option value="E-CHAMPS-1">E-CHAMPS-1</option><option value="E-CHAMPS-2">E-CHAMPS-2</option><option value="E-CHAMPS-3">E-CHAMPS-3</option><option value="E-CHAMPS-4">E-CHAMPS-4</option><option value="E-CHAMPS-5">E-CHAMPS-5</option><option value="VI">VI</option><option value="VII">VII</option><option value="VIII">VIII</option><option value="IX">IX</option>');
    }
  } else {
    alert('Please select branch');
  }


}
function getRefresh(val, id) {

  $('#board_' + id).html('<option value="">Select Board</option><option value="CBSE">CBSE</option>');
  $('#reservation_type_' + id).html('<option value="">Select Reservation Type</option>');
  $('#class_' + id).html('<option value="">Select Class</option>');

}

let otpVerified = {};  // per form tracking

// SEND OTP
function sendOTP(id) {

const btn = document.querySelector(`#frm_admission_open_${id} button[onclick="sendOTP(${id})"]`);
const btnText = btn.querySelector(".otp-btn-text");
const sendingText = btn.querySelector(".otp-sending-text"); //new text add here
const loader = btn.querySelector(".otp-loader");

// 🔥 START LOADER
btn.disabled = true;
btnText.classList.add("hidden");
if (sendingText) sendingText.classList.remove("hidden");
loader.classList.remove("hidden");


const name = document.getElementById("name_" + id);
const phone = document.getElementById("phone_" + id);
const parent_email = document.getElementById("parent_email_" + id);
const city = document.getElementById("city_" + id);
const branch = document.getElementById("branch_" + id);
const board = document.getElementById("board_" + id);
const reservation_type = document.getElementById("reservation_type_" + id);
const classes = document.getElementById("class_" + id);
const utm_source = document.getElementById("utm_source_" + id);
const utm_medium = document.getElementById("utm_medium_" + id);
const utm_campaign = document.getElementById("utm_campaign_" + id);
const redirect_from = document.getElementById("redirect_from_" + id);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

if (name.value.trim() === "") {
stopLoader(); alert("Enter Name");
return;
}
else if (!/^[6-9][0-9]{9}$/.test(phone.value)) {
stopLoader(); alert("Enter a valid phone number");
return;
}
else if (city.value === "") {
stopLoader(); alert("Select District");
return;
}
else if (branch.value === "") {
stopLoader(); alert("Select Branch");
return;
}
else if (board.value === "") {
stopLoader(); alert("Select Board");
return;
}
else if (reservation_type.value === "") {
stopLoader(); alert("Select Reservation Type");
return;
}
else if (classes.value === "") {
stopLoader(); alert("Select Class");
return;
}

fetch("/send-otp.php", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
name: name.value,
phone: phone.value,
parent_email: parent_email.value,
city: city.value,
branch: branch.value,
board: board.value,
reservation_type: reservation_type.value,
classes: classes.value,
utm_source: utm_source.value,
utm_medium: utm_medium.value,
utm_campaign: utm_campaign.value,
redirect_from: redirect_from.value
})
})
.then(res => res.json())
.then(data => {
if (data.status === true) {

  document.getElementById("DBid_" + id).value = data.lead_id;

  document.getElementById("otpSection_" + id).style.display = "block";
  document.getElementById("otp_message_" + id).innerHTML =
    "<span class=\"inline-block text-green-700 text-sm font-medium\">OTP sent successfully.</span>";

  document.getElementById("hidden_branch_" + id).value = branch.value;
  name.readOnly = true;
  phone.readOnly = true;
  parent_email.readOnly = true;

  city.disabled = true;
  branch.disabled = true;
  board.disabled = true;
  reservation_type.disabled = true;
  classes.disabled = true;

  document.getElementById("getOtpSection_" + id).style.display = "none";
  document.getElementById("verifyOtpBtn_" + id).style.display = "none";
  document.getElementById("about-get-btn-" + id).style.display = "block";

} else {
  document.getElementById("otp_message_" + id).innerHTML = "<span class=\"inline-block text-red-700 text-sm font-medium\">" + (data.message || "Something went wrong.") + "</span>";
}
})
.finally(() => {
  stopLoader();
});
function stopLoader() {
btn.disabled = false;
btnText.classList.remove("hidden");
if (sendingText) sendingText.classList.add("hidden");
loader.classList.add("hidden");
}
}

// VERIFY OTP
function verifyOTP(id) {
const phone = document.getElementById("phone_" + id).value.trim();
const DBid = document.getElementById("DBid_" + id).value.trim();
const userOTP = document.getElementById("otp_input_" + id).value.trim();
const msgEl = document.getElementById("otp_message_" + id);
const verifyBtn = event && event.target ? event.target : null;

if (!/^[6-9][0-9]{9}$/.test(phone)) {
msgEl.innerHTML = "<span class=\"inline-block text-red-700 py-1.5 text-sm font-medium\">Enter a valid phone first.</span>";
return;
}
if (!/^\d{6}$/.test(userOTP)) {
msgEl.innerHTML = "<span class=\"inline-block text-red-700 py-1.5 text-sm font-medium\">Enter the 6-digit OTP.</span>";
return;
}

msgEl.innerHTML = "<span class=\"inline-block text-gray-700 text-sm font-medium\">Verifying...</span>";

fetch("/verify-otp.php", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ phone: phone, otp: userOTP, DBid:DBid })
})
.then(res => res.json())
.then(data => {
if (data && data.status === true) {
  otpVerified[id] = true;
  document.getElementById("otp_verified_" + id).value = "1";
  document.getElementById("otp_input_hidden_" + id).value = userOTP;
  msgEl.innerHTML = "<span class=\"inline-block text-green-700 bg-green-50 rounded-lg px-3 py-1.5 text-sm font-medium\">OTP Verified ✔</span>";
  document.getElementById("phone_" + id).readOnly = true;
  const verifyOtpBtn = document.getElementById("verifyOtpBtn_" + id);
  if (verifyOtpBtn) {
    verifyOtpBtn.style.display = "none";
  }
  const submitBtn = document.getElementById("about-get-btn-" + id);
  if (submitBtn) {
    document.getElementById("otp_input_" + id).readOnly = true;
    submitBtn.style.display = "block";
  }
} else {
  otpVerified[id] = false;
  document.getElementById("otp_verified_" + id).value = "0";
  const reason = data && data.message ? data.message : "Incorrect OTP";
 msgEl.innerHTML = "<span class=\"inline-block text-red-700 text-sm font-medium\">" + reason + " ❌</span>";
}
})
.catch(err => {
console.error("verify-otp error:", err);
otpVerified[id] = false;
document.getElementById("otp_verified_" + id).value = "0";
msgEl.innerHTML = "<span style='color:red;'>Server error — try again.</span>";
});
}

// SUBMIT → VERIFY → SUBMIT
function handleSubmit(id, event) {
const verified = document.getElementById("otp_verified_" + id).value;

if (verified === "1") return true;

event.preventDefault();

const phone = document.getElementById("phone_" + id).value;
const otp = document.getElementById("otp_input_" + id).value;
const DBid = document.getElementById("DBid_" + id).value;
if (otp.length !== 6) {
alert("Enter valid 6-digit OTP");
return;
}

fetch("/verify-otp.php", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ phone: phone, otp: otp, DBid: DBid })
})
.then(res => res.json())
.then(data => {
if (data.status) {

  document.getElementById("otp_verified_" + id).value = "1";

  document.getElementById("otp_message_" + id).innerHTML =
"<span class=\"inline-block text-green-700 text-sm font-medium\">OTP Verified ✔</span>";

  document.getElementById("phone_" + id).readOnly = true;
  document.getElementById("otp_input_" + id).readOnly = true;

  document.getElementById("frm_admission_open_" + id).submit();

} else {
  document.getElementById("otp_message_" + id).innerHTML =
   "<span class=\"inline-block text-red-700 text-sm font-medium\">Invalid OTP ❌</span>";
}
});
}
