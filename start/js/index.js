window.onload = function(){

	var admin = new Vue({
		el:".box",
		data:{
			shuju:[],
			inputbox:{
				id:"",
				username:"",
				password:"",
				name:"",
				age:"",
				sex:""
			},
			newAdmin:{
				id:"",
				username:"",
				password:"",
				name:"",
				age:"",
				sex:""
			},
			isShowEdit:false,
			isShowAdd: false
		},
		methods:{
			showDialog(id,index){
				this.inputbox.id = id;
				this.inputbox.username = this.shuju[index].username;
				this.inputbox.password = this.shuju[index].password;
				this.inputbox.name = this.shuju[index].name;
				this.inputbox.age = this.shuju[index].age;
				this.inputbox.sex = this.shuju[index].sex;
				if(this.inputbox.sex == "男"){
					this.inputbox.sex = "1";
				}else{
					this.inputbox.sex = "0";
				}
				this.isShowEdit = true;
			},
			hideDialog(){
				this.isShowEdit = false;
				admin.$notify({
		          title: '提示',
		          type:'info',
		          message: '修改取消！',
		          duration:2000
		        });
			},
			showAdd(){
				this.isShowAdd = true;
				admin.newAdmin.username = "";
				admin.newAdmin.password = "";
				admin.newAdmin.name = "";
				admin.newAdmin.age = "";
				admin.newAdmin.sex = "";
			},
			hideAdd(){
				this.isShowAdd = false;
				admin.$notify({
		          title: '提示',
		          type:'info',
		          message: '添加取消！',
		          duration:2000
		        });
			},
			selData(){
				axios.get("http://127.0.0.1:82/getData").then(function(response){
					
					for(let i=0;i<response.data.length;i++){
						if(response.data[i].sex == 1){
							response.data[i].sex = "男";
						}else{
							response.data[i].sex = "女";
						}
					}
					admin.shuju = response.data;
				})
			},
			delData(id){
				this.$confirm("确定删除这条数据吗？","重要消息",{
					type:"warning",
					closeOnClickModal:false
				}).then(function(){
					axios.get(`http://127.0.0.1:82/deleteData?ID=${id}`).then(function(response){
						if(response.data == "success"){
							admin.$notify({
					          title: '提示',
					          type:'success',
					          message: '删除成功！',
					          duration:2000
					        });
							admin.selData();
							admin.isShowDel = false;
						}else{
							admin.$notify({
					          title: '提示',
					          type:'error',
					          message: '删除失败！',
					          duration:2000
					        });
						}
					})
				}).catch(function(){
					admin.$notify({
			          title: '提示',
			          type:'info',
			          message: '删除取消！',
			          duration:2000
			        });
				})
			},
			addUser(){
				this.$confirm("确定添加这条数据吗？","重要消息",{
					type:"warning",
					closeOnClickModal:false
				}).then(function(){

					axios.get(`http://127.0.0.1:82/add`,{
						params:{
							username:admin.newAdmin.username,
							password:admin.newAdmin.password,
							name:admin.newAdmin.name,
							age:admin.newAdmin.age,
							sex:admin.newAdmin.sex
						}
					}).then(function(response){
						if(response.data == "success"){
							admin.$notify({
					          title: '提示',
					          type:'success',
					          message: '添加成功！',
					          duration:2000
					        });
							admin.selData();
							admin.isShowAdd = false;
						}else{
							admin.$notify({
					          title: '提示',
					          type:'error',
					          message: '添加失败！',
					          duration:2000
					        });
						}
					})

				}).catch(function(){

					admin.$notify({
			          title: '提示',
			          type:'info',
			          message: '添加取消！',
			          duration:2000
			        });

				})
			},
			xiugai(){
				this.$confirm("确定修改这条数据吗？","重要消息",{
					type:"warning",
					closeOnClickModal:false
				}).then(function(){

					axios.get(`http://127.0.0.1:82/upData`,{
						params:{
							id:admin.inputbox.id,
							username:admin.inputbox.username,
							password:admin.inputbox.password,
							name:admin.inputbox.name,
							age:admin.inputbox.age,
							sex:admin.inputbox.sex
						}
					}).then(function(response){
						if(response.data == "success"){
							admin.$notify({
					          title: '提示',
					          type:'success',
					          message: '修改成功！',
					          duration:2000
					        });
							admin.selData();
							admin.isShowEdit = false;
						}else{
							admin.$notify({
					          title: '提示',
					          type:'error',
					          message: '修改失败！',
					          duration:2000
					        });
						}
					})

				}).catch(function(){

					admin.$notify({
			          title: '提示',
			          type:'info',
			          message: '修改取消！',
			          duration:2000
			        });

				})
			}
		},
		mounted(){
			this.selData();
		}
	})



}