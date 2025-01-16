function onClickbtnDelete(context) {
  var ntf = new voltmx.mvc.Navigation("frmHome");
  ntf.navigate();  
}

function onClickbtnSave(context) {

  voltmx.print("Inside Save Module - onClickbtnSave");

  console.log(context);
  var patient = collectDataFromAllForms();

  patient.Nurse_UserName = gblNurseName;
  patient.App_Version_Number = appConfig.appVersion.toString();
  patient.Device_PIN = "Device_PIN"; //TODSO voltmx.os.deviceInfo().identifierForVendor.toString();

  gblPatientTreatmentInfo = convertDataTypeToMatchModel(patient);;
  voltmx.print("gblPatientTreatmentInfo - " + JSON.stringify(gblPatientTreatmentInfo));
  savePatient(gblPatientTreatmentInfo);

}

function convertDataTypeToMatchModel(patient) {
  patient.HospitalID = parseInt(patient.HospitalID);
  patient.pretx_hosp_id = parseInt(patient.pretx_hosp_id);
  patient.Pediatric = parseInt(patient.Pediatric);
  patient.RoomTypeID = parseInt(patient.RoomTypeID);
  patient.TreatmentTypeID = parseInt(patient.TreatmentTypeID);

  // Replace "null" with null type. 
  for (const key in patient) {
    if (patient.hasOwnProperty(key)) { // Check if it's the object's own property
      if (patient[key] === "null" || patient[key] === null || patient[key] === undefined || patient[key] === "") {
        patient[key] = null; // Set the attribute to null if it's "null", null, undefined or empty string
      }
    }
  }  
  return patient;
}

function savePatient(patient) {
  voltmx.print("savePatient - " +JSON.stringify(savePatient));

  function successCallback(response) {
    voltmx.print("Record created successfully with primary keys: " + response["ID"]);
  }

  function errorCallback(error) {
    voltmx.print("Create is failed" + JSON.stringify(error));
  }

  var patientTreatmentInfo = new voltmx.sdk.VMXObj("PatientTreatmentInfo");
  patientTreatmentInfo.create(patient, {}, successCallback, errorCallback);  
}

function resetErrorUI(formId) {
  voltmx.print("resetErrorUI for - " + formId);

  var navObject = new voltmx.mvc.Navigation(formId);
  var resetError = true;
  var formModel = {};
  formModel.resetError = resetError;
  voltmx.print("Passing formModel " + JSON.stringify(formModel));
  //   navObject.setModel(formModel);
  navObject.navigate(formModel);
}

function collectDataFromAllForms() {

  voltmx.print("collectDataFromAllForms");
  resetErrorUI("frmPatientDetails");
  //   resetErrorUI("frmTreatmentDetails");
  //   resetErrorUI("frmOtherDetails");
  //   resetErrorUI("frmPostTX");
  //   resetErrorUI("frmACOI");

  var patient = collectDataUsinggetModel("frmPatientDetails");
  voltmx.print("frmPatientDetails - " + JSON.stringify(patient));

  var dataTreatmentDetails = collectDataUsinggetModel("frmTreatmentDetails");
  voltmx.print("frmTreatmentDetails - " + JSON.stringify(dataTreatmentDetails));

  var dataOtherDetails = collectDataUsinggetModel("frmOtherDetails");
  voltmx.print("frmOtherDetails - " + JSON.stringify(dataOtherDetails));

  var dataPostTXDetails = collectDataUsinggetModel("frmPostTX");
  voltmx.print("frmPostTX - " + JSON.stringify(dataPostTXDetails));

  //   var dataACOIDetails = collectDataUsinggetModel("frmACOI");
  //   voltmx.print("frmACOI - " + JSON.stringify(patient));

  //   Object.assign(patient, dataTreatmentDetails, dataOtherDetails, dataPostTXDetails, dataACOIDetails);
  Object.assign(patient, dataTreatmentDetails, dataOtherDetails, dataPostTXDetails);
  voltmx.print("All Forms Data - " + JSON.stringify(patient));
  return patient;

}

function collectDataUsinggetModel(formId) {
  var navObject = new voltmx.mvc.Navigation(formId);
  console.log(navObject);

  if (navObject && navObject.getModel) { 
    var formModel = navObject.getModel();
    console.log(formModel);
    return formModel;
  } else {
    console.error("FormModel not available for " + formId);
    return null; // Return null or an appropriate default value
  }
}


