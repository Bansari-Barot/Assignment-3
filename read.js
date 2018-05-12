
conn = new Mongo();
db = conn.getDB("testdb");


//first read query
result = db.slack.find({wname:"cs6660", "channels.users.uname":"bansri"});
print('Result for "get the document who has user bansari and workspace cs6660"');
while ( result.hasNext() ) {
printjson( result.next() );
}

//second read query
result1 = result = db.slack.find({"channels.cname":"general", "channels.users.uname":"bansri"}, {"channels.users.uname":1, "channels.users.email":1,"channels.users.posts":1});
print('Result for "get all the posts, name of user and email by user-bansri in channel-general"');
while ( result1.hasNext() ) {
printjson( result1.next() );
}

//creating index
result = db.slack.ensureIndex({"channels.users.posts.postTime":1});
printjson(result);

//third read query
result = db.slack.find({"channels.users.uname":"bansri" }).limit(1);
print('Result for "get the first earliest document in which posts posted by user-bansri"');
while ( result.hasNext() ) {
printjson( result.next() );
}

//fourth read query
result = db.slack.find({"channels.users.posts.postTime":{$gt:ISODate("2018-05-05T08:00:00Z")}});
print('Result for "get the documents in which all the posts in one channel posted after May 5,2018"');
while ( result.hasNext() ) {
printjson( result.next() );
}