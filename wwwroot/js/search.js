
//var app = angular.module("RJProject",[]);
function modeling() {
	debugger
	var mdl = {}
	var ad = function () {
		return {
			ID: 0,
			Name: '',
			Area: 0,
			Rent: 0,
			Logage: 0,
			ParkingCount: 0,
			Region: ''
		}
		mdl.ad = ad();
	}

	mdl.Regions = [
		"منطقه ۱",
		"منطقه ۲",
		"منطقه ۳",
		"منطقه ۴",
		"منطقه ۵",
		"منطقه ۶",
		"منطقه ۷",
	]
	return mdl;
}

app.controller("SearchCtrl", ['$scope', 'serverInteract', function (scope, serverInteract) {



	scope.stateTypes = [
		{ ID: 1, Name: 'آپارتمان' },
		{ ID: 2, Name: 'مغازه' },
		{ ID: 2, Name: 'زمین' },
		{ ID: 2, Name: 'ویلا' },
	];
	scope.adTypes = [
		{ ID: 1, Name: 'فروش' },
		{ ID: 2, Name: 'اجاره' },
	]


	scope.searchFields = [
		{ ID: 1, Name: 'متراژ', porp: "", porp1: "" },
		{ ID: 2, Name: 'رهن', porp: "", porp1: "" },
		{ ID: 3, Name: 'اجاره', porp: "", porp1: "" },
		{ ID: 4, Name: 'پارکینگ', porp: "", porp1: "" },
		{ ID: 5, Name: 'محله', porp: "", porp1: "" },

	];

	scope.searchFieldsValues = [
		{ ID: 1, Name: '۵۰ زیر', FieldID: 1, porp1: "" },
		{ ID: 2, Name: '۵۰ تا ۶۰ متر', FieldID: 1, porp1: "" },
		{ ID: 3, Name: '۶۰ تا ۷۰ متر', FieldID: 1, porp1: "" },
		{ ID: 4, Name: '۷۰ تا ۸۰ متر', FieldID: 1, porp1: "" },
	]

	scope.selectSearchField = function (fld) {
		scope.selectedSearchField = fld;
	}

	scope.selectValue = function (val) {
		scope.selectedSearchField.SelectedValue = val;
	}
	scope.redirectSubmit = function () {
		location.href = 'HOME/SubmitStateForm'
	}
	//var modeling = modeling();
	scope.ads = [];


	var getStates = function () {
		serverInteract.request('Home/GetStates', {}, function (data, response) {
			scope.states = data;
		});
	}

	scope.getImages = function(st){
		var id= st.oid;
		serverInteract.request('Home/GetStateImages',id, function (data, response) {
		debugger
			st.imageList = data;
		});
	}

	getStates();








}]);




