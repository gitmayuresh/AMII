/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"HospitalID": "HospitalID",
		"last_modified": "last_modified",
		"RegionID": "RegionID",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"HospitalID": "number",
		"last_modified": "date",
		"RegionID": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"HospitalID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_RegionHospitalMappingInfo"
	};

	Object.freeze(config);

	return config;
})