// function collectDataFromfrmPatientDetailsOld() {
//   voltmx.print("collectDataFromfrmPatientDetailsOld");
//   var controllerPatientDetails = require("frmPatientDetailsController");
//   //   var dataPatientDetails  = controllerTreatmentDetails.collectFormData();
//   var dataPatientDetails = {};
//   dataPatientDetails.First_Name = "First Name";
//   dataPatientDetails.Last_Name = "Last Name";
//   dataPatientDetails.Medical_Record_Number = "MRN1";
//   patient["First_Name"] = dataPatientDetails.First_Name;
//   patient["Last_Name"] = dataPatientDetails.Last_Name;
//   patient["Medical_Record_Number"] = dataPatientDetails.Medical_Record_Number;
// }

// function getFormInstance(formId) {
//   var ntf = new kony.mvc.Navigation(formId);
//   return ntf.getFormModel(); // Returns the form instance
// }

// function collectDataFromfrmPatientDetails() {
//   voltmx.print("collectDataFromfrmPatientDetails");
//   var navObject = new voltmx.mvc.Navigation("frmPatientDetails");
//   var formModel = navObject.getModel();
//   console.log(formModel);

//   navigateToForm("frmPatientDetails", function(formInstance) {
//     if (formInstance) {
//       voltmx.print("formInstance -  "+ formInstance.id);
//       var treatmentData = formInstance.txtRoomNum.text;
//       voltmx.print("Patient Data:", JSON.stringify(treatmentData));
//     } else {
//       voltmx.print("Error getting frmPatientDetails instance.");
//     }
//   });
// }

// function navigateToForm(formId, callback) {
//   voltmx.print("navigateToForm");
//   var navigationObject = new kony.mvc.Navigation(formId);
//   navigationObject.navigate(); // Navigate to the form

//   // Check if a callback is provided
//   if (typeof callback === "function") {
//     voltmx.print("if callback");
//     //If the form is already loaded, execute the callback immediately, otherwise use the postShow event.
//     var formInstance = kony.application.getCurrentForm();
//     if(formInstance && formInstance.id === formId){
//       callback(formInstance);
//     } else {
//       voltmx.print("else callback");
//       kony.application.getForm(formId).postShow = function(form){
//         callback(form);
//         delete kony.application.getForm(formId).postShow;
//       };
//     }
//   }
// }




// function collectDataFromfrmTreatmentDetailsOld() {
//   voltmx.print("collectDataFromfrmTreatmentDetailsOld");
//   var frmTreatmentDetails = getFormInstance("frmTreatmentDetails");

//   require(["frmTreatmentDetailsController"], function(controllerTreatmentDetails) {
//     //     This code will ONLY execute AFTER frmTreatmentDetailsController is loaded.
//     voltmx.print("frmTreatmentDetailsController loaded successfully");
//     //     var dataTreatmentDetails  = controllerTreatmentDetails.collectFormData();

//     //     var dataTreatmentDetails = {};
//     dataTreatmentDetails.TreatmentTypeID = "1";
//     dataTreatmentDetails.CxlTypeID = "2";
//     dataTreatmentDetails.HemoTypeID = "3";
//     dataTreatmentDetails.PDTypeID = "4";
//     dataTreatmentDetails.CRRTTypeID = "5";
//     dataTreatmentDetails.ApheresisTypeID = "6";
//     dataTreatmentDetails.AccessTypeID = "7";
//     dataTreatmentDetails.HbsAgID = "8";
//     dataTreatmentDetails.HbsAbID = "9";

//     patient["AccessTypeID"] = dataTreatmentDetails.AccessTypeID;
//     patient["ApheresisTypeID"] = dataTreatmentDetails.ApheresisTypeID;
//     patient["CRRTTypeID"] = dataTreatmentDetails.CRRTTypeID;
//     patient["CxlTypeID"] = dataTreatmentDetails.CxlTypeID;
//     patient["HbsAbID"] = dataTreatmentDetails.HbsAbID;
//     patient["HbsAgID"] = dataTreatmentDetails.HbsAgID;
//     patient["HemoTypeID"] = dataTreatmentDetails.HemoTypeID;
//     patient["PDTypeID"] = dataTreatmentDetails.PDTypeID;
//     patient["TreatmentTypeID"] = dataTreatmentDetails.TreatmentTypeID;
//   });
// }

function validateData(){}