/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"DialysateType_Desc": "DialysateType_Desc",
		"DialysateTypeID": "DialysateTypeID",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"DialysateType_Desc": "string",
		"DialysateTypeID": "number",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"DialysateTypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_DialysateType_Desc"
	};

	Object.freeze(config);

	return config;
})