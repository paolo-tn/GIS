/**
 * Class: DialogYesNo Represents a reusable message dialog *
 * 
 * usage:
 * 
 * //import jquery-ui dialog   plugin
 * <script type="text/javascript" src="JsLib/jquery-ui-1.8.23.custom/js/jquery-ui-1.8.23.custom.min.js"></script> 
 * 
 * //get an instance and initialize  it * 
 * var dialog = new DialogYesNo();
 * //pass options as params,  see defaults
 * dialog.init({options});
 * 
 * 
 * 
 */
function DialogYesNo() {
	var $dialog;

	this.init = function(options) {
		var defaults = {
			yes_callback : function() {
				$(this).close();
			},
			no_callback : function() {
				$(this).close();
			},
			yes_button : "Yes",
			no_button : "No",
			header : "Message",
			message : "Choose option"
		};

		var settings = $.extend(defaults, options);

		$dialog = $('<div id="dialog"></div>').appendTo('body').html(
				'<div id="dialog-header"></div>').dialog({
			modal : true,
			title : settings.header,
			zIndex : 10000,
			autoOpen : false,
			width : 'auto',
			resizable : false,
			buttons : {
				'Yes' : settings.yes_callback,
				'No' : settings.no_callback,
			},
			close : function(event, ui) {
				$(this).remove();
			}
		});
		$('#dialog-header').text(settings.message);
		$('.ui-dialog-buttonset>buttons:nth-child(1)').val(settings.yes_button);
		$('.ui-dialog-buttonset>buttons:nth-child(2)').val(settings.no_button);

	};
	this.open = function() {
		$dialog.dialog('open');
	};
}
