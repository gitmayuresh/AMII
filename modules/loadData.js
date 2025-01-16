//Type your code hereisHospitalSearched=false;
hospitalTable="";
hospID="";
hospDesc="";
hospitalTableSearch="";

/*
**************************************************
*	Name    : loadLookupData
*	Purpose : load data to device DB using sync 
****************************************************
*/

function loadLookupData()
{
voltmx.print("******In Load Lookup Data********");
// 	loadHospData();
}

/*
**************************************************
*	Name    : loadHospData
*	Purpose : bind data from device DB to cmbHospital
****************************************************
*/
function loadHospData() 
{
 	var dbName = kony.sync.getDBName();//AMIIDataSource
 	var sql = "select a.HospitalID, a.HospitalDesc from RefRegionNurseMappingInfo r,refnursedesc n, RefRegionHospitalMappingInfo h , refhospitaldesc  a where n.NurseID==r.NurseID and  r.RegionID== h.RegionID and h.HospitalID=a.HospitalID and n.NurseUserName='"+nurseID+"' order by a.HospitalDesc";
 	 kony.sync.single_select_execute(dbName,
		                                  sql,
		                                  "",
		                                  loadHospDataSuccessCallback,
		                                  loadHospDataErrorCallback);
}

function loadHospDataSuccessCallback(res)
{
	 hospitalTable = new Array();
	hospitalTable.push(["null","Please Select..."]);	
		var key = "",value="";
		
			for ( k in res )
			{ 
				var v = res[ kony.decrement( k ) ];
				key = v.HospitalID;
				value= v.HospitalDesc;		
				hospitalTable.push([key,value]);
			}//for
		frmPatientDetails.cmbHospital.masterData = hospitalTable; 
		voltmx.print("hospitalTable in load"+hospitalTable)
	
}

function loadHospDataErrorCallback(res)
{
	voltmx.print("Get All Data Failed " + JSON.stringify(res));
}


/*
**************************************************
*	Name    : loadGroupData
*	Purpose : bind data from device DB to cmbGroup
****************************************************
*/
function loadGroupData(){
var orderByMap = []
orderByMap [0] = {};
orderByMap [0].key = "GroupDesc";
orderByMap [0].sortType ="asc";

	com.davita.Acutes.InBoundScope.RefGroupDesc.getAll(loadGroupDataSuccessCallback,loadGroupDataErrorCallback,orderByMap);
}
function loadGroupDataSuccessCallback(res)
{
	if(res!=null)
	{
		try{
			kony.print("In loadGroupDataSuccessCallback");
			var cmbdefaultval=new Array();
			cmbdefaultval.push(["null","Please Select..."]);
			var groupTable = new Array();
			groupTable.push(["null","Please Select..."]);	
				var key = "",value="";
				for ( k in res )
				{ 
					var v = res[ kony.decrement( k ) ];
					key = v.GroupID;
					value= v.GroupDesc;		
					groupTable.push([key,value]);
				}//for
			popupHospitalSearch.cmbGroup.masterData = groupTable; 	
			popupHospitalSearch.cmbDivision.masterData=cmbdefaultval;
			popupHospitalSearch.cmbDivision.selectedKey= "null";
			popupHospitalSearch.cmbRegion.masterData=cmbdefaultval;
			popupHospitalSearch.cmbRegion.selectedKey="null";
			popupHospitalSearch.segHospitalData.removeAll();
			popupHospitalSearch.lblHospital.setVisibility(false);
			popupHospitalSearch.segHospitalData.setVisibility(false);
			popupHospitalSearch.show();
		}//try
		catch (e) {
			var err=kony.getError(e);
			kony.print("Exception::"+err);
		}
	}
}

function loadGroupDataErrorCallback(res)
{
	kony.print("Get All Data Failed " + JSON.stringify(res));
}

/*
**************************************************
*	Name    : getdivID
*	Purpose : bind data from device DB to cmbDivision
****************************************************
*/

