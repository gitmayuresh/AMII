/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Ref_AdditionalServicesType_Desc", "objectService" : "InBound"};

    var setterFunctions = {
        AdditionalServicesType_Desc: function(val, state) {
            context["field"] = "AdditionalServicesType_Desc";
            context["metadata"] = (objectMetadata ? objectMetadata["AdditionalServicesType_Desc"] : null);
            state['AdditionalServicesType_Desc'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AdditionalServicesTypeID: function(val, state) {
            context["field"] = "AdditionalServicesTypeID";
            context["metadata"] = (objectMetadata ? objectMetadata["AdditionalServicesTypeID"] : null);
            state['AdditionalServicesTypeID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DELETED: function(val, state) {
            context["field"] = "DELETED";
            context["metadata"] = (objectMetadata ? objectMetadata["DELETED"] : null);
            state['DELETED'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        last_modified: function(val, state) {
            context["field"] = "last_modified";
            context["metadata"] = (objectMetadata ? objectMetadata["last_modified"] : null);
            state['last_modified'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Ref_AdditionalServicesType_Desc(defaultValues) {
        var privateState = {};
        context["field"] = "AdditionalServicesType_Desc";
        context["metadata"] = (objectMetadata ? objectMetadata["AdditionalServicesType_Desc"] : null);
        privateState.AdditionalServicesType_Desc = defaultValues ?
            (defaultValues["AdditionalServicesType_Desc"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AdditionalServicesType_Desc"], context) :
                null) :
            null;

        context["field"] = "AdditionalServicesTypeID";
        context["metadata"] = (objectMetadata ? objectMetadata["AdditionalServicesTypeID"] : null);
        privateState.AdditionalServicesTypeID = defaultValues ?
            (defaultValues["AdditionalServicesTypeID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AdditionalServicesTypeID"], context) :
                null) :
            null;

        context["field"] = "DELETED";
        context["metadata"] = (objectMetadata ? objectMetadata["DELETED"] : null);
        privateState.DELETED = defaultValues ?
            (defaultValues["DELETED"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DELETED"], context) :
                null) :
            null;

        context["field"] = "last_modified";
        context["metadata"] = (objectMetadata ? objectMetadata["last_modified"] : null);
        privateState.last_modified = defaultValues ?
            (defaultValues["last_modified"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["last_modified"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "AdditionalServicesType_Desc": {
                get: function() {
                    context["field"] = "AdditionalServicesType_Desc";
                    context["metadata"] = (objectMetadata ? objectMetadata["AdditionalServicesType_Desc"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AdditionalServicesType_Desc, context);
                },
                set: function(val) {
                    setterFunctions['AdditionalServicesType_Desc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AdditionalServicesTypeID": {
                get: function() {
                    context["field"] = "AdditionalServicesTypeID";
                    context["metadata"] = (objectMetadata ? objectMetadata["AdditionalServicesTypeID"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AdditionalServicesTypeID, context);
                },
                set: function(val) {
                    setterFunctions['AdditionalServicesTypeID'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.AdditionalServicesType_Desc = value ? (value["AdditionalServicesType_Desc"] ? value["AdditionalServicesType_Desc"] : null) : null;
            privateState.AdditionalServicesTypeID = value ? (value["AdditionalServicesTypeID"] ? value["AdditionalServicesTypeID"] : null) : null;
            privateState.DELETED = value ? (value["DELETED"] ? value["DELETED"] : null) : null;
            privateState.last_modified = value ? (value["last_modified"] ? value["last_modified"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Ref_AdditionalServicesType_Desc);

    //Create new class level validator object
    BaseModel.Validator.call(Ref_AdditionalServicesType_Desc);

    var registerValidatorBackup = Ref_AdditionalServicesType_Desc.registerValidator;

    Ref_AdditionalServicesType_Desc.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Ref_AdditionalServicesType_Desc.isValid(this, propName, val)) {
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

    Ref_AdditionalServicesType_Desc.relations = relations;

    Ref_AdditionalServicesType_Desc.prototype.isValid = function() {
        return Ref_AdditionalServicesType_Desc.isValid(this);
    };

    Ref_AdditionalServicesType_Desc.prototype.objModelName = "Ref_AdditionalServicesType_Desc";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Ref_AdditionalServicesType_Desc.registerProcessors = function(options, successCallback, failureCallback) {

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

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("InBound", "Ref_AdditionalServicesType_Desc", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Ref_AdditionalServicesType_Desc.clone = function(objectToClone) {
        var clonedObj = new Ref_AdditionalServicesType_Desc();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Ref_AdditionalServicesType_Desc;
});