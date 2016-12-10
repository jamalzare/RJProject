var app = angular.module("RJProject", []);

app.controller("submit", ['$scope', function (scope) {

    scope.stateTypes = [
        {
            ID: 0, Fields: [0, 1, 2, 3, 4], Name: 'خانه',
        },
        {
            ID: 1, Name: 'آپارتمان',
            Fields: [0, 1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22],
            Facialities: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22],
        },
        {
            ID: 2, Name: 'مغازه',
            Fields: [0, 1, 2, 3, 7, 9, 13, 19, 11, 12, 14, 15, 20],
            Facialities: [0, 1, 4, 7, 13],
        },
        
        { ID: 3, Fields: [], Name: 'اداری و دفتر کار' },
        { ID: 4, Fields: [], Name: 'انبار' },
        {
            ID: 5, Name: 'زمین مسکونی و تجاری',
            Fields: [0,1,2,3,7,9,14,15]
        },
        { ID: 6, Fields: [], Name: 'سایر' },
    ];
    var fieldVisiblity = [
        { ID: 0, Name: 'title' },
        { ID: 1, Name: 'area' },
        { ID: 2, Name: 'mortgage' },
        { ID: 3, Name: 'rent' },
        { ID: 4, Name: 'bathroom' },
        { ID: 5, Name: 'room' },
        { ID: 6, Name: 'buildingArea' },
        { ID: 7, Name: 'meterPrice' },
        { ID: 8, Name: 'nothing' },
        { ID: 9, Name: 'totalPrice' },
        { ID: 10, Name: 'floorNumber' },
        { ID: 11, Name: 'unitCounts' },
        { ID: 12, Name: 'floorCount' },
        { ID: 13, Name: 'buildYear' },
        { ID: 14, Name: 'changeAble' },
        { ID: 15, Name: 'changeWith' },
        { ID: 16, Name: 'logageType' },
        { ID: 17, Name: 'logage' },
        { ID: 18, Name: 'payment' },
        { ID: 19, Name: 'inMall' },
        { ID: 20, Name: 'floorType' },
        { ID: 21, Name: 'facingType' },
        { ID: 22, Name: 'facialites' },
    ]


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

    var facialities = [
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
        { ID: 14, Name: "پکیچ" },
        { ID: 15, Name: "شومینه" },
        { ID: 16, Name: "تراس" },
        { ID: 17, Name: "هود" },
        { ID: 18, Name: "درب ریموت دار" },

    ]

    scope.title = true;
    scope.area = true;
    scope.mortgage = true;
    scope.rent = true;
    scope.room = true;
    scope.bathroom = true;

    var showFields = function () {
        var st = scope.selectedStateType;

        fieldVisiblity.forEach(function (vis) {
            scope[vis.Name] = false;
        });

        st.Fields.forEach(function (ID) {
            scope[fieldVisiblity[ID].Name] = true;
        })
    }
    var getFacialities = function () {
        var st = scope.selectedStateType;
        scope.stateFacialities = [];

        for (var i = 0; i < st.Facialities.length; i++) {
            for (var j = i; j < facialities.length; j++) {
                if (facialities[j].ID == st.Facialities[i]) {
                    var x = facialities[j];
                    scope.stateFacialities[i] = x;
                    break;
                }
            }
        }
    }
    scope.selectStateType = function (st) {
        scope.selectedStateType = st;

        showFields(st);
        getFacialities();
    }
    scope.selectStateType(scope.stateTypes[2]);

    scope.selectAdType = function (ad) {
        scope.selectedAdType = ad;
    }
    scope.count = [0, 1, 2, 3, 4, 'بیشتر'];

    scope.selectRoomCount = function (c) {
        scope.selectedRoomCount = c;
    }
    scope.selectBathroomCount = function (c) {
        scope.selectedBathroomCount = c;
    }
    scope.selectFloorType = function (fl) {
        scope.selectedFloorType = fl;
    }

    scope.selectFacingType = function (fc) {
        scope.selectedFacingType = fc;
    }

    scope.selectFacialite = function (fa) {
        if (fa.selected) {
            fa.selected = false;
            return;
        }
        fa.selected = true;
    }
    scope.showFileDialog = function (ev) {
        $('#upload').click();
    }


    scope.images = [];

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

    scope.selectChangeable = function (able) {
        scope.isChangeable = able;
    }

    scope.selectInMall = function (able) {
        scope.isInMall = able;
    }

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
        scope.images.push(img);
        scope.setCurrentImage(scope.images.length - 1);
    }
    scope.setCurrentImage = function (index) {
        if (index < scope.images.length && index > -1)
            scope.currentIndex = index;
    }
    scope.deleteImage = function (index) {
        scope.images.splice(scope.images[index].indexOf(scope.images[index]), 1);
    }


}]);









