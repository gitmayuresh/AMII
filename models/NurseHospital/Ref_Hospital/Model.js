/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Ref_Hospital", "objectService" : "NurseHospital"};

    var setterFunctions = {
        appnurseID: function(val, state) {
            context["field"] = "appnurseID";
            context["metadata"] = (objectMetadata ? objectMetadata["appnurseID"] : null);
            state['appnurseID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Hospital_Desc: function(val, state) {
            context["field"] = "Hospital_Desc";
            context["metadata"] = (objectMetadata ? objectMetadata["Hospital_Desc"] : null);
            state['Hospital_Desc'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        HospitalID: function(val, state) {
            context["field"] = "HospitalID";
            context["metadata"] = (objectMetadata ? objectMetadata["HospitalID"] : null);
            state['HospitalID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Ref_Hospital(defaultValues) {
        var privateState = {};
        context["field"] = "appnurseID";
        context["metadata"] = (objectMetadata ? objectMetadata["appnurseID"] : null);
        privateState.appnurseID = defaultValues ?
            (defaultValues["appnurseID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["appnurseID"], context) :
                null) :
            null;

        context["field"] = "Hospital_Desc";
        context["metadata"] = (objectMetadata ? objectMetadata["Hospital_Desc"] : null);
        privateState.Hospital_Desc = defaultValues ?
            (defaultValues["Hospital_Desc"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Hospital_Desc"], context) :
                null) :
            null;

        context["field"] = "HospitalID";
        context["metadata"] = (objectMetadata ? objectMetadata["HospitalID"] : null);
        privateState.HospitalID = defaultValues ?
            (defaultValues["HospitalID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["HospitalID"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "appnurseID": {
                get: function() {
                    context["field"] = "appnurseID";
                    context["metadata"] = (objectMetadata ? objectMetadata["appnurseID"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.appnurseID, context);
                },
                set: function(val) {
                    setterFunctions['appnurseID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Hospital_Desc": {
                get: function() {
                    context["field"] = "Hospital_Desc";
                    context["metadata"] = (objectMetadata ? objectMetadata["Hospital_Desc"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Hospital_Desc, context);
                },
                set: function(val) {
                    setterFunctions['Hospital_Desc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "HospitalID": {
                get: function() {
                    context["field"] = "HospitalID";
                    context["metadata"] = (objectMetadata ? objectMetadata["HospitalID"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.HospitalID, context);
                },
                set: function(val) {
                    setterFunctions['HospitalID'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.appnurseID = value ? (value["appnurseID"] ? value["appnurseID"] : null) : null;
            privateState.Hospital_Desc = value ? (value["Hospital_Desc"] ? value["Hospital_Desc"] : null) : null;
            privateState.HospitalID = value ? (value["HospitalID"] ? value["HospitalID"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Ref_Hospital);

    //Create new class level validator object
    BaseModel.Validator.call(Ref_Hospital);

    var registerValidatorBackup = Ref_Hospital.registerValidator;

    Ref_Hospital.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Ref_Hospital.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    var relations = [];

    Ref_Hospital.relations = relations;

    Ref_Hospital.prototype.isValid = function() {
        return Ref_Hospital.isValid(this);
    };

    Ref_Hospital.prototype.objModelName = "Ref_Hospital";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Ref_Hospital.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = voltmx.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("NurseHospital", "Ref_Hospital", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Ref_Hospital.clone = function(objectToClone) {
        var clonedObj = new Ref_Hospital();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Ref_Hospital;
});