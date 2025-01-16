/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"last_modified": "last_modified",
		"Region_Desc": "Region_Desc",
		"RegionID": "RegionID",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"last_modified": "date",
		"Region_Desc": "string",
		"RegionID": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"RegionID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_Region_Desc"
	};

	Object.freeze(config);

	return config;
})