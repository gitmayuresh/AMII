/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"HbsAb_Desc": "HbsAb_Desc",
		"HbsAbId": "HbsAbId",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"HbsAb_Desc": "string",
		"HbsAbId": "number",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"HbsAbId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_HbsAb_Desc"
	};

	Object.freeze(config);

	return config;
})