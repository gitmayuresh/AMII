define({

  getModel: function() {
    var self = this; // Important: Keep this for context
    var patient = {};

    // Correct way to access widgets: use self.view.widgetName
    patient.NursingServiceID = self.view.cmbNursingSvc.selectedKey;
    patient.Nursing_Service_Time_Units = self.view.cmbNursinghrs.selectedKey;
    patient.AddtlSvcsTypeID = self.view.cmbAdditionalSvc.selectedKey;
    patient.Dialysate = self.view.cmbDialysate.selectedKey;
    patient.Blood_Administration_Qty = self.view.cmbBloodAdmin.selectedKey;
    patient.Removal_Of_Non_Tunneled_Catheter = self.view.rbtRemoveCVC.selectedKey;
    return patient;    
  },

  checkAndSetACOITab: function() {
    if (gbl_cmbTreatType_selectedValue == "Hemodialysis") {
      this.view.fcACOI.setEnabled(true);
      this.view.fcACOI.focusSkin = "sknfcleftpanebuttonFocus";
      this.view.lblACOIDetails.skin = "sknlblLeftPaneButtonNav";      
    } else {
      this.view.fcACOI.setEnabled(false);
      this.view.fcACOI.focusSkin = "sknfcdisableleftpane";
      this.view.lblACOIDetails.skin = "sknlblACOIDisable";      
      this.view.lblAcoiErrormsg.text = "";
    }
  },

  checkForErrorsAndUpdateSkn() {
    var count = 0;
    var otherdetailsDataObj = {
      "lblLNursingHrs": this.view.cmbNursinghrs.selectedKey,
      "lblDialysate": this.view.cmbDialysate.selectedKey
    };

    voltmx.print("frmOtherDetails checkForErrorsAndUpdateSkn");

    // Loop through each property in otherdetailsDataObj
    for (const key in otherdetailsDataObj) {
      voltmx.print("key - " + key + " value - " + otherdetailsDataObj[key]);
      if (otherdetailsDataObj[key] === null || otherdetailsDataObj[key].trim() === "" || otherdetailsDataObj[key] === "null") {
        count++;
        this.view[key].skin = "sknlblErrortxt";
      } else {
        this.view[key].skin = "sknlblGreyFont80";
      }
    }
    voltmx.print("frmOtherDetails checkForErrorsAndUpdateSkn Count - " + count);
    return count;
  },

  updateLeftPaneTabs: function(){
    if(gbl_patientdataerrCount>0)
      this.view.lblErrorMsg.text = gbl_patientdataerrCount + " " + "Error(s)";
    else
      this.view.lblErrorMsg.text = "";

    if(gbl_treatmenterrCount>0)
      this.view.lblErrorMsg.text = gbl_treatmenterrCount + " " + "Error(s)";
    else
      this.view.lblErrorMsg.text = "";

    if(gbl_postTxerrorcount>0)
      this.view.lblErrorMsg.text = gbl_postTxerrorcount + " " + "Error(s)";
    else
      this.view.lblErrorMsg.text = "";

    if(gbl_acoierrorcount>0)
      this.view.lblErrorMsg.text = gbl_acoierrorcount + " " + "Error(s)";
    else
      this.view.lblErrorMsg.text = "";

    if(gbl_otherdateerrorcount>0)
      this.view.lblErrorMsg.text = gbl_otherdateerrorcount + " " + "Error(s)";
    else
      this.view.lblErrorMsg.text = "";
  },

  populateListBoxFromObject: function(objectName, listBoxName, keyField, valueField, targetForm) {
    var callbackSuccess = function(response) {
      voltmx.print("******In " + objectName + " Callback********");
      this.populateListBox(response, listBoxName, keyField, valueField, targetForm, objectName);
    }.bind(this); // Very important: bind 'this'

    var callbackFail = function(error) {
      voltmx.print("unable to retrieve records from db" + error.code);
      console.log(error);
    }

    var ofl_objectName = new voltmx.sdk.VMXObj(objectName);
    // all records of object are returned as an argument to success callback.
    ofl_objectName.get(null, callbackSuccess, callbackFail);    

  },

  populateListBox: function(response, listBoxName, keyField, valueField, targetForm, objectName) {
    var listData = [];              
    var data = response;

    if (data && data.length > 0) { // Check if data exists AND is not empty
      listData.push(["null", "Please Select..."]);
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var key = item[keyField];
        var value = item[valueField];
        listData.push([key, value]);
        voltmx.print(key + " - " + value);
      }
      targetForm[listBoxName].masterData = listData;
    } else {
      voltmx.print("No data received from service for " + objectName);
    }
  },

  onFormOtherDetailsPreShow: function(context) {      
    voltmx.print("In frmTreatmentDetails preShow");
    this.checkAndSetACOITab();
    gbl_otherdateerrorcount = this.checkForErrorsAndUpdateSkn();
    this.updateLeftPaneTabs();
  },

  onFormOtherDetailsInit: function(context) { 
    this.populateListBoxFromObject("Ref_NursingService_Desc", "cmbNursingSvc", "NursingServiceID", "NursingService_Desc", this.view);
    this.populateListBoxFromObject("Ref_AdditionalServicesType_Desc", "cmbAdditionalSvc", "AdditionalServicesTypeID", "AdditionalServicesType_Desc", this.view);
    this.populateListBoxFromObject("Ref_DialysateType_Desc", "cmbDialysate", "DialysateTypeID", "DialysateType_Desc", this.view);
  }
});