
//first update query
result = db.slack.update({ "channels.cname": "general"}, { $push:{"channels.users":{cname:"Snow", email:"sw@bn.com"}} } );
print('Result for "adding one user-snow in the array of users in channel-general"');
print('Result for "get all the posts, name of user and email by user-bansri in channel-general"');
while ( result.hasNext() ) {
printjson( result.next() );
}

//second query
result = db.slack.update({wname:"machine learning", channels:{$ne:"project-3"}}, {$push:{"channels":{cname:"project-3", startDate:new Date("May 11, 2018")}}});
print('Result for "add one chanel-project 3 if it does not exist in workspace-machine learning"');
while ( result1.hasNext() ) {
printjson( result1.next() );
}


//remove query
result = db.slack.remove({wname:"cs6820"});
print('delet the workspace named cs6820');
printjson(result);
