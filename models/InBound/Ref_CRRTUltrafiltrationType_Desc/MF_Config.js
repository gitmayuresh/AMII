/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"CRRTUltrafiltrationType_Desc": "CRRTUltrafiltrationType_Desc",
		"CRRTUltrafiltrationTypeID": "CRRTUltrafiltrationTypeID",
		"DELETED": "DELETED",
		"last_modified": "last_modified",
	};

	Object.freeze(mappings);

	var typings = {
		"CRRTUltrafiltrationType_Desc": "string",
		"CRRTUltrafiltrationTypeID": "number",
		"DELETED": "boolean",
		"last_modified": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"CRRTUltrafiltrationTypeID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_CRRTUltrafiltrationType_Desc"
	};

	Object.freeze(config);

	return config;
})