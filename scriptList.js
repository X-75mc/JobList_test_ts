var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fetchUrl = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
var jobListContainer = document.querySelector('.jobList__container');
var modalContainer = document.querySelector('.modal__container');
var jobDetailedTittle = document.querySelector('.job__detaled__tittle_h3');
var jobDetaledSalary = document.querySelector('.job__detaled__salary');
var jobDetaledCreatedAt = document.querySelector('.post__date');
var jobDetaledDescription = document.querySelector('.description__text');
var jobDetaledEmployerTypeContainer = document.querySelector('.job__detaled__type__div');
var jobDetailedBenefisContainer = document.querySelector('.job__benefits__group');
var employerTypeParagraf = document.querySelector('.employer__type__for');
var benefisParagraf = document.querySelector('.benefis__for');
var imgDiv = document.querySelector('.attached__img__div');
var bgHid = document.querySelector('body');
var mapDepartament = document.querySelector('.map__list__name');
var mapAddres = document.querySelector('.map__list__address');
var mapPhone = document.querySelector('.map__list__phone');
var mapPost = document.querySelector('.map__list__post');
showPost();
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, body;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    body = _a.sent();
                    return [2 /*return*/, body];
            }
        });
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function () {
        var jobListData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchPosts(fetchUrl)];
                case 1:
                    jobListData = _a.sent();
                    // Display the contents of the first item in the response
                    jobListRender(jobListData);
                    return [2 /*return*/];
            }
        });
    });
}
//fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'); 
function jobListRender(jobListData) {
    jobListData.forEach(function (item) {
        var jobListHTML = "<div class =\"job__wrapper\">\n                                        <div class=\"job__img\">\n                                          <img class=\"main__img\" src=\"".concat(item.pictures[2], "\" alt=\"\">\n                                        </div>\n                                            <div class=\"job__discription\">\n                                                <ul>\n                                                    <li><h2><a id =\"").concat(item.id, "\" href=\"#\">").concat(item.title, "</a></h2></li>\n                                                    <li class=\"text__bottom\">Deportamen name: ").concat(item.name, "</li>\n                                                    <li class=\"text__bottom\">Austria</li>\n\n                                                </ul>\n                                            </div>\n                                            <div class=\"job__rate__post\">\n                                              <p class=\"posted text__bottom\">2 days ago</p>\n                                          </div>\n                                      </div>  ");
        jobListContainer.insertAdjacentHTML('beforeend', jobListHTML);
    });
    jobListContainer.addEventListener('click', createDetaledList);
    function createDetaledList(event) {
        var targetId = event.target;
        var employerOut = '';
        var benefisOut = '';
        var picturesOut = '';
        for (var i = 0; i < jobListData.length; i++) {
            if (targetId.id == jobListData[i].id) {
                for (var j = 0; j < jobListData[i].employment_type.length; j++) {
                    employerOut += "<p>".concat(jobListData[i].employment_type[j], "</p>");
                }
                for (var g = 0; g < jobListData[i].benefits.length; g++) {
                    benefisOut += "<p>".concat(jobListData[i].benefits[g], "</p>");
                }
                for (var h = 0; h < jobListData[i].pictures.length; h++) {
                    picturesOut += "<img src=\"".concat(jobListData[i].pictures[h], "\" alt=\"\">");
                }
                modalContainer.classList.remove('none');
                jobListContainer.classList.add('none');
                jobDetailedTittle.innerHTML = jobListData[i].title;
                jobDetaledSalary.innerHTML = jobListData[i].salary;
                jobDetaledCreatedAt.innerHTML = jobListData[i].createdAt;
                jobDetaledDescription.innerHTML = jobListData[i].description;
                employerTypeParagraf.innerHTML = employerOut;
                benefisParagraf.innerHTML = benefisOut;
                imgDiv.innerHTML = picturesOut;
                mapDepartament.innerHTML = jobListData[i].name;
                mapAddres.innerHTML = jobListData[i].address;
                mapPhone.innerHTML = jobListData[i].phone;
                mapPost.innerHTML = jobListData[i].email;
            }
        }
        var returBtn = document.querySelector('.btn__back');
        returBtn.addEventListener('click', goBack);
        function goBack(event) {
            var targetBtn = event.target;
            if (targetBtn == returBtn) {
                modalContainer.classList.add('none');
                jobListContainer.classList.remove('none');
            }
        }
    }
}
;
