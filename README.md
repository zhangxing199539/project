## 项目简介
 ### 这是一个员工管理系统：
   * 目前实现插入新员工功能。
   * 目前实现编辑员工信息功能。
   * 目前实现删除员工功能。

## 项目使用技术
* html/css/js等技术
* axios,jquery,Vue以及ElementUI等框架或类库
* 后端语言使用node.js

## 项目地址
* 连接至页面：http://www.twelvew.cn:8080/index.html

## 项目后端接口地址
### 这是查询接口
* 查询到数据库的信息
* 接口地址：http://www.twelvew.cn:8080/selData
* 无请求参数
* 请求方式：get
* 后端返回数据类型:JSON

### 这是添加接口
* 查询到数据库的信息
* 接口地址：http://www.twelvew.cn:8080/add
<table>
	<thead>
		<th>
			<td>数据列名称</td>
			<td>数据类型</td>
			<td>说明</td>
		</th>
	</thead>
	<tbody>
		<tr>
			<td>id</td>
			<td>int</td>
			<td>主键（唯一值）</td>
		</tr>
		<tr>
			<td>name</td>
			<td>string</td>
			<td>用户名</td>
		</tr>
		<tr>
			<td>sex</td>
			<td>int</td>
			<td>返回数字0和1(0为女性,1为男性)</td>
		</tr>
		<tr>
			<td>age</td>
			<td>int</td>
			<td>记录用户年龄</td>
		</tr>
		<tr>
			<td>user</td>
			<td>string</td>
			<td>账户名称</td>
		</tr>
		<tr>
			<td>password</td>
			<td>string</td>
			<td>账户密码</td>
		</tr>
	</tbody>
</table>
* 请求方式：get
* 后端返回数据类型:String类型
* 返回参数事例"success"代表成功,返回"error"代表错误

### 这是删除接口
* 查询到数据库的信息
* 接口地址：http://www.twelvew.cn:8080/delData
* 请求参数
* 请求方式：get
* 后端返回数据类型:String类型 
* 返回参数事例"success"代表成功,返回"error"代表错误

### 这是更改接口
* 查询到数据库的信息
* 接口地址：http://www.twelvew.cn:8080/upData
* 无请求参数
* 请求方式：get
* 后端返回数据类型:String类型
* 返回参数事例"success"代表成功,返回"error"代表错误