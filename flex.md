# 1. flex 속성

- display 프로퍼티의 속성이다.

- container의 item들이 부모와 자식관계일 때 container에 flex 속성을 줌으로써 정렬을 시켜준다.

- container에 flex 속성을 부여해주면 그 안의 item들이 자신의 크기만큼 공간을 할당받게 된다.

  - 아래의 경우 container 클래스의 직계 자손들은 flexbox 레이아웃이 적용되지만 직계자손의 자손에게는 적용되지 않는다.
  
    ```html
    <!doctype html>
    <html lang="ko">
      <head>
        <meta charset="utf-8">
        <title>CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            .container{
    	background-color : skyblue;
    	display: flex;
    }
    .item{
    	background-color: gold;
    	border: 1px solid grey
    }
        </style>
      </head>
      <body>
        <div class="container">
      <div class="item">1
        <div>1-1</div>
        <div>1-2</div>
        <div>1-3</div>
      </div>
    
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
      </body>
    </html>
    ```
  
    이럴 때는 css 파일에 아래의 코드를 삽입해주면 모든 자식에게 레이아웃을 적용시킬 수 있다.
  
    ```css
    .container :nth-child(1){
    	display: flex;
    }
    ```
  
  # 2. flex 속성의 속성 값(container)
  
- ##### 2-1. inline-flex

  - display: inline-flex 속성을 주면 container 영역이 item들의 크기에 맞게 줄어든다.

- ##### 2-2. flex-direction

  - item들의 정렬과 배치 방향을 설정하는 속성으로 값이 row이면 container 내부에서 왼쪽으로 정렬, row-reverse면 오른쪽으로 정렬한다.
  - container에 height 속성을 부여해주면 flex-direction 값에 column과 column-reverse를  줄 수 있다. column은 위에서부터 정렬, column-reverse는 그 반대이다.

- ##### 2-3. flex-wrap

  - item들의 너비의 합이 container의 너비(현재 브라우저 창의 너비)를 초과할 때의 처리 방법을 정의해주는 속성이다.
  - nowrap은 기본값으로 브라우저의 너비를 초과해도 item을 한 줄로 표시한다.(바 생성)
  - wrap은 브라우저의 너비를 초과한 item을 줄 바꿈 하여 다음 줄로 넘긴다.
  - wrap-reverse는 wrap과 같지만 줄 바꿈을 윗줄로 해준다.

- ##### 2-4. flex-flow

  - flex-direction과 flex-wrap을 같이 설정할 수 있는 약식 표현 속성이다.

- ##### 2-5. justify-content

  - item과 container 간에 수평 방향의 여백을 두는 방식을 지정한다.
  - flex-start는 item들을 왼쪽으로 정렬 후 오른쪽에 여백을 둔다.
  - flex-end는 item들을 오른쪽으로 정렬한다.
  - center는 item들을 가운데에 정렬한다.
  - space-between는 item들을 item들 사이에 같은 크기의 공백이 생기도록 정렬한다.
  - space-around는 item들 사이에 같은 공백을 생기게 하되 양끝에 그 공백의 절반크기의 공백을 준다.

- ##### 2-6. align-items

  - 위의 1-5의 속성과는 다르게 수직 방향의 여백을 두는 방식을 지정한다.
  - flex-start는 위로 정렬, flex-end는 아래로 정렬, center는 가운데 정렬, stretch는 item의 크기를 height의 크기만큼 늘려준다.
  - baseline은 item내의 font의 baseline(글자의 하단선)을 기준으로 정렬한다.

- ##### 2-7. align-content

  - item들을 다음 줄로 넘겼을 때 줄 사이의 여백을 지정하는 방식을 가리킨다.
  - flex-start는 위로 정렬, center는 가운데 정렬, flex-end는 아래로 정렬, space-between은 줄 사이에 같은 크기의 공백을, space-around는 줄 사이에 같은 크기의 공백으로 주되 양끝에 공백 크기의 절반만큼의 공백을, stretch는 height 크기를 기준으로 공백이 없도록 item들의 height를 늘려준다.

# 3. flex item 속성

- ##### 3-1. order

  - item이 배치될 순서를 지정한다. order에 지정된 값이 작을수록 먼저 배치된다.

- ##### 3-2. flex-grow

  - container에 여분의 여백이 있을 때 동작하는 속성으로 flex-grow에 설정된 비율만큼 여백이 item들에 분배된다. 비율은 flex-grow 값들의 합으로 구할 수 있다.

- ##### 3-3. flex-basis

  - item의 기본 너비를 설정한다.
  - 이 속성을 정의하면 기본적으로 flex-shrink 속성이 붙는다. flex-shrink는 item마다 줄어드는 비율을 설정하는 속성이다. flex-basis에서 설정한 너비보다 container의 너비가 더 줄어들게 되면 flex-shrink 속성에 설정된 비율만큼 줄어들게 된다.

- ##### 3-4. flex-shrink

  - item이 줄어드는 비율을 설정한다. 이 때 flex-basis가 설정되어 있다면 이 값을 경계로 item의 너비가 flex-basis에서 설정한 값보다 클 때는 flex-grow가 동작하고 작은 때는 flex-shrink가 동작한다.