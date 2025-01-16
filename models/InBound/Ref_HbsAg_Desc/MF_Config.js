/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"HbsAg_Desc": "HbsAg_Desc",
		"HbsAgId": "HbsAgId",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"HbsAg_Desc": "string",
		"HbsAgId": "number",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"HbsAgId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_HbsAg_Desc"
	};

	Object.freeze(config);

	return config;
})