define(function () {
  /**
   * Logs detailed error information to the console.
   * @param {Object|string} error - The error object or message to log.
   * @param {string} context - The context where the error occurred.
   */
  function printError(error, context) {
    voltmx.print("Error in " + context + ":");
    if (typeof error === 'object' && error !== null) {
      voltmx.print("Error Object Details:");
      for (const key in error) {
        if (error.hasOwnProperty(key)) {
          voltmx.print(key + ": " + error[key]);
        }
      }
      if (error.message) {
        voltmx.print("Error Message: " + error.message);
      }
      if (error.response) {
        voltmx.print("Response: " + JSON.stringify(error.response));
        if (error.response.data) {
          voltmx.print("Response Data: " + JSON.stringify(error.response.data));
        }
      }
      if (error.opstatus !== undefined) {
        voltmx.print("Opstatus: " + error.opstatus);
      }
      if (error.errmsg) {
        voltmx.print("Errmsg: " + error.errmsg);
      }
    } else if (typeof error === 'string') {
      voltmx.print("Error String: " + error);
    } else {
      voltmx.print("Unknown error type: " + error);
    }
  }

  /**
   * Utility function to safely log messages.
   * @param {string} message - The message to log.
   */
  function logMessage(message) {
    if (typeof message === 'string') {
      voltmx.print("Log: " + message);
    } else {
      voltmx.print("Log: Non-string message");
    }
  }

  return {
    printError: printError,
    logMessage: logMessage,
  };
});
