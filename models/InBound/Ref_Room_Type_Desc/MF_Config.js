/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"last_modified": "last_modified",
		"Room_Type_Desc": "Room_Type_Desc",
		"Room_TypeID": "Room_TypeID",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"last_modified": "date",
		"Room_Type_Desc": "string",
		"Room_TypeID": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"Room_TypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_Room_Type_Desc"
	};

	Object.freeze(config);

	return config;
})