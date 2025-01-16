/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"Hospital_Desc": "Hospital_Desc",
		"HospitalID": "HospitalID",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"Hospital_Desc": "string",
		"HospitalID": "number",
		"last_modified": "date",
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
		tableName: "Ref_Hospital_Desc"
	};

	Object.freeze(config);

	return config;
})