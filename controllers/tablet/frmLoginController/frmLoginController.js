define({

  login_Click: function() {
    var self = this;
    var userName = self.view.txtUsername.text; // Access the username from the form's text field

    // Check if username is empty or invalid
    if (!userName || userName === "") {
      voltmx.ui.Alert({
        message: voltmx.i18n.getLocalizedString("i18n_EnterValidTeammate_Msg"),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "",
        yesLabel: voltmx.i18n.getLocalizedString("i18n_AlertOK"),
        noLabel: "",
        alertHandler: null
      }, {});
    } else if ((userName.indexOf(".") !== -1) || (userName.indexOf(",") !== -1)) {
      voltmx.ui.Alert({
        message: voltmx.i18n.getLocalizedString("i18n_EnterValidTeammate_Msg"),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "",
        yesLabel: voltmx.i18n.getLocalizedString("i18n_AlertOK"),
        noLabel: "",
        alertHandler: null
      }, {});
    } else {
      try {
        function onGetAllSuccess(records) {
          //records is an array of records. each record is a dictionary.
          voltmx.print("onGetAllSuccess");
          self.Ref_Nurse_Desc_Callback(records);
        }

        function onGetAllFail(error) {
          voltmx.ui.Alert({ message: "Unknown Teammate ID" }, {});
        }

        var whereClause = "Nurse_UserName = '" + userName + "'";
        var options = {};
        options["whereConditionAsAString"] = whereClause;

        var ofl_Ref_Nurse_Desc = new voltmx.sdk.VMXObj("Ref_Nurse_Desc");
        ofl_Ref_Nurse_Desc.get(options, onGetAllSuccess, onGetAllFail);
      } catch (e) {
        voltmx.ui.Alert({ message: "Unknown Teammate ID" }, {});
      }
    }
  },

  // Callback function to handle response from service call
  Ref_Nurse_Desc_Callback: function(records) {
    voltmx.print("******In Ref_Nurse_Desc_Callback********");
    var result = JSON.stringify(records, null, 2);
    voltmx.print(result);

    if (records && records.length > 0) {
      gblNurseUserID = records[0].NurseID;
      gblNurseUserName = records[0].Nurse_UserName;
      gblNurseDescription = records[0].Description;
      voltmx.print(gblNurseUserID + "--" + gblNurseUserName + "--" + gblNurseDescription);
      this.LoginTransmitOperation();
    } else {
      gblNurseUserID = self.view.txtUsername.text;
      voltmx.ui.Alert({
        message: voltmx.i18n.getLocalizedString("i18n_EnterTreatmentsUsing_Msg"),
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "Invalid Teammate ID",
        yesLabel: "Yes",
        noLabel: "No",
        alertHandler: this.alertCallback.bind(this) // Binding `this` to the current context
      }, {});
    }
  },

  // Alert callback to handle user's response
  alertCallback: function(response) {
    if (response) {
      this.LoginTransmitOperation();
    }
  },

  // Method to handle login and transmit operation
  LoginTransmitOperation: function() {
    try {
      var ntf = new voltmx.mvc.Navigation("frmHome");
      ntf.navigate();
    } catch (e) {
      console.log(e);
      var ntf = new voltmx.mvc.Navigation("frmHome");
      ntf.navigate();
    }
  },

  /*
    **************************************************
    *  Name    : Start_Sync
    *  Purpose : Start Sync Process
    ****************************************************
    */
  start_Sync: function() {
    if (voltmx.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
      if (!gbl_IsDownloadSyncInProgress) {
        gbl_IsDownloadSyncInProgress = true;
        syncStartSession(true, false, voltmx.i18n.getLocalizedString("i18n_Sync_Msg")); // Download true, no upload
      }
    } else {
      this.loadLookupData(); // Load master data even without connectivity
    }
  }
});