function getdivID() 
{
     kony.print("In getdivID");
    var grpSelKey=popupHospitalSearch.cmbGroup.selectedKeyValue[0];
    if(grpSelKey!=null)
    {
	    var dbName = kony.sync.getDBName();//AMIIDataSource
	    var sql = "select d.DivisionID,d.DivisionDesc from  RefGroupDivisionMappingInfo g,RefDivisionDesc d where g.DivisionID == d.DivisionID and g.GroupID ='"+grpSelKey+"' order by d.DivisionDesc";	
	
		kony.print("query------>"+sql)
		 kony.sync.single_select_execute(dbName,
	                                  sql,
	                                  "",
	                                  mySuccCallback,
	                                  errorcallback);
	 }
	 function mySuccCallback( res )
	 {
	 	
		 	if(res!=null)
		 	{
		 		try{
				 	kony.print("length of resultset"+res.length);
					 	var divisionTable = new Array();
					 	var regionTable=new Array();
					 	
					   divisionTable.push(["null","Please Select..."]);	
					   regionTable.push(["null","Please Select..."]);
						var key = "",value="";
						
					 	for ( k in res )
					 	{ 
							var v = res[ kony.decrement( k ) ];
						 	key = v.DivisionID;
							value= v.DivisionDesc;		
							divisionTable.push([key,value]);
				 		
				 		}//for 
					popupHospitalSearch.cmbDivision.masterData = divisionTable;  	
				 	popupHospitalSearch.cmbDivision.selectedKey="null";
				 	popupHospitalSearch.cmbRegion.masterData=regionTable;
				 	popupHospitalSearch.cmbRegion.selectedKey= "null";
				}//try
				catch (e) {
				var err=kony.getError(e);
				kony.print("Exception :"+err);
  				}//catch
		 	}//if
	        else{
	        	kony.print("Please select other group");
	        }
        
		
	 }
	 function errorcallback( res )
	 {
	 	kony.print("in error callback");;
	 }
	
}
/*
**************************************************
*	Name    : getregnID
*	Purpose : bind data from device DB to cmbRegion
****************************************************
*/
function getregnID() 
{
    kony.print("In getregnID");
    var divSelKey=popupHospitalSearch.cmbDivision.selectedKeyValue[0];
    if(divSelKey!=null)
    {
	    var dbName = kony.sync.getDBName();//AMIIDataSource
	    var sql = "select r.RegionID, r.RegionDesc from RefDivisonRegionMappingInfo d,RefRegionDesc r where d.RegionID == r.RegionID and d.DivisionID='"+divSelKey+"' order by r.RegionDesc";	
	
		kony.print("query------>"+sql)
		kony.sync.single_select_execute(dbName,
		                                  sql,
		                                  "",
		                                  mySuccCallback,
		                                  errorcallback);
	}
	 function mySuccCallback( res )
	 {	
	 	
		 	if(res!=null)
		 	{
		 		try{
				 	kony.print("length of resultset"+res.length);
				 	var regionTable = new Array();
				   regionTable.push(["null","Please Select..."]);	
					var key = "",value="";
				
					for ( k in res )
					{ 
						var v = res[ kony.decrement( k ) ];
						key = v.RegionID;
						value= v.RegionDesc;		
						regionTable.push([key,value]);
					}//for
				popupHospitalSearch.cmbRegion.masterData = regionTable; 	
				}//try
				catch (e) {
				var err=kony.getError(e);
				kony.print("Exception :"+err);
  				}//catch
			  }//if
			else{
				kony.print("Please select other Division");
			}
		
 }
	function errorcallback( res )
	{
		  	kony.print("in error callback");;
	}
	
}
/*
**************************************************
*	Name    : gethospID
*	Purpose : bind data from device DB to cmbHospital
****************************************************
*/
function gethospID() 
{
    kony.print("In gethospID");
    showSyncLoadingScreen(kony.i18n.getLocalizedString("i18n_LoadingMsg"));
    var regSelKey=popupHospitalSearch.cmbRegion.selectedKeyValue[0];
       if(regSelKey!=null)
       {
		    var dbName = kony.sync.getDBName();//AMIIDataSource
		    var sql = "select  h.HospitalID,h.HospitalDesc from RefRegionHospitalMappingInfo r,RefHospitalDesc h where r.HospitalID== h.HospitalID and r.RegionID='"+regSelKey+"' order by h.HospitalDesc";	
			kony.print("query------>"+sql)
			 kony.sync.single_select_execute(dbName,
		                                  sql,
		                                  "",
		                                  mySuccCallback,
		                                  errorcallback);
	   }
		
		 function mySuccCallback( res )
		 {
		 var hospitalArray = new Array();
			kony.print("length of resultset"+res.length);
			var hospTable=new Array();
			hospTable.push(["null","Please Select..."]);	
			if(res.length!=0)
			{
				try{
					for ( k in res )
					{ 
						var v = res[kony.decrement( k ) ];	
						var key="",value="";		
						var hospObj={"lblsegHospID":v.HospitalID,
									 "lblsegHospDesc":v.HospitalDesc};	
						hospitalArray.push(hospObj);
						key=v.HospitalID;
						value=v.HospitalDesc;
						hospTable.push([key,value]);
					}//for
					isHospitalSearched=true; 
					//frmPatientDetails.cmbHospital.masterData=hospTable;
					gbl_HospitalFilterData = hospTable;
					kony.print("data in combobox>>>"+gbl_HospitalFilterData);
					popupHospitalSearch.lblHospital.setVisibility(true);
					popupHospitalSearch.segHospitalData.setVisibility(true);
					popupHospitalSearch.segHospitalData.setData(hospitalArray);	
					dismissSyncLoadingScreen();
					
				}//try
				catch (e) {
				var err=kony.getError(e);
				kony.print("Exception :"+err);
  				}//catch	
			}//if
			else{
				dismissSyncLoadingScreen();
				voltmx.ui.Alert({ message :kony.i18n.getLocalizedString("i18n_HospitalsRec_errMsg"),
									alertType : constants.ALERT_TYPE_INFO,
									alertTitle : "",
									yesLabel : kony.i18n.getLocalizedString("i18n_AlertOK"),
									noLabel : "",
									alertHandler : "" }, {});
			
				popupHospitalSearch.cmbRegion.selectedKey="null";
				popupHospitalSearch.segHospitalData.removeAll();

				popupHospitalSearch.lblHospital.setVisibility(false);
				popupHospitalSearch.segHospitalData.setVisibility(false);
				
			}//else
		 }
		 function errorcallback( res )
		 {
		 dismissSyncLoadingScreen();
		 	kony.print("in error callback");;
		 }		                                  
		 
}

