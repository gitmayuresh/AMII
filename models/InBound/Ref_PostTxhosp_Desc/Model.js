/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Ref_PostTxhosp_Desc", "objectService" : "InBound"};

    var setterFunctions = {
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
        PostTxhosp_Desc: function(val, state) {
            context["field"] = "PostTxhosp_Desc";
            context["metadata"] = (objectMetadata ? objectMetadata["PostTxhosp_Desc"] : null);
            state['PostTxhosp_Desc'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PostTxhosp_Id: function(val, state) {
            context["field"] = "PostTxhosp_Id";
            context["metadata"] = (objectMetadata ? objectMetadata["PostTxhosp_Id"] : null);
            state['PostTxhosp_Id'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Ref_PostTxhosp_Desc(defaultValues) {
        var privateState = {};
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

        context["field"] = "PostTxhosp_Desc";
        context["metadata"] = (objectMetadata ? objectMetadata["PostTxhosp_Desc"] : null);
        privateState.PostTxhosp_Desc = defaultValues ?
            (defaultValues["PostTxhosp_Desc"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PostTxhosp_Desc"], context) :
                null) :
            null;

        context["field"] = "PostTxhosp_Id";
        context["metadata"] = (objectMetadata ? objectMetadata["PostTxhosp_Id"] : null);
        privateState.PostTxhosp_Id = defaultValues ?
            (defaultValues["PostTxhosp_Id"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PostTxhosp_Id"], context) :
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
            "PostTxhosp_Desc": {
                get: function() {
                    context["field"] = "PostTxhosp_Desc";
                    context["metadata"] = (objectMetadata ? objectMetadata["PostTxhosp_Desc"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PostTxhosp_Desc, context);
                },
                set: function(val) {
                    setterFunctions['PostTxhosp_Desc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PostTxhosp_Id": {
                get: function() {
                    context["field"] = "PostTxhosp_Id";
                    context["metadata"] = (objectMetadata ? objectMetadata["PostTxhosp_Id"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PostTxhosp_Id, context);
                },
                set: function(val) {
                    setterFunctions['PostTxhosp_Id'].call(this, val, privateState);
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
            privateState.last_modified = value ? (value["last_modified"] ? value["last_modified"] : null) : null;
            privateState.PostTxhosp_Desc = value ? (value["PostTxhosp_Desc"] ? value["PostTxhosp_Desc"] : null) : null;
            privateState.PostTxhosp_Id = value ? (value["PostTxhosp_Id"] ? value["PostTxhosp_Id"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Ref_PostTxhosp_Desc);

    //Create new class level validator object
    BaseModel.Validator.call(Ref_PostTxhosp_Desc);

    var registerValidatorBackup = Ref_PostTxhosp_Desc.registerValidator;

    Ref_PostTxhosp_Desc.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Ref_PostTxhosp_Desc.isValid(this, propName, val)) {
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

    Ref_PostTxhosp_Desc.relations = relations;

    Ref_PostTxhosp_Desc.prototype.isValid = function() {
        return Ref_PostTxhosp_Desc.isValid(this);
    };

    Ref_PostTxhosp_Desc.prototype.objModelName = "Ref_PostTxhosp_Desc";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Ref_PostTxhosp_Desc.registerProcessors = function(options, successCallback, failureCallback) {

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

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("InBound", "Ref_PostTxhosp_Desc", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Ref_PostTxhosp_Desc.clone = function(objectToClone) {
        var clonedObj = new Ref_PostTxhosp_Desc();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Ref_PostTxhosp_Desc;
});