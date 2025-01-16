/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Ref_TreatmentQuestions_Desc", "objectService" : "InBound"};

    var setterFunctions = {
        DELETED: function(val, state) {
            context["field"] = "DELETED";
            context["metadata"] = (objectMetadata ? objectMetadata["DELETED"] : null);
            state['DELETED'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Is_Visible: function(val, state) {
            context["field"] = "Is_Visible";
            context["metadata"] = (objectMetadata ? objectMetadata["Is_Visible"] : null);
            state['Is_Visible'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        last_modified: function(val, state) {
            context["field"] = "last_modified";
            context["metadata"] = (objectMetadata ? objectMetadata["last_modified"] : null);
            state['last_modified'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Sort_Order: function(val, state) {
            context["field"] = "Sort_Order";
            context["metadata"] = (objectMetadata ? objectMetadata["Sort_Order"] : null);
            state['Sort_Order'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TreatmentType_Desc: function(val, state) {
            context["field"] = "TreatmentType_Desc";
            context["metadata"] = (objectMetadata ? objectMetadata["TreatmentType_Desc"] : null);
            state['TreatmentType_Desc'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TreatmentType_Options: function(val, state) {
            context["field"] = "TreatmentType_Options";
            context["metadata"] = (objectMetadata ? objectMetadata["TreatmentType_Options"] : null);
            state['TreatmentType_Options'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TreatmentType_Question: function(val, state) {
            context["field"] = "TreatmentType_Question";
            context["metadata"] = (objectMetadata ? objectMetadata["TreatmentType_Question"] : null);
            state['TreatmentType_Question'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TreatmentTypeID: function(val, state) {
            context["field"] = "TreatmentTypeID";
            context["metadata"] = (objectMetadata ? objectMetadata["TreatmentTypeID"] : null);
            state['TreatmentTypeID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Ref_TreatmentQuestions_Desc(defaultValues) {
        var privateState = {};
        context["field"] = "DELETED";
        context["metadata"] = (objectMetadata ? objectMetadata["DELETED"] : null);
        privateState.DELETED = defaultValues ?
            (defaultValues["DELETED"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DELETED"], context) :
                null) :
            null;

        context["field"] = "Is_Visible";
        context["metadata"] = (objectMetadata ? objectMetadata["Is_Visible"] : null);
        privateState.Is_Visible = defaultValues ?
            (defaultValues["Is_Visible"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Is_Visible"], context) :
                null) :
            null;

        context["field"] = "last_modified";
        context["metadata"] = (objectMetadata ? objectMetadata["last_modified"] : null);
        privateState.last_modified = defaultValues ?
            (defaultValues["last_modified"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["last_modified"], context) :
                null) :
            null;

        context["field"] = "Sort_Order";
        context["metadata"] = (objectMetadata ? objectMetadata["Sort_Order"] : null);
        privateState.Sort_Order = defaultValues ?
            (defaultValues["Sort_Order"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Sort_Order"], context) :
                null) :
            null;

        context["field"] = "TreatmentType_Desc";
        context["metadata"] = (objectMetadata ? objectMetadata["TreatmentType_Desc"] : null);
        privateState.TreatmentType_Desc = defaultValues ?
            (defaultValues["TreatmentType_Desc"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TreatmentType_Desc"], context) :
                null) :
            null;

        context["field"] = "TreatmentType_Options";
        context["metadata"] = (objectMetadata ? objectMetadata["TreatmentType_Options"] : null);
        privateState.TreatmentType_Options = defaultValues ?
            (defaultValues["TreatmentType_Options"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TreatmentType_Options"], context) :
                null) :
            null;

        context["field"] = "TreatmentType_Question";
        context["metadata"] = (objectMetadata ? objectMetadata["TreatmentType_Question"] : null);
        privateState.TreatmentType_Question = defaultValues ?
            (defaultValues["TreatmentType_Question"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TreatmentType_Question"], context) :
                null) :
            null;

        context["field"] = "TreatmentTypeID";
        context["metadata"] = (objectMetadata ? objectMetadata["TreatmentTypeID"] : null);
        privateState.TreatmentTypeID = defaultValues ?
            (defaultValues["TreatmentTypeID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TreatmentTypeID"], context) :
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
            "Is_Visible": {
                get: function() {
                    context["field"] = "Is_Visible";
                    context["metadata"] = (objectMetadata ? objectMetadata["Is_Visible"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Is_Visible, context);
                },
                set: function(val) {
                    setterFunctions['Is_Visible'].call(this, val, privateState);
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
            "Sort_Order": {
                get: function() {
                    context["field"] = "Sort_Order";
                    context["metadata"] = (objectMetadata ? objectMetadata["Sort_Order"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Sort_Order, context);
                },
                set: function(val) {
                    setterFunctions['Sort_Order'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TreatmentType_Desc": {
                get: function() {
                    context["field"] = "TreatmentType_Desc";
                    context["metadata"] = (objectMetadata ? objectMetadata["TreatmentType_Desc"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TreatmentType_Desc, context);
                },
                set: function(val) {
                    setterFunctions['TreatmentType_Desc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TreatmentType_Options": {
                get: function() {
                    context["field"] = "TreatmentType_Options";
                    context["metadata"] = (objectMetadata ? objectMetadata["TreatmentType_Options"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TreatmentType_Options, context);
                },
                set: function(val) {
                    setterFunctions['TreatmentType_Options'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TreatmentType_Question": {
                get: function() {
                    context["field"] = "TreatmentType_Question";
                    context["metadata"] = (objectMetadata ? objectMetadata["TreatmentType_Question"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TreatmentType_Question, context);
                },
                set: function(val) {
                    setterFunctions['TreatmentType_Question'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TreatmentTypeID": {
                get: function() {
                    context["field"] = "TreatmentTypeID";
                    context["metadata"] = (objectMetadata ? objectMetadata["TreatmentTypeID"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TreatmentTypeID, context);
                },
                set: function(val) {
                    setterFunctions['TreatmentTypeID'].call(this, val, privateState);
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
            privateState.Is_Visible = value ? (value["Is_Visible"] ? value["Is_Visible"] : null) : null;
            privateState.last_modified = value ? (value["last_modified"] ? value["last_modified"] : null) : null;
            privateState.Sort_Order = value ? (value["Sort_Order"] ? value["Sort_Order"] : null) : null;
            privateState.TreatmentType_Desc = value ? (value["TreatmentType_Desc"] ? value["TreatmentType_Desc"] : null) : null;
            privateState.TreatmentType_Options = value ? (value["TreatmentType_Options"] ? value["TreatmentType_Options"] : null) : null;
            privateState.TreatmentType_Question = value ? (value["TreatmentType_Question"] ? value["TreatmentType_Question"] : null) : null;
            privateState.TreatmentTypeID = value ? (value["TreatmentTypeID"] ? value["TreatmentTypeID"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Ref_TreatmentQuestions_Desc);

    //Create new class level validator object
    BaseModel.Validator.call(Ref_TreatmentQuestions_Desc);

    var registerValidatorBackup = Ref_TreatmentQuestions_Desc.registerValidator;

    Ref_TreatmentQuestions_Desc.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Ref_TreatmentQuestions_Desc.isValid(this, propName, val)) {
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

    Ref_TreatmentQuestions_Desc.relations = relations;

    Ref_TreatmentQuestions_Desc.prototype.isValid = function() {
        return Ref_TreatmentQuestions_Desc.isValid(this);
    };

    Ref_TreatmentQuestions_Desc.prototype.objModelName = "Ref_TreatmentQuestions_Desc";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Ref_TreatmentQuestions_Desc.registerProcessors = function(options, successCallback, failureCallback) {

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

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("InBound", "Ref_TreatmentQuestions_Desc", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Ref_TreatmentQuestions_Desc.clone = function(objectToClone) {
        var clonedObj = new Ref_TreatmentQuestions_Desc();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Ref_TreatmentQuestions_Desc;
});