/*
**************************************************
*	Name    : selectHospital
*	Purpose : populated the selected hospital into 
              frmPatientDetails cmbHospital
****************************************************
*/
function selectHospital() 
{
	kony.print("in selectHopital");
	isHospitalSearched=true;
	frmPatientDetails.cmbHospital.masterData=gbl_HospitalFilterData;
    var selhospobj=popupHospitalSearch.segHospitalData.selectedItems[0];
     hospID=selhospobj["lblsegHospID"];    
     hospDesc=selhospobj["lblsegHospDesc"];
    frmPatientDetails.cmbHospital.selectedKey=hospID; 
	kony.print("selected hospital in seg>>"+hospDesc)
    popupHospitalSearch.dismiss();
}
/*
**************************************************
*	Name    : onselectRegion
*	Purpose : onselectRegion making the load 
			  button enable
****************************************************
*/
function onselectRegion() 
{
	var res=popupHospitalSearch.cmbRegion.masterData;
	if(res.length==1)
	{
		kony.print("res"+res)
	}else
	{
		kony.print("res"+res.length)
	}
}
/*
**************************************************
*	Name    : hospIDexists
*	Purpose : checking whether the hospIDexists in the combobox masterdata
****************************************************
*/
function hospIDexists() 
{
	var isHospIDexists=false;
    kony.print("hospID after search"+hospID)
    	if(hospID!="")
    	{
    		 for(var k=0;k<hospitalTable.length;k++)
    		{
				var record = hospitalTable[k];
				var selKey = hospitalTable[k][0];
    			if(hospID!=selKey)
    			{
    				isHospIDexists=false;    				
    			}
    			else{
    				isHospIDexists=true;    				  				
    			}     						  	
    		} 
		}else
    	{
    		isHospIDexists=true;
    		kony.print("length of hashtable in else case"+hospitalTable.length)
    		hospitalTable=hospitalTable;
    		frmPatientDetails.cmbHospital.masterData=hospitalTable
    	}
 	return isHospIDexists;
}

