/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"last_modified": "last_modified",
		"NurseID": "NurseID",
		"RegionID": "RegionID",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"last_modified": "date",
		"NurseID": "number",
		"RegionID": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"NurseID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_RegionNurseMappingInfo"
	};

	Object.freeze(config);

	return config;
})