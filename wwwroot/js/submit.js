var app = angular.module("RJProject", []);

app.controller("submit", ['$scope', function(scope) {

    scope.stateTypes = [
        { ID: 0, Name: 'خانه' },
        { ID: 1, Name: 'آپارتمان' },
        { ID: 2, Name: 'مغازه' },
        { ID: 3, Name: 'اداری و دفتر کار' },
        { ID: 4, Name: 'انبار' },
        { ID: 5, Name: 'زمین مسکونی' },
        { ID: 6, Name: 'سایر' },
    ];
    scope.adTypes = [
        { ID: 0, Name: 'فروشی' },
        { ID: 1, Name: 'رهن و اجاره' },
        { ID: 2, Name: 'معاوضه' },
        { ID: 3, Name: '‍پیش فروش' },

    ];

    scope.floorTypes = [
        { ID: 0, Name: "سرامیک" },
        { ID: 1, Name: "سنگ" },
        { ID: 2, Name: "پارکت" },
        { ID: 3, Name: "سیمان" },
        { ID: 4, Name: "موکت" },
        { ID: 5, Name: "سنگ و سرامیک" },
        { ID: 6, Name: "موزاییک" },
        { ID: 7, Name: "لمینت" },
        { ID: 8, Name: "سایر" },
    ];
    scope.facingTypes = [
        { ID: 0, Name: "سنگ و آجر" },
        { ID: 1, Name: "سنگ" },
        { ID: 2, Name: "آجر" },
        { ID: 3, Name: "آجر سه سانت" },
        { ID: 4, Name: "سفال" },
        { ID: 5, Name: "سرامیک" },
        { ID: 6, Name: "سیمان سفید" },
        { ID: 7, Name: "سایر" },

    ];

    scope.facialities = [
        { ID: 0, Name: "آب" },
        { ID: 1, Name: "برق" },
        { ID: 2, Name: "گاز" },
        { ID: 3, Name: "خط تلفن" },
        { ID: 4, Name: "سرویس بهداشتی" },
        { ID: 5, Name: "آشپزخانه" },
        { ID: 6, Name: "کابینت" },
        { ID: 7, Name: "انباری" },
        { ID: 8, Name: "آسانسور" },
        { ID: 9, Name: "آیفون" },
        { ID: 10, Name: "کولر" },
        { ID: 11, Name: "زیرزمین" },
        { ID: 12, Name: "مبله" },
        { ID: 13, Name: "شوفاژ" },

    ]

    scope.selectStateType = function(st) {
        scope.selectedStateType = st;
    }

    scope.selectAdType = function(ad) {
        scope.selectedAdType = ad;
    }
    scope.count = [0, 1, 2, 3, 4, 'بیشتر'];

    scope.selectRoomCount = function(c) {
        scope.selectedRoomCount = c;
    }
    scope.selectBathroomCount = function(c) {
        scope.selectedBathroomCount = c;
    }
    scope.selectFloorType = function(fl) {
        scope.selectedFloorType = fl;
    }

    scope.selectFacingType = function(fc) {
        scope.selectedFacingType = fc;
    }

    scope.selectFacialite = function(fa) {
        if (fa.selected) {
            fa.selected = false;
            return;
        }
        fa.selected = true;
    }
    scope.showFileDialog = function(ev) {
        $('#upload').click();
    }


	scope.images =[];

	$('#upload').on('change' , function () {
			
		var  uploader = document.getElementById("upload");
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

	var addImage = function(img){
		scope.images.push(img);
		scope.setCurrentImage(scope.images.length-1);
	} 
    scope.setCurrentImage = function(index){
		if(index< scope.images.length && index > -1)
			scope.currentIndex = index;
	}
	scope.deleteImage = function(index){
		scope.images.splice(scope.images[index].indexOf(scope.images[index]) ,1);
	}


}]);









