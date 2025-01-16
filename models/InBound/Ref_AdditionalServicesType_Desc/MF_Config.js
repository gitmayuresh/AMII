/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"AdditionalServicesType_Desc": "AdditionalServicesType_Desc",
		"AdditionalServicesTypeID": "AdditionalServicesTypeID",
		"DELETED": "DELETED",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"AdditionalServicesType_Desc": "string",
		"AdditionalServicesTypeID": "number",
		"DELETED": "boolean",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"AdditionalServicesTypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_AdditionalServicesType_Desc"
	};

	Object.freeze(config);

	return config;
})