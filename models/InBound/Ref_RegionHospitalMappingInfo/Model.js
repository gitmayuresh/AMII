/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Ref_RegionHospitalMappingInfo", "objectService" : "InBound"};

    var setterFunctions = {
        DELETED: function(val, state) {
            context["field"] = "DELETED";
            context["metadata"] = (objectMetadata ? objectMetadata["DELETED"] : null);
            state['DELETED'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        HospitalID: function(val, state) {
            context["field"] = "HospitalID";
            context["metadata"] = (objectMetadata ? objectMetadata["HospitalID"] : null);
            state['HospitalID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        last_modified: function(val, state) {
            context["field"] = "last_modified";
            context["metadata"] = (objectMetadata ? objectMetadata["last_modified"] : null);
            state['last_modified'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        RegionID: function(val, state) {
            context["field"] = "RegionID";
            context["metadata"] = (objectMetadata ? objectMetadata["RegionID"] : null);
            state['RegionID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Ref_RegionHospitalMappingInfo(defaultValues) {
        var privateState = {};
        context["field"] = "DELETED";
        context["metadata"] = (objectMetadata ? objectMetadata["DELETED"] : null);
        privateState.DELETED = defaultValues ?
            (defaultValues["DELETED"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DELETED"], context) :
                null) :
            null;

        context["field"] = "HospitalID";
        context["metadata"] = (objectMetadata ? objectMetadata["HospitalID"] : null);
        privateState.HospitalID = defaultValues ?
            (defaultValues["HospitalID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["HospitalID"], context) :
                null) :
            null;

        context["field"] = "last_modified";
        context["metadata"] = (objectMetadata ? objectMetadata["last_modified"] : null);
        privateState.last_modified = defaultValues ?
            (defaultValues["last_modified"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["last_modified"], context) :
                null) :
            null;

        context["field"] = "RegionID";
        context["metadata"] = (objectMetadata ? objectMetadata["RegionID"] : null);
        privateState.RegionID = defaultValues ?
            (defaultValues["RegionID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RegionID"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "DELETED": {
                get: function() {
                    context["field"] = "DELETED";
                    context["metadata"] = (objectMetadata ? objectMetadata["DELETED"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DELETED, context);
                },
                set: function(val) {
                    setterFunctions['DELETED'].call(this, val, privateState);
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
            "last_modified": {
                get: function() {
                    context["field"] = "last_modified";
                    context["metadata"] = (objectMetadata ? objectMetadata["last_modified"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.last_modified, context);
                },
                set: function(val) {
                    setterFunctions['last_modified'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "RegionID": {
                get: function() {
                    context["field"] = "RegionID";
                    context["metadata"] = (objectMetadata ? objectMetadata["RegionID"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RegionID, context);
                },
                set: function(val) {
                    setterFunctions['RegionID'].call(this, val, privateState);
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
            privateState.DELETED = value ? (value["DELETED"] ? value["DELETED"] : null) : null;
            privateState.HospitalID = value ? (value["HospitalID"] ? value["HospitalID"] : null) : null;
            privateState.last_modified = value ? (value["last_modified"] ? value["last_modified"] : null) : null;
            privateState.RegionID = value ? (value["RegionID"] ? value["RegionID"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Ref_RegionHospitalMappingInfo);

    //Create new class level validator object
    BaseModel.Validator.call(Ref_RegionHospitalMappingInfo);

    var registerValidatorBackup = Ref_RegionHospitalMappingInfo.registerValidator;

    Ref_RegionHospitalMappingInfo.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Ref_RegionHospitalMappingInfo.isValid(this, propName, val)) {
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

    Ref_RegionHospitalMappingInfo.relations = relations;

    Ref_RegionHospitalMappingInfo.prototype.isValid = function() {
        return Ref_RegionHospitalMappingInfo.isValid(this);
    };

    Ref_RegionHospitalMappingInfo.prototype.objModelName = "Ref_RegionHospitalMappingInfo";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Ref_RegionHospitalMappingInfo.registerProcessors = function(options, successCallback, failureCallback) {

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

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("InBound", "Ref_RegionHospitalMappingInfo", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Ref_RegionHospitalMappingInfo.clone = function(objectToClone) {
        var clonedObj = new Ref_RegionHospitalMappingInfo();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Ref_RegionHospitalMappingInfo;
});