# 이슈사항
1. 메인페이지의 프로필사진 가운데에 고정
2. 스크롤을 일정량만큼 내리면 백그라운드와 일부컨텐츠 색상 변경
3. WORK페이지의 work이미지 가운데에 고정
<br><br>
# 해결방안
**1. 메인페이지의 프로필사진 가운데에 고정**
- 프로필사진 태그에 position: sticky, top: 50%, transform: translateY(-50%), margin: 0 auto 값을 주어 고정시킬 위치 설정
- sticky 속성을 주기위해선 부모요소에 height값이 반드시 필요 -> 부모의 height값을 필요한 만큼 설정
```html
        <section class="main" id="main"> // height값이 필요한 부모
            <img class="main_img" src="img/main/main1.png" alt="main"> // 여기가 프로필사진 부분
            <div class="wh">
                <img src="img/main/work.png" alt="work">
                <img src="img/main/hard.png" alt="hard">
            </div>
            <div class="s">
                <img src="img/main/simple.png" alt="simple">
            </div>
            <div class="wh main_fff">
                <img src="img/main/work_ffffff.png" alt="work">
                <img src="img/main/hard_ffffff.png" alt="hard">
            </div>
            <div class="s main_fff">
                <img src="img/main/simple_ffffff.png" alt="simple">
            </div>
        </section>
```
```css
        .main{ position: relative; width: 100%; height: 190vh; } // 부모에게 height값을 필요한 만큼 설정
        .main .main_img{ position: sticky; top: 50%; transform: translateY(-50%); margin: 0 auto; width: 25%; } // sticky를 활용한 고정값 설정
```
**2. 스크롤이 INFO 안에 위치하면 백그라운드와 일부컨텐츠 색상 변경**
- info의 scrollTop값과 bottom값을 가져와서 scroll function, if else 문에 사용
- css에 addClass/removeClass를 하기위한 class를 입력해서 js파일에 사용
```css
          body.on{ background-color: #000; }
          body.on .corner{ color: #fff; } // 모서리부분에 위치한 텍스트들 색상변경
          body.on .corner a{ color: #fff; }
          body.on .main div.main_fff{ opacity: 1; } // 메인화면 텍스트이미지들 색상변경
          body.on .mobile_btn .btn div{ background-color: #fff; } // 모바일 햄버거메뉴버튼 색상변경
```
```javascript
          $(window).scroll(function(){
              let curr = $(window).scrollTop() // INFO의 scrollTop()
              let info_bottom = $('.info').offset().top + $('.info').outerHeight() // INFO의 scrollBottom()

              if(500<curr && curr<info_bottom/1.25){ // scroll이 top에서 500을 초과하고, INFO의 scrollBottom보다 1.25배 만큼 내려갔을 때
                  $('body').addClass('on') // 조건이 참이면 색상변경
              }else{
                  $('body').removeClass('on') // 조건이 거짓이면 원래대로
              }
          })
```
**3. WORK페이지의 work이미지 가운데에 고정**
- work이미지에 position: sticky값과 고정시킬 위치값 설정
- sticky값을 적용하기 위해선 부모에게 높이값이 반드시 필요 => js파일에서 컨텐츠의 전체 높이에 따라 자동으로 조절되게끔 설정
```html
          <section class="work" id="work"> // 부모
            <img src="img/work/work_work.png" alt="work"> // sticky 이미지
            <div class="box"></div> // 컨텐츠
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </section>
```
```css
          .work{ position: relative; width: 100%; box-sizing: border-box; padding-top: 150px; } // 부모
          .work img{ position: sticky; top: 50%; transform: translateY(-50%); margin: 0 auto; width: 95%; height: auto; } // sticky 이미지
          .work .box{ position: relative; width: 1100px; height: 700px; margin: 150px auto; } // 컨텐츠
```
```javascript
            let work_totalHeight = $('.work .box').outerWidth()*4.5 // 부모에게 컨텐츠의 height, margin값을 모두 포함한 값만큼 height값 설정 (4.5만큼 곱해서 원하는 만큼의 높이값이 나오기위한 추가 설정)

            $('.work').css({
                height: work_totalHeight
            })
```
