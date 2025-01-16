/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETED": "DELETED",
		"last_modified": "last_modified",
		"PostTxhosp_Desc": "PostTxhosp_Desc",
		"PostTxhosp_Id": "PostTxhosp_Id",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETED": "boolean",
		"last_modified": "date",
		"PostTxhosp_Desc": "string",
		"PostTxhosp_Id": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"PostTxhosp_Id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "InBound",
		tableName: "Ref_PostTxhosp_Desc"
	};

	Object.freeze(config);

	return config;
})