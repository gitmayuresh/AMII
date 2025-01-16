// define(['require/utils'], function(Utils){
define({

  getModel: function() {
    var self = this; // Important: Keep this for context
    var patient = {};

    // Correct way to access widgets: use self.view.widgetName
    patient.Last_Name = self.view.txtLastName.text;
    patient.First_Name = self.view.txtFirstName.text;
    patient.Date_Of_Birth = this.getFormattedDate(this.view.txtDOB.text);
    patient.pretx_hosp_id = self.view.rbtPreTreatmentRN.selectedKey;
    patient.Pediatric = self.view.rbtPediatric.selectedKey;
    patient.HospitalID = self.view.cmbHospital.selectedKey;
    patient.RoomTypeID = self.view.cmbRoomType.selectedKey;
    patient.Room_Number = self.view.txtRoomNum.text;
    patient.Medical_Record_Number = self.view.txtMRNum.text;
    patient.Physician_Last_Name = self.view.txtDoctorLastName.text;
    patient.Physician_First_Name = self.view.txtDoctorFirstName.text;
    patient.Stat_Treatment = self.view.rbtStat.selectedKey;
    patient.IV_Antibiotic = self.view.rbtIsolation.selectedKey;

    if(this.view.txtTretstartdate.text!=null && this.view.txtTretstartdate.text!="")
      patient.Treatment_Date = self.view.txtTretstartdate.text;

    var startDate=this.view.txtTretstartdate.text;
    var startTime=this.view.txtStartTime.text;
    if((startDate!="" && startDate!=null)&&(startTime!="" && startTime!=null))
      patient.Treatment_Start_Time = this.gettimeinMillisecondsTxt(startDate,startTime);

    patient.Is_Start_Date_Modified = this.onChangeStartDateStatus();
    patient.Is_Start_Time_Modified = this.onChangeStartTimeStatus();

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
    var patientDataObj = {
      "lblFName": this.view.txtFirstName.text,
      "lblLName": this.view.txtLastName.text,
      "lblDOB": this.view.txtDOB.text,
      "lblHospital": this.view.cmbHospital.selectedKey,
      "lblTreatLoc": this.view.cmbRoomType.selectedKey,
      "lblRoomNumber": this.view.txtRoomNum.text,
      "lblMRNumber": this.view.txtMRNum.text
    };

    // Loop through each property in patientDataObj
    for (const key in patientDataObj) {
      voltmx.print("key - " + key + " value - " + patientDataObj[key]);
      if (patientDataObj[key] === null || patientDataObj[key].trim() === "" || patientDataObj[key] === "null") {
        count++;
        this.view[key].skin = "sknlblErrortxt";
      } else {
        this.view[key].skin = "sknlblGreyFont80";
      }
    }
    voltmx.print("frmPatientDetails checkForErrorsAndUpdateSkn Count - " + count);
    return count;
  },

  updateLeftPaneTabs: function() {
    const errorCounts = [
      gbl_patientdataerrCount,
      gbl_treatmenterrCount,
      gbl_postTxerrorcount,
      gbl_acoierrorcount,
      gbl_otherdateerrorcount,
    ];

    this.view.lblErrorMsg.text = errorCounts
      .filter(count => count > 0)
      .map(count => `${count} Error(s)`)
      .join("\n");
  },

  getFormattedDate: function(dateStr) {
    if(dateStr!=null)
    {
      var mydate = new Date(dateStr);  //mm/dd/yyyy
      var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var finalDate = mydate.getDate() + " " + months[(mydate.getMonth())] + " " + mydate.getFullYear();
      return finalDate;
    } else {
      return null;
    }    
  },

  gettimeinMillisecondsTxt: function(trtDate,trtTime) {
    var datenow = new Date();
    var date1=trtDate.split("/");
    var time1=trtTime.split(":");
    var timeMidnight = new Date(datenow.getFullYear(), datenow.getMonth(), datenow.getDate());
    var pickedDate = new Date(date1[2], parseInt(date1[0], 10) - 1, date1[1],time1[0], time1[1]);
    var diffmillisecond = pickedDate.valueOf() - timeMidnight.valueOf();
    voltmx.print("Difference in Millisecoonds from txtbox- " + diffmillisecond);
    return diffmillisecond.toString();
  },    

  onChangeStartDateStatus: function() {
    var changedStatus = 0;  
    var changedDate=this.view.calDOT.formattedDate;      
    var actDate=this.view.lblCurDate.text; 
    var date1=Date.parse(actDate);
    voltmx.print("date1"+date1);
    var date2=Date.parse(changedDate);
    voltmx.print("date2"+date2);
    if(date1!=date2)
    {
      changedStatus=1;
    }else{
      changedStatus=0;
    }
    voltmx.print("changedStatus of StartDate - "+changedStatus);     
    return changedStatus;    
  },

  onChangeStartTimeStatus: function() {
    var actTime =this.view.lblCurTime.text;  
    var changedTime =this.view.calTreatmentStartTime.formattedDate;		
    var changedStatus = 0;
    var actTimeObj=new Date("1/1/2000 " + actTime);
    var changedTimeObj=new Date("1/1/2000 " + changedTime);
    var timeChange=changedTimeObj-actTimeObj;
    if(timeChange==0)
      changedStatus=0;
    else
      changedStatus=1;
    voltmx.print("changedStatus of StartTime - "+changedStatus); 
    return changedStatus;  
  },

  populateListBoxFromObject: function(objectName, listBoxName, keyField, valueField, targetForm) {
    var callbackSuccess = function(response) {
      voltmx.print("******In " + objectName + " Callback********");
      this.populateListBox(response, listBoxName, keyField, valueField, targetForm, objectName);
    }.bind(this); // Very important: bind 'this'

    var callbackFail = function(error) {
      voltmx.print("unable to retrieve records from db" + error.code);
      console.log(error);
    }.bind(this); // Very important: bind 'this'

    var ofl_objectName = new voltmx.sdk.VMXObj(objectName);
    // all records of object are returned as an argument to success callback.
    ofl_objectName.get(null, callbackSuccess, callbackFail);    

  },

  populateListBoxFromQuery: function(query, listBoxName, keyField, valueField, targetForm, queryDesc) {

    var callbackSuccess = function(records) {
      voltmx.print("******In " + queryDesc + " Callback********");
      voltmx.print(JSON.stringify(records, null, 2));
      this.populateListBox(records, listBoxName, keyField, valueField, targetForm, queryDesc);
    }.bind(this); // Very important: bind 'this'

    var callbackFail = function(error) {
      voltmx.print("Integration Service Failure: " + JSON.stringify(error));
    }.bind(this); // Very important: bind 'this'

    VMXFoundry.OfflineObjects.executeSelectQuery(query, callbackSuccess, callbackFail);     
  },

  populateListBox: function(records, listBoxName, keyField, valueField, targetForm, objectName) {
    var listData = [];              
    if (records && records.length > 0) { // Check if records exists AND is not empty
      listData.push(["null", "Please Select..."]);
      for (var i = 0; i < records.length; i++) {
        var item = records[i];
        var key = item[keyField];
        var value = item[valueField];
        listData.push([key, value]);
        voltmx.print(key + " - " + value);
      }
      targetForm[listBoxName].masterData = listData;
    } else {
      voltmx.print("No data received for " + objectName);
    }
  },

  onClickbtnSearch: function() {
	this.resetSearchPopup();
    this.view.fcpopupHospitalSearch.isVisible = true;
    this.view.fcpopupHospitalSearch.isModalContainer = true;
    var listData = [];              
    listData.push(["null", "Please Select..."]);
    this.view.cmbDivision.masterData = listData;
    this.view.cmbRegion.masterData = listData;
    this.view.segHospitalData.removeAll();

    this.populateListBoxFromObject("Ref_Group_Desc", "cmbGroup", "GroupID", "Group_Desc", this.view);
  },

  onClickbtnSearchGroup_testData: function() {
    var listDataDivision = [];              
    listDataDivision.push(["null", "Please Select..."]);
    listDataDivision.push(["1", "Division 1"]);
    listDataDivision.push(["2", "Division 2"]);
    listDataDivision.push(["3", "Division 3"]);

    var listDataRegion = [];              
    listDataRegion.push(["null", "Please Select..."]);
    listDataRegion.push(["1", "Region 1"]);
    listDataRegion.push(["2", "Region 2"]);
    listDataRegion.push(["3", "Region 3"]);

    this.view.cmbDivision.masterData = listDataDivision;
    this.view.cmbRegion.masterData = listDataRegion;

    var records = [];
    var record1 = {
      "HospitalID": "1",
      "Hospital_Desc": "Hospital 1"
    };
    records.push(record1);

    var record2 = {
      "HospitalID": "2",
      "Hospital_Desc": "Hospital 2"
    };
    records.push(record2);    

    var segDataCollection = [];
    var cmbDataCollection = [];
    for (var i in records) {
      var item = records[i];
      var key = item["HospitalID"];
      var value = item["Hospital_Desc"];
      cmbDataCollection.push([key, value]);

      segDataCollection.push({
        "lblsegHospID": {
          "text": records[i]["HospitalID"]
        },
        "lblsegHospdesc": {
          "text": records[i]["Hospital_Desc"]
        }
      });          
    }
    gbl_HospitalFilterData = cmbDataCollection;
    this.view.segHospitalData.setData(segDataCollection);
  },
  onClickbtnSearchGroup: function() {
    var listData = [];              
    listData.push(["null", "Please Select..."]);
    this.view.cmbDivision.masterData = listData;
    this.view.cmbRegion.masterData = listData;
    this.view.segHospitalData.removeAll();

    const grpSelKey = this.view.cmbGroup.selectedKeyValue[0];
    const query = `
      SELECT d.DivisionID, d.Division_Desc 
      FROM Ref_GroupDivisionMappingInfo g,
          Ref_Division_Desc d 
      WHERE g.DivisionID = d.DivisionID 
          AND g.GroupID = '${grpSelKey}' 
      ORDER BY d.Division_Desc`;      
    VMXFoundry.OfflineObjects.executeSelectQuery(
      query,
      (records) => { // Success callback
        voltmx.print(query);
        voltmx.print(JSON.stringify(records, null, 2));
        this.populateListBox(records, "cmbDivision", "DivisionID", "Division_Desc", this.view, "Ref_Division_Desc-Ref_GroupDivisionMappingInfo");
      },
      (response) => { // Failure callback
        voltmx.print("Integration Service Failure: " + JSON.stringify(response));
      }
    );
  },

  onClickbtnSearchDivision: function() {
    var listData = [];              
    listData.push(["null", "Please Select..."]);
    this.view.cmbRegion.masterData = listData;
    this.view.segHospitalData.removeAll();

    const divSelKey = this.view.cmbDivision.selectedKeyValue[0];
    const query = `
    SELECT r.RegionID, r.Region_Desc 
    FROM Ref_DivisonRegionMappingInfo d,
        Ref_Region_Desc r 
    WHERE d.RegionID = r.RegionID 
        AND d.DivisionID = '${divSelKey}' 
    ORDER BY r.Region_Desc`;      

    VMXFoundry.OfflineObjects.executeSelectQuery(
      query,
      (records) => { // Success callback
        voltmx.print(query);
        voltmx.print(JSON.stringify(records, null, 2));
        this.populateListBox(records, "cmbRegion", "RegionID", "Region_Desc", this.view, "Ref_Region_Desc-Ref_DivisonRegionMappingInfo");
      },
      (response) => { // Failure callback
        voltmx.print("Integration Service Failure: " + JSON.stringify(response));
      }
    );
  },

  onClickbtnSearchRegion: function() {
    this.view.segHospitalData.removeAll();
    const regSelKey = this.view.cmbRegion.selectedKeyValue[0];
    const query = `
    SELECT h.HospitalID, h.Hospital_Desc 
    FROM Ref_RegionHospitalMappingInfo r,
        Ref_Hospital_Desc h 
    WHERE r.HospitalID = h.HospitalID 
        AND r.RegionID = '${regSelKey}' 
    ORDER BY h.Hospital_Desc`;      

    VMXFoundry.OfflineObjects.executeSelectQuery(
      query,
      (records) => { // Success callback
        voltmx.print(query);
        voltmx.print(JSON.stringify(records, null, 2));
        var segDataCollection = [];
        var cmbDataCollection = [];
        for (var i in records) {
          var item = records[i];
          var key = item["HospitalID"];
          var value = item["Hospital_Desc"];
          cmbDataCollection.push([key, value]);

          segDataCollection.push({
            "lblsegHospID": {
              "text": records[i]["HospitalID"]
            },
            "lblsegHospdesc": {
              "text": records[i]["Hospital_Desc"]
            }
          });          
        }
        gbl_HospitalFilterData = cmbDataCollection;
        this.view.segHospitalData.setData(segDataCollection);
      },
      (response) => { // Failure callback
        voltmx.print("Integration Service Failure: " + JSON.stringify(response));
      }
    );
  },

  onClickbtnCancel: function(){
    this.resetSearchPopup();
    this.view.fcpopupHospitalSearch.isVisible = false;
    this.view.fcpopupHospitalSearch.isModalContainer = false;
  },

  onClickbtnStartTreatment: function() {
    voltmx.print("In startTreatment");
    this.view.btnStartTreatment.setEnabled(false);
    this.view.lblStartTreatmentInfoText.setVisibility(false);
    this.view.btnStartTreatment.skin= "startBtnGrey";
    this.view.btnStartTreatment.focusSkin="startBtnGrey";
    this.view.btnStartTreatment.text = voltmx.i18n.getLocalizedString("i18n_TreatmentStarted_Msg");
    this.view.lblDateofTreatment.skin="sknlblGreyFont80";
    this.view.lblTreatmentStartTime.skin="sknlblGreyFont80";

    var curDate= new Date();

    this.view.calDOT.skin="skncalwtBGwtborder";
    this.view.calDOT.focusSkin="skncalLightBlueBg";
    this.view.calDOT.setEnabled(true);
    this.view.calDOT.dateComponents = [curDate.getDate(),curDate.getMonth()+1,curDate.getFullYear(), curDate.getHours(), curDate.getMinutes(), 00];
    this.view.lblCurDate.text=this.view.calDOT.formattedDate;

    voltmx.print("Date set to label - "+this.view.lblCurDate.text);

    this.view.calTreatmentStartTime.skin="skncalwtBGwtborder";
    this.view.calTreatmentStartTime.focusSkin="skncalLightBlueBg";
    this.view.calTreatmentStartTime.setEnabled(true);
    this.view.calTreatmentStartTime.dateComponents = [curDate.getDate(),curDate.getMonth()+1,curDate.getFullYear(), curDate.getHours(), curDate.getMinutes(), 00];
    this.view.lblCurTime.text=this.view.calTreatmentStartTime.formattedDate;
    voltmx.print("time set to label - "+this.view.lblCurTime.text);
    this.view.txtStartTime.setEnabled(true);
    this.view.txtTretstartdate.setEnabled(true);
    this.view.txtTretstartdate.skin="skntbxtransparent";
    this.view.txtTretstartdate.focusSkin="skntbxLightBlueBg";
    this.view.txtStartTime.skin="skntbxtransparent";
    this.view.txtStartTime.focusSkin="skntbxLightBlueBg";
    this.view.txtTretstartdate.text=this.view.calDOT.formattedDate;
    //     this.view.txtStartTime.text=this.view.calTreatmentStartTime.formattedDate;

    const hours = curDate.getHours().toString().padStart(2, '0');
    const minutes = curDate.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;    
    this.view.txtStartTime.text=currentTime;


  },

  onClickSelectHospital: function() {
    var self = this;
    const selectedHosp = this.view.segHospitalData.selectedItems[0];
    voltmx.print("Selected Hospital" + JSON.stringify(selectedHosp));
    const hospID = selectedHosp["lblsegHospID"].text;
    const hospDesc = selectedHosp["lblsegHospdesc"].text;
    voltmx.print(hospID + " - " + hospDesc);
    voltmx.print(JSON.stringify(gbl_HospitalFilterData));

    this.view.cmbHospital.masterData = gbl_HospitalFilterData;
    this.view.cmbHospital.selectedKey = hospID;
    
    this.resetSearchPopup();
    this.view.fcpopupHospitalSearch.isVisible = false;
    this.view.fcpopupHospitalSearch.isModalContainer = false;
  },
  
  resetSearchPopup: function() {
    var listData = [];              
    listData.push(["null", "Please Select..."]);
    this.view.cmbGroup.masterData = listData;
    this.view.cmbDivision.masterData = listData;
    this.view.cmbRegion.masterData = listData;
    this.view.segHospitalData.removeAll();
  },

  onFormPatientDetailsPreShow: function(context) {
    voltmx.print("In frmPatientDetails preShow");

    //     this.checkAndSetACOITab();
    //     gbl_patientdataerrCount = this.checkForErrorsAndUpdateSkn();
    this.updateLeftPaneTabs();

  },

  onFormPatientDetailsInit: function(context) {
    voltmx.print("In frmPatientDetails init for " + gblNurseUserName);

    if (gblNurseUserName && gblNurseUserName !== null && gblNurseUserName !== "" ) {
      const query = `
      		SELECT h.HospitalID, h.Hospital_Desc
            FROM Ref_RegionNurseMappingInfo r,
               Ref_Nurse_Desc n,
               Ref_RegionHospitalMappingInfo rh,
               Ref_Hospital_Desc h
            WHERE n.NurseID = r.NurseID
              AND r.RegionID = rh.RegionID
              AND rh.HospitalID = h.HospitalID
              AND n.Nurse_UserName = '${gblNurseUserName}'
          ORDER BY h.Hospital_Desc`;            

      this.populateListBoxFromQuery(query, "cmbHospital", "HospitalID", "Hospital_Desc", this.view, "Ref_Hospital_Desc-Ref_RegionHospitalMappingInfo-Ref_Nurse_Desc-Ref_RegionNurseMappingInfo-Ref" );
    } else {
      voltmx.print("Global variable gblNurseUserName is not set");
    }

    this.populateListBoxFromObject("Ref_Room_Type_Desc", "cmbRoomType", "Room_TypeID", "Room_Type_Desc", this.view);
  }

});