/*const voteAdd = document.querySelector(".voteAdd");
const modal = document.getElementById("voteSettingModal");
const closeBtn = modal.querySelector(".closeBtn");

const BACKGROUND_CLASS="background";
const VOTESETINGMODALDISSAPEAR_CLASS="voteSettingModalDissapear";

//모달을 만들어서 화면에 띄워줘야 한다.
function makeModal(){
    modal.style.display = "contents";

    const background = document.createElement("div");
    background.classList.add("background");
    document.body.append(background);
    
    closeBtn.addEventListener("click", ()=>{
        background.remove();
        modal.style.display = "none";
    });
    modal.classList.add(VOTESETINGMODALDISSAPEAR_CLASS);
}


//인터넷을 뒤져보니 모달로 만들어서 페이지 중앙에 창을 띄운다더라.
//버튼을 눌렀을 때 makeModal이 실행되면서 display:none처리 되어 있던 녀석이 화면에 보여야한다.
function displayPopup(){
    voteAdd.addEventListener("click", makeModal);
}

function init(){
    displayPopup();
}

init();*/
/*
1일차 - 외부의 힘을 빌려서 창 띄우는 것을 만들기는 했으나... 내 방식은 왜 안 되는지 잘 이해가 안 된담..
2일차(할 일) - 이제 만들어진 창 안에 투표를 설정할 수 있도록 만들어줘야 한다.
*/


document.getElementById('voteAdd').classList.add("voteAdd");

//모달창을 띄울 수 있게 해주는 코드 연습이니까 남이 만든 건 일단 안 쓴다.
function modal(id) {
    var zIndex = 9999;
    var modal = document.getElementById(id);

    // 모달 div 뒤에 희끄무레한 레이어
    var bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        // 레이어 색갈은 여기서 바꾸면 됨
        backgroundColor: 'rgba(0,0,0,0.4)'
    });
    document.body.append(bg);

    // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
    modal.querySelector('.closeBtn').addEventListener('click', function() {
        bg.remove();
        modal.style.display = 'none';
    });

    modal.setStyle({
        position: 'fixed',
        display: 'block',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        // 시꺼먼 레이어 보다 한칸 위에 보이기
        zIndex: zIndex + 1,

        // div center 정렬
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)'
    });
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};

document.getElementById('voteAdd').addEventListener('click', function() {
    // 모달창 띄우기
    modal('voteSettingModal');
});