/*
**************************************************
*	Name    : gethospafterSearchID
*	Purpose : getting the hosping ID and hospDesc through query
****************************************************
*/
function gethospafterSearchID(hospitalId)
{
    var dbName = kony.sync.getDBName();//AMIIDataSource
    var sql = "select  HospitalID,HospitalDesc from RefHospitalDesc where HospitalID='"+hospitalId+"'";	

	kony.print("query------>"+sql)
	 function mySuccCallback( res )
	  {
	 	    	var v=res[0];
	 	    	kony.print("result>>>"+JSON.stringify(res))
	 	    	hospID = v.HospitalID;
				hospDesc= v.HospitalDesc;		
				
	 	}
	 	
	 
	 function errorcallback( res )
	 {
	 	kony.print("in error callback");;
	 }
	 kony.sync.single_select_execute(dbName,
	                                  sql,
	                                  "",
	                                  mySuccCallback,
	                                  errorcallback); 
}

/*
**************************************************
*	Name    : onClickLoad
*	Purpose : loading the data into segment onClick of load button
****************************************************
*/
function onClickLoad() 
{
	kony.print("In onClickLoad");
	if(popupHospitalSearch.cmbGroup.selectedKey!=null)
	var grpID=popupHospitalSearch.cmbGroup.selectedKey;
	
	if(popupHospitalSearch.cmbDivision.selectedKey!=null)
	var divID=popupHospitalSearch.cmbDivision.selectedKey;
	
	if(popupHospitalSearch.cmbRegion.selectedKey!=null)
	var regID=popupHospitalSearch.cmbRegion.selectedKey;
	if(grpID!=null && divID!=null && regID!=null)
	{		
		if(grpID !="null")
		{
			if(divID !="null")
			{
				if(regID !="null")
				{
					gethospID();
				}else{
						voltmx.ui.Alert({ message : kony.i18n.getLocalizedString("i18n_Regionselect_msg"),
						alertType : constants.ALERT_TYPE_INFO,
						alertTitle : "",
						yesLabel : kony.i18n.getLocalizedString("i18n_AlertOK"),
						noLabel : "",
						alertHandler : "" }, {});
				  		
						   popupHospitalSearch.segHospitalData.removeAll();
						   	popupHospitalSearch.lblHospital.setVisibility(false);
					    popupHospitalSearch.segHospitalData.setVisibility(false);
					    
				}
			}else{
						voltmx.ui.Alert({ message :kony.i18n.getLocalizedString("i18n_Divisionselect_msg") ,
						alertType : constants.ALERT_TYPE_INFO,
						alertTitle : "",
						yesLabel : kony.i18n.getLocalizedString("i18n_AlertOK"),
						noLabel : "",
						alertHandler : "" }, {});
				
				popupHospitalSearch.segHospitalData.removeAll();
				popupHospitalSearch.lblHospital.setVisibility(false);
			 
			    popupHospitalSearch.segHospitalData.setVisibility(false);
			    
			}
		}else{
						voltmx.ui.Alert({ message : kony.i18n.getLocalizedString("i18n_Groupselect_msg"),
						alertType : constants.ALERT_TYPE_INFO,
						alertTitle : "",
						yesLabel : kony.i18n.getLocalizedString("i18n_AlertOK"),
						noLabel : "",
						alertHandler : "" }, {});
			
			popupHospitalSearch.segHospitalData.removeAll();
			popupHospitalSearch.lblHospital.setVisibility(false);
		    popupHospitalSearch.segHospitalData.setVisibility(false);
		   
		}	
  }   
}

/*
**************************************************
*	Name    : onClickCancel
*	Purpose : dismiss of popup and populating masterdata into combobox
****************************************************
*/
function onClickCancel() 
{
    //frmPatientDetails.cmbHospital.masterData=hospitalTable;
    //frmPatientDetails.cmbHospital.selectedKey="null";
	popupHospitalSearch.dismiss();
}



