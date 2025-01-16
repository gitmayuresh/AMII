/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"CancellationType_Desc": "CancellationType_Desc",
		"CancellationTypeID": "CancellationTypeID",
		"DELETED": "DELETED",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"CancellationType_Desc": "string",
		"CancellationTypeID": "number",
		"DELETED": "boolean",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"CancellationTypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_CancellationType_Desc"
	};

	Object.freeze(config);

	return config;
})