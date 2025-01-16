/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"last_modified": "last_modified",
		"NursingService_Desc": "NursingService_Desc",
		"NursingServiceID": "NursingServiceID",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"last_modified": "date",
		"NursingService_Desc": "string",
		"NursingServiceID": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"NursingServiceID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_NursingService_Desc"
	};

	Object.freeze(config);

	return config;
})