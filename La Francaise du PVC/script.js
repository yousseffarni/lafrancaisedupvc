/*Controls header Buttons (Search Button , Dark Mod Button , Language Button)*/

let BtnSearch = document.querySelector('.header .headerList .searchMenu form .formSearch #btn-search');
let BtnSearchTwo = document.querySelector('.header .headerList .searchMenu form .formSearch #btn-search-two');
let BtnHideSearchBox = document.querySelector('.header .headerList .searchMenu form .formSearch .btn-HideInputBox');
let InputSearchBox = document.querySelector('.header .headerList .searchMenu form .formSearch .searchInputBox');


/* Header Main Menu Buttons Declaration 
let ButtonsMainMenu = document.querySelectorAll('.header .headerList .MainMenu .MainMenu-Btns');

ButtonsMainMenu.forEach(el => {
    el.addEventListener('click', () => {

        let ID = el.id.toString();

        let HeaderForm = document.querySelector(('.header .headerList .MainMenu ' + ID + ' .HeaderTaps').toString());
        let HeaderFormInner = document.querySelector(('.header .headerList .MainMenu ' + ID + '  .HeaderTaps-Inner').toString());



        if (!HeaderForm.classList.contains('IsVisible')) {
            HeaderForm.classList.toggle('IsVisible');
            if (HeaderFormInner.classList.contains('animate__flipOutX')) {
                HeaderFormInner.classList.remove('animate__flipOutX');
                HeaderFormInner.classList.toggle('animate__flipInX');
            } else { HeaderFormInner.classList.toggle('animate__flipInX'); }

        } else {
            HeaderForm.classList.remove('IsVisible');
            if (HeaderFormInner.classList.contains('animate__flipInX')) {
                HeaderFormInner.classList.remove('animate__flipInX');
                HeaderFormInner.classList.toggle('animate__flipOutX');
            } else { HeaderFormInner.classList.toggle('animate__flipOutX'); }
        }


    });
});
*/
BtnSearch.onclick = () => {
    if (InputSearchBox.classList.contains('IsNotVisible')) {
        InputSearchBox.classList.toggle('IsNotVisible');
        BtnSearch.classList.toggle('IsNotActive');
    } else {}
}

BtnSearchTwo.onclick = () => {
    /* this button action like the button BtnSearch but in else*/
}

BtnHideSearchBox.onclick = () => {
    InputSearchBox.classList.add('IsNotVisible');
    BtnSearch.classList.add('IsNotActive');
}




let ButtonsMainMenu = document.querySelectorAll('.header .headerList .MainMenu .MainMenu-Btns');
let HeaderForms = document.querySelectorAll('.header .headerList .MainMenu .MainMenu-Btns .HeaderTaps.dropdown-menu');
let BtnCloseHeaderTap = document.querySelectorAll('.closeBtnSection button.btn.btn-CloseHeaderTap');
let BtnCloseVoletsForm = document.querySelector('.closeBtnSection button.btn.btn-CloseVoletsForm');
let VoletsForm = document.querySelector('.header .headerList ul.MainMenu .HeaderTaps .SubTaps');
let HeaderBtns = document.querySelectorAll('.header .headerList ul li button');
let OpenVoletsFormBtn = document.querySelector('.header .headerList ul.MainMenu .HeaderTaps .ul #Btn-OpenVoletsForm');
let ToggleHeaderTapsBtn = document.querySelectorAll('.header .headerList ul.MainMenu .HeaderTaps .ul.SubTaps .Btn-ToggleHeaderTaps');
let BlurEffectSection = document.querySelectorAll('.header .headerList ul.MainMenu .HeaderTaps .ul.smallHeight .BlurEffect');

BtnCloseHeaderTap.forEach(el => {
    el.addEventListener('click', () => {
        HeaderForms.forEach(fm => {
            if (fm.classList.contains("show")) {
                fm.classList.remove('show');

            }
        });
        HeaderBtns.forEach(hBtns => {
            if (hBtns.classList.contains("show")) {
                hBtns.classList.remove('show');
                hBtns.setAttribute("aria-expanded", "false");
            }
        });
    });

});
ToggleHeaderTapsBtn.forEach(el => {
    el.addEventListener('click', () => {
        HeaderForms.forEach(fm => {
            if (fm.classList.contains("show")) {
                fm.classList.remove('show');
            }
        });
        HeaderBtns.forEach(hBtns => {
            if (hBtns.classList.contains("show")) {
                hBtns.classList.remove('show');
                hBtns.setAttribute("aria-expanded", "false");
            }
        });
    });

});
OpenVoletsFormBtn.onclick = () => {
    if (!VoletsForm.classList.contains("show")) {
        VoletsForm.classList.add('show');
        BlurEffectSection.forEach(fm => {
            if (!fm.classList.contains("show")) {
                fm.classList.add('show');
            }
        });
    }
}
BtnCloseVoletsForm.onclick = () => {
    VoletsForm.classList.remove('show');
    BlurEffectSection.forEach(fm => {
        if (fm.classList.contains("show")) {
            fm.classList.remove('show');
        }
    });
}



/*Change Header CSS While Scrolling */
$(function() {
    $(document).scroll(function() {
        var $headerMenu = $(".header");
        var $BtnGoToTop = $("#toTop");
        $headerMenu.toggleClass('scrolling-active', $(this).scrollTop() > $headerMenu.height());
        $BtnGoToTop.toggleClass('IsActive', $(this).scrollTop() > $headerMenu.height());

    });
});


/*Language Button Switch*/
// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible');
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible');
});


// SideBar Mobile JS Code :
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}