define({
  getModel: function() {
    var self = this; // Important: Keep this for context
    var patient = {};

    patient.TreatmentTypeID = self.view.cmbTreatType.selectedKey;
    patient.CxlTypeID = self.view.cmbCancelType.selectedKey;
    patient.HemoTypeID = self.view.cmbHDType.selectedKey;
    patient.PDTypeID = self.view.cmbPDType.selectedKey;
    patient.CRRTTypeID = self.view.cmbCRTTtype.selectedKey;
    patient.ApheresisTypeID = self.view.cmbAphtype.selectedKey;
    patient.AccessTypeID = self.view.cmbAccessType.selectedKey;
    patient.HbsAgID = self.view.cmbHbsag.selectedKey;
    patient.HbsAbID = self.view.cmbHbsab.selectedKey;

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
    var treatmentsubmitDataObj;
    voltmx.print("frmTreatmentDetails checkForErrorsAndUpdateSkn");

    if (this.view.cmbTreatType.selectedKeyValue != null) {

      if (this.view.cmbTreatType.selectedKeyValue[1] == "Please Select...") {
        treatmentsubmitDataObj = {
          "lblTretType": this.view.cmbTreatType.selectedKeyValue[0]
        };
      } else if (this.view.cmbTreatType.selectedKeyValue[1] == "Hemodialysis") {
        treatmentsubmitDataObj = {
          "lblTretType": this.view.cmbTreatType.selectedKeyValue[0],
          "lblHDType": this.view.cmbHDType.selectedKey,
          "lblAccess": this.view.cmbAccessType.selectedKey,
          "lblHbsag": this.view.cmbHbsag.selectedKey,
          "lblHbsAb": this.view.cmbHbsab.selectedKey
        };
      } else if (this.view.cmbTreatType.selectedKeyValue[1] == "PD") {
        treatmentsubmitDataObj = {
          "lblTretType": this.view.cmbTreatType.selectedKeyValue[0],
          "lblPDType": this.view.cmbPDType.selectedKey,
          "lblAccess": this.view.cmbAccessType.selectedKey,
          "lblHbsag": this.view.cmbHbsag.selectedKey,
          "lblHbsAb": this.view.cmbHbsab.selectedKey
        };
      } else if (this.view.cmbTreatType.selectedKeyValue[1] == "CRRT") {
        treatmentsubmitDataObj = {
          "lblTretType": this.view.cmbTreatType.selectedKeyValue[0],
          "lblCRRTtype": this.view.cmbCRTTtype.selectedKey,
          "lblAccess": this.view.cmbAccessType.selectedKey,
          "lblHbsag": this.view.cmbHbsag.selectedKey,
          "lblHbsAb": this.view.cmbHbsab.selectedKey
        };
      } else if (this.view.cmbTreatType.selectedKeyValue[1] == "Apheresis") {
        treatmentsubmitDataObj = {
          "lblTretType": this.view.cmbTreatType.selectedKeyValue[0],
          "lblAphType": this.view.cmbAphtype.selectedKey,
          "lblAccess": this.view.cmbAccessType.selectedKey,
          "lblHbsag": this.view.cmbHbsag.selectedKey,
          "lblHbsAb": this.view.cmbHbsab.selectedKey
        };
      } else if (this.view.cmbTreatType.selectedKeyValue[1] == "Cancellation") {
        treatmentsubmitDataObj = {
          "lblTretType": this.view.cmbTreatType.selectedKeyValue[0],
          "lblCancelType": this.view.cmbCancelType.selectedKey
        };
      } else if (this.view.cmbTreatType.selectedKeyValue[1] == "Non Treatment Service") {
        treatmentsubmitDataObj = {
          "lblTretType": this.view.cmbTreatType.selectedKeyValue[0],
          "lblHbsag": this.view.cmbHbsag.selectedKey,
          "lblHbsAb": this.view.cmbHbsab.selectedKey
        };
      } else if (this.view.cmbTreatType.selectedKeyValue[1] == "Hemoperfusion" || this.view.cmbTreatType.selectedKeyValue[1] == "Immunoabsorption" || this.view.cmbTreatType.selectedKeyValue[1] == "Other") {
        treatmentsubmitDataObj = {
          "lblTretType": this.view.cmbTreatType.selectedKeyValue[0],
          "lblAccess": this.view.cmbAccessType.selectedKey,
          "lblHbsag": this.view.cmbHbsag.selectedKey,
          "lblHbsAb": this.view.cmbHbsab.selectedKey
        };
      }

    } else {
      treatmentsubmitDataObj = {
        "lblTretType": this.view.cmbTreatType.selectedKey
      };

    }
    for (const key in treatmentsubmitDataObj) {
      voltmx.print("key - " + key + " value - " + treatmentsubmitDataObj[key]);
      if (treatmentsubmitDataObj[key] === null || treatmentsubmitDataObj[key].trim() === "" || treatmentsubmitDataObj[key] === "null") {
        count++;
        this.view[key].skin = "sknlblErrortxt";
      } else {
        this.view[key].skin = "sknlblGreyFont80";
      }
    }
    voltmx.print("frmPatientDetails checkForErrorsAndUpdateSkn Count - " + count);

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
    var data = response; // Access data using response.records

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

  onFormTreatmentDetailsPreShow: function(context) {      
    voltmx.print("In frmTreatmentDetails preShow");
    this.checkAndSetACOITab();
    gbl_treatmenterrCount = this.checkForErrorsAndUpdateSkn();
    this.updateLeftPaneTabs();
  },

  onFormTreatmentDetailsInit: function(context){
    voltmx.print("In frmTreatmentDetails init");

    this.populateListBoxFromObject("Ref_CancellationType_Desc", "cmbCancelType", "CancellationTypeID", "CancellationType_Desc", this.view);
    this.populateListBoxFromObject("Ref_HemoType_Desc", "cmbHDType", "HemotypeID", "HemoType_Desc", this.view);
    this.populateListBoxFromObject("Ref_PDType_Desc", "cmbPDType", "PDTypeID", "PDType_Desc", this.view);
    this.populateListBoxFromObject("Ref_CRRTType_Desc", "cmbCRTTtype", "CRRTTypeID", "CRRTType_Desc", this.view);
    this.populateListBoxFromObject("Ref_ApheresisType_Desc", "cmbAphtype", "ApheresisTypeID", "ApheresisType_Desc", this.view);
    this.populateListBoxFromObject("Ref_ApheresisType_Desc", "cmbAphtype", "ApheresisTypeID", "ApheresisType_Desc", this.view);
    this.populateListBoxFromObject("Ref_AccessType_Desc", "cmbAccessType", "AccessTypeID", "AccessType_Desc", this.view);
    this.populateListBoxFromObject("Ref_HbsAg_Desc", "cmbHbsag", "HbsAgId", "HbsAg_Desc", this.view);
    this.populateListBoxFromObject("Ref_HbsAb_Desc", "cmbHbsab", "HbsAbId", "HbsAb_Desc", this.view);
  }


});