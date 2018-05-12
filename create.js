conn = new Mongo();
db = conn.getDB("testdb");
db.slack.drop();


//first insert

result = db.slack.insert({    wname:"cs6660", apps:[{appName:"dropbox"},{appName:"vote"}],
                    channels:[    
                                {    cname:"random", startDate: new Date("March 5,2018"), 
                                    users:[
                                            {    uname:"sophie", email:"ly@sx.com", 
                                                posts:[
                                                    {    post:"There is a dinner party at bhavik's place tonight.", postTime:new Date("May 1, 2018 08:00")    }
                                                ]
                                            },
                                            {    uname:"bansri", email:"bb@sx.com", 
                                                posts:[
                                                    {    post:"Professor posted new ppt slide for mongoDB", postTime:new Date("May 7, 2018 12:00")}
                                                ]
                                            }
                                    ]
                                },
                                {    cname:"general", startDate: new Date("May 5,2018"), 
                                    users:[
                                            {    uname:"bansri", email:"bb@sx.com", 
                                                posts:[
                                                    {    post:"the meeting for assignment discussion is today", postTime:new Date("May 6, 2018 11:00")    }
                                                ]
                                            },
                                            {    uname:"bhavik", email:"bt@fg.com", 
                                                posts:[
                                                    {    post:"1st part of the assignment is finished.", postTime:new Date("May 7, 2018 11:00")}
                                                ]
                                            }
                                    ]
                                }
                                
                            ]
                });
print('Result for "insert an Workspace name cs6660, apps in this workspace is dropbox and vote, array of channels names are random created on March 5, 2018 and general created on May 5, 2018 and posts for both channels from users bhavik, bansri and sophie."');
print('In random channel users sophie and bansri posted on May 1, 2018 08:00 and May 7, 2018 12:00 respectively');
print('In general channel users bansri and bhavik posted on May 6, 2018 11:00 and May 7, 2018 11:00 respectively ');
printjson(result);

result = db.slack.insert({    wname:"machine learning", apps:[{appName:"dropbox"},{appName:"vote"}],
                    channels:[    
                                {    cname:"project-1 ", startDate: new Date("March 7,2018"), 
                                    users:[
                                            {    uname:"sophie", email:"ly@sx.com", 
                                                posts:[
                                                    {    post:"There is a dinner party at bhavik's place tonight.", postTime:new Date("April 1, 2018 08:00")    }
                                                ]
                                            },
                                            {    uname:"bansri", email:"bb@sx.com", 
                                                posts:[
                                                    {    post:"Professor posted new ppt slide for mongoDB", postTime:new Date("April 7, 2018 12:00")}
                                                ]
                                            }
                                    ]
                                },
                                {    cname:"project-2", startDate: new Date("May 5,2018"), 
                                    users:[
                                            {    uname:"bansri", email:"bb@sx.com", 
                                                posts:[
                                                    {    post:"the meeting for assignment discussion is today", postTime:new Date("May 2, 2018 11:00")    }
                                                ]
                                            },
                                            {    uname:"bhavik", email:"bt@fg.com", 
                                                posts:[
                                                    {    post:"1st part of the assignment is finished.", postTime:new Date("May 1, 2018 11:00")}
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
result = db.slack.insert({    wname:"cs6820", apps:[{appName:"Twitter"}],
                    channels:[    
                                {    cname:"assignment-1", startDate: new Date("March 26,2018"), 
                                    users:[
                                            {    uname:"raoni", email:"rr@sx.com", 
                                                posts:[
                                                    {    post:"Hey guys I need help in understanding the first homework.", postTime:new Date("March 31,2018")}
                                                ]
                                            },
                                            {    uname:"john", email:"jj@sx.com", 
                                                posts:[
                                                    {    post:"I can help you in understanding the first homework. We can discuss it after next class", postTime:new Date("March 31,2018")}
                                                ]
                                            }
                                    ]
                                }
                                
                            ]
                });
print('Result for "insert an Workspace name cs6820, apps in this workspace is Twitter, array of channels names are assignment-1 created on March 31,2018 by user raoni."');
printjson(result);

        
//fourth insert
// adding one workspace
db.slack.insert({    wname:"Dr. David Yang Research", apps:[{appName:"Google Drive"}],
                    channels:[    
                                {    cname:"Research", startDate: new Date("April 6,2018"), 
                                    users:[
                                            {    uname:"Paul", email:"pr@sx.com", 
                                                posts:[
                                                    {    post:"Hello proffesor we need more raspberry pi to work with.", postTime:new Date("April 15,2018")}
                                                ]
                                            },
                                            {    uname:"Mohit", email:"ma@sx.com", 
                                                posts:[
                                                    {    post:"Professor we also need I364 sensors to detect gas", postTime:new Date("April 16,2018")}
                                                ]
                                            }
                                    ]
                                },    
                                {    cname:"Literature Review", startDate: new Date("April 20,2018"), 
                                    users:[
                                            {    uname:"Krunal", email:"kj@sx.com", 
                                                posts:[
                                                    {    post:"Hello does anyone know how many papers we need to find for literature.", postTime:new Date("April 22,2018")}
                                                ]
                                            },
                                            {    uname:"Mohit", email:"ma@sx.com", 
                                                posts:[
                                                    {    post:"We need to find around ten papers", postTime:new Date("April 28,2018")}
                                                ]
                                            }
                                    ]
                                }
                              ]
                });

print('Result for "insert an Workspace name Dr. David Yang Research, apps in this workspace is Google Drive, array of channels names are Research and Literature Review  created on April 6,2018 and April 20,2018 respectively having users- paul mohit and krunal."');
printjson(result);
