

/* 생년월일 옵션(select option) 시작(필수) */
fnBirthInit();     // Initialize 초기화
    /* 출생년월일 초기화 시작 */
function fnBirthInit() {

    var now = new Date();
    var yearStart = now.getFullYear();
    var yearOptTag = "";
    for (var i=yearStart; i>=1940; i--) {
        if (i == 1970) {
            yearOptTag += "<option selected>"+ i + "</option>";
        } else {
            yearOptTag += "<option>"+ i + "</option>";
        }

    }
    document.getElementById("birthYear").innerHTML = yearOptTag;
    /* 출생년도 끝 */


    var monthOptTag = "<option id='monthDelOpt'>월</option>";
    for (var i=1; i<=12; i++) {
        monthOptTag += "<option>"+ i + "</option>";
    }
    document.getElementById("birthMonth").innerHTML = monthOptTag;
    /* 출생 월 끝 */


    var dateOptTag = "<option id='dateDelOpt'>일</option>";
    for (var i=1; i<=31; i++) {
        dateOptTag += "<option>"+ i + "</option>";
    }
    document.getElementById("birthDate").innerHTML = dateOptTag;
    /* 출생 일 끝 */


}
    /* 출생년월일 초기화 끝(필수) */



function fnDelMonthOpt() {
    var monthDelOpt = document.getElementById("monthDelOpt");
//    alert("monthDelOpt : " + monthDelOpt);
    if (monthDelOpt != null) {
        monthDelOpt.style.display = "none";
    }
}
function fnDelDateOpt() {
    var dateDelOpt = document.getElementById("dateDelOpt");
//    alert("dateDelOpt : " + dateDelOpt);
    if (dateDelOpt != null) {
        dateDelOpt.style.display = "none";
    }

}

    /* 월별 마지막 날짜 표시 시작 */
function fnEndDate() {


    var yearVal = document.getElementById("birthYear").value;   // 년도
    yearVal = parseInt(yearVal);
    var remainder = 0;    // 나머지
    var febEndDate = 28;   // 또는 febEndDate = 29;

    if (yearVal % 4 == 0) {

        if (!(yearVal % 100 == 0 && yearVal % 400 != 0)) {
            febEndDate = 29;
        }

    }


    var monthVal = document.getElementById("birthMonth").value;
    var endDateArray = [31, febEndDate, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var endDate = endDateArray[monthVal - 1];

    var dateOptTag = "";
    for (var i=1; i<=endDate; i++) {
        dateOptTag += "<option>"+ i + "</option>";
    }
    document.getElementById("birthDate").innerHTML = dateOptTag;
}
    /* 월별 마지막 날짜 표시 끝 */


   /* 년도 변경시 월, 일 초기화 시작 */
function fnReset() {

    var monthOptTag = "<option id='monthDelOpt'>월</option>";
    for (var i=1; i<=12; i++) {
        monthOptTag += "<option>"+ i + "</option>";
    }
    document.getElementById("birthMonth").innerHTML = monthOptTag;
    /* 출생 월 끝 */


    var dateOptTag = "<option id='dateDelOpt'>일</option>";
    for (var i=1; i<=31; i++) {
        dateOptTag += "<option>"+ i + "</option>";
    }
    document.getElementById("birthDate").innerHTML = dateOptTag;
    /* 출생 일 끝 */
}
   /* 년도 변경시 월, 일 초기화 끝 */


/* 생년월일 옵션(select option) 끝 */



/* 전체동의 시작 */
function fnWholeChk() {
    var chkVal = document.getElementById("wholeAgreeChkBox").checked;
//    alert("chkVal : " + chkVal);
    var chkBox01 = document.getElementById("chkBox_01");
    var chkBox02 = document.getElementById("chkBox_02");
    var chkBox03 = document.getElementById("chkBox_03");
    var chkBox04 = document.getElementById("chkBox_04");
    chkBox01.checked = chkVal;
    chkBox02.checked = chkVal;
    chkBox03.checked = chkVal;
    chkBox04.checked = chkVal;

}

function fnReverseChk() {
    var chkBox01 = document.getElementById("chkBox_01").checked;
    var chkBox02 = document.getElementById("chkBox_02").checked;
    var chkBox03 = document.getElementById("chkBox_03").checked;
    var chkBox04 = document.getElementById("chkBox_04").checked;

    if (chkBox01 && chkBox02 && chkBox03 && chkBox04) {
        // 4개의 체크박스 모두가 동시에 true라면
        document.getElementById("wholeAgreeChkBox").checked = true;
    } else {
        // 그렇지 않다면(=즉 1개라도 true가 아니라면)
        document.getElementById("wholeAgreeChkBox").checked = false;
    }
}
/* 전체동의 끝 */


function fnSbm() {
    var joinFrm = document.getElementById("joinFrm");

    /* 이름, 아이디, 비밀번호,
          이메일, 14세 이상 체크, 전체동의   */

    var uName = document.getElementById("uName");
    var uNameVal = uName.value;
    uNameVal = uNameVal.trim();

    var uId = document.getElementById("uId");
    var uIdVal = uId.value;
    uIdVal = uIdVal.trim();

    var uPw = document.getElementById("uPw");
    var uPwVal = uPw.value;
    uPwVal= uPwVal.trim();

    var uEmail = document.getElementById("uEmail");
    var uEmailVal = uEmail.value;
    uEmailVal= uEmailVal.trim();
    /* 여기까지 value가 공백이 아닐때 전송가능함 */

    var confirm14Chkbox = document.getElementById("confirm14Chkbox");
    var confirm14_chked = confirm14Chkbox.checked;
    var wholeAgreeChkBox = document.getElementById("wholeAgreeChkBox");
    var wholeAgree_chked = wholeAgreeChkBox.checked;
    /* 체크박스가 체크되어 있어야만 전송가능함*/

    if (uNameVal == "") {
        alert("이름은 필수!");
        uName.focus();
    } else if (uIdVal == "") {
        alert("아이디는 필수!");
        uId.focus();
    } else if (uPwVal == "") {
        alert("비밀번호는 필수!");
        uPw.focus();
    } else if (uEmailVal == "") {
        alert("이메일주소는 필수!");
        uEmail.focus();
    } else if (!confirm14_chked) {
        alert("14세 이상동의체크 필수!");
        confirm14Chkbox.focus();
    } else if (!wholeAgree_chked) {
        alert("전체 약관 동의체크 필수!");
        wholeAgreeChkBox.focus();
    } else {

        var userConfirm = confirm("회원가입하시겠습니까?");

        if (userConfirm) {
            joinFrm.action = "https://www.google.com";
            joinFrm.submit();
        } else {
            alert("사용자가 회원가입을 취소하셨습니다.");
        }


    }
}









