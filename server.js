const mysql = require("mysql");
const fs = require("fs");
const express = require("express");
const static = require("express-static");
const url = require("url");
const server = express();
const port = 82;
const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123456",
	database:"user",
	timezone:"08:00"
})
db.connect();
// 获取用户数据
server.get("/getData",(request,response)=>{
	db.query(`SELECT * FROM work`,(error,data)=>{
		if(error){
			console.log("查询失败")
			response.end("error")
		}
		else{
			console.log("查询成功")
			response.end(JSON.stringify(data));
		}
	})
})

// 删除用户数据
server.get("/deleteData",(request,response)=>{
	var id = url.parse(request.url,true).query.ID;
	db.query(`DELETE FROM work WHERE id="${id}"`,(error,data)=>{
		if(error){
			console.log("删除失败")
			response.end("error")
		}
		else{
			console.log("删除成功")
			response.end("success")
		}
	})
})


// 添加用户数据
server.get("/addData",(request,response)=>{
	var parse = url.parse(request.url,true).query;
	var IDCard = parse.IDCard;
	var birthday = parse.birthday;
	var department = parse.department;
	var joinDate = parse.joinDate;
	var leaveDate = parse.leaveDate;
	var name = parse.name;
	var number = parse.number;
	var salary = parse.salary;
	var sex = parse.sex;
	var status = parse.status;

	if(name && sex && department && status && joinDate && salary && IDCard && number){
		db.query(`INSERT INTO work (IDCard,birthday,department,joinDate,leaveDate,name,number,salary,sex,status) VALUES ("${IDCard}","${birthday}","${department}","${joinDate}","${leaveDate}","${name}","${number}","${salary}","${sex}","${status}")`,(error,data)=>{
			if(error){
				console.log("写入新用户失败");
				response.end("error");
			}
			else{
				console.log(`写入${name}新员工数据成功!`);
				response.end("success");
			}
		});
	}
	else{
		console.log("写入新用户失败"); 
		response.end("error");
	}
});

// 更改用户数据
server.get("/editData",(request,response)=>{
	var parse = url.parse(request.url,true).query;
	var IDCard = parse.IDCard;
	var birthday = parse.birthday;
	var department = parse.department;
	var joinDate = parse.joinDate;
	var leaveDate = parse.leaveDate;
	var name = parse.name;
	var number = parse.number;
	var salary = parse.salary;
	var sex = parse.sex;
	var status = parse.status;
	var ID = parse.ID;
	console.log(parse);
	db.query(`UPDATE work SET IDCard="${IDCard}",birthday="${birthday}",department="${department}",joinDate="${joinDate}",leaveDate="${leaveDate}",name="${name}",number="${number}",salary="${salary}",sex="${sex}",status="${status}" WHERE ID="${ID}"`,(error,data)=>{
		if(error){
			console.log(error)
			response.end("error");
		}else{
			console.log("更新用户信息成功");
			response.end("success");
		}
	})
})
server.listen(port);
server.use(static(__dirname + "/start"));
console.log(`server is running at ${port}`);
