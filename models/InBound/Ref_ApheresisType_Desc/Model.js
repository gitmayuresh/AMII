/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Ref_ApheresisType_Desc", "objectService" : "InBound"};

    var setterFunctions = {
        ApheresisType_Desc: function(val, state) {
            context["field"] = "ApheresisType_Desc";
            context["metadata"] = (objectMetadata ? objectMetadata["ApheresisType_Desc"] : null);
            state['ApheresisType_Desc'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ApheresisTypeID: function(val, state) {
            context["field"] = "ApheresisTypeID";
            context["metadata"] = (objectMetadata ? objectMetadata["ApheresisTypeID"] : null);
            state['ApheresisTypeID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
    function Ref_ApheresisType_Desc(defaultValues) {
        var privateState = {};
        context["field"] = "ApheresisType_Desc";
        context["metadata"] = (objectMetadata ? objectMetadata["ApheresisType_Desc"] : null);
        privateState.ApheresisType_Desc = defaultValues ?
            (defaultValues["ApheresisType_Desc"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ApheresisType_Desc"], context) :
                null) :
            null;

        context["field"] = "ApheresisTypeID";
        context["metadata"] = (objectMetadata ? objectMetadata["ApheresisTypeID"] : null);
        privateState.ApheresisTypeID = defaultValues ?
            (defaultValues["ApheresisTypeID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ApheresisTypeID"], context) :
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
            "ApheresisType_Desc": {
                get: function() {
                    context["field"] = "ApheresisType_Desc";
                    context["metadata"] = (objectMetadata ? objectMetadata["ApheresisType_Desc"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ApheresisType_Desc, context);
                },
                set: function(val) {
                    setterFunctions['ApheresisType_Desc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ApheresisTypeID": {
                get: function() {
                    context["field"] = "ApheresisTypeID";
                    context["metadata"] = (objectMetadata ? objectMetadata["ApheresisTypeID"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ApheresisTypeID, context);
                },
                set: function(val) {
                    setterFunctions['ApheresisTypeID'].call(this, val, privateState);
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
            privateState.ApheresisType_Desc = value ? (value["ApheresisType_Desc"] ? value["ApheresisType_Desc"] : null) : null;
            privateState.ApheresisTypeID = value ? (value["ApheresisTypeID"] ? value["ApheresisTypeID"] : null) : null;
            privateState.DELETED = value ? (value["DELETED"] ? value["DELETED"] : null) : null;
            privateState.last_modified = value ? (value["last_modified"] ? value["last_modified"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Ref_ApheresisType_Desc);

    //Create new class level validator object
    BaseModel.Validator.call(Ref_ApheresisType_Desc);

    var registerValidatorBackup = Ref_ApheresisType_Desc.registerValidator;

    Ref_ApheresisType_Desc.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Ref_ApheresisType_Desc.isValid(this, propName, val)) {
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

    Ref_ApheresisType_Desc.relations = relations;

    Ref_ApheresisType_Desc.prototype.isValid = function() {
        return Ref_ApheresisType_Desc.isValid(this);
    };

    Ref_ApheresisType_Desc.prototype.objModelName = "Ref_ApheresisType_Desc";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Ref_ApheresisType_Desc.registerProcessors = function(options, successCallback, failureCallback) {

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

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("InBound", "Ref_ApheresisType_Desc", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Ref_ApheresisType_Desc.clone = function(objectToClone) {
        var clonedObj = new Ref_ApheresisType_Desc();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Ref_ApheresisType_Desc;
});