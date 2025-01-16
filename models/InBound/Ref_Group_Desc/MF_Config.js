/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"Group_Desc": "Group_Desc",
		"GroupID": "GroupID",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"Group_Desc": "string",
		"GroupID": "number",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"GroupID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_Group_Desc"
	};

	Object.freeze(config);

	return config;
})