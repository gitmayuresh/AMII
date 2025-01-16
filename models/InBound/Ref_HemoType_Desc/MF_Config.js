/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"HemoType_Desc": "HemoType_Desc",
		"HemotypeID": "HemotypeID",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"HemoType_Desc": "string",
		"HemotypeID": "number",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"HemotypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_HemoType_Desc"
	};

	Object.freeze(config);

	return config;
})