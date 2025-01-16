/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"last_modified": "last_modified",
		"PDType_Desc": "PDType_Desc",
		"PDTypeID": "PDTypeID",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"last_modified": "date",
		"PDType_Desc": "string",
		"PDTypeID": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"PDTypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_PDType_Desc"
	};

	Object.freeze(config);

	return config;
})