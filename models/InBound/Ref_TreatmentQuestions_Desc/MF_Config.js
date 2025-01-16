/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"Is_Visible": "Is_Visible",
		"last_modified": "last_modified",
		"Sort_Order": "Sort_Order",
		"TreatmentType_Desc": "TreatmentType_Desc",
		"TreatmentType_Options": "TreatmentType_Options",
		"TreatmentType_Question": "TreatmentType_Question",
		"TreatmentTypeID": "TreatmentTypeID",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"Is_Visible": "number",
		"last_modified": "date",
		"Sort_Order": "number",
		"TreatmentType_Desc": "string",
		"TreatmentType_Options": "string",
		"TreatmentType_Question": "string",
		"TreatmentTypeID": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"TreatmentType_Desc",
					"TreatmentTypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_TreatmentQuestions_Desc"
	};

	Object.freeze(config);

	return config;
})