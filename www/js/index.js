/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('send').addEventListener('click', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('login');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var name = document.getElementById('name');
		var paswd = document.getElementById('password');
		var send = document.getElementById('sendA');
		var nameStr='';
		var pwd='';
		nameStr=name.value;
		pwd=paswd.value;
		if(nameStr=='' && pwd==''){
			send.setAttribute('href','JavaScript:void(0)');
			navigator.notification.alert('姓名和密码不能为空！', null, '提示', 'OK');
		}
		else if(nameStr==''){
			send.setAttribute('href','JavaScript:void(0)');
            navigator.notification.alert('姓名不能为空！', null, '提示', 'OK');
		}
		else if(pwd==''){
			send.setAttribute('href','JavaScript:void(0)');
			navigator.notification.alert('密码不能为空！', null, '提示', 'OK');
		}
		else{
			send.setAttribute('href','main.html');
		}
    }
};

app.initialize();