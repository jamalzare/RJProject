var app = angular.module("RJProject", []);

app.factory('serverInteract', function ($http) {
	return {
		request: function (url, data, expr) {

			var request = {
				method: "POST",
				url: url,
				headers: {
					'Content-Type': 'application/json;'
				},
				dataType: 'json',
				data: JSON.stringify(data),

			};

			$http(request).then(function (response) {

				//response.data = JSON.parse(response.data);
				expr(response.data, response);

			}, function err(response) {

				alert(response + 'errpr')
				// document.write(response.data);
			});
		}
	}
});


app.controller("SubmitCtrl", ['$scope', 'serverInteract', function (scope, serverInteract) {


	scope.stateTypes = [
		{ ID: 1, Name: 'آپارتمان' },
		{ ID: 2, Name: 'مغازه' },
		{ ID: 2, Name: 'زمین' },
		{ ID: 2, Name: 'ویلا' },
	];

	scope.selectedStateType = scope.stateTypes[0];
	scope.adTypes = [
		{ ID: 1, Name: 'فروش' },
		{ ID: 2, Name: 'اجاره' },
	]
	scope.selectedAd =scope.adTypes[0];

	scope.selectAd = function (ad) {
		scope.selectedAd = ad;
	}
	scope.countes = ['1', '2', '3', '4', '5', 'بیشتر']

	scope.selectedRoomCount = scope.countes[0];
	scope.selectRoomCount = function (c) {
		scope.selectedRoomCount = c;
	}

	scope.selectedParkingCount = scope.countes[0];
	scope.selectParkingCount = function (c) {
		scope.selectedParkingCount = c;
	}

	scope.sliderImages = [];

	$('#upload').on('change', function () {

		var uploader = document.getElementById("upload");
		var file = uploader.files[0];

		if (file && file.name) {
			scope.fileName = file.name.substr(0, 12);
			var ext = file.name.replace(/^.*\./, '');
			var arrayExt = ['pdf', 'png', 'gif', 'jpg', 'jpeg'];

			if (arrayExt.indexOf(ext) == -1) {
				alert("لطفا از فایل های از نوع  ['pdf', 'png', 'gif', 'jpg', 'jpeg'] استفاده نمایید");
				uploader.value = '';
				return;
			}

			send(file);

		}

	});

	var send = function (file) {

		var reader = new FileReader();
		reader.onload = function (evt) {

			addImage(evt.target.result);
			scope.$apply();
		}
		reader.readAsDataURL(file);
	}

	scope.showFileDialog = function (ev) {
		$('#upload').click();
	}

	var addImage = function (img) {
		scope.sliderImages.push(img);
		scope.setCurrentImage(scope.sliderImages.length - 1);
	}
	scope.setCurrentImage = function (index) {
		if (index < scope.sliderImages.length && index > -1)
			scope.currentIndex = index;
	}
	scope.deleteImage = function (index) {
		scope.sliderImages.splice(scope.sliderImages[index].indexOf(scope.sliderImages[index]), 1);
	}
	scope.submitState = function () {
		debugger
		var model = scope.model;
		model.StateType = scope.selectedStateType.ID;
		model.AdType = scope.selectedAd.ID;

		model.BaseImage = scope.sliderImages[0]
		model.RoomCount = scope.selectedRoomCount;
		model.ParkingCount = scope.selectedParkingCount;
		
		model.ImageList = [];
		scope.sliderImages.forEach(function (img) {
			model.ImageList.push({ Data: img });

		});



		serverInteract.request('SubmitState', model, function (data, response) {

			alert('yes do it');
		})
	}
	var getStates = function () {
		serverInteract.request('Home/GetStates', {}, function (data, response) {


			scope.state = data[1];
			scope.sliderImages.push(data[1].baseImage);
			getState();
		});


	}

	var getState = function () {

		var id = scope.state.OID;
		serverInteract.request('Home/GetState', scope.state, function (data, response) {


			scope.state = data[1];
			scope.sliderImages.push(data[1].baseImage);
		})
	}



	//getStates();
}]);









