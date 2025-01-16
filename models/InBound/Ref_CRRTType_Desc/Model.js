/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Ref_CRRTType_Desc", "objectService" : "InBound"};

    var setterFunctions = {
        CRRTType_Desc: function(val, state) {
            context["field"] = "CRRTType_Desc";
            context["metadata"] = (objectMetadata ? objectMetadata["CRRTType_Desc"] : null);
            state['CRRTType_Desc'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CRRTTypeID: function(val, state) {
            context["field"] = "CRRTTypeID";
            context["metadata"] = (objectMetadata ? objectMetadata["CRRTTypeID"] : null);
            state['CRRTTypeID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
    function Ref_CRRTType_Desc(defaultValues) {
        var privateState = {};
        context["field"] = "CRRTType_Desc";
        context["metadata"] = (objectMetadata ? objectMetadata["CRRTType_Desc"] : null);
        privateState.CRRTType_Desc = defaultValues ?
            (defaultValues["CRRTType_Desc"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CRRTType_Desc"], context) :
                null) :
            null;

        context["field"] = "CRRTTypeID";
        context["metadata"] = (objectMetadata ? objectMetadata["CRRTTypeID"] : null);
        privateState.CRRTTypeID = defaultValues ?
            (defaultValues["CRRTTypeID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CRRTTypeID"], context) :
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
            "CRRTType_Desc": {
                get: function() {
                    context["field"] = "CRRTType_Desc";
                    context["metadata"] = (objectMetadata ? objectMetadata["CRRTType_Desc"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CRRTType_Desc, context);
                },
                set: function(val) {
                    setterFunctions['CRRTType_Desc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CRRTTypeID": {
                get: function() {
                    context["field"] = "CRRTTypeID";
                    context["metadata"] = (objectMetadata ? objectMetadata["CRRTTypeID"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CRRTTypeID, context);
                },
                set: function(val) {
                    setterFunctions['CRRTTypeID'].call(this, val, privateState);
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
            privateState.CRRTType_Desc = value ? (value["CRRTType_Desc"] ? value["CRRTType_Desc"] : null) : null;
            privateState.CRRTTypeID = value ? (value["CRRTTypeID"] ? value["CRRTTypeID"] : null) : null;
            privateState.DELETED = value ? (value["DELETED"] ? value["DELETED"] : null) : null;
            privateState.last_modified = value ? (value["last_modified"] ? value["last_modified"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Ref_CRRTType_Desc);

    //Create new class level validator object
    BaseModel.Validator.call(Ref_CRRTType_Desc);

    var registerValidatorBackup = Ref_CRRTType_Desc.registerValidator;

    Ref_CRRTType_Desc.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Ref_CRRTType_Desc.isValid(this, propName, val)) {
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

    Ref_CRRTType_Desc.relations = relations;

    Ref_CRRTType_Desc.prototype.isValid = function() {
        return Ref_CRRTType_Desc.isValid(this);
    };

    Ref_CRRTType_Desc.prototype.objModelName = "Ref_CRRTType_Desc";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Ref_CRRTType_Desc.registerProcessors = function(options, successCallback, failureCallback) {

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

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("InBound", "Ref_CRRTType_Desc", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Ref_CRRTType_Desc.clone = function(objectToClone) {
        var clonedObj = new Ref_CRRTType_Desc();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Ref_CRRTType_Desc;
});