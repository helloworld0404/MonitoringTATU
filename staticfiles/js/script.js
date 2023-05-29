/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/



function openClose(){
    let siddebarMenu = document.querySelector(".wrap")
    siddebarMenu.classList.toggle("show")
    let nav = document.querySelector(".wrap1")
    nav.classList.toggle("show1")
    }
function openClosee(){
        let siddebarMenu = document.querySelector(".wrap3")
        siddebarMenu.classList.toggle("show")
        let nav = document.querySelector(".wrap4")
        nav.classList.toggle("show1")
        }

function openCloseee(){
            let siddebarMenu = document.querySelector(".wrap5")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap6")
            nav.classList.toggle("show1")
            }
function openCloseeee(){
            let siddebarMenu = document.querySelector(".wrap7")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap8")
            nav.classList.toggle("show1")
            }
function openClose1(){
            let siddebarMenu = document.querySelector(".wrap9")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap10")
            nav.classList.toggle("show1")
            }
function openClose2(){
            let siddebarMenu = document.querySelector(".wrap11")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap12")
            nav.classList.toggle("show1")
            }
function openClose3(){
            let siddebarMenu = document.querySelector(".wrap13")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap14")
            nav.classList.toggle("show1")
            }
function openClose4(){
            let siddebarMenu = document.querySelector(".wrap15 ")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap16")
            nav.classList.toggle("show1")
            }
function openClose5(){
            let siddebarMenu = document.querySelector(".wrap17")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap18")
            nav.classList.toggle("show1")
            }
function openClose6(){
            let siddebarMenu = document.querySelector(".wrap19")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap20")
            nav.classList.toggle("show1")
            }
function openClose7(){
            let siddebarMenu = document.querySelector(".wrap21")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap22")
            nav.classList.toggle("show1")
            }
function openClose8(){
            let siddebarMenu = document.querySelector(".wrap23")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap24")
            nav.classList.toggle("show1")
            }
function openClose9(){
            let siddebarMenu = document.querySelector(".wrap25")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap26")
            nav.classList.toggle("show1")
            }
function openClose10(){
            let siddebarMenu = document.querySelector(".wrap27")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap28")
            nav.classList.toggle("show1")
            }
function openClose11(){
            let siddebarMenu = document.querySelector(".wrap29")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap30")
            nav.classList.toggle("show1")
            }
function openClose12(){
            let siddebarMenu = document.querySelector(".wrap31")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap32")
            nav.classList.toggle("show1")
            }
function openClose13(){
            let siddebarMenu = document.querySelector(".wrap33")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap34")
            nav.classList.toggle("show1")
            }
function openClose14(){
            let siddebarMenu = document.querySelector(".wrap35")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap36")
            nav.classList.toggle("show1")
            }
function openClose15(){
            let siddebarMenu = document.querySelector(".wrap37")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap38")
            nav.classList.toggle("show1")
            }
function openClose16(){
            let siddebarMenu = document.querySelector(".wrap39")
            siddebarMenu.classList.toggle("show")
            let nav = document.querySelector(".wrap40")
            nav.classList.toggle("show1")
            }
function openClose17(){
            let siddebarMenu = document.querySelector(".succses1")
            siddebarMenu.classList.toggle("suc")
            let nav = document.querySelector(".acc")
            nav.classList.toggle("blok")
            let siddebarMen = document.querySelector(".body")
            siddebarMen.classList.toggle("suc1")
            }
$(function() {
  $('#colorselector').change(function(){
    $('.colors').hide();
    $('#' + $(this).val()).show();
  });
});