CSS

[TOC]

### 개요

- html이나 xml과 같은 구조화된 문서를 화면, 종이 등에 어떻게 렌더링할 것인지를 정의하기 위한 언어이다.
- 즉, css는 html의 각 요소이 style을 정의하여 화면 등에 어떻게 렌더링하면 되는지 브라우저에게 설명하기 위한 언어이다.
- HTML5 이전 버전의 html에는 style을 컨트롤할 수 있는 태그가 존재하여 CSS가 없이도 어느 정도의 스타일 표현이 가능하였으나 정보와 구조를 담당하는 html의 본연의 역할과 동떨어진 기능가지 추가됨으로서 복잡하고 혼란스러운 언어가 되버렸다.
- 때문에 HTML5에서는 html은 정보와 구조화, CSS는 styling의 정의라는 본연의 임무에 충실한 명확한 구분이 이루어졌다.
- html과 css는 각자의 문법을 갖는 별개의 언어이며 html은 css를 포함할 수 있다. 그러나 html 없이 단독으로 존재하는 css는 의미가 없다.

### CSS의 용어

#### 1. 셀렉터(selector, 선택자)

- **스타일을 적용하고자 하는 HTML 요소를 선택하기 위해 CSS에서 제공하는 수단이다.**![css selector](https://poiemaweb.com/img/css-syntax.png)

  위와 같은 구문을 rule set이라 하며 셀렉터에 의해 선택된 특정 html 요소를 어떻게 렌더링할 것인지 브라우저에 지시하는 역할을 한다. 또한 이런 rule set의 집합을 스타일시트라 한다.
  
- 복수개의 셀렉터를 연속하여 지정할 수 있으며 쉼표로 구분한다.

  ```css
  h1, p { color: red; }
  ```

- ##### 1.1 전체 셀렉터(Universal Selector)

  - * *****을 사용하며 html 요소를 포함한 HTML 문서 내의 모든 요소(head 요소도 포함)를 선택하여 스타일을 적용한다.

    ```html
     * { color: red; }
    ```

- ##### 1.2 태그 셀렉터(Type Selector)

  - **태그명**을 사용하며 지정된 태그명을 가지는 요소를 선택한다.
  
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* 모든 p 태그 요소를 선택 */
        p { color: red; }
      </style>
    </head>
    <body>
      <h1>Heading</h1>
      <div>
        <p>paragraph 1</p>
        <p>paragraph 2</p>
      </div>
      <p>paragraph 3</p>
    </body>
    </html>
    ```
  
- ##### 1.3 ID 셀렉터(ID Selector)

  - **#id 어트리뷰트 값**을 셀렉터로 사용하며 설정한 id 어트리뷰트 값과 일치하는 요소를 선택한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* id 어트리뷰트 값이 p1인 요소를 선택 */
        #p1 { color: red; }
      </style>
    </head>
    <body>
      <h1>Heading</h1>
      <div class="container">
        <p id="p1">paragraph 1</p>
        <p id="p2">paragraph 2</p>
      </div>
      <p>paragraph 3</p>
    </body>
    </html>
    ```

- ##### 1.4 클래스 셀렉터(Class Selector)

  - **.class 어트리뷰트 값**을 셀렉터로 사용한다. class 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* class 어트리뷰트 값이 container인 모든 요소를 선택 */
        /* color 어트리뷰트는 자식 요소에 상속된다. */
        .container { color: red; }
        /* not supported in IE */
        #p2 { color: initial; }
      </style>
    </head>
    <body>
      <h1>Heading</h1>
      <div class="container">
        <p id="p1">paragraph 1</p>
        <p id="p2">paragraph 2</p>
      </div>
      <p>paragraph 3</p>
    </body>
    </html>
    ```

  - HTML 요소에 class 어트리뷰트 값은 **공백**으로 구분하여 여러 개 지정할 수 있다. 아래와 같이 클래스 셀렉터를 사용하여 미리 스타일을 정의해 두고, HTML 요소는 이미 정의되어 있는 클래스를 지정하는 것으로 필요한 스타일을 지정할 수 있다. 이것은 재사용의 측면에서 유리하다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* class 어트리뷰트 값이 text-center인 모든 요소를 선택 */
        .text-center { text-align: center; }
        /* class 어트리뷰트 값이 text-large인 모든 요소를 선택 */
        .text-large  { font-size: 200%; }
        /* class 어트리뷰트 값이 text-red인 모든 요소를 선택 */
        .text-red    { color: red; }
        /* class 어트리뷰트 값이 text-blue인 모든 요소를 선택 */
        .text-blue   { color: blue; }
      </style>
    </head>
    <body>
      <p class="text-center">Center</p>
      <p class="text-large text-red">Large Red</p>
      <p class="text-center text-large text-blue">Center Large Blue</p>
    </body>
    </html>
    ```

- ##### 1.5 어트리뷰트 셀렉터(Attribute Selector)

  - **셀렉터[어트리뷰트]** 형태로 사용하며 지정된 어트리뷰트를 갖는 모든 요소를 선택한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* a 요소 중에 href 어트리뷰트를 갖는 모든 요소 */
        a[href] { color: red; }
      </style>
    </head>
    <body>
      <a href="http://www.poiemaweb.com">poiemaweb.com</a><br>
      <a href="http://www.google.com" target="_blank">google.com</a><br>
      <a href="http://www.naver.com" target="_top">naver.com</a>
    </body>
    </html>
    ```

  - **셀렉터[어트리뷰트="값"]**의 형태로도 사용할 수 있다. 지정된 어트리뷰트를 가지며 지정된 값과 어트리뷰트가 모두 일치하는 모든 요소를 선택한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* a 요소 중에 target 어트리뷰트의 값이 "_blank"인 모든 요소 */
        a[target="_blank"] { color: red; }
      </style>
    </head>
    <body>
      <a href="http://www.poiemaweb.com">poiemaweb.com</a><br>
      <a href="http://www.google.com" target="_blank">google.com</a><br>
      <a href="http://www.naver.com" target="_top">naver.com</a>
    </body>
    </html>
    ```

  - **셀렉터[어트리뷰트~="값"]**은 지정된 어트리뷰트가 지정된 값을 (공백으로 분리된) 단어로 포함하는 요소를 선택한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* h1 요소 중에 title 어트리뷰트 값에 "first"를 단어로 포함하는 요소 */
        h1[title~="first"] { color: red; }
      </style>
    </head>
    <body>
      <h1 title="heading first">Heading first</h1>
      <h1 title="heading-first">Heading-first</h1>
      <h1 title="heading second">Heading second</h1>
      <h1 title="heading third">Heading third</h1>
    </body>
    </html>
    ```

    위의 예제에서는 1번째 h1 태그만 셀렉터의 영향을 받는다.

  - **셀렉터[어트리뷰트|="값"]**는 지정된 어트리뷰트의 값과 일치하거나 지정 어트리뷰트의 값 뒤 연이은 하이픈("값-")으로 시작하는 요소를 선택한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* p 요소 중에 lang 어트리뷰트 값이 "en"과 일치하거나 "en-"로 시작하는 요소 */
        p[lang|="en"] { color: red; }
      </style>
    </head>
    <body>
      <p lang="en">Hello!</p>
      <p lang="en-us">Hi!</p>
      <p lang="en-gb">Ello!</p>
      <p lang="us">Hi!</p>
      <p lang="no">Hei!</p>
    </body>
    </html>
    ```

    위의 예시에서는 어트리뷰트값에 en이 포함되어 있는 태그들만 셀렉터의 영향을 받는다.

  - **셀렉터[어트리뷰트^="값"]**은 지정된 어트리뷰트 값으로 시작하는 요소를 선택한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* a 요소 중에 href 어트리뷰트 값이 "https://"로 시작하는 요소 */
        a[href^="https://"] { color: red; }
      </style>
    </head>
    <body>
      <a href="https://www.test.com">https://www.test.com</a><br>
      <a href="http://www.test.com">http://www.test.com</a>
    </body>
    </html>
    ```

  - **셀렉터[어트리뷰트$="값"]**은 지정된 어트리뷰트 값으로 끝나는 요소를 선택한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* a 요소 중에 href 어트리뷰트 값이 ".html"로 끝나는 요소 */
        a[href$=".html"] { color: red; }
      </style>
    </head>
    <body>
      <a href="test.html">test.html</a><br>
      <a href="test.jsp">test.jsp</a>
    </body>
    </html>
    ```

  - **셀렉터[어트리뷰트*="값"]**은 지정된 어트리뷰트 값을 포함하는 요소를 선택한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* div 요소 중에서 class 어트리뷰트 값에 "test"를 포함하는 요소 */
        div[class*="test"] { color: red; }
        /* div 요소 중에서 class 어트리뷰트 값에 "test"를 단어로 포함하는 요소 */
        div[class~="test"] { background-color: yellow; }
      </style>
    </head>
    <body>
      <div class="first_test">The first div element.</div>
      <div class="second">The second div element.</div>
      <div class="test">The third div element.</div>
      <p class="test">This is some text in a paragraph.</p>
    </body>
    </html>
    ```

    첫번째 셀렉터는 1,3번째 태그에 영향을 주고 두번째 셀렉터는 3번째 태그에 영향을 준다.
  
- ##### 1.6 복합 셀렉터(Combinator)

  - ###### 1.6.1 후손 셀렉터(Descendant Combinator)

    - 자신의 한 단계 위에 속하는 요소를 부모 요소, 한 단계 아래에 속하는 요소를 **자손 요소**라 한다. 또한 자신보다 n 단계 아래에 속하는 요소는 **후손 요소**라 한다.![css descendant child combinator](https://poiemaweb.com/img/descendant-child.png)

    - 후손 셀렉터는 셀렉터 A의 모든 후손 요소 중 셀렉터 B와 일치하는 요소를 선택한다.

    - '셀렉터A 셀렉터B'의 형식으로 작성한다.

      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          /* div 요소의 후손요소 중 p 요소 */
          div p { color: red; }
        </style>
      </head>
      <body>
        <h1>Heading</h1>
        <div>
          <p>paragraph 1</p>
          <p>paragraph 2</p>
          <span><p>paragraph 3</p></span>
        </div>
        <p>paragraph 4</p>
      </body>
      </html>
      ```

  - ###### 1.6.2 자식 셀렉터 (Child Combinator)

    - 셀렉터 A의 모든 자식 요소 중 셀렉터 B와 일치하는 요소를 선택한다.

    - '셀렉터A > 셀렉터B'의 형태로 사용한다.

      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          /* div 요소의 자식요소 중 p 요소 */
          div > p { color: red; }
        </style>
      </head>
      <body>
        <h1>Heading</h1>
        <div>
          <p>paragraph 1</p>
          <p>paragraph 2</p>
          <span><p>paragraph 3</p></span>
        </div>
        <p>paragraph 4</p>
      </body>
      </html>
      ```

  - ###### 1.6.3 형제(동위) 셀렉터 (Sinling ombinator)

    - 형제 관계(동위 관계)에서 뒤에 위치하는 요소를 선택할 때 사용한다.![Sibling Combinator](https://poiemaweb.com/img/Sibling_Combinator.png)

    - ###### 1.6.3.1 인접 형제 셀렉터 (Adjabling Combinator)

      - 셀렉터A의 형제 요소 중 셀렉터A 바로 뒤에 위치하는 셀렉터B 요소를 선택한다. A와 B 사이에 다른 요소가 존재한다면 작동하지 않는다.

      - '셀렉터A + 셀렉터B'의 형태로 사용한다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            /* p 요소의 형제 요소 중에 p 요소 바로 뒤에 위치하는 ul 요소를 선택한다. */
            p + ul { color: red; }
          </style>
        </head>
        <body>
          <div>A div element.</div>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        
          <p>The first paragraph.</p>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        
          <h2>Another list</h2>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </body>
        </html>
        ```

    - ###### 1.6.3.2 일반 형제 셀렉터(General Sibling Combinator)

      - 셀렉터A의 형제 요소 중 셀렉터A 뒤에 위치하는 셀렉터B 요소를 모두 선택한다.

      - 셀렉터A ~ 셀렉터B의 형태로 사용한다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            /* p 요소의 형제 요소 중에 p 요소 뒤에 위치하는 ul 요소를 모두 선택한다.*/
            p ~ ul { color: red; }
          </style>
        </head>
        <body>
          <div>A div element.</div>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        
          <p>The first paragraph.</p>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        
          <h2>Another list</h2>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </body>
        </html>
        ```

- ##### 1.7 가상 클래스 셀렉터 (Pseudo-Class Selector)

  - 가상 클래스는 요소의 특정 상태에 따라 스타일을 정의할 때 사용된다. 특정 상태로는 **마우스가 올라와 있을 때, 링크를 방문하기 전후, 포커스가 들어와 있을 때** 등이 있다. 이러한 특정 상태에는 원래 클래스가 존재하지 않기에 가상 클래스를 임의로 지정하여 선택한다.

  - 가상 클래스는 마침표 대신 콜론을 사용한다.

  - CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.

    ```css
    selector:pseudo-class {
      property: value;
    }
    ```

  - div 요소가 hover(마우스가 올라와 있는 상황) 상태일 때 배경색을 노란색으로 지정하는 예

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* a 요소가 hover 상태일 때 */
        a:hover { color: red; }
        /* input 요소가 focus 상태일 때 */
        input:focus { background-color: yellow; }
      </style>
    </head>
    <body>
      <a href="#">Hover me</a><br><br>
      <input type="text" placeholder="focus me">
    </body>
    </html>
    ```

  - ###### 1.7.1 링크 셀렉터 (Link pseudo-classes), 동적 셀렉터(User action pseudo-classes)

    - | pseudo-class | Description                      |
      | ------------ | -------------------------------- |
      | :link        | 셀렉터가 방문하지 않은 링크일 때 |
      | :visited     | 셀렉터가 방문한 링크일 때        |
      | :hover       | 셀렉터에 마우스가 올라와 있을 때 |
      | :active      | 셀렉터가 클릭된 상태일 때        |
      | :focus       | 셀렉터에 포커스가 들어와 있을 때 |

  - ###### 1.7.2 UI 요소 상태 셀렉터 (UI element states pseudo-classes)

    - | pseudo-class | Description                      |
      | ------------ | -------------------------------- |
      | :checked     | 셀렉터가 체크 상태일 때          |
      | :enabled     | 셀렉터가 사용 가능한 상태일 때   |
      | :disabled    | 셀렉터가 사용 불가능한 상태일 때 |

  - ###### 1.7.3 구조 가상 클래스 셀렉터 (Structural pseudo-classes)
  
    - 
      
      | pseudo-class | Description                                                  |
      | ------------ | ------------------------------------------------------------ |
  | :first-child | 셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택한다 |
      | :last-child  | 셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택한다 |
      
      | pseudo-class       | Description                                                  |
      | ------------------ | ------------------------------------------------------------ |
    | :nth-child(n)      | 셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택한다. |
      | :nth-last-child(n) | 셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택한다. |
      
      n은 0부터 시작하는 정수이다.
      
      |  n   | 2n+1 | 2n-1 | 3n-2 | 3n+1 | -n+5 |
      | :--: | :--: | :--: | :--: | :--: | :--: |
      |  0   |  1   |  -1  |  -2  |  1   |  5   |
      |  1   |  3   |  1   |  1   |  4   |  4   |
      |  2   |  5   |  3   |  4   |  7   |  3   |
      |  3   |  7   |  5   |  7   |  10  |  2   |
      |  4   |  9   |  7   |  10  |  13  |  1   |
      |  5   |  11  |  9   |  13  |  16  |  0   |
      
      위의 볼드체로 표기된 모든 수열이 셀렉터의 괄호 안에 들어갈 수 있다. 단, 이 수열들의 값들 중 0과 음수는 생략된다.(따라서 2n+1이나 2n-1은 같은 수열을 생성한다.)
      
      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          /* ol 요소의 자식 요소인 li 요소 중에서 짝수번째 요소만을 선택 */
          ol > li:nth-child(2n)   { color: orange; }
          /* ol 요소의 자식 요소인 li 요소 중에서 홀수번째 요소만을 선택 */
          ol > li:nth-child(2n+1) { color: green; }
      
          /* ol 요소의 자식 요소인 li 요소 중에서 첫번쨰 요소만을 선택 */
          ol > li:first-child     { color: red; }
          /* ol 요소의 자식 요소인 li 요소 중에서 마지막 요소만을 선택 */
          ol > li:last-child      { color: blue; }
      
          /* ol 요소의 자식 요소인 li 요소 중에서 4번째 요소 요소만을 선택 */
          ol > li:nth-child(4)    { background: brown; }
      
          /* ul 요소의 모든 자식 요소 중에서 뒤에서부터 시작하여 홀수번째 요소만을 선택 */
          ul > :nth-last-child(2n+1) { color: red; }
          /* ul 요소의 모든 자식 요소 중에서 뒤에서부터 시작하여 짝수번째 요소만을 선택 */
          ul > :nth-last-child(2n)   { color: blue; }
        </style>
      </head>
      <body>
        <ol>
          <li>Espresso</li>
          <li>Americano</li>
          <li>Caffe Latte</li>
          <li>Caffe Mocha</li>
          <li>Caramel Latte</li>
          <li>Cappuccino</li>
        </ol>
      
        <ul>
          <li>Espresso</li>
          <li>Americano</li>
          <li>Caffe Latte</li>
          <li>Caffe Mocha</li>
          <li>Caramel Latte</li>
          <li>Cappuccino</li>
        </ul>
      </body>
      </html>
      ```
      
      셀렉터의 순서에 따라 앞의 셀렉터를 덮어쓸 수 있다.
      
      | pseudo-class         | Description                                                  |
      | -------------------- | ------------------------------------------------------------ |
      | :first-of-type       | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 요소를 선택한다. |
      | :last-of-type        | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 마지막에 등장하는 요소를 선택한다. |
      | :nth-of-type(n)      | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 앞에서 n번째에 등장하는 요소를 선택한다. |
      | :nth-last-of-type(n) | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 뒤에서 n번째에 등장하는 요소를 선택한다. |
      
      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          /* p 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 p 요소 */
          p:first-of-type  { color: red; }
          /* p 요소의 부모 요소의 자식 요소 중 마지막 등장하는 p 요소 */
          p:last-of-type   { color: blue; }
          /* p 요소의 부모 요소의 자식 요소 중 앞에서 2번째에 등장하는 p 요소 */
          p:nth-of-type(2) { color: green; }
          /* p 요소의 부모 요소의 자식 요소 중 뒤에서 2번째에 등장하는 p 요소 */
          p:nth-last-of-type(2) { color: orange;}
      
          /* p 요소 중에서 첫번째 자식을 선택 */
          p:first-child { background: brown;}
        </style>
      </head>
      <body>
        <h1>This is a heading</h1>
        <p>The first paragraph.</p>
        <p>The second paragraph.</p>
        <p>The third paragraph.</p>
        <p>The fourth paragraph.</p>
        <div>
          <h1>This is a heading</h1>
          <p>The first paragraph.</p>
          <p>The second paragraph.</p>
          <p>The third paragraph.</p>
          <p>The fourth paragraph.</p>
        </div>
      </body>
      </html>
      ```
    
  - ###### 1.7.4 부정 셀렉터 (Negation pseudo-class)
  
    - :not(셀렉터)의 형식이며 셀렉터에 해당하지 않는 모든 요소를 선택한다.
  
      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          /* input 요소 중에서 type 어트리뷰트의 값이 password가 아닌 요소를 선택 */
          input:not([type=password]) {
            background: yellow;
          }
        </style>
      </head>
      <body>
        <input type="text" value="Text input">
        <input type="email" value="email input">
        <input type="password" value="Password input">
      </body>
      </html>
      
      ```
  
      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            margin: 0;
          }
          div {
            float: left;
            width: 32%;
            height: 200px;
            background-color: red;
            /* margin-bottom: 2%; */
            color: #fff;
            font-size: 3em;
            line-height: 200px;
            text-align: center;
          }
          /* div 요소 중에서 1, 4, 7...번째 등장하는 요소가 아닌 요소만을 선택 */
          /* 1, 4, 7... : 공차가 3인 등차수열 */
          div:not(:nth-of-type(3n+1)) {
            margin-left: 2%;
          }
          /* div 요소 중에서 4번째 이후 등장하는 요소가 아닌 요소만을 선택 */
          div:not(:nth-of-type(n+4)) {
            margin-bottom: 2%;
          }
        </style>
      </head>
      <body>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </body>
      </html>
      ```
  
  - ###### 1.7.5 정합성 체크 셀렉터 (validity pseudo-class)
  
    - :valid(셀렉터)와 :invalid(셀렉터)의 형식이 있으며 각각 정합성 검증이 성공한 요소와 실패한 input 요소 또는 form 요소를 선택한다. 여기서 정합성이란 요구한 입력 조건이 갖추어졌는지를 말한다.
  
      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          input[type="text"]:valid {
            background-color: greenyellow;
          }
      
          input[type="text"]:invalid {
            background-color: red;
          }
        </style>
      </head>
      <body>
        <label>입력값이 반드시 필요
          <input type="text" required>
        </label>
        <br>
        <label>특수문자를 포함하지 않는 4자리 문자 또는 숫자
          <input type="text" value="ab1!"
            pattern="[a-zA-Z0-9]{4}" required>
        </label>
        <br>
        <label>핸드폰 번호 형식
          <input type="text" value="010-1111-2222"
            pattern="^\d{3}-\d{3,4}-\d{4}$" required>
        </label>
      </body>
      </html>
      ```
  
- ##### 1.8 가상 요소 셀렉터 (Pseudo-Element Selector)

  - 가상 요소는 요소의 특정 부분에 스타일을 적용하기 위하여 사용된다. 특정 부분이란 요소 콘텐츠의 첫글자, 첫줄 등을 말한다.

  - 가상 요소에는 두 개의 콜론을 사용한다. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.

    ```css
    selector::pseudo-element {
      property:value;
    }
    ```

    | pseudo-element | Description                                                  |
    | -------------- | ------------------------------------------------------------ |
    | ::first-letter | 콘텐츠의 첫 글자를 선택한다.                                 |
    | ::first-line   | 콘텐츠의 첫 줄을 선택한다. 블록 요소에만 적용할 수 있다.     |
    | ::after        | 콘텐츠의 뒤에 위치하는 공간을 선택한다. 일반적으로 content 어트리뷰트와 함께 사용된다. |
    | ::before       | 콘텐츠의 앞에 위치하는 공간을 선택한다. 일반적으로 content 어트리뷰트와 함께 사용된다. |
    | ::selection    | 드래그한 콘텐츠를 선택한다. ios safari 등 일부 브라우저에서 동작하지 않는다. |

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* p 요소 콘텐츠의 첫글자를 선택 */
        p::first-letter { font-size: 3em; }
        /* p 요소 콘텐츠의 첫줄을 선택 */
        p::first-line   { color: red; }
    
        /* h1 요소 콘텐츠의 앞 공간에 content 어트리뷰트 값을 삽입한다 */
        h1::before {
          content: " HTML!!! ";
          color: blue;
        }
        /* h1 요소 콘텐츠의 뒷 공간에 content 어트리뷰트 값을 삽입한다 */
        h1::after {
          content: " CSS3!!!";
          color: red;
        }
    
        /* 드래그한 콘텐츠를 선택한다 */
        ::selection {
          color: red;
          background: yellow;
        }
      </style>
    </head>
    <body>
      <h1>This is a heading</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum sunt distinctio sed, tempore, repellat rerum et ea laborum voluptatum! Quisquam error fugiat debitis maiores officiis, tenetur ullam amet in!</p>
    </body>
    </html>
    ```




#### 2. 프로퍼티(property/속성)

- **셀렉터로 지정한 html요소에 프로퍼티(속성)와 값을 지정하는 것**으로 다양한 style을 정의할 수 있다.

- 프로퍼티는 표준 스펙으로 이미 지정되어 있는 것을 사용하여야하며 사용자가 임의로 정의할 수 없다.

- 여러 개의 프로퍼티를 연속해서 지정할 수 있으며 세미콜론으로 구분한다.

- ##### 2.1 width / height 프로퍼티

  - width와 height 프로퍼티는 요소의 너비와 높이를 지정하기 위해 사용된다. 이때 지정되는 요소의 너비와 높이는 콘텐츠 영역을 대상으로 한다.

  - 이는 box-sizing 프로퍼티에 기본값인 content-box가 적용되었기 때문으로 만약 box-sizing 프로퍼티에 border-box를 적용하면 콘텐츠 영역, padding, border가 포함된 영역을 width/height 프로퍼티의 대상으로 지정할 수 있다.

  - 만일 width와 height로 지정한 콘텐츠 영역보다 실제 콘텐츠가 크면 콘텐츠 영역을 넘치게 된다. 이 때 overflow: hidden;을 지정하면 넘친 콘텐츠를 감출 수 있다.

    ```
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        div {
          width: 300px;
          height: 100px;
          background-color: cornsilk;
          border: 5px solid navy;
        }
      </style>
    </head>
    <body>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </body>
    </html>
    ```

  - 박스 전체 크기는 다음과 같이 계산해볼 수 있다.

    ```
    전체 너비
    width + left padding + right padding + left border + right border + left margin + right margin
    전체 높이
    height + top padding + bottom padding + top border + bottom border + top margin + bottom margin
    ```

    ![img](https://poiemaweb.com/img/box-model-calc.png)

    ```
    width
    20+6+20+400+20+6+20=492(px)
    height
    20+6+20+100+20+6+20=192(px)
    ```

  - width와 height 프로퍼티의 초기값은 auto로써 이것은 브라우저가 상황에 따라 적당한 width와 height 값을 계산할 것을 의미한다. 예시로 block 요소의 경우, widthsms qnah dythdml 100%, height는 콘텐츠의 높이(+약간의 여분)가 지정된다.

  - 명시적으로 width와 height를 지정하기 위해서는 px, % 등의 크기 단위를 사용한다.

  - width와 height 프로퍼티를 비롯한 모든 박스모델 관련 프로퍼티(margin, padding, border, box-sizing 등)는 상속(중첩)되지 않는다.

- ##### 2.2 margin/padding 프로퍼티

  - margin / padding 프로퍼티는 content의 4개 방향(top, right, left, bottom)에 대하여 지정이 가능하다.

    ![box model detail](https://poiemaweb.com/img/box-model-detail.png)

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          div {
            border: 5px solid red;
    
            margin-top: 40px;
            margin-right: 30px;
            margin-bottom: 20px;
            margin-left: 10px;
    
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 30px;
            padding-left: 40px;
          }
        </style>
      </head>
      <body>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </body>
    </html>
    ```

  - -top, -right, -bottom, -left 4방향의 프로퍼티를 각각 지정하지 않고 margin, padding 1개의 프로퍼티만으로 4방향의 프로퍼티를 한번에 지정할 수 있다. 

    - 4개의 값을 지정하는 경우 : margin: n px n px n px n px; 형식으로 지정되며 top, right, bottom, left 순이다.

    - 3개의 값을 지정하는 경우 : right와 left가 함께 지정되고 top, (right left), bottom 순이다.

    - 2개의 값을 지정하는 경우 : 이번엔 top과 bottom이 함께 지정되며 (top bottom), (right left) 순이다.

    - 1개의 값을 지정하는 경우 : 모두 같은 값으로 지정된다.

      ```
       margin:  40px 30px 20px 10px;
      ```

  - margin 프로퍼티에 auto 키워드를 설정하면 해당 요소를 브라우저 중앙에 위치 시킬 수 있다.

    ```css
    margin: 0 auto;
    ```

  - ###### max-width, min-width

    - 요소 너비가 브라우저 너비보다 크면 가로 스크롤바가 만들어진다. 이 문제는 max-width 프로퍼티로 해결할 수 있다.

      ```css
      max-width: 600px;
      ```

    - max-width 프로퍼티를 사용하면 브라우저 너비가 요소의 너비보다 좁아질 때 자동으로 요소의 너비가 줄어든다.

    - min-width는 요소 너비의 최소값을 지정한다. 브라우저의 너비가 지정한 값보다 작아져도 요소 너비는 지정 너비를 유지한다.

- ##### 2.3 border 프로퍼티

  - ###### 2.3.1 border-style

    - 테두리 선의 스타일을 지정한다.

      ```http
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            p {
              background: palegreen;
              padding: 10px;
            }
            p.dotted { border-style: dotted; }
            p.dashed { border-style: dashed; }
            p.solid  { border-style: solid; }
            p.double { border-style: double; }
            p.groove { border-style: groove; }
            p.ridge  { border-style: ridge; }
            p.inset  { border-style: inset; }
            p.outset { border-style: outset; }
            p.none   { border-style: none; }
            p.hidden { border-style: hidden; }
            p.mix    { border-style: dotted dashed solid double; }
          </style>
        </head>
        <body>
          <h2>border-style Property</h2>
      
          <p class="dotted">dotted</p>
          <p class="dashed">dashed</p>
          <p class="solid">solid</p>
          <p class="double">double</p>
          <p class="groove">groove</p>
          <p class="ridge">ridge</p>
          <p class="inset">inset</p>
          <p class="outset">outset</p>
          <p class="none">none</p>
          <p class="hidden">hidden</p>
          <p class="mix">dotted dashed solid double</p>
        </body>
      </html>
      ```

    - 프로퍼티 값의 갯수에 따라 4개 방향에 대하여 지정이 가능하다. 위의 margin 프로퍼티와 방법은 같다.

  - ###### 2.3.2 border-width

    - 테두리의 두께를 지정하는 프로퍼티. 프로퍼티 값의 갯수에 따라 4개 방향에 대하여 지정이 가능하다.
    - border-width 프로퍼티는 border-style과 함께 사용하지 않으면 적용되지 않는다.
    - 프로퍼티 값을 직접 지정하는 것 외에도 thin(1px), medium(3px), thick(5px)이 있다.

  - ###### 2.3.3 border-color

    - 테두리의 색상을 지정한다. 프로퍼티 값의 갯수에 따라 4개 방향에 대하여 지정이 가능하다.
    - border-color 프로퍼티는 border-style과 함께 사용하지 않으면 적용되지 않는다.

  - ###### 2.3.4 border-radius

    - 테두리 모서리를 둥글게 표현하도록 지정한다. 프로퍼티 값은 길이를 나타내는 단위()


#### 3. 값(value/속성값)

- **프로퍼티의 값**으로 해당 프로퍼티에 사용할 수 있는 값을 '키워드'나 '크기 단위' 또는 '색상 표현 단위'등의 특정 단위로 지정하여야 한다. 

- ##### 3.1 키워드

  - 각 프로퍼티에 따라 사용할 수 있는 키워드가 존재한다.(추후 추가)

- ##### 3.2 크기 단위

  - CSS에서의 대표적인 크기 단위는 px, em, %이다.(단, cm, mm, inch 등의 단위도 존재한다.)

  - px은 절댓값이고 em, %는 상댓값이다. 브라우저의 폰트 사이즈 기본값은 대부분 16px, 1em, 100%이다.

  - 프로퍼티 값이 0인 경우, 단위를 생략할 수 있다.

  - ###### 3.2.1 px

    - px은 픽셀 단위이다. 1px은 화소 1개 크기를 의미한다. ex) 200만 화소(픽셀)의 디지털 카메라로 찍은 사진은 가로 1600 화소 * 세로 1200 화소 = 1920000(192만)화소로 통상 200만 화소라고 하는 것이다. 

    - 픽셀은 디바이스 해상도에 따라 상대적인 크기를 갖는다.![í´ìë](https://poiemaweb.com/img/resolution.jpg)

    - 위에서처럼 픽셀의 크기가 제각각이기 때문에 대부분의 브라우저는 1px을 1/96 인치의 절대단위로 규정해놓고 이로 인식한다.

    - px은 요소의 크기나 이미지의 크기 지정에 주로 사용된다.

      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            text-align: center;
          }
          div {
            font-size: 14px;
            font-weight: bold;
            padding: 2em; /* 14px * 2 = 28px */
            background-color: rgba(255, 0, 0, 0.2);
          }
        </style>
      </head>
      <body>
        <div>Font size: 14px</div>
      </body>
      </html>
      ```

  - ###### 3.2.2 %

    - %는 백분율 단위의 상대 단위로 요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈)에 상대적인 사이즈를 설정한다.

      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-size: 14px;
            text-align: center;
          }
          div {
            font-size: 120%; /* 14px * 1.2 = 16.8px */
            font-weight: bold;
            padding: 2em;    /* 16.8px * 2 = 33.6px */
            background-color: rgba(255, 0, 0, 0.2);
          }
        </style>
      </head>
      <body>
        <div>Font size: 14px * 120% → 16.8px</div>
      </body>
      </html>
      ```

  - ###### 3.2.3 em

    - em은 배수 단위로 상대 단위이다. %와 동일하게 요소에 지정된 사이즈에 상대적인 사이즈를 설정한다.

    - 폰트 사이즈 설정이나 콘텐츠를 포함하는 컨테이너의 크기 설정에 사용하면 상대적인 설정이 가능하여 편리하다.

      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-size: 14px;
            text-align: center;
          }
          div {
            font-size: 1.2em; /* 14px * 1.2 = 16.8px */
            font-weight: bold;
            padding: 2em;     /* 16.8px * 2 = 33.6px */
            background-color: rgba(255, 0, 0, 0.2);
          }
        </style>
      </head>
      <body>
        <div>Font size: 1.2em → 14px * 1.2 = 16.8px</div>
      </body>
      </html>
      ```

    - 중첩된 자식 요소에 em을 지정하면 모든 자식 요소의 사이즈에 영향을 미치기 때문에 주의하여야 한다.

      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-size: 14px;
            text-align: center;
          }
          div {
            font-size: 1.2em; /* 14px * 1.2 = 16.8px */
            font-weight: bold;
            padding: 2em;
          }
          .box1 { background-color: rgba(255, 0, 0, 0.2); }
          .box2 { background-color: rgba(255, 0, 0, 0.6); }
          .box3 { background-color: rgba(255, 0, 0, 0.8); }
        </style>
      </head>
      <body>
        <div class='box1'>
          Font size: 1.2em ⇒ 14px * 1.2 = 16.8px
          <div class='box2'>
            Font size: 1.2em ⇒ 16.8px * 1.2 = 20.16px
            <div class='box3'>
              Font size: 1.2em ⇒ 20.16px * 1.2 = 24.192px
            </div>
          </div>
        </div>
      </body>
      </html>
      ```

  - ###### 3.2.4 rem

    - 위의  em의 기준은 중첩의 영향으로 바뀔 수 있기 때문에(상황에 따라 nem은 각지 다른 값을 가질 수 있다.)

    - rem은 최상위 요소(html)이 사이즈를 기준으로 삼는다.

      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          html {
            font-size: 14px;
            /* font-size 미지정 시에는 16px */
          }
          div {
            font-size: 1.2rem; /* html font-size: 14px * 1.2 = 16.8px */
            font-weight: bold;
            padding: 2em;
            text-align: center;
          }
          .box1 { background-color: rgba(255, 0, 0, 0.2); }
          .box2 { background-color: rgba(255, 0, 0, 0.6); }
          .box3 { background-color: rgba(255, 0, 0, 0.8); }
        </style>
      </head>
      <body>
        <div class='box1'>
          Font size: 1.2rem ⇒ 14px * 1.2 = 16.8px
          <div class='box2'>
            Font size: 1.2rem ⇒ 14px * 1.2 = 16.8px
            <div class='box3'>
              Font size: 1.2rem ⇒ 14px * 1.2 = 16.8px
            </div>
          </div>
        </div>
      </body>
      </html>
      ```

    - 사용자가 브라우저의 기본 폰트 크기를 변경하더라도 이에 따라 웹사이트의 레이아웃을 적절히 조정할 수 있다는 장점이 있다. 따라서 콘텐츠의 크기에 따라 가변적으로 대응하여야 하는 wrapper 요소(container) 등에 적합하다.
    
      ```css
      .container{
      	width: 70rem; // 14px * 70 = 980px
      }
      ```
    
      Reset CSS를 사용하여 사전에 html 요소의 font-size 지정이 필요하다. font-size 미지정 시에는 16px가 적용된다.
    
  - ###### 3.2.5 Viewport 단위 (vh, vw, vmin, vmax)
  
    - 반응형 웹디자인은 화면의 크기에 동적으로 대응하기 위해 % 단위를 자주 사용한다. 하지만 %와 em 단위는 중첩에 의해 부모 요소에 상대적 영향을 받는다.
  
    - Viewpor 단위는 상대적인 단위로 viewport를 기준으로 한 상대적 사이즈를 의미한다.
  
      | 단위 |                Description                 |
      | :--: | :----------------------------------------: |
      |  vw  |           viewport 너비의 1/100            |
      |  vh  |           viewport 높이의 1/100            |
      | vmin | viewport 너비 또는 높이 중 작은 쪽의 1/100 |
      | vmax |  viewport 너비 또는 높이 중 큰 쪽의 1/100  |
  
      ex) viewport 너비가 1000px, 높이가 600px인 경우 : 1vw = 10px, 1vh = 6px, vmin = 6px, vmax = 10px
  
    - 단, IE 8 이하는 지웒자ㅣ 않으며 IE 9 ~11, Edge는 지원이 완전하지 않으므로 주의가 필요하다.
  
