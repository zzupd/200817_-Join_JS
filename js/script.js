

/* 생년월일 옵션(select option) 시작 */

    /* 출생년도 표시 시작 */
fnBirthYear();
function fnBirthYear() {

    var subTagYear = "";
    var chkTag = "";
    var now = new Date();
    var startYear = now.getFullYear();
    for (var i = startYear; i >= 1940; i--) {

        if (i == 1970) {
            chkTag = " selected";
        } else {
            chkTag = "";
        }
        subTagYear += "<option" + chkTag + ">" + i + "</option>";
    }

    document.getElementById("birthYear")
                    .innerHTML
                    = subTagYear;
}
    /* 출생년도 표시 끝 */


    /* 출생월 표시 시작 */
var chkMonthTemplet = 0;
fnBirthMonth();
function fnBirthMonth(param) {

    var subTagMonth = "";
    var attrValue = "";
    if (chkMonthTemplet == 0)   {
        document.getElementById("birthMonth").innerHTML= "<option>월</option>";
        chkMonthTemplet++;

        document.getElementById("birthMonth").style.position = "relative";
        document.getElementById("birthMonth").style.top = "1px";
    } else {
        for (var i = 1; i <= 12; i++) {
            if (param == i) {
                attrValue = " selected";
            } else {
                attrValue = "";
            }
            subTagMonth += "<option"+ attrValue +">" + i + "</option>";
        }
        document.getElementById("birthMonth").innerHTML= subTagMonth;
        document.getElementById("birthMonth").style.position = "relative";
        document.getElementById("birthMonth").style.top = "0px";
    }

}
    /* 출생월 표시 끝 */


    /* 출생일 표시 시작 */
var chkDateTemplet = 0;
fnBirthDate();
function fnBirthDate(param) {

    var subTagDate = "";
    var attrValue = "";
    if (chkDateTemplet == 0) {
        document.getElementById("birthDate").innerHTML = "<option>일</option>";
        chkDateTemplet++;

        document.getElementById("birthDate").style.position = "relative";
        document.getElementById("birthDate").style.top = "1px";
    } else {



        for (var i = 1; i <= 31; i++) {

            if (param == i) {
                attrValue = " selected";
                subTagDate += "<option"+ attrValue +">" + i + "</option>";
            } else {
                subTagDate += "<option>" + i + "</option>";
            }

        }
        document.getElementById("birthDate").innerHTML = subTagDate;
        document.getElementById("birthDate").style.position = "relative";
        document.getElementById("birthDate").style.top = "0px";
    }

}
    /* 출생일 표시 끝 */


    /* 월별 마지막 날짜 표시 시작 */
function fnReSet() {    /* 년도 변경했을 때 월, 일 초기화*/
    document.getElementById("birthMonth").value = "1";
    document.getElementById("birthDate").value = "1";
}
function fnEndDateSet(param) {   /* 월 변경했을 때 일의 마지막 날짜 초기화*/

    var endDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //                     0    1    2    3   4 ...
    var subTagDate = "";
    var monthValue = parseInt(param);
    var endValue = endDate[monthValue-1];

    for (var i = 1; i <= endValue; i++) {
        subTagDate += "<option>" + i + "</option>";
    }

    document.getElementById("birthDate").innerHTML = subTagDate;

}
    /* 월별 마지막 날짜 표시 끝 */



/* 생년월일 옵션(select option) 끝 */


