/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"Division_Desc": "Division_Desc",
		"DivisionID": "DivisionID",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"Division_Desc": "string",
		"DivisionID": "number",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"DivisionID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_Division_Desc"
	};

	Object.freeze(config);

	return config;
})