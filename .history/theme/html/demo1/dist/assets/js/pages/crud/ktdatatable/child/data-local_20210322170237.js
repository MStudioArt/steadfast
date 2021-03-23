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
							1: {'title': 'Pending', 'class': 'label-light-primary'},
							2: {'title': 'Delivered', 'class': ' label-light-danger'},
							3: {'title': 'Canceled', 'class': ' label-light-primary'},
							4: {'title': 'Success', 'class': ' label-light-success'},
							5: {'title': 'Info', 'class': ' label-light-info'},
							6: {'title': 'Danger', 'class': ' label-light-danger'},
							7: {'title': 'Warning', 'class': ' label-light-warning'},
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
							1: {'title': 'Online', 'state': 'danger'},
							2: {'title': 'Retail', 'state': 'primary'},
							3: {'title': 'Direct', 'state': 'success'},
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
			'[{"RecordID":1,"FirstName":"Sam","LastName":"Smith","Company":"Esten Dental Group","Email":"name@company.com","Phone":"555-555-3486","Status":4,"Type":1,"Orders":[{"OrderID":"123456","ShipCountry":"USA","ShipAddress":"500 Meadow Ave, Ithaca, NY 14850","ShipName":"Rogahn-Shanahan","OrderDate":"3/7/2021","TotalPayment":"$594.00","Status":1,"Type":1},{"OrderID":"0078-0595","ShipCountry":"USA","ShipAddress":"953 Schlimgen Park","ShipName":"Company Name","OrderDate":"1/12/2021","TotalPayment":"$45.00","Status":1,"Type":1},{"OrderID":"47593-443","ShipCountry":"USA","ShipAddress":"123 Memorial Park","ShipName":"Company Name","OrderDate":"2/12/2021","TotalPayment":"$705.28","Status":1,"Type":1},{"OrderID":"50114-5236","ShipCountry":"USA","ShipAddress":"1420 Ocean Drive","ShipName":"Company Name","OrderDate":"6/6/202","TotalPayment":"$778690.72","Status":5,"Type":3},{"OrderID":"36987-2826","ShipCountry":"PL","ShipAddress":"3995 Huxley Court","ShipName":"Kling, Miller and Quitzon","OrderDate":"9/1/2017","TotalPayment":"$773995.02","Status":5,"Type":2},{"OrderID":"62750-006","ShipCountry":"ID","ShipAddress":"2064 Dennis Parkway","ShipName":"Lang, Kohler and Considine","OrderDate":"9/21/2017","TotalPayment":"$830550.45","Status":5,"Type":2},{"OrderID":"59779-597","ShipCountry":"IR","ShipAddress":"32 Golf Course Parkway","ShipName":"Jaskolski-Hilll","OrderDate":"4/4/2017","TotalPayment":"$754685.32","Status":3,"Type":3},{"OrderID":"59762-3743","ShipCountry":"HT","ShipAddress":"76 Anthes Hill","ShipName":"Reynolds Group","OrderDate":"1/23/2017","TotalPayment":"$295435.66","Status":2,"Type":1},{"OrderID":"64942-1114","ShipCountry":"ID","ShipAddress":"7511 Mayfield Avenue","ShipName":"Purdy and Sons","OrderDate":"12/1/2016","TotalPayment":"$636911.04","Status":6,"Type":2},{"OrderID":"13537-505","ShipCountry":"KZ","ShipAddress":"36303 Esch Parkway","ShipName":"Reinger, Howe and Kertzmann","OrderDate":"1/31/2016","TotalPayment":"$753691.79","Status":4,"Type":1},{"OrderID":"16781-426","ShipCountry":"SE","ShipAddress":"507 Columbus Lane","ShipName":"Carter, Gibson and Kassulke","OrderDate":"10/26/2017","TotalPayment":"$873190.14","Status":2,"Type":2},{"OrderID":"60512-1008","ShipCountry":"ID","ShipAddress":"8 Jana Lane","ShipName":"Rutherford and Sons","OrderDate":"1/10/2017","TotalPayment":"$242894.68","Status":3,"Type":1},{"OrderID":"0456-0461","ShipCountry":"CN","ShipAddress":"5127 Roxbury Trail","ShipName":"Johnson Inc","OrderDate":"12/10/2017","TotalPayment":"$328850.50","Status":5,"Type":3},{"OrderID":"63304-098","ShipCountry":"GR","ShipAddress":"54627 Randy Lane","ShipName":"Johnston, Veum and Funk","OrderDate":"12/11/2016","TotalPayment":"$278247.03","Status":3,"Type":2},{"OrderID":"64092-317","ShipCountry":"CN","ShipAddress":"292 Rusk Lane","ShipName":"Bode, Zboncak and Reichel","OrderDate":"4/10/2016","TotalPayment":"$798173.38","Status":2,"Type":2},{"OrderID":"36987-1483","ShipCountry":"CU","ShipAddress":"2225 Saint Paul Junction","ShipName":"Dach, Haag and Koss","OrderDate":"2/7/2017","TotalPayment":"$1147799.38","Status":4,"Type":2},{"OrderID":"68084-814","ShipCountry":"ID","ShipAddress":"0 Sheridan Avenue","ShipName":"Little-O\'Hara","OrderDate":"11/24/2016","TotalPayment":"$394051.79","Status":6,"Type":1},{"OrderID":"42023-131","ShipCountry":"BR","ShipAddress":"4238 Roth Drive","ShipName":"Boehm LLC","OrderDate":"4/23/2016","TotalPayment":"$300684.31","Status":6,"Type":3},{"OrderID":"14290-350","ShipCountry":"CN","ShipAddress":"41950 Troy Point","ShipName":"Windler, Larkin and Collier","OrderDate":"4/17/2017","TotalPayment":"$467794.40","Status":4,"Type":1}]},\n' +
	
			
			'{"RecordID":347,"FirstName":"Bambi","LastName":"Overil","Company":"Jabbersphere","Email":"boveril9m@flickr.com","Phone":"797-280-3131","Status":6,"Type":3,"Orders":[{"OrderID":"36987-2949","ShipCountry":"CN","ShipAddress":"4 School Terrace","ShipName":"Witting-Bogisich","OrderDate":"12/12/2016","TotalPayment":"$605928.90","Status":5,"Type":1},{"OrderID":"68462-104","ShipCountry":"CA","ShipAddress":"5492 Del Sol Point","ShipName":"Predovic, Wunsch and Denesik","OrderDate":"1/26/2017","TotalPayment":"$474222.86","Status":3,"Type":2},{"OrderID":"68016-190","ShipCountry":"AR","ShipAddress":"46380 Shasta Hill","ShipName":"Gleichner, O\'Conner and Hodkiewicz","OrderDate":"12/28/2017","TotalPayment":"$801189.76","Status":1,"Type":2},{"OrderID":"44004-802","ShipCountry":"CN","ShipAddress":"5987 Golf Course Center","ShipName":"Fisher, Rempel and Reinger","OrderDate":"7/25/2016","TotalPayment":"$1066038.27","Status":6,"Type":3},{"OrderID":"54868-6167","ShipCountry":"PT","ShipAddress":"72 Waxwing Street","ShipName":"Buckridge-Corwin","OrderDate":"9/20/2016","TotalPayment":"$548563.91","Status":4,"Type":1},{"OrderID":"60512-6502","ShipCountry":"PH","ShipAddress":"74454 Meadow Vale Avenue","ShipName":"Ratke-Howe","OrderDate":"3/9/2016","TotalPayment":"$194860.68","Status":3,"Type":2},{"OrderID":"23155-028","ShipCountry":"GR","ShipAddress":"88300 Spaight Pass","ShipName":"Larkin-Prosacco","OrderDate":"8/18/2016","TotalPayment":"$1180587.36","Status":4,"Type":1},{"OrderID":"46123-021","ShipCountry":"PH","ShipAddress":"75595 Maywood Terrace","ShipName":"Bernhard-Funk","OrderDate":"7/13/2017","TotalPayment":"$138618.75","Status":2,"Type":2},{"OrderID":"67457-507","ShipCountry":"CZ","ShipAddress":"81 Acker Court","ShipName":"Spencer, Ondricka and Hamill","OrderDate":"7/11/2017","TotalPayment":"$29873.79","Status":6,"Type":2},{"OrderID":"55513-730","ShipCountry":"SE","ShipAddress":"494 Riverside Plaza","ShipName":"Quigley, Jenkins and Muller","OrderDate":"10/25/2017","TotalPayment":"$998897.81","Status":4,"Type":2}]},\n' +
			'{"RecordID":348,"FirstName":"Ave","LastName":"McEntagart","Company":"Podcat","Email":"amcentagart9n@homestead.com","Phone":"782-598-0729","Status":3,"Type":3,"Orders":[{"OrderID":"53238-001","ShipCountry":"PT","ShipAddress":"68 Mandrake Lane","ShipName":"Lueilwitz, Adams and Kuhlman","OrderDate":"3/18/2016","TotalPayment":"$466148.05","Status":5,"Type":1},{"OrderID":"45802-014","ShipCountry":"MX","ShipAddress":"7 Upham Junction","ShipName":"Simonis and Sons","OrderDate":"8/29/2016","TotalPayment":"$286495.68","Status":2,"Type":2},{"OrderID":"62584-781","ShipCountry":"UA","ShipAddress":"4099 Merry Plaza","ShipName":"Lemke, Balistreri and Windler","OrderDate":"3/22/2017","TotalPayment":"$637212.62","Status":5,"Type":2},{"OrderID":"54569-6121","ShipCountry":"BR","ShipAddress":"780 Manley Parkway","ShipName":"Bailey, Schiller and Kling","OrderDate":"12/24/2017","TotalPayment":"$1058402.05","Status":2,"Type":3},{"OrderID":"0527-1638","ShipCountry":"GR","ShipAddress":"52 Lillian Lane","ShipName":"Hoppe, Sanford and Jacobs","OrderDate":"9/8/2016","TotalPayment":"$601221.51","Status":3,"Type":2},{"OrderID":"49349-549","ShipCountry":"ZA","ShipAddress":"50590 Valley Edge Hill","ShipName":"Borer-Reichel","OrderDate":"11/20/2016","TotalPayment":"$959770.81","Status":2,"Type":2},{"OrderID":"0187-2201","ShipCountry":"PE","ShipAddress":"1 Hintze Lane","ShipName":"Jast, Hodkiewicz and Feest","OrderDate":"2/11/2016","TotalPayment":"$1056217.09","Status":4,"Type":3},{"OrderID":"68472-104","ShipCountry":"IE","ShipAddress":"152 Hoepker Lane","ShipName":"Stehr, Lemke and Johnston","OrderDate":"5/3/2016","TotalPayment":"$194573.19","Status":3,"Type":3},{"OrderID":"49349-561","ShipCountry":"RU","ShipAddress":"68989 Sheridan Pass","ShipName":"Koch, Luettgen and Powlowski","OrderDate":"8/20/2016","TotalPayment":"$887508.70","Status":6,"Type":1},{"OrderID":"21130-463","ShipCountry":"PT","ShipAddress":"22998 Crownhardt Lane","ShipName":"Crist and Sons","OrderDate":"9/22/2017","TotalPayment":"$1075519.13","Status":5,"Type":2},{"OrderID":"10019-510","ShipCountry":"EG","ShipAddress":"6 Vernon Drive","ShipName":"Hodkiewicz LLC","OrderDate":"6/14/2016","TotalPayment":"$1037033.00","Status":1,"Type":3},{"OrderID":"49349-156","ShipCountry":"CZ","ShipAddress":"456 Straubel Lane","ShipName":"Balistreri, Blanda and Heaney","OrderDate":"3/29/2016","TotalPayment":"$663026.23","Status":2,"Type":3},{"OrderID":"30142-839","ShipCountry":"CN","ShipAddress":"5585 Erie Hill","ShipName":"O\'Keefe-Hagenes","OrderDate":"3/31/2016","TotalPayment":"$558067.95","Status":6,"Type":2},{"OrderID":"54482-147","ShipCountry":"BR","ShipAddress":"65 Trailsway Center","ShipName":"Waters-Fritsch","OrderDate":"4/24/2016","TotalPayment":"$299405.61","Status":1,"Type":3},{"OrderID":"50227-3251","ShipCountry":"FR","ShipAddress":"9059 Brickson Park Junction","ShipName":"Kovacek-Tromp","OrderDate":"11/10/2016","TotalPayment":"$654083.49","Status":6,"Type":1},{"OrderID":"10742-8214","ShipCountry":"NL","ShipAddress":"7550 Spenser Place","ShipName":"Mitchell-McDermott","OrderDate":"3/8/2016","TotalPayment":"$86975.70","Status":3,"Type":2},{"OrderID":"0409-0221","ShipCountry":"PL","ShipAddress":"05285 Hanover Parkway","ShipName":"Mitchell, Zemlak and Schroeder","OrderDate":"9/23/2016","TotalPayment":"$1154629.91","Status":4,"Type":2},{"OrderID":"0378-5272","ShipCountry":"CN","ShipAddress":"50 Rockefeller Point","ShipName":"Larkin-Ledner","OrderDate":"8/17/2017","TotalPayment":"$1112197.52","Status":1,"Type":2}]},\n' +
			'{"RecordID":349,"FirstName":"Nial","LastName":"Beden","Company":"Feedspan","Email":"nbeden9o@hostgator.com","Phone":"465-123-8300","Status":1,"Type":2,"Orders":[{"OrderID":"54868-5649","ShipCountry":"PH","ShipAddress":"594 Anderson Road","ShipName":"Daniel-Huel","OrderDate":"6/24/2016","TotalPayment":"$762496.04","Status":4,"Type":1},{"OrderID":"0078-0327","ShipCountry":"PH","ShipAddress":"2 Lotheville Parkway","ShipName":"Baumbach, Parisian and Ruecker","OrderDate":"2/6/2016","TotalPayment":"$999714.19","Status":2,"Type":1},{"OrderID":"0363-2173","ShipCountry":"CN","ShipAddress":"5921 Becker Terrace","ShipName":"Rohan-Marks","OrderDate":"7/2/2016","TotalPayment":"$44425.99","Status":4,"Type":2},{"OrderID":"14783-105","ShipCountry":"BR","ShipAddress":"9 Waubesa Court","ShipName":"Anderson, Gutkowski and Zieme","OrderDate":"6/15/2016","TotalPayment":"$144439.32","Status":1,"Type":3},{"OrderID":"59779-215","ShipCountry":"PT","ShipAddress":"4 Clarendon Alley","ShipName":"Cremin, Leuschke and Marks","OrderDate":"9/7/2016","TotalPayment":"$158843.95","Status":1,"Type":1},{"OrderID":"49349-655","ShipCountry":"LR","ShipAddress":"3033 Arrowood Park","ShipName":"Boyle, Dicki and Wilderman","OrderDate":"3/17/2016","TotalPayment":"$840995.38","Status":2,"Type":1},{"OrderID":"37000-821","ShipCountry":"DE","ShipAddress":"8 Esch Drive","ShipName":"Bogisich and Sons","OrderDate":"5/11/2016","TotalPayment":"$852346.75","Status":5,"Type":2},{"OrderID":"36987-2794","ShipCountry":"PY","ShipAddress":"94302 Katie Place","ShipName":"Doyle, Boyer and Franecki","OrderDate":"5/1/2016","TotalPayment":"$1086070.09","Status":6,"Type":3},{"OrderID":"52533-172","ShipCountry":"ID","ShipAddress":"93 Parkside Center","ShipName":"King and Sons","OrderDate":"1/22/2017","TotalPayment":"$628455.94","Status":3,"Type":2}]},\n' +
			'{"RecordID":350,"FirstName":"Teddie","LastName":"Ferneley","Company":"Dabtype","Email":"tferneley9p@oakley.com","Phone":"284-728-5534","Status":6,"Type":2,"Orders":[{"OrderID":"13734-023","ShipCountry":"CN","ShipAddress":"3434 Gulseth Plaza","ShipName":"Hauck LLC","OrderDate":"7/12/2016","TotalPayment":"$707730.01","Status":3,"Type":2},{"OrderID":"64406-008","ShipCountry":"ID","ShipAddress":"4 Boyd Avenue","ShipName":"Dickens-Mann","OrderDate":"7/31/2016","TotalPayment":"$675692.10","Status":1,"Type":3},{"OrderID":"64117-596","ShipCountry":"IR","ShipAddress":"40 Katie Circle","ShipName":"Cremin, D\'Amore and Rowe","OrderDate":"12/4/2017","TotalPayment":"$479956.28","Status":1,"Type":2},{"OrderID":"0591-2784","ShipCountry":"CA","ShipAddress":"42 Sutherland Pass","ShipName":"Hermann-Schroeder","OrderDate":"6/25/2016","TotalPayment":"$242558.93","Status":3,"Type":2},{"OrderID":"55154-4029","ShipCountry":"PT","ShipAddress":"801 Badeau Alley","ShipName":"Cole, King and Crona","OrderDate":"10/12/2017","TotalPayment":"$641687.48","Status":6,"Type":2},{"OrderID":"65862-208","ShipCountry":"ID","ShipAddress":"325 Birchwood Alley","ShipName":"Anderson, Corkery and Gleason","OrderDate":"3/3/2016","TotalPayment":"$1180528.08","Status":5,"Type":3}]}]');

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
