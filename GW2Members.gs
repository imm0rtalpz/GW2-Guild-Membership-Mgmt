function onOpen() {
  
  //allow the script to be ran from Google Sheets
  var ui = SpreadsheetApp.getUI();
  ui.createMenu('Members API')
    .addItem('Pull Guild Membership')
    .addToUI();
  
}
  

function callMembers() {
  
  //call the API:2/guild/:id/members endpoint 
  var response = UrlFetchApp.fetch("https://api.guildwars2.com/v2/guild/cb2347e3-076f-438d-9c94-e53f0967a7e9/members?access_token=B2C25277-5D1A-B04C-9487-C09459763810394733C9-B4A5-42C7-9D3E-5E2F70127A7A");
  Logger.log(response.getContentText());
  
  //mapping response to specific fiels in the google sheet
  //NOTE: to regenerate the list from scratch, you will need to manually delete the list and set the cursor to A1,4
  var member = response.getContentText();
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(sheet.getLastRow() + 1,4).setValue([member]);
}
