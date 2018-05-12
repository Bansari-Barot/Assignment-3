conn = new Mongo();
db = conn.getDB("testdb");
db.slack.drop();


//first insert

result = db.slack.insert({	wname:"cs6660", apps:[{appName:"dropbox"},{appName:"vote"}],
					channels:[	
								{	cname:"general", startDate: new Date("May 5,2018"), 
									users:[
											{	uname:"bansri", email:"bb@sx.com", 
												posts:[
													{	post:"the meeting for assignment discussion is today", postTime:new Date("May 6, 2018 11:00")	}
												]
											},
											{	uname:"bhavik", email:"bt@fg.com", 
												posts:[
													{	post:"1st part of the assignment is finished.", postTime:new Date("May 7, 2018 11:00")}
												]
											}
									]
								},
								{	cname:"random", startDate: new Date("March 5,2018"), 
									users:[
											{	uname:"sophie", email:"ly@sx.com", 
												posts:[
													{	post:"There is a dinner party at bhavik's place tonight.", postTime:new Date("May 1, 2018 08:00")	}
												]
											},
											{	uname:"bansri", email:"bb@sx.com", 
												posts:[
													{	post:"Professor posted new ppt slide for mongoDB", postTime:new Date("May 7, 2018 12:00")}
												]
											}
									]
								}
							]
				});
print('Result for "insert an Workspace name cs6660, apps in this workspace is dropbox and vote, array of channels names are general created on May 5, 2018 and random created on March 5, 2018 and posts for both channels from users bhavik, bansri and sophie."');
print('In general channel users bansri and bhavik posted on May 6, 2018 11:00 and May 7, 2018 11:00 respectively ');
print('In random channel users sophie and bansri posted on March 5, 2018 08:00 and May 7, 2018 12:00 respectively');
printjson(result);

result = db.slack.insert({	wname:"machine learning", apps:[{appName:"dropbox"},{appName:"vote"}],
					channels:[	
								{	cname:"project-1", startDate: new Date("May 5,2018"), 
									users:[
											{	uname:"bansri", email:"bb@sx.com", 
												posts:[
													{	post:"the meeting for assignment discussion is today", postTime:new Date("May 2, 2018 11:00")	}
												]
											},
											{	uname:"bhavik", email:"bt@fg.com", 
												posts:[
													{	post:"1st part of the assignment is finished.", postTime:new Date("May 1, 2018 11:00")}
												]
											}
									]
								},
								{	cname:"project2 ", startDate: new Date("March 7,2018"), 
									users:[
											{	uname:"sophie", email:"ly@sx.com", 
												posts:[
													{	post:"There is a dinner party at bhavik's place tonight.", postTime:new Date("May 1, 2018 08:00")	}
												]
											},
											{	uname:"bansri", email:"bb@sx.com", 
												posts:[
													{	post:"Professor posted new ppt slide for mongoDB", postTime:new Date("May 7, 2018 12:00")}
												]
											}
									]
								}
							]
				});
print('Result for "insert an Workspace name machine learning, apps in this workspace is dropbox and vote, array of channels names are project-1 created on May 5, 2018 and project2 created on March 7, 2018 and posts for both channels from users bhavik, bansri and sophie."');
print('In general channel users bansri and bhavik posted on May 1, 2018 11:00 and May 2, 2018 11:00 respectively ');
print('In random channel users sophie and bansri posted on March 5, 2018 08:00 and May 7, 2018 12:00 respectively');
printjson(result);


//third insert
// adding one workspace for delete query
db.slack.insert({	wname:"cs6820", apps:[{appName:"dropbox"}],
					channels:[	
								{	cname:"assignment-1", startDate: new Date("March 26,2018"), 
									users:[
											{	uname:"bansri", email:"bb@sx.com", 
												
											}
									]
								}
								
							]
				});