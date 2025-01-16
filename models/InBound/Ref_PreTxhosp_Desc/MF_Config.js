/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"last_modified": "last_modified",
		"PreTxhosp_Desc": "PreTxhosp_Desc",
		"PreTxhosp_Id": "PreTxhosp_Id",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"last_modified": "date",
		"PreTxhosp_Desc": "string",
		"PreTxhosp_Id": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"PreTxhosp_Id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_PreTxhosp_Desc"
	};

	Object.freeze(config);

	return config;
})