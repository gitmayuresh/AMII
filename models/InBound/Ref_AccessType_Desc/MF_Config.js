/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"AccessType_Desc": "AccessType_Desc",
		"AccessTypeID": "AccessTypeID",
		"DELETED": "DELETED",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"AccessType_Desc": "string",
		"AccessTypeID": "number",
		"DELETED": "boolean",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"AccessTypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_AccessType_Desc"
	};

	Object.freeze(config);

	return config;
})