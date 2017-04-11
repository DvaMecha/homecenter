<template>
  <div class="add_view">
  <div class="row clearfix">
		<div class="col-md-12 column">
			<div class="row clearfix">
				<div class="col-md-2 column">
				</div>
				<div class="col-md-6 column">
					<div class="btn-group">
						 <button class="btn btn-default">设备类别</button> <button data-toggle="dropdown" class="btn btn-default dropdown-toggle"><span class="caret"></span></button>
						<ul class="dropdown-menu">
							<li v-for="item in items">{{ item.equType }}</li>
						</ul>
					</div>
					<form class="form-horizontal" role="form">
                        <div class="form-group">
	<p>input 元素：</p>
  <input v-model="message" placeholder="设备名称">
  <p> {{ equmessage }}</p>
    
  <p>设备厂商</p>
  <p style="white-space: pre">{{ equmessage2 }}</p>
  <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
                        </div>
						<div class="form-group">
							 <label for="inputEmail3" class="col-sm-2 control-label">设备型号</label>
							<div class="col-sm-10">
								<input class="form-control" id="inputEmail3" type="email" />
							</div>
						</div>
						<div class="form-group">
							 <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
							<div class="col-sm-10">
								<input class="form-control" id="inputPassword3" type="password" />
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<div class="checkbox">
									 <label><input type="checkbox" />Remember me</label>
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								 <button type="submit" class="btn btn-default">提交</button>
							</div>
						</div>
					</form>
				</div>
				<div class="col-md-4 column">
				</div>
			</div>
		</div>
	</div>

  </div>
</template>

<script>
import server from servers.api
export default {
  name: 'add_view',
  data () {
    return {
      msg: '添加设备',
      items: [
        {message: 'Foo' },
        {message: 'Bar' },
      ],
			equlist:function(){
				return server.getEquList();
			}

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
