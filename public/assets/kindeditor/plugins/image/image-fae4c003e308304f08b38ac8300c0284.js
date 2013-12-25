/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/
KindEditor.plugin("image",function(e){var t=this,n="image",i=e.undef(t.allowImageUpload,!0),r=e.undef(t.allowImageRemote,!0),a=e.undef(t.formatUploadUrl,!0),o=e.undef(t.allowFileManager,!1),s=e.undef(t.uploadJson,t.basePath+"php/upload_json.php"),l=e.undef(t.imageTabIndex,0),c=t.pluginsPath+"image/images/",u=e.undef(t.extraFileUploadParams,{}),d=e.undef(t.filePostName,"imgFile"),f=e.undef(t.fillDescAfterUploadImage,!1),h=t.lang(n+".");t.plugin.imageDialog=function(i){function r(e,t){N.val(e),D.val(t),L=e,R=t}var l=(i.imageUrl,e.undef(i.imageWidth,""),e.undef(i.imageHeight,""),e.undef(i.imageTitle,""),e.undef(i.imageAlign,""),e.undef(i.showRemote,!0)),p=e.undef(i.showLocal,!0),m=e.undef(i.tabIndex,0),g=i.clickFn,v="kindeditor_upload_iframe_"+(new Date).getTime(),y=[];for(var b in u)y.push('<input type="hidden" name="'+b+'" value="'+u[b]+'" />');var _,w=['<div style="padding:20px;">','<div class="tabs"></div>','<div class="tab1" style="display:none;">','<div class="ke-dialog-row">','<label for="remoteUrl" style="width:60px;">'+h.remoteUrl+"</label>",'<input type="text" id="remoteUrl" class="ke-input-text" name="url" value="" style="width:200px;" /> &nbsp;','<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+h.viewServer+'" />',"</span>","</div>",'<div class="ke-dialog-row">','<label for="remoteWidth" style="width:60px;">'+h.size+"</label>",h.width+' <input type="text" id="remoteWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> ',h.height+' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> ','<img class="ke-refresh-btn" src="'+c+'refresh.png" width="16" height="16" alt="" style="cursor:pointer;" title="'+h.resetSize+'" />',"</div>",'<div class="ke-dialog-row">','<label style="width:60px;">'+h.align+"</label>",'<input type="radio" name="align" class="ke-inline-block" value="" checked="checked" /> <img name="defaultImg" src="'+c+'align_top.gif" width="23" height="25" alt="" />',' <input type="radio" name="align" class="ke-inline-block" value="left" /> <img name="leftImg" src="'+c+'align_left.gif" width="23" height="25" alt="" />',' <input type="radio" name="align" class="ke-inline-block" value="right" /> <img name="rightImg" src="'+c+'align_right.gif" width="23" height="25" alt="" />',"</div>",'<div class="ke-dialog-row">','<label for="remoteTitle" style="width:60px;">'+h.imgTitle+"</label>",'<input type="text" id="remoteTitle" class="ke-input-text" name="title" value="" style="width:200px;" />',"</div>","</div>",'<div class="tab2" style="display:none;">','<iframe name="'+v+'" style="display:none;"></iframe>','<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="'+v+'" action="'+e.addParam(s,"dir=image")+'">','<div class="ke-dialog-row">',y.join(""),'<label style="width:60px;">'+h.localUrl+"</label>",'<input type="text" name="localUrl" class="ke-input-text" tabindex="-1" style="width:200px;" readonly="true" /> &nbsp;','<input type="button" class="ke-upload-button" value="'+h.upload+'" />',"</div>","</form>","</div>","</div>"].join(""),C=p||o?450:400,k=p&&l?300:250,x=t.createDialog({name:n,width:C,height:k,title:t.lang(n),body:w,yesBtn:{name:t.lang("yes"),click:function(){if(!x.isLoading){if(p&&l&&_&&1===_.selectedIndex||!l)return""==I.fileBox.val()?(alert(t.lang("pleaseSelectFile")),void 0):(x.showLoading(t.lang("uploadLoading")),I.submit(),E.val(""),void 0);var n=e.trim(A.val()),i=N.val(),r=D.val(),a=M.val(),o="";return B.each(function(){return this.checked?(o=this.value,!1):void 0}),"http://"==n||e.invalidUrl(n)?(alert(t.lang("invalidUrl")),A[0].focus(),void 0):/^\d*$/.test(i)?/^\d*$/.test(r)?(g.call(t,n,a,i,r,0,o),void 0):(alert(t.lang("invalidHeight")),D[0].focus(),void 0):(alert(t.lang("invalidWidth")),N[0].focus(),void 0)}}},beforeRemove:function(){S.unbind(),N.unbind(),D.unbind(),K.unbind()}}),T=x.div,A=e('[name="url"]',T),E=e('[name="localUrl"]',T),S=e('[name="viewServer"]',T),N=e('.tab1 [name="width"]',T),D=e('.tab1 [name="height"]',T),K=e(".ke-refresh-btn",T),M=e('.tab1 [name="title"]',T),B=e('.tab1 [name="align"]',T);l&&p?(_=e.tabs({src:e(".tabs",T),afterSelect:function(){}}),_.add({title:h.remoteImage,panel:e(".tab1",T)}),_.add({title:h.localImage,panel:e(".tab2",T)}),_.select(m)):l?e(".tab1",T).show():p&&e(".tab2",T).show();var I=e.uploadbutton({button:e(".ke-upload-button",T)[0],fieldName:d,form:e(".ke-form",T),target:v,width:60,afterUpload:function(i){if(x.hideLoading(),0===i.error){var r=i.url;a&&(r=e.formatUrl(r,"absolute")),t.afterUpload&&t.afterUpload.call(t,r,i,n),f?(e(".ke-dialog-row #remoteUrl",T).val(r),e(".ke-tabs-li",T)[0].click(),e(".ke-refresh-btn",T).click()):g.call(t,r,i.title,i.width,i.height,i.border,i.align)}else alert(i.message)},afterError:function(e){x.hideLoading(),t.errorDialog(e)}});I.fileBox.change(function(){E.val(I.fileBox.val())}),o?S.click(function(){t.loadPlugin("filemanager",function(){t.plugin.filemanagerDialog({viewType:"VIEW",dirName:"image",clickFn:function(n){t.dialogs.length>1&&(e('[name="url"]',T).val(n),t.afterSelectFile&&t.afterSelectFile.call(t,n),t.hideDialog())}})})}):S.hide();var L=0,R=0;return K.click(function(){var t=e('<img src="'+A.val()+'" />',document).css({position:"absolute",visibility:"hidden",top:0,left:"-1000px"});t.bind("load",function(){r(t.width(),t.height()),t.remove()}),e(document.body).append(t)}),N.change(function(){L>0&&D.val(Math.round(R/L*parseInt(this.value,10)))}),D.change(function(){R>0&&N.val(Math.round(L/R*parseInt(this.value,10)))}),A.val(i.imageUrl),r(i.imageWidth,i.imageHeight),M.val(i.imageTitle),B.each(function(){return this.value===i.imageAlign?(this.checked=!0,!1):void 0}),l&&0===m&&(A[0].focus(),A[0].select()),x},t.plugin.image={edit:function(){var e=t.plugin.getSelectedImage();t.plugin.imageDialog({imageUrl:e?e.attr("data-ke-src"):"http://",imageWidth:e?e.width():"",imageHeight:e?e.height():"",imageTitle:e?e.attr("title"):"",imageAlign:e?e.attr("align"):"",showRemote:r,showLocal:i,tabIndex:e?0:l,clickFn:function(e,n,i,r,a,o){t.exec("insertimage",e,n,i,r,a,o),setTimeout(function(){t.hideDialog().focus()},0)}})},"delete":function(){var e=t.plugin.getSelectedImage();"a"==e.parent().name&&(e=e.parent()),e.remove(),t.addBookmark()}},t.clickToolbar(n,t.plugin.image.edit)});