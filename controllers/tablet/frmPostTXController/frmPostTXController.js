define({ 

  getModel: function() {
    var self = this; // Important: Keep this for context
    var patient = {};

    // Correct way to access widgets: use self.view.widgetName
    patient.Upgraded_Dialyzer = self.view.cmbDialiser.selectedKey;
    patient.Hospital_Delay_Time_Units = self.view.cmbTimeDelay.selectedKey;
    patient.Is_End_Date_Modified = this.onChangeEndDateStatus();
    patient.Is_End_Time_Modified = this.onChangeEndTimeStatus();

    patient.posttx_hosp_id = self.view.rbtPediatric.selectedKey;
    patient.Comments = self.view.txaComments.text;
    if(this.view.txtTreatEnddate.text!=null && this.view.txtTreatEnddate.text!="")
      patient.Treatment_End_Date = this.getFormattedDate(this.view.txtTreatEnddate.text);

    var endDate = self.view.txtTreatEnddate.text;
    var endTime = self.view.txtEndTime.text;
    if((endDate!="" && endDate!=null)&&(endTime!="" && endTime!=null))
      patient.Treatment_End_Time = this.gettimeinMillisecondsTxt(endDate,endTime);

    return patient;    
  },

  checkForErrorsAndUpdateSkn() {
    var count = 0;
    var postTXDataObj = {
      "lblComments": this.view.txaComments.text,
      "lblDialyser": this.view.cmbDialiser.selectedKey,
      "lblTretEnd": this.view.txtTreatEnddate.text,
      "lblEndTime": this.view.txtEndTime.text,
      "lblPostTreatment": this.view.rbtPediatric.selectedKey
    };

    voltmx.print("frmPostTx checkForErrorsAndUpdateSkn");

    // Loop through each property in postTXDataObj
    for (const key in postTXDataObj) {
      voltmx.print("key - " + key + " value - " + postTXDataObj[key]);
      if (postTXDataObj[key] === null || postTXDataObj[key].trim() === "" || postTXDataObj[key] === "null") {
        count++;
        this.view[key].skin = "sknlblErrortxt";
      } else {
        this.view[key].skin = "sknlblGreyFont80";
      }
    }
    voltmx.print("frmPostTx checkForErrorsAndUpdateSkn Count - " + count);
    return count;
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
    kony.print("Difference in Millisecoonds from txtbox- " + diffmillisecond);
    return diffmillisecond;
  },  

  onChangeEndDateStatus: function() {
    var changedStatus = 0;  
    var changedDate=this.view.calTreatmentEnd.formattedDate;      
    var actDate=this.view.lblCurDate.text; 
    var date1=Date.parse(actDate);
    var date2=Date.parse(changedDate);
    if(date1!=date2)
    {
      changedStatus=1;
    }else{
      changedStatus=0;
    }

    voltmx.print("changedStatus of EndDate - "+changedStatus);     
    return changedStatus;
  },

  onChangeEndTimeStatus: function() {
    var actTime =this.view.lblCurTime.text;  
    var changedTime =this.view.calEndTime.formattedDate;		
    var changedStatus = 0;   	
    var actTimeObj=new Date("1/1/2000 " + actTime);
    var changedTimeObj=new Date("1/1/2000 " + changedTime);
    var timeChange=changedTimeObj-actTimeObj;
    if(timeChange == 0)
    {	
      changedStatus=0;
    }else
    {
      changedStatus=1;
    }
    voltmx.print("changedStatus of EndTime - "+changedStatus); 
    return changedStatus;
  },

  onClickbtnEndTreatment: function() {

    volt.print("In endTreatment");
    this.view.btnEndtrt.setEnabled(false);
    this.view.lblEndTreatmentInfoText.setVisibility(false);
    this.view.btnEndtrt.skin = "startBtnGrey";
    this.view.btnEndtrt.focusSkin = "startBtnGrey";
    this.view.btnEndtrt.text = volt.i18n.getLocalizedString("i18n_Treatmentended_Msg");;
    this.view.lblTretEnd.skin = "sknlblGreyFont80";
    this.view.lblEndTime.skin = "sknlblGreyFont80";

    var curDate = new Date();

    this.view.calTreatmentEnd.skin = "skncalwtBGwtborder";
    this.view.calTreatmentEnd.focusSkin = "skncalLightBlueBg";
    this.view.calTreatmentEnd.setEnabled(true);
    this.view.calTreatmentEnd.dateComponents = [curDate.getDate(), curDate.getMonth() + 1, curDate.getFullYear(), curDate.getHours(), curDate.getMinutes(), 00];


    this.view.calEndTime.skin = "skncalwtBGwtborder";
    this.view.calEndTime.focusSkin = "skncalLightBlueBg";
    this.view.calEndTime.setEnabled(true);
    this.view.calEndTime.dateComponents = [curDate.getDate(), curDate.getMonth() + 1, curDate.getFullYear(), curDate.getHours(), curDate.getMinutes(), 00];
    this.view.lblCurDate.text = this.view.calTreatmentEnd.formattedDate;
    this.view.lblCurTime.text = this.view.calEndTime.formattedDate;
    this.view.txtEndTime.setEnabled(true);
    this.view.txtTreatEnddate.setEnabled(true);
    this.view.txtEndTime.skin = "skntbxtransparent";
    this.view.txtEndTime.focusSkin = "skntbxLightBlueBg";
    this.view.txtTreatEnddate.skin = "skntbxtransparent";
    this.view.txtTreatEnddate.focusSkin = "skntbxLightBlueBg";
    this.view.txtTreatEnddate.text = this.view.calTreatmentEnd.formattedDate;
    this.view.txtEndTime.text = this.view.calEndTime.formattedDate;

    const hours = curDate.getHours().toString().padStart(2, '0');
    const minutes = curDate.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;    
    this.view.txtEndTime.text=currentTime;
  },

  onFormPostTxPreShow: function(context) {
    voltmx.print("In frmPostTx preShow");
    this.checkAndSetACOITab();
    gbl_postTxerrorcount = this.checkForErrorsAndUpdateSkn();
    this.updateLeftPaneTabs();
  }  
});