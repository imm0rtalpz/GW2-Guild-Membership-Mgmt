function onOpen() {
  
  //allow the script to be ran from Google Sheets
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Members API')
    .addItem('Pull Guild Membership', 'callMembers')
    .addToUi();
  
}
  

function callMembers() {
  
  //call the API:2/guild/:id/members endpoint 
  var response = UrlFetchApp.fetch("https://api.guildwars2.com/v2/guild/cb2347e3-076f-438d-9c94-e53f0967a7e9/members?access_token=7B7C1958-D04E-3A47-9D43-E5434E6A56D801CF1BA8-AD9E-42AF-8975-53ACC983763E");
  Logger.log(response.getContentText());
  
  var member = response.getContentText();
  var sheet = SpreadsheetApp.getActiveSheet();
  var targetLimitRow = sheet.getLastRow();
  var targetRow = targetLimitRow+1;
  var targetLimitCol = sheet.getLastColumn();
  var targetCol = targetLimitCol+1;
  
  
  //mapping response to specific fields in the google sheet
  //NOTE: to regenerate the list from scratch, you will need to manually delete the list
  
  
  //loop through and put a response in one cell
  for(x = 0; x <= targetLimitRow; x++) {
  sheet.getRange(targetRow,1).setValue([member]);
  }
}

function stripMembers() {
 
  //function to parse the API response in to columns for each field
}
