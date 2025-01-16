/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"DivisionID": "DivisionID",
		"last_modified": "last_modified",
		"RegionID": "RegionID",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"DivisionID": "number",
		"last_modified": "date",
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
		tableName: "Ref_DivisonRegionMappingInfo"
	};

	Object.freeze(config);

	return config;
})