- ##### 3.3 색상 표현 단위

  - 색상을 지정하기 위해 키워드(red, blue...)를 사용할 수 있다. 사용이 간편하지만 표현할 수 있는 색상의 수는 제한된다.(키워드 리스트는 https://www.w3.org/TR/css3-color/ 참조)

  - 더욱 다양한 색상을 표현하기 위해 다음과 같은 표현 단위들을 사용할 수 있다.(http://htmlcolorcodes.com/ 참조)

    | 단위                                            | 사용 예시               |
    | ----------------------------------------------- | ----------------------- |
    | HEX 코드 단위 (Hexadecimal Colors)              | #000000                 |
    | RGB (Red, Green, Blue)                          | rgb(255, 255, 0)        |
    | RGBA (Red, Green, Blue, Alpha/투명도)           | rgba(255, 255, 0, 1)    |
    | HSL (Hue/색상, Saturation/채도, Lightness/명도) | hsl(0, 100%, 25%)       |
    | HSLA (Hue, Saturation, Lightness, Alpha)        | hsla(60, 100%,, 50%, 1) |

#### 4. 박스 모델

- 모든 HTML 요소는 Box 형태의 영역을 가지고 있다. 이 Box는 콘텐트(Content), 패딩(Padding), 테두리(Border), 마진(Margin)으로 구성된다.![css box model](https://poiemaweb.com/img/box-model.png)

- 브라우저는 박스 모델의 크기(dimension)와 프로퍼티(색, 배경, 모양 등), 위치를 근거로 하여 렌더링을 실행한다.

- 웹디자인은 콘텐츠를 담을 박스 모델을 정의하고 CSS 프로퍼티를 통해 스타일(배경, 폰트와 텍스트 등)과 위치 및 정렬을 지정하는 것이라고 할 수 있다.

- | 명칭    | 설명                                                         |
  | ------- | ------------------------------------------------------------ |
  | Content | 요소의 텍스트나 이미지 등의 실제 내용이 위치하는 영역이다. width, height 프로퍼티를 갖는다. |
  | Padding | 테두리(Border) 안쪽에 위치하는 요소의 내부 여백 영역이다. padding 프로퍼티 값은 패딩 영역의 두께를 의미하며 기본색은 투명이다. 요소에 적용된 배경의 컬러, 이미지는 패딩 영역까지 적용된다. |
  | Border  | 테두리 영역으로 border 프로퍼티 값은 테두리의 두께를 의미한다. |
  | Margin  | 테두리(Border) 바깥에 위치하는 요소의 외부 여백 영역이다. margin 프로퍼티 값은 마진 영역의 두께를 의미한다. 기본적으로 투명하며 배경색을 지정할 수 없다. |

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      div {
        /* 배경색의 지정: 콘텐츠 영역과 패딩 영역에 적용된다. */
        background-color: lightgrey;
        /* 콘텐츠 영역의 너비 */
        width: 300px;
        /* 패딩 영역의 두께 */
        padding: 25px;
        /* 테두리: 두께 형태 색상 */
        border: 25px solid navy;
        /* 마진 영역의 두께 */
        margin: 25px;
      }
    </style>
  </head>
  <body>
    <h2>Box Model</h2>
  
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </body>
  </html>
  ```

  

### CSS 사용법(가제)

#### HTML과 CSS의 연동

- HTMl은 CSS를 포함할 수 있다.

- CSS를 가지고 있지 않은 HTML은 브라우저에서 기본으로 적용하는 CSS에 의해 렌더링된다.

- CSS와 HTML을 연동하는 방법으로는 아래의 3가지가 있다.

  - ##### 4.1 Link style

    - HTML에서 외부에 있는 CSS 파일을 로드하는 방식이다. 가장 일반적으로 사용된다.

      ```html
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="css/style.css">
        </head>
        <body>
          <h1>Hello World</h1>
          <p>This is a web page.</p>
        </body>
      </html>
      ```

      ```css
      h1 { color: red; }
      p  { background: blue; }
      ```

  - ##### 4.2 Embedding style

    - HTML 내부에 CSS를 포함시키는 방식이다. 

    - HTML과 CSS는 서로 역할이 다르므로 다른 파일로 구분되어 작성하고 관리되는 것이 바람직하기 때문에 Embedding style의 경우는 매우 간단한 웹페이지의 경우에 쓰인다.

      ```html
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            h1 { color: red; }
            p  { background: aqua; }
          </style>
        </head>
        <body>
          <h1>Hello World</h1>
          <p>This is a web page.</p>
        </body>
      </html>
      ```

  - ##### 4.3 Inline style

    - HTML요소의 style 프로퍼티에 css를 기술하는 방식이다.

    - JavaScript가 동적으로 CSS를 생성할 때 사용하는 경우가 있다.

      ```html
      <!DOCTYPE html>
      <html>
        <body>
          <h1 style="color: red">Hello World</h1>
          <p style="background: aqua">This is a web page.</p>
        </body>
      </html>
      ```

#### Reset CSS 사용하기

- 모든 웹 브라우저는 디폴트 스타일(브라우저가 내장하고 있는 기본 스타일)을 가지고 있어 CSS가 없이도 작동한다.
- 허나 웹브라우저에 따라 디폴트 스타일이 상이하고 지원하는 tag나 style도 제각각이어서 주의가 필요하다.
- Reset CSS는 기본적인 HTML 요소의 CSS를 초기화하는 용도로 사용한다. 즉, 브라우저 별로 제각각인 디폴트 스타일을 하나의 스타일로 통일시켜 주는 역할을 한다.
- 자주 사용되는 Reset CSS로는 Eric Meyer's reset과 normalize.css가 있다.