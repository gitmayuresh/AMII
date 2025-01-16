define("Common", function() {
  var Common = {
    setupSaveEventListener: function() {
      kony.application.subscribe("saveRequested", this.handleSaveRequest.bind(this));
      voltmx.print("Subscribed to saveRequested event.");
    },

    handleSaveRequest: function(message) {
      voltmx.print("Received saveRequested message: " + JSON.stringify(message));

      if (!message || !message.form || !message.callback) {
        voltmx.print("Invalid saveRequested message format.");
        return;
      }

      var formController = message.form;
      var callback = message.callback;

      if (typeof formController.collectFormData !== "function") {
        voltmx.print("Form does not implement collectFormData.");
        callback(false, "Form does not implement collectFormData."); // Notify failure
        return;
      }

      var formData = formController.collectFormData();
      voltmx.print("Collected Form Data: " + JSON.stringify(formData));

      this.saveData(formData, function(response) { // Success callback for saveData
        callback(true, response); // Notify success
      }, function(error) { // Error callback for saveData
        callback(false, error); // Notify failure
      });
    },

    saveData: function(formData, successCallback, errorCallback) {
      try {
        var objSvc = kony.sdk.getCurrentInstance().getObjectService("YOUR_OBJECT_SERVICE", {
          "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject("YOUR_OBJECT");
        for (var key in formData) {
          dataObject.set(key, formData[key]);
        }
        var options = {
          "primaryKeys": [] // If updating existing record, add primary keys here
        };
        objSvc.update(dataObject, options, function(res) {
          voltmx.print("Update successful: " + JSON.stringify(res));
          successCallback(res);
        }, function(err) {
          voltmx.print("Update failed: " + JSON.stringify(err));
          errorCallback(err);
        });
      } catch (exception) {
        voltmx.print("Exception in saveData: " + exception);
        errorCallback(exception);
      }
    },
    getFormData: function(formName) {
      var formData = {};
      var formController = kony.application.getCurrentForm().parent[formName];
      if (formController && formController.collectFormData) {
        formData = formController.collectFormData();
      }
      return formData;
    },
  };
  return Common;
});