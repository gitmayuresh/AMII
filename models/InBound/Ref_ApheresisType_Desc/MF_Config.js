/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"ApheresisType_Desc": "ApheresisType_Desc",
		"ApheresisTypeID": "ApheresisTypeID",
		"DELETED": "DELETED",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"ApheresisType_Desc": "string",
		"ApheresisTypeID": "number",
		"DELETED": "boolean",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"ApheresisTypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_ApheresisType_Desc"
	};

	Object.freeze(config);

	return config;
})