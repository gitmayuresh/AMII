define({ 

  //Type your controller code here 
  getModel: function() {
    var patient = {};

    var xyz = "31-" + this.view.rbtVAInfec.selectedKey +
        ":32-" +  this.view.rbtAcessProb.selectedKey +
        ":48-" + this.view.rbtUnauthUseAcc.selectedKey +
        ":49-" + this.view.rbtWasAccessfun.selectedKey +
        ":33-" + this.view.rbtTXtimemet.selectedKey +
        ":34-" + this.view.rbtUFgoalmet.selectedKey + 
        ":35-" + this.view.rbtPrewtdone.selectedKey +
        ":36-" + this.view.rbtPostWTdone.selectedKey +
        ":51-" + this.view.rbtHypoTension.selectedKey +
        ":52-" + this.view.rbtLowBPTx.selectedKey + 
        ":53-" + this.view.rbtDLYz.selectedKey + 
        ":40-" + this.view.rbtPainEval.selectedKey +
        ":54-" + this.view.rbtAntiCoag.selectedKey + 
        ":42-" + this.view.rbtESRD.selectedKey +
        ":55-" + this.view.rbtTimeOut.selectedKey + 
        ":44-" + this.view.rbtCallorCrit.selectedKey +
        ":45-" + this.view.rbtHgbless.selectedKey +
        ":46-" + this.view.rbtKAbove6.selectedKey +
        ":47-" + this.view.rbtKabove3.selectedKey + 
        ":50-" + this.view.rbtOrderonArr.selectedKey +
        ":56-" + this.view.rbtWasCVCDZMis.selectedKey + 
        ":57-" + this.view.rbtWasCVCDZSoiled.selectedKey + 
        ":58-" + this.view.rbtWasCVCDZLblInt.selectedKey + 
        ":59-" + this.view.rbtPtTemp.selectedKey + 
        ":60-" + this.view.rbtBldCltPer.selectedKey + 
        ":61-" + this.view.rbtBldCltCVC.selectedKey;
    voltmx.print("Full string +++++++"+xyz);
    if (xyz.indexOf("null")!=-1)
    {
      var replacedStr = xyz.replace(/null/g,'z');
      voltmx.print("replacedStr - "+replacedStr);
      patient.TreatmentType_Results = replacedStr;
    }//if
    else{
      voltmx.print("In else");
      patient.TreatmentType_Results = xyz;
    }//else	


    return patient;    
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

  onFormACOIPreshow: function() {
    if (gbl_cmbTreatType_selectedValue == "Hemodialysis") {
      this.view.fcACOI.setEnabled(true);
      this.view.fcACOI.focusSkin = "sknfcleftpanebuttonFocus";
      this.view.lblACOIDetails.skin = "sknlblLeftPaneButtonNav";            
    } else {
      this.view.lblAcoiErrormsg.text = "";
      this.view.lblUFgoalmet.skin = "sknlblGreyFont80";
      this.view.lblPrewtdone.skin = "sknlblGreyFont80";
      this.view.lblVAInfec.skin = "sknlblGreyFont80";
      this.view.lblAcessProb.skin = "sknlblGreyFont80";
      this.view.lblUnauthUseAcc.skin = "sknlblGreyFont80";
      this.view.lblTXtimemet.skin = "sknlblGreyFont80";
      this.view.lblHypoTension.skin = "sknlblGreyFont80";
      this.view.lblLowBPTx.skin = "sknlblGreyFont80";
      this.view.lblESRD.skin = "sknlblGreyFont80";
      this.view.lblAntiCoag.skin = "sknlblGreyFont80";
      this.view.lblDLYz.skin = "sknlblGreyFont80";
      this.view.lblTimeOut.skin = "sknlblGreyFont80";
      this.view.lblCallorCrit.skin = "sknlblGreyFont80";
      this.view.lblPainEval.skin = "sknlblGreyFont80";
      this.view.lblWasAccessfun.skin = "sknlblGreyFont80";
      this.view.lblHgbless.skin = "sknlblGreyFont80";
      this.view.lblKAbove6.skin = "sknlblGreyFont80";
      this.view.lblKabove3.skin = "sknlblGreyFont80";
      this.view.lblOrderonArr.skin = "sknlblGreyFont80";
      this.view.lblWasCVCDZMis.skin = "sknlblGreyFont80";
      this.view.lblWasCVCDZSoiled.skin = "sknlblGreyFont80";
      this.view.lblWasCVCDZLblInt.skin = "sknlblGreyFont80";
      this.view.lblPtTemp.skin = "sknlblGreyFont80";
      this.view.lblBldCltPer.skin = "sknlblGreyFont80";
      this.view.lblBldCltCVC.skin = "sknlblGreyFont80";
      this.view.lblPostWtDone.skin = "sknlblGreyFont80";
      this.view.rbtVAInfec.selectedKey = null;
      this.view.rbtAcessProb.selectedKey = null;
      this.view.rbtUnauthUseAcc.selectedKey = null;
      this.view.rbtTXtimemet.selectedKey = null;
      this.view.rbtUFgoalmet.selectedKey = null;
      this.view.rbtPrewtdone.selectedKey = null;
      this.view.rbtHypoTension.selectedKey = null;
      this.view.rbtLowBPTx.selectedKey = null;
      this.view.rbtESRD.selectedKey = null;
      this.view.rbtAntiCoag.selectedKey = null;
      this.view.rbtDLYz.selectedKey = null;
      this.view.rbtTimeOut.selectedKey = null;
      this.view.rbtCallorCrit.selectedKey = null;
      this.view.rbtPainEval.selectedKey = null;
      this.view.rbtWasAccessfun.selectedKey = null;
      this.view.rbtHgbless.selectedKey = null;
      this.view.rbtKAbove6.selectedKey = null;
      this.view.rbtKabove3.selectedKey = null;
      this.view.rbtOrderonArr.selectedKey = null;
      this.view.rbtWasCVCDZMis.selectedKey = null;
      this.view.rbtWasCVCDZSoiled.selectedKey = null;
      this.view.rbtWasCVCDZLblInt.selectedKey = null;
      this.view.rbtPtTemp.selectedKey = null;
      this.view.rbtBldCltPer.selectedKey = null;
      this.view.rbtBldCltCVC.selectedKey = null;
      this.view.rbtPostWTdone.selectedKey = null;      
    }

  }
});