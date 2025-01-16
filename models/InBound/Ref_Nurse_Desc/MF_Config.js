/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"Description": "Description",
		"last_modified": "last_modified",
		"Nurse_UserName": "Nurse_UserName",
		"NurseID": "NurseID",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"Description": "string",
		"last_modified": "date",
		"Nurse_UserName": "string",
		"NurseID": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"NurseID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_Nurse_Desc"
	};

	Object.freeze(config);

	return config;
})