/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"AccessTypeID": "AccessTypeID",
		"AddtlSvcsTypeID": "AddtlSvcsTypeID",
		"ApheresisTypeID": "ApheresisTypeID",
		"App_Version_Number": "App_Version_Number",
		"Blood_Administration_Qty": "Blood_Administration_Qty",
		"Comments": "Comments",
		"CRRTTypeID": "CRRTTypeID",
		"CRRTUltrafiltrationTypeID": "CRRTUltrafiltrationTypeID",
		"CxlTypeID": "CxlTypeID",
		"Date_Of_Birth": "Date_Of_Birth",
		"DaVitaClinicID": "DaVitaClinicID",
		"DELETED": "DELETED",
		"Device_PIN": "Device_PIN",
		"Dialysate": "Dialysate",
		"First_Name": "First_Name",
		"HbsAbID": "HbsAbID",
		"HbsAgID": "HbsAgID",
		"HemoTypeID": "HemoTypeID",
		"Hospital_Delay_Time_Units": "Hospital_Delay_Time_Units",
		"HospitalID": "HospitalID",
		"ID": "ID",
		"Is_End_Date_Modified": "Is_End_Date_Modified",
		"Is_End_Time_Modified": "Is_End_Time_Modified",
		"Is_Start_Date_Modified": "Is_Start_Date_Modified",
		"Is_Start_Time_Modified": "Is_Start_Time_Modified",
		"Is_Synched_With_AXDB": "Is_Synched_With_AXDB",
		"IV_Antibiotic": "IV_Antibiotic",
		"last_modified": "last_modified",
		"Last_Name": "Last_Name",
		"Medical_Record_Number": "Medical_Record_Number",
		"Nurse_UserName": "Nurse_UserName",
		"Nursing_Service_Time_Units": "Nursing_Service_Time_Units",
		"NursingServiceID": "NursingServiceID",
		"PDTypeID": "PDTypeID",
		"Pediatric": "Pediatric",
		"Physician_First_Name": "Physician_First_Name",
		"Physician_Last_Name": "Physician_Last_Name",
		"posttx_hosp_id": "posttx_hosp_id",
		"pretx_hosp_id": "pretx_hosp_id",
		"Removal_Of_Non_Tunneled_Catheter": "Removal_Of_Non_Tunneled_Catheter",
		"Room_Number": "Room_Number",
		"RoomTypeID": "RoomTypeID",
		"Stat_Treatment": "Stat_Treatment",
		"Treatment_Date": "Treatment_Date",
		"Treatment_End_Date": "Treatment_End_Date",
		"Treatment_End_Time": "Treatment_End_Time",
		"Treatment_Start_Time": "Treatment_Start_Time",
		"TreatmentType_Results": "TreatmentType_Results",
		"TreatmentTypeID": "TreatmentTypeID",
		"Upgraded_Dialyzer": "Upgraded_Dialyzer",
	};

	Object.freeze(mappings);

	var typings = {
		"AccessTypeID": "number",
		"AddtlSvcsTypeID": "number",
		"ApheresisTypeID": "number",
		"App_Version_Number": "string",
		"Blood_Administration_Qty": "number",
		"Comments": "string",
		"CRRTTypeID": "number",
		"CRRTUltrafiltrationTypeID": "number",
		"CxlTypeID": "number",
		"Date_Of_Birth": "date",
		"DaVitaClinicID": "number",
		"DELETED": "boolean",
		"Device_PIN": "string",
		"Dialysate": "number",
		"First_Name": "string",
		"HbsAbID": "number",
		"HbsAgID": "number",
		"HemoTypeID": "number",
		"Hospital_Delay_Time_Units": "number",
		"HospitalID": "number",
		"ID": "number",
		"Is_End_Date_Modified": "number",
		"Is_End_Time_Modified": "number",
		"Is_Start_Date_Modified": "number",
		"Is_Start_Time_Modified": "number",
		"Is_Synched_With_AXDB": "number",
		"IV_Antibiotic": "number",
		"last_modified": "date",
		"Last_Name": "string",
		"Medical_Record_Number": "string",
		"Nurse_UserName": "string",
		"Nursing_Service_Time_Units": "number",
		"NursingServiceID": "number",
		"PDTypeID": "number",
		"Pediatric": "number",
		"Physician_First_Name": "string",
		"Physician_Last_Name": "string",
		"posttx_hosp_id": "number",
		"pretx_hosp_id": "number",
		"Removal_Of_Non_Tunneled_Catheter": "number",
		"Room_Number": "string",
		"RoomTypeID": "number",
		"Stat_Treatment": "number",
		"Treatment_Date": "date",
		"Treatment_End_Date": "date",
		"Treatment_End_Time": "string",
		"Treatment_Start_Time": "string",
		"TreatmentType_Results": "string",
		"TreatmentTypeID": "number",
		"Upgraded_Dialyzer": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"ID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "OutBound",
		tableName: "PatientTreatmentInfo"
	};

	Object.freeze(config);

	return config;
})