'use strict';
// Class definition
var KTDatatableChildDataLocalDemo = function() {
	// Private functions

	var subTableInit = function(e) {
		$('<div/>').attr('id', 'child_data_local_' + e.data.RecordID).appendTo(e.detailCell).KTDatatable({
			data: {
				type: 'local',
				source: e.data.Orders,
				pageSize: 5,
			},

			// layout definition
			layout: {
				scroll: true,
				height: 400,
				footer: false,
			},

			sortable: true,

			// columns definition
			columns: [
				{
					field: 'OrderID',
					title: 'Order ID',
					template: function(row) {
						return '<span>' + row.OrderID + ' - ' + row.ShipCountry + '</span>';
					},
				}, {
					field: 'ShipCountry',
					title: 'Country',
					width: 100
				}, {
					field: 'ShipAddress',
					title: 'Ship Address',
				}, {
					field: 'ShipName',
					title: 'Ship Name',
				}, {
					field: 'TotalPayment',
					title: 'Payment',
					type: 'number',
				}, {
					field: 'Status',
					title: 'Status',
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Pending', 'class': 'label-light-warning'},
							2: {'title': 'Delivered', 'class': ' label-light-success'},
							3: {'title': 'Canceled', 'class': ' label-light-danger'},
							4: {'title': 'Approved', 'class': ' label-light-success'},
						};
						return '<span class="label ' + status[row.Status].class + ' label-inline font-weight-bold label-lg">' + status[row.Status].title + '</span>';
					},
				}, {
					field: 'Type',
					title: 'Type',
					autoHide: false,
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Approved', 'state': 'success'},
							2: {'title': 'Canceled', 'state': 'danger'},
							3: {'title': 'Pending', 'state': 'warning'},
						};
						return '<span class="label label-' + status[row.Type].state + ' label-dot mr-2"></span><span class="font-weight-bold text-' +
							status[row.Type].state + '">' +
							status[row.Type].title + '</span>';
					},
				}],
		});
	};

	// demo initializer
	var mainTableInit = function() {

		var dataJSONArray = JSON.parse(
			'[{"RecordID":1,"FirstName":"Sam","LastName":"Smith","Company":"Esten Dental Group","Email":"name@company.com","Phone":"555-555-3486","Status":4,"Type":1,"Orders":[{"OrderID":"123456","ShipCountry":"USA","ShipAddress":"500 Meadow Ave, Ithaca, NY 14850","ShipName":"Company Name","OrderDate":"3/7/2021","TotalPayment":"$594.00","Status":1,"Type":1},{"OrderID":"0078-0595","ShipCountry":"USA","ShipAddress":"953 Schlimgen Park","ShipName":"Company Name","OrderDate":"1/12/2021","TotalPayment":"$45.00","Status":1,"Type":1},{"OrderID":"47593-443","ShipCountry":"USA","ShipAddress":"123 Memorial Park","ShipName":"Company Name","OrderDate":"2/12/2021","TotalPayment":"$705.28","Status":1,"Type":1},{"OrderID":"50114-5236","ShipCountry":"USA","ShipAddress":"1420 Ocean Drive","ShipName":"Company Name","OrderDate":"6/6/202","TotalPayment":"$778690.72","Status":5,"Type":3},{"OrderID":"36987-2826","ShipCountry":"PL","ShipAddress":"3995 Huxley Court","ShipName":"Company Name ","OrderDate":"9/1/2021","TotalPayment":"$12.02","Status":5,"Type":2},{"OrderID":"62750-006","ShipCountry":"USA","ShipAddress":"2064 Dennis Parkway","ShipName":"Company Name","OrderDate":"9/21/2021","TotalPayment":"$100.45","Status":5,"Type":2},{"OrderID":"59779-597","ShipCountry":"USA","ShipAddress":"32 Golf Course Parkway","ShipName":"Jaskolski-Hilll","OrderDate":"4/4/2021","TotalPayment":"$754685.32","Status":3,"Type":3},{"OrderID":"59762-3743","ShipCountry":"HT","ShipAddress":"76 Anthes Hill","ShipName":"Reynolds Group","OrderDate":"1/23/2021","TotalPayment":"$100.66","Status":2,"Type":1},{"OrderID":"64942-1114","ShipCountry":"ID","ShipAddress":"7511 Mayfield Avenue","ShipName":"Purdy and Sons","OrderDate":"12/1/2021","TotalPayment":"$62.04","Status":6,"Type":2},{"OrderID":"13537-505","ShipCountry":"USA","ShipAddress":"36303 Esch Parkway","ShipName":"Company Name","OrderDate":"1/31/2021","TotalPayment":"$200.79","Status":4,"Type":1},{"OrderID":"16781-426","ShipCountry":"USA","ShipAddress":"507 Columbus Lane","ShipName":"Carter, Gibson and Kassulke","OrderDate":"10/26/2021","TotalPayment":"$100.14","Status":2,"Type":2},{"OrderID":"60512-1008","ShipCountry":"USA","ShipAddress":"8 Jana Lane","ShipName":"Company Name","OrderDate":"1/10/2021","TotalPayment":"$242894.68","Status":3,"Type":1},{"OrderID":"0456-0461","ShipCountry":"USA","ShipAddress":"5127 Roxbury Trail","ShipName":"Company Name","OrderDate":"12/10/2021","TotalPayment":"$120.50","Status":5,"Type":3},{"OrderID":"63304-098","ShipCountry":"GR","ShipAddress":"54627 Randy Lane","ShipName":"Company Name","OrderDate":"12/11/2021","TotalPayment":"$278247.03","Status":3,"Type":2},{"OrderID":"64092-317","ShipCountry":"CN","ShipAddress":"292 Rusk Lane","ShipName":"Bode, Zboncak and Reichel","OrderDate":"4/10/2021","TotalPayment":"$100.38","Status":2,"Type":2},{"OrderID":"36987-1483","ShipCountry":"CU","ShipAddress":"2225 Saint Paul Junction","ShipName":"Company Name","OrderDate":"2/7/2021","TotalPayment":"$1147799.38","Status":4,"Type":2},{"OrderID":"68084-814","ShipCountry":"USA","ShipAddress":"0 Sheridan Avenue","ShipName":"Little-O\'Hara","OrderDate":"11/24/2021","TotalPayment":"$394051.79","Status":6,"Type":1},{"OrderID":"42023-131","ShipCountry":"BR","ShipAddress":"4238 Roth Drive","ShipName":"Company Name","OrderDate":"4/23/2021","TotalPayment":"$100.31","Status":6,"Type":3},{"OrderID":"14290-350","ShipCountry":"CN","ShipAddress":"41950 Troy Point","ShipName":"Windler, Larkin and Collier","OrderDate":"4/17/2021","TotalPayment":"$100.40","Status":4,"Type":1}]},\n' +
			'{"RecordID":349,"FirstName":"Tina","LastName":"Heard","Company":"Company Name","Email":"name@company.com","Phone":"465-123-8300","Status":1,"Type":2,"Orders":[{"OrderID":"54868-5649","ShipCountry":"USA","ShipAddress":"594 Anderson Road","ShipName":"Daniel-Huel","OrderDate":"6/24/2021","TotalPayment":"$100.04","Status":4,"Type":1},{"OrderID":"0078-0327","ShipCountry":"USA","ShipAddress":"2 Lotheville Parkway","ShipName":"Company Name","OrderDate":"2/6/2021","TotalPayment":"$100.19","Status":2,"Type":1},{"OrderID":"0363-2173","ShipCountry":"CN","ShipAddress":"5921 Becker Terrace","ShipName":"Rohan-Marks","OrderDate":"7/2/2021","TotalPayment":"$100.99","Status":4,"Type":2},{"OrderID":"14783-105","ShipCountry":"USA","ShipAddress":"9 Waubesa Court","ShipName":"Anderson, Gutkowski and Zieme","OrderDate":"6/15/2021","TotalPayment":"$100.32","Status":1,"Type":3},{"OrderID":"59779-215","ShipCountry":"USA","ShipAddress":"4 Clarendon Alley","ShipName":"Company Name","OrderDate":"9/7/2021","TotalPayment":"$100.95","Status":1,"Type":1},{"OrderID":"49349-655","ShipCountry":"LR","ShipAddress":"3033 Arrowood Park","ShipName":"Boyle, Dicki and Wilderman","OrderDate":"3/17/2021","TotalPayment":"$100.38","Status":2,"Type":1},{"OrderID":"37000-821","ShipCountry":"DE","ShipAddress":"8 Esch Drive","ShipName":"Company Name","OrderDate":"5/11/2021","TotalPayment":"$100.75","Status":5,"Type":2},{"OrderID":"36987-2794","ShipCountry":"USA","ShipAddress":"94302 Katie Place","ShipName":"Company Name","OrderDate":"5/1/2021","TotalPayment":"$100.00","Status":6,"Type":3},{"OrderID":"52533-172","ShipCountry":"USA","ShipAddress":"93 Parkside Center","ShipName":"Company Name","OrderDate":"1/22/2021","TotalPayment":"$100.94","Status":3,"Type":2}]},\n' +
			'{"RecordID":350,"FirstName":"Jim","LastName":"Cole","Company":"Company Name","Email":"name@company.com","Phone":"284-728-5534","Status":6,"Type":2,"Orders":[{"OrderID":"13734-023","ShipCountry":"USA","ShipAddress":"3434 Gulseth Plaza","ShipName":"Company Name","OrderDate":"7/12/2021","TotalPayment":"$707730.01","Status":3,"Type":2},{"OrderID":"64406-008","ShipCountry":"ID","ShipAddress":"4 Boyd Avenue","ShipName":"Dickens-Mann","OrderDate":"7/31/2021","TotalPayment":"$100.10","Status":1,"Type":3},{"OrderID":"64117-596","ShipCountry":"USA","ShipAddress":"40 Katie Circle","ShipName":"Company Name","OrderDate":"12/4/2021","TotalPayment":"$100.28","Status":1,"Type":2},{"OrderID":"0591-2784","ShipCountry":"CA","ShipAddress":"42 Sutherland Pass","ShipName":"Company Name","OrderDate":"6/25/2021","TotalPayment":"$242558.93","Status":3,"Type":2},{"OrderID":"55154-4029","ShipCountry":"USA","ShipAddress":"801 Badeau Alley","ShipName":"Company Name","OrderDate":"10/12/2021","TotalPayment":"$100.48","Status":6,"Type":2},{"OrderID":"65862-208","ShipCountry":"USA","ShipAddress":"325 Birchwood Alley","ShipName":"Company Name","OrderDate":"3/3/2021","TotalPayment":"$1180528.08","Status":5,"Type":3}]}]');

		var datatable = $('#kt_datatable').KTDatatable({
			// datasource definition
			data: {
				type: 'local',
				source: dataJSONArray,
				pageSize: 10, // display 20 records per page
			},

			// layout definition
			layout: {
				scroll: false,
				height: null,
				footer: false,
			},

			sortable: true,

			filterable: false,

			pagination: true,

			detail: {
				title: 'Load sub table',
				content: subTableInit,
			},

			search: {
				input: $('#kt_datatable_search_query'),
				key: 'generalSearch'
			},

			// columns definition
			columns: [
				{
					field: 'RecordID',
					title: '',
					sortable: false,
					width: 30,
					textAlign: 'center',
				}, {
					field: 'FirstName',
					title: 'First Name',
				}, {
					field: 'LastName',
					title: 'Last Name',
				}, {
					field: 'Company',
					title: 'Company',
				}, {
					field: 'Email',
					title: 'Email',
				}, {
					field: 'Status',
					title: 'Status',
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Pending', 'class': 'label-primary'},
							2: {'title': 'Delivered', 'class': ' label-danger'},
							3: {'title': 'Canceled', 'class': ' label-primary'},
							4: {'title': 'Success', 'class': ' label-success'},
							5: {'title': 'Info', 'class': ' label-info'},
							6: {'title': 'Danger', 'class': ' label-danger'},
							7: {'title': 'Warning', 'class': ' label-warning'},
						};
						return '<span class="label ' + status[row.Status].class + ' label-inline label-pill">' + status[row.Status].title + '</span>';
					},
				}, {
					field: 'Type',
					title: 'Type',
					autoHide: false,
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Online', 'state': 'danger'},
							2: {'title': 'Retail', 'state': 'primary'},
							3: {'title': 'Direct', 'state': 'success'},
						};
						return '<span class="label label-' + status[row.Type].state + ' label-dot"></span>&nbsp;<span class="font-weight-bold text-' + status[row.Type].state +
							'">' +
							status[row.Type].title + '</span>';
					},
				}, {
					field: 'Actions',
					width: 130,
					title: 'Actions',
					sortable: false,
					overflow: 'visible',
					template: function() {
						return '\
	                        <div class="dropdown dropdown-inline">\
	                            <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
	                                <span class="svg-icon svg-icon-md">\
	                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                            <rect x="0" y="0" width="24" height="24"/>\
	                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
	                                        </g>\
	                                    </svg>\
	                                </span>\
	                            </a>\
	                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
	                                <ul class="navi flex-column navi-hover py-2">\
	                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
	                                        Choose an action:\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-print"></i></span>\
	                                            <span class="navi-text">Print</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-copy"></i></span>\
	                                            <span class="navi-text">Copy</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\
	                                            <span class="navi-text">Excel</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\
	                                            <span class="navi-text">CSV</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\
	                                            <span class="navi-text">PDF</span>\
	                                        </a>\
	                                    </li>\
	                                </ul>\
	                            </div>\
	                        </div>\
	                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
	                        </a>\
	                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\
	                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
	                        </a>\
	                    ';
					},
				}],
		});

		$('#kt_datatable_search_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Status');
		});

		$('#kt_datatable_search_type').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Type');
		});

		$('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
	};

	return {
		// Public functions
		init: function() {
			// init dmeo
			mainTableInit();
		},
	};
}();

jQuery(document).ready(function() {
	KTDatatableChildDataLocalDemo.init();
});
