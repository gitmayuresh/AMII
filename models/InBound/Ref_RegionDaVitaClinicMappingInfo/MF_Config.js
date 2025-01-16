/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DaVitaClinicID": "DaVitaClinicID",
		"DELETED": "DELETED",
		"last_modified": "last_modified",
		"RegionID": "RegionID",
	};

	Object.freeze(mappings);

	var typings = {
		"DaVitaClinicID": "number",
		"DELETED": "boolean",
		"last_modified": "date",
		"RegionID": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"DaVitaClinicID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_RegionDaVitaClinicMappingInfo"
	};

	Object.freeze(config);

	return config;
})