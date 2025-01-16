/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Ref_Group_Desc", "objectService" : "InBound"};

    var setterFunctions = {
        DELETED: function(val, state) {
            context["field"] = "DELETED";
            context["metadata"] = (objectMetadata ? objectMetadata["DELETED"] : null);
            state['DELETED'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Group_Desc: function(val, state) {
            context["field"] = "Group_Desc";
            context["metadata"] = (objectMetadata ? objectMetadata["Group_Desc"] : null);
            state['Group_Desc'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        GroupID: function(val, state) {
            context["field"] = "GroupID";
            context["metadata"] = (objectMetadata ? objectMetadata["GroupID"] : null);
            state['GroupID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        last_modified: function(val, state) {
            context["field"] = "last_modified";
            context["metadata"] = (objectMetadata ? objectMetadata["last_modified"] : null);
            state['last_modified'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Ref_Group_Desc(defaultValues) {
        var privateState = {};
        context["field"] = "DELETED";
        context["metadata"] = (objectMetadata ? objectMetadata["DELETED"] : null);
        privateState.DELETED = defaultValues ?
            (defaultValues["DELETED"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DELETED"], context) :
                null) :
            null;

        context["field"] = "Group_Desc";
        context["metadata"] = (objectMetadata ? objectMetadata["Group_Desc"] : null);
        privateState.Group_Desc = defaultValues ?
            (defaultValues["Group_Desc"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Group_Desc"], context) :
                null) :
            null;

        context["field"] = "GroupID";
        context["metadata"] = (objectMetadata ? objectMetadata["GroupID"] : null);
        privateState.GroupID = defaultValues ?
            (defaultValues["GroupID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["GroupID"], context) :
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
            "Group_Desc": {
                get: function() {
                    context["field"] = "Group_Desc";
                    context["metadata"] = (objectMetadata ? objectMetadata["Group_Desc"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Group_Desc, context);
                },
                set: function(val) {
                    setterFunctions['Group_Desc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "GroupID": {
                get: function() {
                    context["field"] = "GroupID";
                    context["metadata"] = (objectMetadata ? objectMetadata["GroupID"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.GroupID, context);
                },
                set: function(val) {
                    setterFunctions['GroupID'].call(this, val, privateState);
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
            privateState.DELETED = value ? (value["DELETED"] ? value["DELETED"] : null) : null;
            privateState.Group_Desc = value ? (value["Group_Desc"] ? value["Group_Desc"] : null) : null;
            privateState.GroupID = value ? (value["GroupID"] ? value["GroupID"] : null) : null;
            privateState.last_modified = value ? (value["last_modified"] ? value["last_modified"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Ref_Group_Desc);

    //Create new class level validator object
    BaseModel.Validator.call(Ref_Group_Desc);

    var registerValidatorBackup = Ref_Group_Desc.registerValidator;

    Ref_Group_Desc.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Ref_Group_Desc.isValid(this, propName, val)) {
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

    Ref_Group_Desc.relations = relations;

    Ref_Group_Desc.prototype.isValid = function() {
        return Ref_Group_Desc.isValid(this);
    };

    Ref_Group_Desc.prototype.objModelName = "Ref_Group_Desc";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Ref_Group_Desc.registerProcessors = function(options, successCallback, failureCallback) {

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

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("InBound", "Ref_Group_Desc", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Ref_Group_Desc.clone = function(objectToClone) {
        var clonedObj = new Ref_Group_Desc();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Ref_Group_Desc;
});