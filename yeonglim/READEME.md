# 이슈사항

1. 마우스휠의 올림/내림에 따라 header가 나타나거나 사라지게 하기

2. 슬라이드 영역에 마우스를 올리면 커서모양 변경

3. gsap를 활용한 스크롤 애니메이션

# 해결방안

**1. 스크롤 방향에 따라 header가 나타나거나 사라지게 하기**
- css에서 header에 scroll function에 필요한 clsss작성
- scroll function 안에 addClass / removeClass 작성
```css
      header.up{ top: -70px; }  =>  마우스휠을 내리면 addClass, 올리면 removeClass
      header.scroll{ background-color: #fff; }  =>  스크롤이 일정량 이상 내려가면 addClass / 올라가면 removeClass
      header.scroll .align .logo img{ display: block; }
      header.scroll .align ul li a{ color: #333; }
      header.scroll .align .btnbox a img{ display: block; }
```
```javascript
    $('body').on('mousewheel',function(e){
        let wheel = e.originalEvent.wheelDelta

        if(wheel > 0){
            // scroll up
            $('header').removeClass('up')  =>  header 나타나게
        }else{
            // scroll down
            $('header').addClass('up')  =>  header 사라지게
            $('header .sub').removeClass('on')
            $('.search__wrap').removeClass('on')  =>  header에 있는 검색창도 사라지게
        }
    })
```

**2. 슬라이드 영역에 마우스를 올리면 커서모양 변경**
- 커서를 올릴 대상 객체에서 마우스 x, y좌표 반환
- .cursor의 위치값을 가져온 x, y좌표로 설정
- 대상 영역에 커서를 올렸을 때 addClass('on')
```css
    .sec2 .swiper .swiper-wrapper{ cursor: url(../img/icon/interior_drag.png) 60 60, auto }  =>  대상 영역의 커서를 image로 바꾸고 크기값을 60px 60px로 설정
```
```javascript
    $('.sec1 .swiper .btn').mousemove(function(e){
        let sec1_x = e.offsetX,  =>  대상 객체의 마우스 x,y 좌표 가져오기
            sec1_y = e.offsetY

        $('.sec1 .swiper .btn .cursor').css({
            top: sec1_y + 'px',  =>  cursor의 위치값을 위에서 가져온 x, y좌표로 설정
            left: sec1_x + 'px',
        })
    })

    $('.sec1 .swiper .btn').mouseover(function(){
        $('.sec1 .swiper .btn .cursor').show()  =>  대상 객체에 마우스를 올리면 cursor가 나타나게 하기
        $(this).siblings(this).find('.cursor').hide()
    })
    $('.sec1 .swiper .btn').mouseleave(function(){
        $('.sec1 .swiper .btn .cursor').hide()  =>  대상 객체에 마우스를 올리면 cursor가 사라지게 하기
    })
```

**3. gsap를 활용한 스크롤 애니메이션**
- 필요한 gsap 문법으로 원하는 애니메이션 구현
- gsap를 사용하기 전에 gsap.js, scrollTrigger.js를 html에서 연결해줘야한다.
```javascript
    gsap.from('.sec2',{  =>  실행대상
        scrollTrigger:{
            trigger: '.sec2',  =>  실행할 구역
            start: 'top 85%',  =>  start 지점
            toggleActions: 'restart none none reverse',  =>  구역에서 벗어나면 초기화 / 구역에 다시 들어가면 다시 실행
            // markers: true,
        },
        y: 100,  =>  필요한 옵션
        opacity: 0,
        duration: 1,
    })
```
