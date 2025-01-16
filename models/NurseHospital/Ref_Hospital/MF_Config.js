/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"appnurseID": "appnurseID",
		"Hospital_Desc": "Hospital_Desc",
		"HospitalID": "HospitalID",
	};

	Object.freeze(mappings);

	var typings = {
		"appnurseID": "string",
		"Hospital_Desc": "string",
		"HospitalID": "string",
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
		serviceName: "NurseHospital",
		tableName: "Ref_Hospital"
	};

	Object.freeze(config);

	return config;
})