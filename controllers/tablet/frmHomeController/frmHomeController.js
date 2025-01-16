define({ 

  onFormHomePreShow: function(context) {
    voltmx.print("In frmHome preShow");
    gblNurseUserID = 637700915;
    gblNurseUserName = "729239";
    gblNurseDescription = "Jason Rickard";

    this.view.lblNurseUserName.text = "Welcome " + gblNurseDescription + " !";

    //     this.populateTestData();

//     this.getSavedTreatments();
//     this.getWaitingForTransmitTreatments();    
  },

  populateTestData: function() {
    var records = [];
    var record1 = {
      "FirstName": "FirstName1",
      "LastName": "LastName1",
      "MedicalRecordNumber": "MRN1"
    };
    records.push(record1);

    var record2 = {
      "FirstName": "FirstName2",
      "LastName": "LastName2",
      "MedicalRecordNumber": "MRN2"
    };
    records.push(record2);
    records.push(record2); 
    records.push(record2); 
    records.push(record2); 

    this.populateTreatments("segSavedTreatments", records, this.view);
    this.populateTreatments("segWaitingTransmit", records, this.view);    
  },

  getSavedTreatments: function() {
    var self = this;
    voltmx.print("getSavedTreatments for - " +gblNurseUserName);

    function successCallback(records) {
      console.log(records);

      // Check if records is not null or undefined AND has a length greater than 0
      if (records && records.length > 0) {
        self.populateTreatments("segSavedTreatments", records, self.view);
      } else {
        voltmx.print("No saved treatments found.");
        // Optionally, you could clear the segment here if it was previously populated:
        self.view.segSavedTreatments.setData([]);
      }
    }

    function errorCallback(error) {
      voltmx.print("unable to retrieve records from db" + error.code)
    }

    var whereClause = "Nurse_UserName = '" + gblNurseUserName + "' "  ;
    var options = {};
    options["whereConditionAsAString"] = whereClause;

    var patientTreatmentInfo = new voltmx.sdk.VMXObj("PatientTreatmentInfo");
    //     patientTreatmentInfo.get(options, {}, successCallback, errorCallback); 
    patientTreatmentInfo.get(null, successCallback, errorCallback);
  },

  getWaitingForTransmitTreatments: function() {

  },


  onSelectTreatmentClick: function(context) {
    var self = this;
    voltmx.print("Get Patient Data for row " + this.view.segSavedTreatments.selectedItems[0].ID);

    var patientSuccessCallback = function patientSuccessCallback(data) {	
      // resetForm();
      // TODO: Clear all forms
      console.log("patientSuccessCallback - " + data);

      if (data && data.length > 0) { // Check if data exists AND is not empty
        patInfo = data[0];
        gblPatientTreatmentInfo = patInfo;        
        self.showExisitingPatientTreatment(patInfo);
      } else {
        voltmx.print("No data received for patient ");
      }
    }

    var patientErrorCallback = function(res) {
      kony.print("patientErrorCallback " + JSON.stringify(res)); 
    }    

    var options = {};
    //Primary keys or a where clause can be used
    var primaryKeys = [];
    //     primaryKeys["ID"] = this.view.segSavedTreatments.selectedItems[0].ID;
    // TODO figure out how to get the ro id
    primaryKeys["ID"] = "1";
    options["ID"] = primaryKeys;

    var patientTreatmentInfo = new voltmx.sdk.VMXObj("PatientTreatmentInfo");
    // all records of object are returned as an argument to success callback.
    patientTreatmentInfo.get(options, patientSuccessCallback, patientErrorCallback);    

  },

  showExisitingPatientTreatment: function() {
    var ntf = new voltmx.mvc.Navigation("frmPatientDetails");
    ntf.navigate();    
  },


  populateTreatments: function(segmentName, records, targetform) {
    var tempCollection = [];
    for (var i in records) {
      tempCollection.push({
        "lblSavedLastName": {
          "text": records[i]["Last_Name"]
        },
        "lblSavedFirstName": {
          "text": records[i]["First_Name"]
        },
        "lblSavedMedRecordNum": {
          "text": records[i]["Medical_Record_Number"]
        }
      });
    }
    targetform[segmentName].setData(tempCollection);
  }


});