function showSyncLoadingScreen(text){
  text = " " + text + " \n"; 
  voltmx.application.showLoadingScreen("", text, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
}


function dismissSyncLoadingScreen(){
  voltmx.application.dismissLoadingScreen();
}


function syncSetup(){
  voltmx.print("Inside syncSetup");

  function successCallback(status) {
    voltmx.print("Application setup successful");
    voltmx.print("Calling Sync...")
    gblNurseUserID = 637700915;
    gblNurseUserName = 729239;
    gblNurseDescription = "Jason Rickard";

    syncInBoundStartSession(voltmx.i18n.getLocalizedString("i18n_Sync_Msg"));
  }

  function failureCallback(error) {
    voltmx.print("Application setup failed with error:" + error.code);
    console.log(error);
  }

  //Encrypt the device database using a passphrase
  var options = {
    "deviceDbEncryptionKey": "myencryptionpa$$phrase1"
  };
  VMXFoundry.OfflineObjects.setup(options, successCallback, failureCallback);  
}


function syncInBoundStartSession(loadingScreenMsg){

  var inBoundObjectService = new voltmx.sdk.VMXObjSvc("InBound");
  var syncOptions = {};
  //Set filters to be applied during download on multiple objects
  syncOptions.syncMode = "parallel";
  syncOptions.syncType = "downloadOnly"
  syncOptions.filter = {
    "Ref_AccessType_Desc": "AccessTypeID eq 1",
    "Ref_AdditionalServicesType_Desc": "AdditionalServicesTypeID eq 25",
    "Ref_ApheresisType_Desc": "ApheresisTypeID eq 412",
    "Ref_CancellationType_Desc": "CancellationTypeID eq 496",
    "Ref_CRRTType_Desc": "CRRTTypeID eq 28",
    "Ref_Division_Desc": "DivisionID eq 43",
    "Ref_DivisonRegionMappingInfo": "DivisionID eq 43",
    "Ref_Group_Desc": "GroupID eq 4",
    "Ref_GroupDivisionMappingInfo": "GroupID eq 4",
    "Ref_HemoType_Desc": "HemotypeID eq 1",
//     "Ref_Hospital_Desc": "HospitalID in (111115)",
//  "Ref_Hospital_Desc": "HospitalID in (111115, 111210, 111346, 10000286, 10000735, 10001097, 10001438, 10001632, 10001635, 10001640, 10001646, 10001648, 10001652, 10002118, 10002811)",
    "Ref_Hospital_Desc": "HospitalID eq 111115",
    "Ref_Nurse_Desc": "Nurse_UserName eq 729239",
    "Ref_PDType_Desc": "PDTypeID eq 1",
    "Ref_Region_Desc": "RegionID eq 211",
//     "Ref_Region_Desc": "RegionID in (211, 635, 748, 2663244, 36, 1846125, 2663244)",
    "Ref_RegionDaVitaClinicMappingInfo": "RegionID eq 211",
    "Ref_RegionHospitalMappingInfo": "RegionID eq 211",
    "Ref_RegionNurseMappingInfo": "RegionID eq 211",
//     "Ref_RegionDaVitaClinicMappingInfo": "RegionID in (211, 635, 748, 2663244, 36, 1846125, 2663244)",
//     "Ref_RegionHospitalMappingInfo": "RegionID in (211, 635, 748, 2663244, 36, 1846125, 2663244)",
//     "Ref_RegionNurseMappingInfo": "RegionID in (211, 635, 748, 2663244, 36, 1846125, 2663244)",
    "Ref_TreatmentQuestions_Desc": "TreatmentTypeID eq 1"
  };
  inBoundObjectService.startSync(syncOptions, onSuccess, onFailure, onProgress);

  //   VMXFoundry.OfflineObjects.startSync(null, onSuccess, onFailure, onProgress);

  function onSuccess(response) {
    voltmx.print("Application Sync success: " + JSON.stringify(response));
    voltmx.application.dismissLoadingScreen();
  }

  function onFailure(error) {
    voltmx.print("Application Sync failed with error: " + JSON.stringify(error.failureResponse));
    voltmx.application.dismissLoadingScreen();
  }

  function onProgress(object) {
    voltmx.print("Application Sync progress event received" + JSON.stringify(object));
    voltmx.application.dismissLoadingScreen();
  }  
}