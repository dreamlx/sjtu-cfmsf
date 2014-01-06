/*
 * validate.js 1.3
 * Copyright (c) 2011 Rick Harrison, http://rickharrison.me
 * validate.js is open sourced under the MIT license.
 * Portions of validate.js are inspired by CodeIgniter.
 * http://rickharrison.github.com/validate.js
 */
!function(e,t,a){var n={messages:{required:"The %s field is required.",matches:"The %s field does not match the %s field.","default":"The %s field is still set to default, please change.",valid_email:"The %s field must contain a valid email address.",valid_emails:"The %s field must contain all valid email addresses.",min_length:"The %s field must be at least %s characters in length.",max_length:"The %s field must not exceed %s characters in length.",exact_length:"The %s field must be exactly %s characters in length.",greater_than:"The %s field must contain a number greater than %s.",less_than:"The %s field must contain a number less than %s.",alpha:"The %s field must only contain alphabetical characters.",alpha_numeric:"The %s field must only contain alpha-numeric characters.",alpha_dash:"The %s field must only contain alpha-numeric characters, underscores, and dashes.",numeric:"The %s field must contain only numbers.",integer:"The %s field must contain an integer.",decimal:"The %s field must contain a decimal number.",is_natural:"The %s field must contain only positive numbers.",is_natural_no_zero:"The %s field must contain a number greater than zero.",valid_ip:"The %s field must contain a valid IP.",valid_base64:"The %s field must contain a base64 string.",valid_credit_card:"The %s field must contain a valid credit card number.",is_file_type:"The %s field must contain only %s files.",valid_url:"The %s field must contain a valid URL."},callback:function(){}},r=/^(.+?)\[(.+)\]$/,s=/^[0-9]+$/,i=/^\-?[0-9]+$/,l=/^\-?[0-9]*\.?[0-9]+$/,u=/^[a-zA-Z0-9.!#$%&amp;'*+\-\/=?\^_`{|}~\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)*$/,o=/^[a-z]+$/i,c=/^[a-z0-9]+$/i,d=/^[a-z0-9_\-]+$/i,h=/^[0-9]+$/i,f=/^[1-9][0-9]*$/i,m=/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,v=/[^a-zA-Z0-9\/\+=]/i,p=/^[\d\-\s]+$/,_=/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,g=function(e,t,r){this.callback=r||n.callback,this.errors=[],this.fields={},this.form=this._formByNameOrNode(e)||{},this.messages={},this.handlers={};for(var s=0,i=t.length;i>s;s++){var l=t[s];if((l.name||l.names)&&l.rules)if(l.names)for(var u=0;u<l.names.length;u++)this._addField(l,l.names[u]);else this._addField(l,l.name)}var o=this.form.onsubmit;this.form.onsubmit=function(e){return function(t){try{return e._validateForm(t)&&(o===a||o())}catch(n){}}}(this)},y=function(e,t){var a;{if(!(e.length>0)||"radio"!==e[0].type&&"checkbox"!==e[0].type)return e[t];for(a=0;a<e.length;a++)if(e[a].checked)return e[a][t]}};g.prototype.setMessage=function(e,t){return this.messages[e]=t,this},g.prototype.registerCallback=function(e,t){return e&&"string"==typeof e&&t&&"function"==typeof t&&(this.handlers[e]=t),this},g.prototype._formByNameOrNode=function(e){return"object"==typeof e?e:t.forms[e]},g.prototype._addField=function(e,t){this.fields[t]={name:t,display:e.display||t,rules:e.rules,id:null,type:null,value:null,checked:null}},g.prototype._validateForm=function(e){this.errors=[];for(var t in this.fields)if(this.fields.hasOwnProperty(t)){var n=this.fields[t]||{},r=this.form[n.name];r&&r!==a&&(n.id=y(r,"id"),n.type=r.length>0?r[0].type:r.type,n.value=y(r,"value"),n.checked=y(r,"checked"),this._validateField(n))}return"function"==typeof this.callback&&this.callback(this.errors,e),this.errors.length>0&&(e&&e.preventDefault?e.preventDefault():event&&(event.returnValue=!1)),!0},g.prototype._validateField=function(e){for(var t=e.rules.split("|"),s=e.rules.indexOf("required"),i=!e.value||""===e.value||e.value===a,l=0,u=t.length;u>l;l++){var o=t[l],c=null,d=!1,h=r.exec(o);if((-1!==s||-1!==o.indexOf("!callback_")||!i)&&(h&&(o=h[1],c=h[2]),"!"===o.charAt(0)&&(o=o.substring(1,o.length)),"function"==typeof this._hooks[o]?this._hooks[o].apply(this,[e,c])||(d=!0):"callback_"===o.substring(0,9)&&(o=o.substring(9,o.length),"function"==typeof this.handlers[o]&&this.handlers[o].apply(this,[e.value,c])===!1&&(d=!0)),d)){var f=this.messages[o]||n.messages[o],m="An error has occurred with the "+e.display+" field.";f&&(m=f.replace("%s",e.display),c&&(m=m.replace("%s",this.fields[c]?this.fields[c].display:c))),this.errors.push({id:e.id,name:e.name,message:m,rule:o});break}}},g.prototype._hooks={required:function(e){var t=e.value;return"checkbox"===e.type||"radio"===e.type?e.checked===!0:null!==t&&""!==t},"default":function(e,t){return e.value!==t},matches:function(e,t){var a=this.form[t];return a?e.value===a.value:!1},valid_email:function(e){return u.test(e.value)},valid_emails:function(e){for(var t=e.value.split(","),a=0;a<t.length;a++)if(!u.test(t[a]))return!1;return!0},min_length:function(e,t){return s.test(t)?e.value.length>=parseInt(t,10):!1},max_length:function(e,t){return s.test(t)?e.value.length<=parseInt(t,10):!1},exact_length:function(e,t){return s.test(t)?e.value.length===parseInt(t,10):!1},greater_than:function(e,t){return l.test(e.value)?parseFloat(e.value)>parseFloat(t):!1},less_than:function(e,t){return l.test(e.value)?parseFloat(e.value)<parseFloat(t):!1},alpha:function(e){return o.test(e.value)},alpha_numeric:function(e){return c.test(e.value)},alpha_dash:function(e){return d.test(e.value)},numeric:function(e){return s.test(e.value)},integer:function(e){return i.test(e.value)},decimal:function(e){return l.test(e.value)},is_natural:function(e){return h.test(e.value)},is_natural_no_zero:function(e){return f.test(e.value)},valid_ip:function(e){return m.test(e.value)},valid_base64:function(e){return v.test(e.value)},valid_url:function(e){return _.test(e.value)},valid_credit_card:function(e){if(!p.test(e.value))return!1;for(var t=0,a=0,n=!1,r=e.value.replace(/\D/g,""),s=r.length-1;s>=0;s--){var i=r.charAt(s);a=parseInt(i,10),n&&(a*=2)>9&&(a-=9),t+=a,n=!n}return 0===t%10},is_file_type:function(e,t){if("file"!==e.type)return!0;var a=e.value.substr(e.value.lastIndexOf(".")+1),n=t.split(","),r=!1,s=0,i=n.length;for(s;i>s;s++)a==n[s]&&(r=!0);return r}},e.FormValidator=g}(window,document),$(document).ready(function(){var e=$("#user_role").val();"admin"==e&&$("#editor_permission").css("display","none"),$("#user_role").change(function(){var e=$("#user_role").val();"admin"==e?$("#editor_permission").css("display","none"):"editor"==e&&$("#editor_permission").css("display","block")});var t=new FormValidator("user",[{name:"user[username]",display:"required",rules:"required|max_length[10]|min_length[4]"}],function(e){if(e.length>0){console.info(e),$("#new_user input").removeClass("error"),$(".spanerror").remove();for(var t in e){var a=$("#"+e[t].id);a.attr("value","").addClass("error").after('<span class=spanerror style="color:red; float:none" >'+e[t].message+"</span>")}}});t.setMessage("required","请填必填项！"),t.setMessage("min_length","字符长度过短"),t.setMessage("max_length","字符长度过长！")});