## CSS

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

      ```html
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

    - 테두리 모서리를 둥글게 표현하도록 지정한다. 프로퍼티 값은 길이를 나타내는 단위(px, em 등)와 %를 사용한다. 각각의 모서리에 border-radius 프로퍼티를 개별적으로 지정할 수도 있고 4개의 모서리를 short-hand로 한번에 지정할 수도 있다.![border-radius](https://poiemaweb.com/img/border-radius.jpg)

    - 하나 혹은 두 개의 반지름을 설정하여 각각의 모서리 굴곡을 설정할 수 있기 때문에 원 혹은 타원의 모양으로 정의가 가능하다.![border-radius](https://poiemaweb.com/img/border-radius-sh.png)

      ```html
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            div {
              background: #eaeaed;
              color: #666;
              display: inline-block;
              width: 90px;
              height: 90px;
              line-height: 90px;
              margin: 0 14px;
              text-align: center;
            }
      
            .border-rounded {
              /* 4 꼭지점에 대해 Radius 지정 */
              border-radius: 5px;
            }
            .border-circle {
              border-radius: 50%;
            }
            .border-football {
              /* top-left & bottom-right | top-right & bottom-left */
              border-radius: 15px 75px;
            }
          </style>
        </head>
        <body>
          <div class="border-rounded">5px</div>
          <div class="border-circle">50%</div>
          <div class="border-football">15px 75px</div>
        </body>
      </html>
      ```

    - 값이 적용되는 순서는 top-left, top-right, bottom-right, bottom-left이다.

    - **두 개의 반지름을 지정하여 타원형 둥근 모서리 설정**![img](https://poiemaweb.com/img/IC485217.png)

      ```css
      .border-rounded {
        border-top-left-radius: 50px 25px;
      }
      ```

    - **각각의 모서리에 타원형 둥근 모서리 축약 설정**![img](https://poiemaweb.com/img/IC485220.png)

  - ###### 2.3.5 border

    - border-width, border-style, border-color을 한 번에 설정할 수 있는 short-hand 프로퍼티이다.

      ```css
      p {
        /* border-width border-style border-color */
        border: 5px solid red;
      }
      ```

- ##### 2.4 box-sizing  프로퍼티

  - width, height 프로퍼티의 대상 영역을 변경하는 프로퍼티이다.

    | 키워드      | 설명                                                         |
    | ----------- | ------------------------------------------------------------ |
    | content-box | width, height 프로퍼티 값은 content 영역을 의미한다.(기본값) |
    | border-box  | width, height 프로퍼티 값은 content 영역, padding, border가 포함된 값을 의미한다. |

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          .content-box {
            width: 600px;
            border: 10px solid;
            padding: 50px;
            margin: 50px;
            background-color: red;
          }
          .border-box {
            box-sizing: border-box;
            width: 600px;
            border: 10px solid;
            padding: 50px;
            margin: 50px;
            background-color: red;
          }
        </style>
      </head>
      <body>
      <div class="content-box">content-box</div>
      <div class="border-box">border-box</div>
    </body>
    </html>
    ```

- ##### 2.5 display 프로퍼티

  - 레이아웃 정의에 사용되는 프로퍼티이다.

    | 프로퍼티값 키워드 | 설명                                   |
    | ----------------- | -------------------------------------- |
    | block             | block 특성을 가지는 요소로 지정        |
    | inline            | inline 특성을 가지는 요소로 지정       |
    | inline-block      | inline-block 특성을 가지는 요소로 지정 |
    | none              | 해당 요소를 화면에 표시하지 않는다.    |

  - ###### 2.5.1 block 레벨 요소

    - block 특성을 가지는 요소

      - 항상 새로운 라인에서 시작한다.
      - 화면 전체 크기의 가로폭을 차지한다.
      - width, height, margin, padding 프로퍼티 지정이 가능하다.
      - block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다.

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div:nth-of-type(1) {
            background-color: #FFA07A;
            padding: 20px;
          }
          div:nth-of-type(2) {
            background-color: #FF7F50;
            padding: 20px;
            width: 300px;
          }
        </style>
      </head>
      <body>
        <div>
          <h2>블록 레벨 요소</h2>
          <p>width, height 미지정 → width: 100%; height: auto;</p>
        </div>
        <div>
          <h2>블록 레벨 요소</h2>
          <p>width: 300px → width: 300px; height: auto;</p>
        </div>
      </body>
      </html>
      ```

  - ###### 2.5.2 inline 레벨 요소

    - inline 특성을 가지는 요소

      - 새로운 라인에서 시작하지 않으며 문장의 중간에 들어갈 수 있다.
      - content의 너비만큼 가로폭을 차지한다.
      - width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없다. 상, 하 여백은 line-height로 지정한다.
      - inline 레벨 요소는 block 레벨 요소에 포함될 수 있지만 반대는 불가능하다.

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          span {
            background-color: red;
            color: white;
            padding: 10px;
            /* width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없다. */
            /* width: 200px; */
            /* margin: 10px; */
            /* 상, 하 여백은 line-height로 지정한다. */
            /* line-height: 50px; */
          }
        </style>
      </head>
      <body>
        <h1>My <span>Important</span> Heading</h1>
        <span>Inline</span>
        <span>Inline</span><span>Inline</span>
      </body>
      </html>
      ```

      

  - ###### 2.5.3 inline-block 레벨 요소

    - inline 레벨 요소처럼 한 줄에 표현되면서 width, height, margin 프로퍼티를 모두 지정할 수 있다.
    
      - 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치시킬 수 있다.
    
      - block 레벨 요소처럼 width, height, margin, padding 프로퍼티를 모두 정의할 수 있다. 상, 하 여백을 margin과 line-heing 두 가지 프로퍼티 모두를 통해 제어할 수 있다.
    
      - content의 너비만큼 가로폭을 차지한다.
    
        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .wrapper {
              font-size: 0; /*요소간 간격을 제거*/
            }
            .inline-block {
              display: inline-block;
              vertical-align: middle; /* inline-block 요소 수직 정렬 */
              border: 3px solid #73AD21;
              font-size: 16px;
            }
            .box1 {
              width: 300px;
              height: 70px;
            }
            .box2 {
              width: 300px;
              height: 150px;
            }
          </style>
        </head>
        <body>
          <div class="inline-block box1">inline-block height 70px</div>
          <div class="inline-block box2">inline-block height 150px</div>
        
          <div class="wrapper">
            <div class="inline-block box1">inline-block height 70px</div>
            <div class="inline-block box2">inline-block height 150px</div>
          </div>
        </body>
        </html>
        ```
  
- ##### 2.6 visivility 프로퍼티

  - | 프로퍼티값 키워드 | 설명                                                         |
    | ----------------- | ------------------------------------------------------------ |
    | visible           | 해당 요소를 보이게 한다(기본값)                              |
    | hidden            | 해당 요소를 보이지 않게 한다. display: none은 해당 요소의 공간까지 사라지게 하지만 wisibility: hidden;은 해당 요소의 공간은 사라지지 않는다. |
    | collapse          | table 요소에 사용하며 행이나 열을 보이지 않게 한다.          |
    | none              | table 요소의 row나 column을 보이지 않게 한다.                |

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .visible { visibility: visible; }
        .hidden  { visibility: hidden; }
    
        table, td { border: 1px solid black; }
        .collapse { visibility: collapse; }
        /* .collapse { visibility: hidden; } */
      </style>
    </head>
    <body>
      <h1 class="visible">visibility: visible</h1>
      <h1 class="hidden">visibility: hidden</h1>
      <h1 style="display:none">display:none</h1>
    
      <table>
        <tr>
          <td>A</td>
          <td>B</td>
        </tr>
        <tr class="collapse">
          <td>C</td>
          <td>D</td>
        </tr>
      </table>
    </body>
    </html>
    ```

- ##### 2.7 opacity 프로퍼티

  - 투명도를 정의한다. 0.0(투명)~1.0(불투명)까지의 값이 있다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        div, img {
          float: left;
          width: 150px;
          height: 150px;
          margin: 30px;
          background-color: blue;
          color: white;
          opacity: 0.5;
          transition: opacity 1s;
        }
        div:hover, img:hover {
          opacity: 1.0;
        }
      </style>
    </head>
    <body>
      <div>opacity: 0.5</div>
      <img src="https://poiemaweb.com/img/doug.jpg" alt="doug">
    </body>
    ```

- ##### 2.8 background-image 프로퍼티

  - 요소에 배경 이미지를 지정한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          background-image: url("http://poiemaweb.com/img/bg/dot.png");
        }
      </style>
    </head>
    <body>
      <h3>Background Image</h3>
    </body>
    </html>
    ```

- ##### 2.9 background-repeat 프로퍼티

  - 배경 이미지의 반복을 지정한다. x축으로만 배경 이미지를 반복할 경우 프로퍼티 값으로 repeat-x, y축으로만 배경이미지를 반복할 경우 repeat-y를 설정한다.

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          background-image: url("http://poiemaweb.com/img/bg/dot.png");
          background-repeat: repeat-x;
        }
      </style>
    </head>
    <body>
      <h3>background-repeat: repeat-x;</h3>
    </body>
    </html>
    ```

  - 반복 출력을 원하지 않는 경우 no-repeat을 프로퍼티 값으로 설정하면 된다.

- ##### 2.10 background-size 프로퍼티

  - 배경 이미지의 사이즈를 지정한다. 단 배경 이미지의 고유 비율을 유지한다. 프로퍼티 값으로 px, %, cover, contain 등을 사용한다.
    - **cover 지정** : 배경 이미지의 크기 비율을 유지한 상태에서 부모 요소의 width, height 중 큰 값에 배경 이미지를 맞춘다.
    - **contain 지정** : 배경 이미지의 크기 비율을 유지한 상태에서 부모 요소의 영역에 배경 이비지가 보이지 않는 부분 없이 전체가 들어갈 수 있도록 크기를 조정한다.
  - 두 개의 값을 지정했을 경우 첫번째 값은 width, 두번째 값은 height를 의미하며 하나의 값일 경우 지정한 값은 width를 의미하게 되며 height는 auto로 지정된다.
  - 다수의 배경 이미지의 크기를 조정할 땐 쉼표를 사용한다.

- ##### 2.11 background-attachment 프로퍼티

  - 화면이 스크롤될 때 배경이미지는 스크롤 되지 않고 고정되어 있게 하는 프로퍼티

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        *, *:after, *:before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
    
        html, body {
          width:100%;
          height:100%;
        }
    
        .bg-wrap {
          /* page-wrap 보다 bg-wrap이 작은 경우, page-wrap이 가리는 문제를 해결 */
          min-height: 600px;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          /* 마진 상쇄 문제 해결을 위한 코드
            https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
          */
          overflow: auto;
          /* or padding: 0.1px; */
        }
    
        .parallax {
          background-image: url("http://poiemaweb.com/img/bg/stock-photo-125979219.jpg");
          /* parallax scrolling effect */
          background-attachment: fixed;
        }
    
        .normal {
          background-image: url("http://poiemaweb.com/img/bg/stock-photo-155153867.jpg");
        }
    
        #page-wrap {
          width: 400px;
          /* 마진 상쇄 발생 */
          margin: 50px auto;
          padding: 30px;
          background: white;
          box-shadow: 0 0 20px black;
          /* size/line-height | family */
          font: 15px/2 Georgia, Serif;
        }
      </style>
    </head>
    <body>
      <div class="bg-wrap parallax">
        <div id="page-wrap">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsum maxime libero, impedit necessitatibus quas blanditiis tenetur vero aut esse unde ab similique, delectus placeat enim quae expedita excepturi laboriosam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsum maxime libero, impedit necessitatibus quas blanditiis tenetur vero aut esse unde ab similique, delectus placeat enim quae expedita excepturi laboriosam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsum maxime libero, impedit necessitatibus quas blanditiis tenetur vero aut esse unde ab similique, delectus placeat enim quae expedita excepturi laboriosam.</p>
        </div>
      </div>
      <div class="bg-wrap normal"></div>
    </body>
    </html>
    ```

- ##### 2.12 background-position 프로퍼티

  - 배경이미지의 좌표를 지정하는 프로퍼티. 기본 값은 background-position: 0% 0%;이다.

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
        }
        div {
          background-image: url("http://poiemaweb.com/img/bg/dot.png");
          background-color: #FFEE99;
          background-repeat: no-repeat;
          width: 32vw;
          height: 200px;
          margin-bottom: 2vw;
          float: left;
        }
        div:not(:nth-of-type(3n+1)) {
          margin-left: 2vw;
        }
        .example1 {
          background-position: top;
        }
        .example2 {
          background-position: bottom;
        }
        .example3 {
          background-position: center;
        }
        .example4 {
          background-position: left;
        }
        .example5 {
          background-position: right;
        }
        .example6 {
          /* <percentage> values */
          background-position: 25% 75%;
        }
        .example7 {
          /*
            <length> values
            xpos ypos
          */
          background-position: 10px 20px;
        }
        .example8 {
          background-image: url("http://poiemaweb.com/img/bg/dot.png"), url("http://poiemaweb.com/img/bg/dot.png");
          background-position: 0px 0px, center;
        }
      </style>
    </head>
    
    <body>
      <div>default(0% 0%)</div>
      <div class="example1">top</div>
      <div class="example2">bottom</div>
      <div class="example3">center</div>
      <div class="example4">left</div>
      <div class="example5">right</div>
      <div class="example6">25% 75%</div>
      <div class="example7">10px 20px</div>
      <div class="example8">0px 0px, center</div>
    </body>
    </html>
    ```

- ##### 2.13 background-color 프로퍼티

  - 요소의 배경 색상을 지정한다. 색상값 또는 transparent 키워드를 지정할 수 있다.

- ##### 2.14 background Shorthand

  - 백그라운드의 color, image, repeat, position을 한 번에 정의한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        div {
          /* background: color || image || repeat || attachment || position */
          background: #FFEE99 url("http://poiemaweb.com/img/bg/dot.png") no-repeat center;
          width: 50vw;
          height: 300px;
        }
      </style>
    </head>
    <body>
      <div></div>
    </body>
    </html>
    ```

- ##### 2.15 font-size 프로퍼티

  - 텍스트의 크기를 정의한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .font-size-40 { font-size: 40px; }
        .font-size-2x { font-size: 2.0em; }
        .font-size-150ps { font-size: 150%; }
        .font-size-large { font-size: large; }
      </style>
    </head>
    <body>
      <p>default font size: 16px</p>
      <p class='font-size-40'>font-size: 40px</p>
      <p class='font-size-2x'>font-size: 2.0em</p>
      <p class='font-size-150ps'>font-size: 150%</p>
      <p class='font-size-large'>font-size: large</p>
    </body>
    </html>
    ```

- ##### 2.16 font-family 프로퍼티

  - 폰트를 지정한다. 여러 폰트를 동시에 적용할 수 있다.

  - 폰트명은 따옴표로 감싸주며 폰트명이 한 단어인 경우는 따옴표로 감싸주지 않아도 된다.

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .serif {
          font-family: "Times New Roman", Times, serif;
        }
    
        .sans-serif {
          font-family: Arial, Helvetica, sans-serif;
        }
    
        .monospace {
          font-family: "Courier New", Courier, monospace;
        }
      </style>
    </head>
    <body>
      <h1>font-family</h1>
      <p class="serif">Times New Roman font.</p>
      <p class="sans-serif">Arial font.</p>
      <p class="monospace">Courier New font.</p>
    </body>
    </html>
    ```

- ##### 2.17 font-style / font-weight 프로퍼티

  - font-style은 이탤릭체, font-weight는 폰트 굵기 지정에 사용된다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        p { font-size: 2.0em; }
    
        /*
          font-style
          normal / italic / oblique
        */
        .italic {
          font-style: italic;
        }
    
        /*
          font-weight
          100 ~ 900 or normal / bold / lighter / bolder
        */
        .light {
          font-weight: lighter;
        }
        .thick {
          font-weight: bold;
        }
        .thicker {
          font-weight: 900;
        }
      </style>
    </head>
    <body>
      <p>normal style.</p>
      <p class="italic">font-style: italic</p>
    
      <p class="light">font-weight: lighter</p>
      <p class="thick">font-weight: bold</p>
      <p class="thicker">font-weight: 900</p>
    </body>
    </html>
    ```

- ##### 2.18 font Shorthand

  - 아래의 순서로 적용된다.

  - ```css
    font : font-style(optional) font-variant(optional) font-weight(optional) font-size(mandatory) line-height(optional) font-family(mandatory)
    ```

    ```css
    /* size | family */
    font: 2em "Open Sans", serif;
    
    /* style | size | family */
    font: italic 2em "Open Sans", sans-serif;
    
    /* style | variant | weight | size/line-height | family */
    font: italic small-caps bolder 16px/1.2 monospace;
    
    /* style | variant | weight | size/line-height | family */
    /* font-variant: small-caps; 소문자를 대문자로 만든다. 단 크기는 일반 대문자에 비해 더 작다.*/
    font: italic small-caps bolder 16px/3 cursive;
    ```

- ##### 2.19 line-height 프로퍼티

  - 텍스트의 높이를 지정한다.
  
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .small {
          line-height: 70%; /* 16px * 70% */
        }
        .big {
          line-height: 1.2; /* 16px * 1.2 */
        }
        .lh-3x {
          line-height: 3.0; /* 16px * 3 */
        }
    
      </style>
    </head>
    <body>
      <p>
        default line-height.<br>
        default line-height.<br>
        대부분 브라우저의 default line height는 약 110% ~ 120%.<br>
      </p>
    
      <p class="small">
        line-height: 70%<br>
        line-height: 70%<br>
      </p>
    
      <p class="big">
        line-height: 1.2<br>
        line-height: 1.2<br>
      </p>
    
      <p class="lh-3x">
        line-height: 3.0<br>
        line-height: 3.0<br>
      </p>
    </body>
    </html>
    ```
  
  - 이를 이용해 수직 중앙 정렬을 할 수도 있다.
  
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .button {
          width: 150px;
          height: 70px;
          background-color: #FF6A00;
          border-radius: 30px;
          box-shadow: 5px 5px 5px #A9A9A9;
        }
        .button > a {
          display: block;
          font: italic bold 2em/70px Arial, Helvetica, sans-serif;
          text-decoration: none;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="button">
        <a href="#">Click</a>
      </div>
    </body>
    </html>
    ```
  
- ##### 2.20 letter-spacing 프로퍼티

  - 글자 사이의 간격을 지정한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .loose {
          letter-spacing: 2px;
        }
        .tight {
          letter-spacing: -1px;
        }
      </style>
    </head>
    <body>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    
      <p class="loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    
      <p class="tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </body>
    </html>
    ```

- ##### 2.21 text-align 프로퍼티

  - 텍스트의 수평 정렬을 정의한다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        h1 { text-align: center; }
        h3 { text-align: right; }
        p.left  { text-align: left; }
        p.justify  { text-align: justify; }
        a  { text-align: center; }
      </style>
    </head>
    <body>
      <h1>Lorem ipsum</h1>
      <h3>2016.03.07</h3>
    
      <p class="left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
      <p class="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
      <a href='#'>Reference</a>
    </body>
    </html>
    ```

  - a 요소는 inline 요소이기 때문에 width프로퍼티가 없어 중앙 정렬이 적용되지 않는다. 

- ##### 2.22 text-decoration 프로퍼티

  - 글자에 줄을 첨가 또는 삭제하는 프로퍼티이다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        a { text-decoration: none; }
    
        p:nth-of-type(1) { text-decoration: overline; }
        p:nth-of-type(2) { text-decoration: line-through; }
        p:nth-of-type(3) { text-decoration: underline; }
      </style>
    </head>
    <body>
      <a href='#'>text-decoration: none</a>
    
      <p>text-decoration: overline</p>
      <p>text-decoration: line-through</p>
      <p>text-decoration: underline</p>
    </body>
    </html>
    ```

- ##### 2.23 white-space 프로퍼티

  - html이 연속된 공백, 들여쓰기, 줄바꿈 등을 1번만 실행하거나 무시하고 텍스트는 자동 줄바꿈하는 등 기본적인 동작이 있기 때문에 이를 제어하기 위해 white-space 프로퍼티를 사용한다.

  - | 프로퍼티값 | line break |  space/tab  | wrapping(자동 줄바꿈) |
    | :--------: | :--------: | :---------: | :-------------------: |
    |   normal   |    무시    | 1번만 반영  |           O           |
    |   nowrap   |    무시    | 1번만 반영  |           X           |
    |    pre     |    반영    | 그대로 반영 |           X           |
    |  pre-wrap  |    반영    | 그대로 반영 |           O           |
    |  pre-line  |    반영    | 1번만 반영  |           O           |

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        div {
          width: 150px;
          height: 150px;
          padding: 10px;
          margin: 40px;
          border-radius: 6px;
          border-color: gray;
          border-style: dotted;
          /*overflow: hidden;*/
        }
        .normal { white-space: normal; }
        .nowrap { white-space: nowrap; }
        .pre    { white-space: pre; }
        .pre-wrap { white-space: pre-wrap; }
        .pre-line { white-space: pre-line; }
      </style>
    </head>
    <body>
      <h1>white-space</h1>
      <div class="normal"><h3>normal</h3>Lorem   ipsum
    
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div class="nowrap"><h3>nowrap</h3>Lorem   ipsum
    
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div class="pre"><h3>pre</h3>Lorem   ipsum
    
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div class="pre-wrap"><h3>pre-wrap</h3>Lorem   ipsum
    
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div class="pre-line"><h3>pre-line</h3>Lorem   ipsum
    
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </body>
    </html>
    ```

  - 아래는 float 대신 inline-block을 사용한 가로 정렬 예제이다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Infinite looping Crousel Slider</title>
      <style>
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);
    
        body {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          color: #58666e;
          background-color: #f0f3f4;
        }
    
        .carousel-view {
          /* 자식 컨텐츠 너비에 fit */
          display: inline-block;
          position: relative;
          margin: 0 auto;
          border: 1px dotted red;
        }
    
        .carousel-container {
          /* 자식 컨텐츠의 줄바꿈을 무시하여 1줄로 가로 정렬한다. */
          white-space: nowrap;
          /* inline-block 레벨 요소 뒤에 공백(엔터, 스페이스 등)이 있는 경우,
             정의하지 않은 space(4px)가 자동 지정된다. 이것을 회피하는 방법이다. */
          font-size: 0;
          margin: 0;
          padding: 0;
        }
    
        .carousel-item {
          display: inline-block;
          list-style: none;
          padding: 5px;
        }
    
        .carousel-item:last-child {
          margin-right: 0;
        }
    
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2em;
          color: #fff;
          background-color: transparent;
          border-color: transparent;
          cursor: pointer;
          z-index: 99;
        }
    
        .carousel-control:focus {
          outline: none;
        }
    
        .carousel-control.prev {
          left: 0;
        }
    
        .carousel-control.next {
          right: 0;
        }
      </style>
    </head>
    <body>
      <div id="carousel" class="carousel-view">
        <button class="carousel-control prev">&laquo;</button>
        <ul class="carousel-container">
          <li class="carousel-item">
            <a href="#">
              <img src="http://via.placeholder.com/400x150/3498db/fff&text=1">
            </a>
          </li>
          <li class="carousel-item">
            <a href="#">
              <img src="http://via.placeholder.com/400x150/3498db/fff&text=2">
            </a>
          </li>
          <li class="carousel-item">
            <a href="#">
              <img src="http://via.placeholder.com/400x150/3498db/fff&text=3">
            </a>
          </li>
        </ul>
        <button class="carousel-control next">&raquo;</button>
      </div>
    </body>
    </html>
    ```

- ##### 2.24 text-oxerflow 프로퍼티

  - 부모 영역을 벗어난 wrapping(자동 줄바꿈)이 되지 않은 텍스트의 처리 방법을 정의한다.

  - 이 프로퍼티를 사용하기 위해서는 아래의 조건이 필요하다.

    - width 프로퍼티가 지정되어 있어야 한다.(inline 레벨 요소 -> block 레벨 요소로 변환)

    - 자동 줄바꿈을 방지하려면 white-space 프로퍼티를 nowrap으로 설정한다.

    - overflow 프로퍼티에 반드시 "visivle" 이외의 값이 지정되어 있어야 한다.

    - ```css
      /* 부모 영역을 벗어난 텍스트를 잘라내어 보이지 않게 하고 말줄임표(...)를 표시한다. */
      .truncate {
        width: 150px;             /* width가 지정되어 있어야 한다. */
        white-space: nowrap;      /* 자동 줄바꿈을 방지 */
        overflow: hidden;         /* 반드시 "visible" 이외의 값이 지정되어 있어야 한다. */
        text-overflow: ellipsis;  /* ellipsis or clip */
      }
      ```

  - | 프로퍼티값 | Description                                                  |                                                              |
    | ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
    | clip       | 영역을 벗어난 텍스트를 표시하지 않는다.(기본값)              |                                                              |
    | ellipsis   | 영역을 벗어난 텍스트를 잘라내어 보이지 않게 하고 말줄임표(...)를 표시한다. |                                                              |
    | <!-        | < string >                                                   | 프로퍼티 값으로 지정한 임의의 문자열을 출력한다. Firefox(9.0~)만 지원하는 기능이다. -> |

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        div {
          width: 150px; /* width가 지정되어 있어야 한다. */
          height: 150px;
          padding: 10px;
          margin: 40px;
          border-radius: 6px;
          border-color: gray;
          border-style: dotted;
          white-space: nowrap; /* 자동 줄바꿈을 방지 */
          overflow: hidden;    /* 반드시 "visible" 이외의 값이 지정되어 있어야 한다. */
        }
        .clip     { text-overflow: clip; }
        .ellipsis { text-overflow: ellipsis; }
      </style>
    </head>
    <body>
      <h1>text-overflow</h1>
      <div class="clip">
        <h3>clip</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </div>
      <div class="ellipsis">
        <h3>ellipsis</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </div>
    </body>
    </html>
    ```

- ##### 2.25 word-wrap 프로퍼티

  - 한 단어의 길이가 길어서 부모 영역을 벗어난 텍스트의 처리 방법을 정의한다.

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        div {
          width: 150px;
          height: 150px;
          padding: 10px;
          margin: 40px;
          border-radius: 6px;
          border-color: gray;
          border-style: dotted;
        }
        .word-wrap { word-wrap: break-word; }
      </style>
    </head>
    <body>
      <h1>word-wrap</h1>
      <div>
        Floccinaucinihilipilification https://poiemaweb.com/css3-font-text
      </div>
      <div class="word-wrap">
        Floccinaucinihilipilification https://poiemaweb.com/css3-font-text
      </div>
    </body>
    </html>
    ```

- ##### 2.26 word-break 프로퍼티

  - word-wrap과 기능이 같지만 word-wrap은 .,- 등을 고려하여 개행하지만 word-break: break-all;은 단어를 고려하지 않고 부모 영역에 맞추어 강제 개행한다.

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        div {
          width: 150px;
          height: 150px;
          padding: 10px;
          margin: 40px;
          border-radius: 6px;
          border-color: gray;
          border-style: dotted;
        }
        .word-wrap  { word-wrap: break-word; }
        .word-break { word-break: break-all; }
      </style>
    </head>
    <body>
      <div>
        Floccinaucinihilipilification https://poiemaweb.com/css3-font-text
      </div>
    
      <h1>word-wrap</h1>
      <div class="word-wrap">
        Floccinaucinihilipilification https://poiemaweb.com/css3-font-text
      </div>
    
      <h1>word-break</h1>
      <div class="word-break">
        Floccinaucinihilipilification https://poiemaweb.com/css3-font-text
      </div>
    </body>
    </html>
    ```

- ##### 2.27 position 프로퍼티

  - 요소의 위치를 정의한다. top, bottom, left, right 프로퍼티와 함께 사용한다.![position](https://poiemaweb.com/img/position.png)

  - ###### 2.27.1 static (기본위치)

    - position 프로퍼티의 기본값이다.

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; }
          .parent {
            width: 150px;
            height: 150px;
            background: #bcbcbc;
            border: 1px solid #bcbcbc;
          }
          .static-box {
            position: static;
            background: #2E303D;
            color: #e55c3c;
            font-weight: bold;
            text-align: center;
            line-height: 150px;
          }
        </style>
      </head>
      <body>
        <div class="parent">
          <div class="static-box">static box</div>
        </div>
      </body>
      </html>
      ```

  - ###### 2.27.2 relative (상대위치)

    - 기본 위치를 기준으로 좌표 프로퍼티를 사용하여 위치를 이동시킨다.

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; }
          .parent {
            width: 150px;
            height: 150px;
            background: #bcbcbc;
            border: 1px solid #bcbcbc;
            margin: 50px;
          }
          .relative-box {
            position: relative;
            top: 50px; left: 50px;
            background: #2E303D;
            color: #e55c3c;
            font-weight: bold;
            text-align: center;
            line-height: 150px;
          }
        </style>
      </head>
      <body>
        <div class="parent">
          <div class="relative-box">relative box</div>
        </div>
      </body>
      </html>
      ```

  - ###### 2.27.3 absolute (절대위치)

    - 부모 요소나 가장 가까이 있는 조상 요소를 기준으로 좌표 프로퍼티만큼 이동한다.

    - 만일 부모 또는 조상 요소가 static인 경우, document body를 기준으로 하여 좌표 프로퍼티대로 위치하게 된다.

    - 부모 요소를 배치의 기준으로 삼기 위해서는 부모 요소에 relative를 정의하여야 한다.

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; }
          .parent {
            width: 200px;
            height: 200px;
            background: #bcbcbc;
            border: 1px solid #bcbcbc;
            margin: 50px 0 0 300px;
            position: relative;
          }
          .absolute-box {
            position: absolute;
            height: 200px; width: 200px;
            top: 50px; left: 50px;
            color: #e55c3c;
            font-weight: bold;
            text-align: center;
            background: #2E303D;
            line-height: 200px;
          }
        </style>
      </head>
      <body>
        <div class="parent">
          <div class="absolute-box">absolute box (in parent)</div>
        </div>
        <div class="absolute-box">absolute box (no parent)</div></body>
      </html>
      ```

    - relative와의 차이점은 relative는 무조건 부모를 기준으로 위치하게 되지만 absolute 프로퍼티는 부모 요소의 영역을 벗어나 자유롭게 어디든지 위치할 수 있다는 점이다.

  - ###### 2.27.4 fixed (고정위치)

    - 브라우저의 viewport를 기준으로 좌표프로퍼티를 사용하여 위치를 이동시킨다.

    - 화면의 크기나 비율이 변해도 항상 같은 위치에 자리잡고 있다.

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; }
          .fixed-box {
            position: fixed;
            color: #e55c3c;
            font-weight: bold;
            text-align: center;
            background: #2E303D;
          }
          .sidebar {
            width: 50px;
            height: 100%;
            top: 0;
            right: 0;
            padding-top: 100px;
          }
          .footer {
            width: 200px;
            width: 100%;
            height: 50px;
            bottom: 0;
            left: 0;
            line-height: 50px;
          }
        </style>
      </head>
      <body>
        <div class="fixed-box sidebar">fixed box (side-bar)</div>
        <div class="fixed-box footer">fixed box (footer)</div>
      </body>
      </html>
      ```

- ##### 2.28 z-index 프로퍼티

  - 프로퍼티값에 큰 숫자값을 지정할수록 화면 전면에 출력된다.

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .normal-box {
          width: 100px; height: 100px;
        }
        .absolute-box {
          width: 100px; height: 100px;
          position: absolute;
        }
        /* z-index는 positon 프로퍼티가 static 이외인 요소에만 적용된다. */
        .orange {
          background-color: orange;
          z-index: 1000;
        }
        .red {
          background-color: red;
          left: 50px; top: 50px;
          z-index: 100;
        }
        .green {
          background-color: green;
          left: 100px; top: 100px;
          z-index: 10;
        }
        .blue {
          background-color: blue;
          left: 150px; top: 150px;
          z-index: 1;
        }
      </style>
    </head>
    <body>
      <div class="normal-box orange"></div>
      <div class="absolute-box red"></div>
      <div class="absolute-box green"></div>
      <div class="absolute-box blue"></div>
    </body>
    </html>
    ```

- ##### 2.29 overflow 프로퍼티

  - 자식 요소가 부모 요소의 영역을 벗어났을 때 처리 방법을 정의한다.

  - | 프로퍼티값 | Description                                      |
    | ---------- | ------------------------------------------------ |
    | visible    | 영역을 벗어난 부분을 표시한다.(기본값)           |
    | hidden     | 영역을 벗어난 부분을 잘라내어 보이지 않게 한다.  |
    | scroll     | 영역을 벗어난 부분이 없어도 스크롤로 표시한다.   |
    | auto       | 영역을 벗어난 부분이 있을때만 스크롤로 표시한다. |

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        div {
          width: 150px;
          height: 150px;
          padding: 10px;
          margin: 30px;
          font-size: 1.2em;
          border-radius: 6px;
          border-color: gray;
          border-style: dotted;
          float: left;
        }
        .visible { overflow: visible; }
        .hidden  { overflow: hidden; }
        .scroll  { overflow: scroll; }
        .auto    { overflow: auto; }
      </style>
    </head>
    <body>
      <h1>overflow</h1>
      <div class="visible"><h3>visible</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div class="hidden"><h3>hidden</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div class="scroll"><h3>scroll</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div class="auto"><h3>auto</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </body>
    </html>
    ```

  - 특정 방향으로만 스크롤을 표시하고자 할 때는 overflow-x나 y를 사용한다.
  
- ##### 2.30 float 프로퍼티

  - 레이아웃을 구성할 때 블록 레벨 요소를 가로 정렬하기 위해 사용되는 기법

  - 아래 예제처럼 이미지와 텍스트가 같이 있을 때, 이미지 주위를 텍스트로 감싼다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        img {
          float: left;
          margin-right: 10px;
        }
      </style>
    </head>
    <body>
      <img src="https://poiemaweb.com/img/doug.jpg">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </body>
    </html>
    ```

  - | 프로퍼티값 | Description                         |
    | ---------- | ----------------------------------- |
    | none       | 요소를 떠 있게 하지 않는다.(기본값) |
    | right      | 요소를 오른쪽으로 이동시킨다.       |
    | left       | 요소를 왼쪽으로 이동시킨다.         |

  - ###### 2.30.1 정렬

    - float: left;는 요소를 왼쪽부터 가로 정렬, float: right는 오른쪽부터 가로 정렬한다.

      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .box {
            color: white;
            font-weight: bold;
            font-size: 50px;
            border-radius: 6px;
            width: 100px;
            height: 100px;
            margin: 10px;
            padding: 10px;
          }
          .d1, .d2 {
            float: left;
          }
          .d1 {
            background: red;
          }
          .d2 {
            background: orange;
          }
          .d3, .d4 {
            float: right;
          }
          .d3 {
            background: red;
          }
          .d4 {
            background: orange;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="box d1"> 1 </div>
          <div class="box d2"> 2 </div>
          <div class="box d3"> 3 </div>
          <div class="box d4"> 4 </div>
        </div>
      </body>
      </html>
      ```

    - float 프로퍼티는 중앙 정렬을 하지 못한다.(margin 사용)

  - ###### 2.30.2 width

    - width의 기본값은 100%이므로 아래와 같은 코드에서 block 요소는 화면의 가로폭을 가득 채운다.

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .box {
            color: white;
            font-weight: bold;
            font-size: 30px;
            line-height: 50px;
            height: 50px;
            margin: 0 10px;
            padding: 10px;
          }
          .d1 {
            background: red;
          }
          .d2 {
            background: orange;
          }
        </style>
      </head>
      <body>
        <div class="box d1"> div </div>
        <div class="box d2"> div </div>
      </body>
      </html>
      ```

    - width 프로퍼티를 선언하지 않으면 width가 inline 요소처럼 content에 맞춰 최소화되고 다음 요소 위에 부유하게 된다.

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .box {
            color: white;
            font-weight: bold;
            font-size: 30px;
            line-height: 50px;
            height: 50px;
            margin: 0 10px;
            padding: 10px;
          }
          .d1 {
            float: left;
            background: red;
          }
          .d2 {
            background: orange;
          }
        </style>
      </head>
      <body>
        <div class="box d1"> float: left; </div>
        <div class="box d2"> div </div>
      </body>
      </html>
      ```

    - 위 예제의 경우 d1 클래스 요소는 width가 inline 요소와 같이 content에 맞게 최소화되고 다음 요소인 d2 클래스 요소 위에 떠 있게 된다.

  - ###### 2.30.3 float 프로퍼티 관련 문제 해결 방법

    - *2.30.3.1 float 프로퍼티가 선언된 요소와 float 프로퍼티가 선언되지 않은 요소간 marge이 사라지는 문제*

      - float 프로터피가 선언되지 않은 요소에 overflow: hidden을 선언한다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .box {
              color: white;
              font-weight: bold;
              font-size: 30px;
              line-height: 50px;
              height: 50px;
              margin: 0 10px;
              padding: 10px;
            }
            .d1 {
              float: left;
              background: red;
            }
            .d2 {
              overflow: hidden;
              background: orange;
            }
          </style>
        </head>
        <body>
          <div class="box d1"> float: left; </div>
          <div class="box d2"> div </div>
        </body>
        </html>
        ```

    - *2.30.3.2 float 프로퍼티가 선언된 자식 요소를 포함하는 부모 요소의 높이가 정상적으로 반영되지 않는 문제*

      - float 요소가 일반적인 흐름상에 존재하지 않아 float 요소의 높이를 알 수 없는데, 이는 부모 요소 이후의 요소의 정렬에 문제를 발생시킨다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              color: white;
              text-align: center;
              padding: 10px;
              background-color: #def0c2;
            }
            .d1, .d2 {
              float: left;
              width: 50%;
              padding: 20px 0;
            }
            .d1 {
              background-color: #59b1f6;
            }
            .d2 {
              background-color: #ffb5b4;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="d1">1</div>
            <div class="d2">2</div>
          </div>
          <div style="background:red;padding:10px;color:white;">3</div>
        </body>
        </html>
        ```

      - 위 문제를 해결하려면 float 프로퍼티가 선언된 자식 요소의 부모 요소에 overflow: hidden 프로퍼티를 선언하거나 부모 요소에 float 프로퍼티를 선언하면 된다.

      - 또다른 방법으로는 :after 가상 클래스 셀렉터가 있다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              color: white;
              text-align: center;
              padding: 10px;
              background-color: #def0c2;
              /*overflow: hidden;*/
            }
            .clearfix:after {
              content: "";
              display: block;
              clear: both;
            }
            .d1, .d2 {
              float: left;
              width: 50%;
              padding: 20px 0;
            }
            .d1 {
              background-color: #59b1f6;
            }
            .d2 {
              background-color: #ffb5b4;
            }
          </style>
        </head>
        <body>
          <div class="container clearfix">
            <div class="d1">1</div>
            <div class="d2">2</div>
          </div>
          <div style="background:red;padding:10px;color:white;">3</div>
        </body>
        ```

      - 이외에도 float 프로퍼티 대신 display: inline-block;을 선언하는 것이다. 이 방법은 두 요소 사이에 자동 공백을 지정하므로 font-size: 0;을 선언하여 공백을 제거한다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              color: white;
              text-align: center;
              padding: 10px;
              background-color: #def0c2;
              /* 폰트 사이즈를 0으로 지정하여 두 요소 사이에 정의하지 않은 공백을 제거 */
              font-size: 0;
            }
            .d1, .d2 {
              display: inline-block;
              width: 50%;
              padding: 20px 0;
              /* 폰트 사이즈를 재지정 */
              font-size: 1rem;
            }
            .d1 {
              background-color: #59b1f6;
            }
            .d2 {
              background-color: #ffb5b4;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="d1">1</div>
            <div class="d2">2</div>
          </div>
          <div style="background:red;padding:10px;color:white;">3</div>
        </body>
        </html>
        ```

- ##### 2.31 상속 (Inheritance)

  - 상위 요소에 적용된 프로퍼티를 하위 요소가 물려 받는 것.

  - | Inherit |                           property                           |
    | :-----: | :----------------------------------------------------------: |
    |   yes   | visibility, opacity, font, color, line-height, text-align, .white-space |
    |   no    | width/height, margin, padding, border, box-sizing, display, background, verical-align, text-decoration, psition, top/right/bottom/left, z-index, overflow, float |

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        .text-red {
          color: red;
          border: 1px solid #bcbcbc;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <div class="text-red">
        <h1>Heading</h1>
        <p>Paragraph<strong>strong</strong></p>
        <button>Button</button>
      </div>
    </body>
    </html>
    ```

    위 예시를 확인해보면 botton은 상속의 대상이 아니다. 이와 같이 요소에 따라 상속 받지 않는 경우들이 존재한다. 이외에도 borer, padding은 상속되지 않는 요소로 하위 요소에 적용되지 않는다.

  - 상속받지 않는 경우, inherit 키워드를 사용하여 명시적으로 상속받게 할 수 있다.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        .text-red {
          color: red;
          border: 1px solid #bcbcbc;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <div class="text-red">
        <h1>Heading</h1>
        <p>Paragraph<strong>strong</strong></p>
        <button>Button</button>
      </div>
    </body>
    </html>
    ```

- ##### 2.32 캐스캐이딩 (Cascading)

  - 요소는 다수의 CSS 선언에 영향을 받을 수 있기 때문에 충돌을 피하기 위한 CSS 적용 우선순위를 캐스캐이딩이라고 한다.

  - 캐스캐이딩에는 중요도, 명시도, 선언순서의 세 가지 규칙이 있다.

    - *2.32.1* *중요도*

      - CSS가 어디에 선언 되었는지에 따라서 우선순위가 달라진다.
        1. head 요소 내의 style 요소
        2. head 요소 내의 style 요소 내의 @import문
        3. < link >로 연결된 CSS 파일
        4. < link >로 연결된 CSS 파일 내의 @import문
        5. 브라우저 디폴트 스타일시트 

    - *2.32.2 명시도*

      - 대상을 명확하게 특정할수록 명시도가 높아지고 우선순위가 높아진다.

        - !important > 인라인 스타일 > 아이디 선택자 > 클래스/어트리뷰트/가상 선택자 > 태그 선택자 > 전체 선택자 > 상위 요소에 의해 상속된 속성

        - ```html
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              p        { color: red !important; }
              #thing   { color: blue; }
          
              div.food { color: chocolate; }
              .food    { color: green; }
              div      { color: orange; }
            </style>
          </head>
          <body>
            <p id="thing">Will be Red.</p>
            <div class="food">Will be Chocolate.</div>
          </body>
          </html>
          ```

          

    - *2.32.3 선언순서*

      - 선언된 순서에 따라 우선 순위가 적용된다.(후순위 스타일 우선)

      - ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            p { color: blue; }
            p { color: red; }
        
            .red { color: red; }
            .blue { color: blue; }
          </style>
        </head>
        <body>
          <p>Will be RED.</p>
          <p class="blue red">Will be BLUE.</p>
        </body>
        </html>
        ```

- ##### 2.33 벤더 프리픽스

  - CSS3 표준으로 확정되기 이전 또는 브라우저 개발사가 실험적으로 제공하는 기능을 사용하게 해주는 기능.

  - 브라우저 별 벤더 프리픽스는 다음과 같다.

    | Browser            | Vendor Prefix |
    | ------------------ | ------------- |
    | IE or Edge         | -ms-          |
    | Chrome             | -webkit-      |
    | Firefox            | -moz-         |
    | Safari             | -webkit-      |
    | Opera              | -o-           |
    | IOS Safari         | -webkit-      |
    | Android Browser    | -webkit-      |
    | Chrome for Android | -webkit-      |

- ##### 2.34 그림자 속성 프로퍼티

  - ###### 2.34.1 text-shadow

    - 텍스트에 그림자 효과를 부여하는 프로퍼티이다.

    - ```css
      선택자 { text-shadow: Horizontal-offset Vertical-offset Blur-Radius Shadow-Color; }
      ```

    - | 프로퍼티 값       | 단위  | 설명                                                         | 생략 여부 |
      | ----------------- | ----- | ------------------------------------------------------------ | --------- |
      | Horizontal-offset | px    | 그림자를 텍스트의 오른쪽으로 지정값만큼 이동시킨다.          |           |
      | Vertical-offset   | px    | 그림자를 텍스트의 아래로 지정값만큼 이동시킨다.              |           |
      | Blur-Radius       | px    | 그림자의 흐림정도를 지정한다. 지정값만큼 그림자가 커지고 흐려진다. | 가능      |
      | Shadow-Color      | color | 그림자의 색상을 지정한다.                                    | 가능      |

    - ```html
      <!DOCTYPE html><font></font>
      <html><font></font>
      <head><font></font>
        <style><font></font>
          h1:nth-child(1) {<font></font>
            text-shadow: 5px 5px;<font></font>
          }<font></font>
          h1:nth-child(2) {<font></font>
            text-shadow: 5px 5px red;<font></font>
          }<font></font>
          h1:nth-child(3) {<font></font>
            text-shadow: 5px 5px 3px red;<font></font>
          }<font></font>
          h1:nth-child(4) {<font></font>
            color: white;<font></font>
            text-shadow: 5px 5px 3px black;<font></font>
          }<font></font>
          h1:nth-child(5) {<font></font>
            text-shadow: 0 0 3px red;<font></font>
          }<font></font>
          /*Multiple Shadows*/<font></font>
          h1:nth-child(6) {<font></font>
            text-shadow: 0 0 3px red, 0 0 10px blue;<font></font>
          }<font></font>
          /*Multiple Shadows*/<font></font>
          h1:nth-child(7) {<font></font>
            color: white;<font></font>
            text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;<font></font>
          }<font></font>
        </style><font></font>
      </head><font></font>
      <body><font></font>
        <h1>Text-shadow effect!</h1><font></font>
        <h1>Text-shadow effect!</h1><font></font>
        <h1>Text-shadow effect!</h1><font></font>
        <h1>Text-shadow effect!</h1><font></font>
        <h1>Text-shadow effect!</h1><font></font>
        <h1>Text-shadow effect!</h1><font></font>
        <h1>Text-shadow effect!</h1><font></font>
      </body><font></font>
      </html><font></font>
      ```

  - ###### 2.34.2 box-shadow

    - 요소에 그림자 효과를 부여하는 프로퍼티이다.

    - ```css
      선택자 { box-shadow: Inset Horizontal-offset Vertical-offset Blur-Radius Spread Shadow-Color; }
      ```

    - | 프로퍼티 값       | 단위  | 설명                                                   | 생략 |
      | ----------------- | ----- | ------------------------------------------------------ | ---- |
      | Inset             | inset | inset 키워드를 지정하면 그림자가 요소 안쪽에 위치한다. | 가능 |
      | Horizontal-offset | px    | 그림자를 텍스트의 오른쪽으로 지정값만큼 이동시킨다.    |      |
      | Vertical-offset   | px    | 그림자를 텍스트의 아래로 지정값만큼 이동시킨다.        |      |
      | Blur-Radius       | px    | 그림자의 흐림정도를 지정한다.                          | 가능 |
      | Spread            | px    | 그림자를 더 크게 확장시킨다.(음, 양값)                 | 가능 |
      | Shadow-Color      | color | 그림자의 색상을 지정한다.                              | 가능 |

    - ```html
      <!DOCTYPE html><font></font>
      <html><font></font>
      <head><font></font>
        <style><font></font>
          div {<font></font>
            width: 300px;<font></font>
            height: 100px;<font></font>
            padding: 15px;<font></font>
            margin: 20px;<font></font>
            background-color: yellow;<font></font>
          }<font></font>
          /*box-shadow: Inset Horizontal-offset Vertical-offset Blur-Radius Spread Shadow-Color;*/<font></font>
          /* Horizontal-offset Vertical-offset */<font></font>
          div:nth-of-type(1) {<font></font>
            box-shadow: 10px 10px;<font></font>
          }<font></font>
          /* Horizontal-offset Vertical-offset Shadow-Color */<font></font>
          div:nth-of-type(2) {<font></font>
            box-shadow: 10px 10px blue;<font></font>
          }<font></font>
          /* Horizontal-offset Vertical-offset Blur-Radius Shadow-Color */<font></font>
          div:nth-of-type(3) {<font></font>
            box-shadow: 10px 10px 5px blue;<font></font>
          }<font></font>
          /* Horizontal-offset Vertical-offset Blur-Radius Spread Shadow-Color */<font></font>
          div:nth-of-type(4) {<font></font>
            box-shadow: 10px 10px 5px 5px blue;<font></font>
          }<font></font>
          /* Inset Horizontal-offset Vertical-offset Blur-Radius Spread Shadow-Color */<font></font>
          div:nth-of-type(5) {<font></font>
            box-shadow: inset 10px 10px 5px 5px blue;<font></font>
          }<font></font>
          /* Horizontal-offset Vertical-offset Blur-Radius Spread Shadow-Color */<font></font>
          div:nth-of-type(6) {<font></font>
            background-color: white;<font></font>
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);<font></font>
          }<font></font>
        </style><font></font>
      </head><font></font>
      <body><font></font>
        <div>This is a div element with a box-shadow</div><font></font>
        <div>This is a div element with a box-shadow</div><font></font>
        <div>This is a div element with a box-shadow</div><font></font>
        <div>This is a div element with a box-shadow</div><font></font>
        <div>This is a div element with a box-shadow</div><font></font>
        <div>This is a div element with a box-shadow</div><font></font>
      </body><font></font>
      </html><font></font>
      ```

- ##### 2.35 그레이디언트(Gradient)

  - 2가지 이상의 색상을 혼합하여 부드러운 색감의 배경 등을 생성하는 것. CSS3가 비교적 최근에 제공하는 기술로서 대부분의 브라우저에 벤더프리픽스를 사용하여야 한다.

  - 선형, 방사형 그레이디언트의 두 종류가 있다.

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
        }
        div {
          width: 100vw;
          height: 100vh;
        }
        .dawn {
          /* Old browsers */
          background: #b3cae5;
          /* FF3.6+ */
          background: -moz-linear-gradient(-45deg, #b3cae5 12%, #dbdde4 46%, #e4e3e4 70%, #f7ddbb 94%, #efcab2 100%);
          /* Chrome,Safari4+ */
          background: -webkit-gradient(linear, left top, right bottom, color-stop(12%, #b3cae5), color-stop(46%, #dbdde4), color-stop(70%, #e4e3e4), color-stop(94%, #f7ddbb), color-stop(100%, #efcab2));
          /* Chrome10+,Safari5.1+ */
          background: -webkit-linear-gradient(-45deg, #b3cae5 12%, #dbdde4 46%, #e4e3e4 70%, #f7ddbb 94%, #efcab2 100%);
          /* Opera 11.10+ */
          background: -o-linear-gradient(-45deg, #b3cae5 12%, #dbdde4 46%, #e4e3e4 70%, #f7ddbb 94%, #efcab2 100%);
          /* IE10+ */
          background: -ms-linear-gradient(-45deg, #b3cae5 12%, #dbdde4 46%, #e4e3e4 70%, #f7ddbb 94%, #efcab2 100%);
          /* W3C */
          background: linear-gradient(135deg, #b3cae5 12%, #dbdde4 46%, #e4e3e4 70%, #f7ddbb 94%, #efcab2 100%);
        }
      </style>
    </head>
    <body>
      <div class="dawn"></div>
    </body>
    </html>
    
    ```

- ##### 2.36 트랜지션

  - CSS 프로퍼티의 값이 변화할 때, 프로퍼티 값의 변화가 일정 시간에 걸쳐 일어나도록 하는 것.
  
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        div {
          width: 100px;
          height: 100px;
          background: red;
          /* 트랜지션 효과: 모든 프로퍼티의 변화를 2초에 걸쳐 전환한다. */
          transition: all 2s;
        }
        div:hover {
          border-radius: 50%;
          background: blue;
        }
      </style>
    </head>
    <body>
      <div></div>
    </body>
    </html>
    ```
  
    ​	위 예제는 마우스가 요소에 올라감 여부에 따라 요소의 색과 모양이 변화하는 예제이다.
  
  - 위 예제에서 div:hover 셀렉터의 룰셋에 트랜지션을 설정하면 마우스가 올라갈 때만 트랜지션이 발동한다.
  
  - 트랜지션은 자동으로 발동되지 않는다. 이를 원한다면 CSS 애니메이션을 사용해야 한다.
  
  - | 프로퍼티                   | 설명                                                         | 기본값 |
    | -------------------------- | ------------------------------------------------------------ | ------ |
    | transition-property        | 트랜지션의 대상이 되는 CSS 프로퍼티를 지정한다.              | all    |
    | transition-duration        | 트랜지션이 일어나는 지속시간을 초 단위 또는 밀리 초(ms) 단위로 지정한다. | 0s     |
    | transition-timing-function | 트랜지션 효과를 위한 수치 함수를 지정한다                    | ease   |
    | transition-delay           | 프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 초 단위 또는 밀리 초 단위로 지정한다. | 0s     |
    | transition                 | 모든 트랜지션 프로퍼티를 한 번에 지정한다.                   |        |
  
  - ###### 2.36.1 transition-property
  
    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div {
            width: 100px;
            height: 50px;
            background-color: red;
            margin-bottom: 10px;
            transition-property: width, background-color;
            transition-duration: 2s, 2s;
          }
          div:hover {
            width: 300px;
            background-color: blue;
          }
        </style>
      </head>
      <body>
        <div></div>
      </body>
      </html>
      ```
  
    - 트랜지션의 대상이 될 수 있는 프로퍼티는 정해져 있다.
  
    ```
    // Box model
    width height max-width max-height min-width min-height
    padding margin
    border-color border-width border-spacing
    // Background
    background-color background-position
    // 좌표
    top left right bottom
    // 텍스트
    color font-size font-weight letter-spacing line-height
    text-indent text-shadow vertical-align word-spacing
    // 기타
    opacity outline-color outline-offset outline-width
    visibility z-index
    ```
  
  - ###### 2.36.2 transition-duration
  
    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div {
            width: 100px;
            height: 50px;
            padding: 10px;
            color: white;
            background-color: red;
            margin-bottom: 10px;
            transition-property: width, opacity;
          }
          div:nth-child(1) {
            transition-duration: 0.5s;
          }
          div:nth-child(2) {
            transition-duration: 2s, 1s;
          }
          div:nth-child(3) {
            transition-duration: 5s, 2.5s;
          }
          div:hover {
            width: 300px;
            opacity: .1;
          }
        </style>
      </head>
      <body>
        <div>0.5s</div>
        <div>2s, 1s</div>
        <div>5s, 2.5s</div>
      </body>
      </html>
      ```
  
  - ###### 2.36.3transition-timing-function
  
    - | 프로퍼티값  | 효과                                                         | 그래프                                                       |
      | ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
      | ease        | 기본값. 느리게 시작하여 점점 빨라졌다가 느려지면서 종료한다. | <img src="https://poiemaweb.com/img/cubic-bezier-ease.png" alt="img" style="zoom:67%;" /> |
      | linear      | 시작부터 종료까지 등속 운동을 한다.                          | <img src="https://poiemaweb.com/img/cubic-bezier-linear.png" alt="img" style="zoom:64%;" /> |
      | ease-in     | 느리게 시작한 후 일정한 속도에 다다르면 그 상태로 등속 운동한다. | <img src="https://poiemaweb.com/img/cubic-bezier-ease-in.png" alt="img" style="zoom:64%;" /> |
      | ease-out    | 일정한 속도의 등속으로 시작해서 점점 느려지면서 종료한다.    | <img src="https://poiemaweb.com/img/cubic-bezier-ease-out.png" alt="img" style="zoom:64%;" /> |
      | ease-in-out | ease와 비슷하게 느리게 시작하여 느려지면서 종료한다.         | <img src="https://poiemaweb.com/img/cubic-bezier-ease-in-out.png" alt="img" style="zoom:64%;" /> |
  
      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div {
            font: bold 16px/50px "Open Sans";
            color: white;
            text-align: center;
            width: 100px;
            height: 50px;
            background-color: red;
            margin-bottom: 10px;
            transition: width 2s;
          }
          div:nth-child(1) {
            transition-timing-function: ease;
          }
          div:nth-child(2) {
            transition-timing-function: linear;
          }
          div:nth-child(3) {
            transition-timing-function: ease-in;
          }
          div:nth-child(4) {
            transition-timing-function: ease-out;
          }
          div:nth-child(5) {
            transition-timing-function: ease-in-out;
          }
          div:hover {
            width: 300px;
          }
        </style>
      </head>
      <body>
        <h3>transition-timing-function</h3>
        <div>ease</div>
        <div>linear</div>
        <div>ease-in</div>
        <div>ease-out</div>
        <div>ease-in-out</div>
      </body>
      </html>
      ```
  
  - ###### 2.36.4 trasition-delay
  
    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div {
            font: bold 16px/50px "Open Sans";
            color: white;
            text-align: center;
            width: 100px;
            height: 50px;
            background-color: red;
            margin-bottom: 10px;
            transition: width 1s;
          }
          div:nth-of-type(1) {
            transition-delay: 0s;
          }
          div:nth-of-type(2) {
            transition-delay: 1s;
          }
          div:nth-of-type(3) {
            transition-delay: 3s;
          }
          div:hover {
            width: 300px;
          }
        </style>
      </head>
      <body>
        <h3>transition-delay</h3>
        <div>0s</div>
        <div>1s</div>
        <div>3s</div>
      </body>
      </html>
      ```
  
  - ###### 2.36.5 transition
  
    - 모든 프랜지션 프로퍼티를 한 번에 지정할 수 있는 shorthand이다. 지정 방법은 다음과 같다.
  
      ```html
      transition: property duration function delay
      ```
  
- ##### 2.37 애니메이션

  - CSS 스타일을 다른 CSS 스타일로 부드럽게 전환시키는 효과이다.

  - | 프로퍼티                  | 설명                                                         | 기본값  |
    | ------------------------- | ------------------------------------------------------------ | ------- |
    | animation-name            | @keyframes 애니메이션 이름을 지정한다.                       |         |
    | animation-duration        | 한 싸이클의 애니메이션에 소요되는 시간을 초 단위 또는 밀리 초 단위로 지정한다. | 0s      |
    | animation-timing-function | 애니메이션 효과를 위한 타이밍 함수를 지정한다.               | ease    |
    | animation-delay           | 요소가 로드된 시점과 애니메이션이 실제로 시작하는 사이에 대기하는 시간을 초 단위 또는 밀리 초 단위로 지정한다. | 0s      |
    | animation-iteration-count | 애니메이션 재생 횟수를 지정한다.                             | 1       |
    | animation-direction       | 애니메이션이 종료된 이후 반복될 때 진행하는 방향을 지정한다. | normal  |
    | animation-fill-mode       | 애니메이션 미실행 시(종료 또는 대기)  요소의 스타일을 지정한다. |         |
    | animation-play-state      | 애니메이션 재생 상태(재생 또는 중지)를 지정한다.             | running |
    | animation                 | 모든 애니메이션 프로퍼티를 한번에 지정한다.                  |         |

  - ###### 2.37.1 @keyframes

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: red;
            animation-name: move;
            animation-duration: 5s;
            animation-iteration-count: infinite;
          }
          /* @keyframes rule */
          @keyframes move {
            /* keyframe */
            from {
              left: 0;
            }
            /* keyframe */
            to {
              left: 300px;
            }
          }
        </style>
      </head>
      <body>
        <div></div>
      </body>
      </html>
      ```

  - ###### 2.37.2 animation-name
  
    - @keyframes 뒤에 임의로 부여하는 이름을 프로퍼티값으로 지정하여 사용할 @keyframes rule을 선택한다.
  
      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div {
            position: absolute;
            width: 100px;
            height: 100px;
            animation-name: move, fadeOut, changeColor;
            animation-duration: 5s;
            animation-iteration-count: infinite;
          }
          @keyframes move {
            from { left: 0; }
            to   { left: 300px; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to   { opacity: 0; }
          }
          @keyframes changeColor {
            from { background-color: red; }
            to   { background-color: blue; }
          }
        </style>
      </head>
      <body>
        <div></div>
      </body>
      </html>
      ```
  
  - ###### 2.37.3 animation-duration
  
    - 한 싸이클의 애니메이션에 소요되는 시간을 지정한다. 이를 지정하지 않으면 애니매이션이 실행되지 않는다.
  
  - ###### 2.37.4 animation-timing-function
  
    - 애니메이션 효과를 위한 수치 함수를 지정한다. 트랜지션 참조
  
  - ###### 2.37.5 animation-delay
  
    - 애니메이션이 시작하기까지의 딜레이를 지정해준다.
  
  - ###### 2.27.6 animation-iteration-count
  
    - 애니메이션의 재생 횟수를 지정한다.
  
  - ###### 2.27.7 animation-direction
  
    - | 프로퍼티값        | 설명                                                |
      | ----------------- | --------------------------------------------------- |
      | normal            | 기본값으로 from(0%)에서 to(100%) 방향으로 진행한다. |
      | reverse           | to에서 from 방향으로 진행한다.                      |
      | alternate         | 홀수번째는 normal로, 짝수번째는 reverse로 진행한다. |
      | alternate-reverse | 홀수번째는 reverse로, 짝수번째는 normal로 진행한다. |
  
    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div {
            width: 100px;
            height: 100px;
            background: red;
            position: relative;
            animation: myAnimation 5s infinite;
            /*홀수번째는 normal로, 짝수번째는 reverse로 진행*/
            animation-direction: alternate;
          }
          @keyframes myAnimation {
            0%   { background: red;    left: 0px;   top: 0px; }
            25%  { background: yellow; left: 200px; top: 0px; }
            50%  { background: blue;   left: 200px; top: 200px; }
            75%  { background: green;  left: 0px;   top: 200px; }
            100% { background: red;    left: 0px;   top: 0px; }
          }
        </style>
        </head>
        <body>
          <div></div>
        </body>
      </html>
      
      ```
  
  - ###### 2.37.8 animation-fill-mode
  
    - 애니메이션 미실행 시(대기 또는 종료) 요소의 스타일을 지정한다.
  
    - | 프로퍼티값 | 상태 | 설명                                                         |
      | ---------- | ---- | ------------------------------------------------------------ |
      | none       | 대기 | 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기한다.  |
      |            | 종료 | 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티값을 되돌리고 종료한다. |
      | forwards   | 대기 | 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기한다.  |
      |            | 종료 | 종료 프레임(to)에 설정한 스타일을 적용하고 종료한다.         |
      | backwards  | 대기 | 시작 프레임(from)에 설정한 스타일을 적용하고 대기한다.       |
      |            | 종료 | 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티값을 되돌리고 종료한다. |
      | both       | 대기 | 시작 프레임(from)에 설정한 스타일을 적용하고 대기한다.       |
      |            | 종료 | 종료 프레임(to)에 설정한 스타일을 적용하고 종료한다.         |
  
      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div {
            width: 100px;
            height: 100px;
            font: bold 1em/100px san-serif;
            text-align: center;
            color: #fff;
            background: red;
            margin-bottom: 10px;
            position: relative;
            /*name duration timing-function delay iteration-count direction fill-mode play-state*/
            animation: myAnimation 2s linear 2s;
          }
          div:nth-of-type(1) {
            animation-fill-mode: none;
          }
          div:nth-of-type(2) {
            animation-fill-mode: forwards;
          }
          div:nth-of-type(3) {
            animation-fill-mode: backwards;
          }
          div:nth-of-type(4) {
            animation-fill-mode: both;
          }
          @keyframes myAnimation {
            0%   { left: 0px;   background: yellow; }
            100% { left: 200px; background: blue; }
          }
        </style>
      </head>
      <body>
        <h1>animation-fill-mode</h1>
      
        <div>none</div>
        <p>대기 : 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기한다.</p>
        <p>종료 : 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티값을 되돌리고 종료한다.</p>
      
        <div>forwards</div>
        <p>대기 : 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기한다.
        <p>종료 : 종료 프레임(to)에 설정한 스타일을 적용하고 종료한다.
      
        <div>backwards</div>
        <p>대기 : 시작 프레임(from)에 설정한 스타일을 적용하고 대기한다.
        <p>종료 : 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티값을 되돌리고 종료한다.
      
        <div>both</div>
        <p>대기 : 시작 프레임(from)에 설정한 스타일을 적용하고 대기한다.
        <p>종료 : 종료 프레임(to)에 설정한 스타일을 적용하고 종료한다.
      </body>
      </html>
      ```
  
  - ###### 2.37.9 animation-play-state
  
    - 애니메이션 재생 상태를 지정한다.
  
    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          div {
            width: 100px;
            height: 100px;
            background: red;
            position: relative;
            /*name duration timing-function delay iteration-count direction fill-mode play-state*/
            animation: move 5s infinite;
          }
          div:hover {
            background: blue;
            animation-play-state: paused;
          }
          div:active {
            background: yellow;
            animation-play-state: running;
          }
          @keyframes move {
            from { left: 0px; }
            to   { left: 200px; }
          }
        </style>
      </head>
      <body>
        <h1>animation-play-state</h1>
        <div></div>
      </body>
      </html>
      ```
  
      ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .box {
            position: relative;
            width: 100px;
            height: 100px;
            background-color: red;
            animation-name: move;
            animation-duration: 5s;
            animation-play-state: paused; /* 초기 애니메이션 재생 상태: 정지 */
            animation-iteration-count: infinite;
          }
      
          /* @keyframes rule */
          @keyframes move {
            from {
              left: 0;
            }
      
            to {
              left: 300px;
            }
          }
        </style>
      </head>
      <body>
        <div class="box"></div>
        <button class="start">start animation</button>
        <button class="pause">pause animation</button>
      
        <script>
          const box = document.querySelector('.box');
      
          document.querySelector('.start').addEventListener('click', function () {
            // trigger animation
            // prefixes would be needed...
            box.style.animationPlayState = 'running';
          });
      
          document.querySelector('.pause').addEventListener('click', function () {
            // pause animation
            // prefixes would be needed...
            box.style.animationPlayState = 'paused';
          });
        </script>
      </body>
      </html>
      ```
  
  - ###### 2.37.10 animation
  
    - 모든 애니메이션 프로퍼티를 지정하는 shorthand. 
  
    - ```
      animation: name duration timing-function delay iteration-count direction fill-mode play-state
      ```
  
- ##### 2.38 트랜스폼

  - 요소에 이동, 회전, 확대축소, 비틀기 효과를 부여한다.

  - ###### 2.38.1 2D 트랜스폼

    - 2D 트랜스폼은 프로퍼티값으로 변환함수를 사용한다.

      | transform function     | 설명                                                         | 단위          |
      | ---------------------- | ------------------------------------------------------------ | ------------- |
      | translate(x,y)         | 요소의 위치를 X축으로 x만큼, Y축으로 y만큼 이동시킨다.       | px, %, em 등  |
      | translateX(n)          | 요소의 위치를 X축으로 x만큼 이동시킨다.                      | px, %, em 등  |
      | translateY(n)          | 요소의 위치를 Y축으로 y만큼 이동시킨다.                      | px, %, em 등  |
      | scale(x,y)             | 요소의 크기를 X축으로 x배, Y축으로 y배 확대 또는 축소 시킨다. | 0과 양수      |
      | scaleX(n)              | 요소의 크기를 X축으로 x배 확대 또는 축소 시킨다.             | 0과 양수      |
      | scaleY(n)              | 요소의 크기를 Y축으로 y배 확대 또는 축소 시킨다.             | 0과 양수      |
      | skew(x-angle, y-angle) | 요소를 X축으로 x 각도만큼, Y축으로 y 각도만큼 기울인다.      | +/- 각도(deg) |
      | skewX(x-angle)         | 요소를 X축으로 x 각도만큼 기울인다.                          | +/- 각도(deg) |
      | skewY(y-angle)         | 요소를 Y축으로 y 각도만큼 기울인다.                          | +/- 각도(deg) |
      | rotate(angle)          | 요소를 angle만큼 회전시킨다.                                 | +/- 각도(deg) |

    - *2.38.1.1 transform*

      - 변환함수를 프로퍼티값으로 쉼표 없이 나열한다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
          .box {
            width: 95px;
            height: 95px;
            line-height: 95px;
            color: white;
            text-align: center;
            border-radius: 6px;
          }
          .original {
            margin: 30px;
            border: 1px dashed #cecfd5;
            background: #eaeaed;
            float: left;
          }
          .child {
            background: #2db34a;
            cursor: pointer;
          }
          .translate {
            transform: translate(10px, 50px);
          }
          .scale {
            transform: scale(.75);
          }
          .skew {
            transform: skew(5deg, -20deg);
          }
          .rotate {
            transform: rotate(70deg);
          }
          .complex {
            transform: scale(.5) rotate(20deg);
          }
        
          /* Animation Effect */
          .translate:hover {
            transition: transform 1s linear;
            transform: translate(0px, 0px);
          }
          /* .translate:hover {
            animation: translate 1s linear forwards;
          }
          @keyframes translate {
            100% {
              transform: translate(0px, 0px);
            }
          } */
          .scale:hover {
            transition: transform 1s linear;
            transform: scale(1);
          }
          .skew:hover {
            transition: transform 1s linear;
            transform: skew(0, 0);
          }
          .rotate:hover {
            transition: transform 1s linear;
            transform: rotate(0);
          }
          .complex:hover {
            transition: transform 1s linear;
            transform: scale(1) rotate(0);
          }
          </style>
        </head>
        <body>
          <div class="original box">
            <div class="child box translate">translate</div>
          </div>
          <div class="original box">
            <div class="child box scale">scale</div>
          </div>
          <div class="original box">
            <div class="child box skew">skew</div>
          </div>
          <div class="original box">
            <div class="child box rotate">rotate</div>
          </div>
          <div class="original box">
            <div class="child box complex">complex</div>
          </div>
        </body>
        </html>
        ```

    - *2.38.1.2* *transform-origin*

      - 요소의 기본 기준점을 설정할 때 사용된다. 기본 기준점은 요소의 정중앙(50%, 50%)이다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <style>
          .box {
            width: 150px;
            height: 150px;
            line-height: 150px;
            color: white;
            text-align: center;
            border-radius: 6px;
          }
          .original {
            margin: 20px;
            border: 1px dashed #cecfd5;
            background: #eaeaed;
            float: left;
          }
          .child {
            background: #2db34a;
            cursor: pointer;
          }
          .scale1:hover {
            transition: transform 1s linear;
            transform-origin: 0 0;
            transform: scale(.5);
          }
          .scale2:hover {
            transition: transform 1s linear;
            transform-origin: 50% 50%;
            transform: scale(.5);
          }
          .scale3:hover {
            transition: transform 1s linear;
            transform-origin: 100% 100%;
            transform: scale(.5);
          }
          .translate:hover {
            transition: transform 1s linear;
            /*transform-origin: 100% 100%;*/
            transform: translate(10px, 10px);
          }
          </style>
        </head>
        <body>
          <div class="original box">
            <div class="child box scale1">scale1</div>
          </div>
          <div class="original box">
            <div class="child box scale2">scale2</div>
          </div>
          <div class="original box">
            <div class="child box scale3">scale3</div>
          </div>
          <div class="original box">
            <div class="child box translate">translate</div>
          </div>
        </body>
        </html>
        ```

  - ###### 2.38.2 3D 트랜스폼

    - 2D 트랜스폼의 변환함수에서 3d를 붙혀준다. 단, 기울이기(skew)는 존재하지 않는다.

- ##### 2.39 웹디자인 타이포그래피

  - 사용자가 웹페이지를 요청한 순간 CSS에 기술된 필요 폰트가 서버에서 클라이언트로 전송되는 것. 존재하지 않는 폰트를 전송해준다.

  - ###### 2.39.1 CDN(Content Delivery Network) 링크 방식

    - ```css
      @import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
      
      * { font-family: 'Nanum Gothic', sans-serif; }
      ```

  - ###### 2.39.2 서버 폰트 로딩 방식

    - 위의 방식은 구글 폰트를 사용하기에 간편하지만 로딩 속도가 느린 단점이 있다.

    - @font-face 규칙으로 폰트를 등록하고 font-family 프로퍼티로 폰트를 선택한다.

    - ```css
      /* IE 9~ & all browsers */
      @font-face {
        font-family: myFontName;
        src: url("myFont.woff");
      }
      
      * { font-family: myFontName, sans-serif; }
      ```

    - 단 브라우저에 따라 지원하는 폰트 파일 형식이 다르다는 문제가 있다.

    - ```css
      @font-face {
        font-family:"Nanum Gothic";
        src:url("NanumGothic.eot"); /* IE 9 호환성 보기 모드 대응 */
        src:local("☺"),             /* local font 사용 방지. 생략 가능 */
            url("NanumGothic.eot?#iefix") format('embedded-opentype'), /* IE 6~8 */
            url("NanumGothic.woff") format('woff'); /* 표준 브라우저 */
      }
      
      * { font-family: "Nanum Gothic", sans-serif; }
      ```

    - 영문과 한글을 혼용하는 경우 먼저 영문 폰트, 그 다음 한글 폰트를 지정하여야 한다. 한글 폰트부터 지정할 경우 영문 폰트에도 한글 폰트가 적용된다.

- ##### 2.40 레이아웃

  - ![layout-samples](https://poiemaweb.com/img/layout-samples.png)

  - 레이아웃이란 웹사이트를 구성하는 요소들을 배치할 공간을 분할하고 정렬하는 것이다. 

  - 공간을 분할할 때는 일반적으로 행을 구분한 후, 행 내부 요소를 분리한다.

  - 화면의 크기에 따라 적절히 화면 구성을 변화시키는 반응형 웹 디자인에 쓰인다.

  - ###### 2.40.1 Header & Navigation Bar

    - 사이트 곳곳으로의 링크 목록이다.

    - ![apple.com](https://poiemaweb.com/img/apple.png)

    - 기본적으로 링크들의 리스트로 ul, li 태그를 이용하여 작성한다. 아래는 Navigation bar를 만드는 과정이다.

    - ```html
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          /* Simple Reset CSS */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: #58666e;
            background-color: #f0f3f4;
          }
          li {
            list-style: none;
          }
          a {
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div id="wrap">
          <header>
            <a class="logo" href="#home">
              <img src="https://poiemaweb.com/img/logo.png" height="36px">
            </a>
            <nav>
              <ul class="nav-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </body>
      </html>
      ```

      header 요소에 화면폭 기준의 width와 고정 height, background-color와 box-shadow 효과를 추가한다.

      ```css
      header {
        width: 100%;
        height: 60px;
        z-index: 2000;
        background-color: #fff;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
      }
      ```

      float 프로퍼티를 이용하여 Navigation bar를 우측정렬한다.

      ```css
      nav{
      	float: right;
      }
      ```

      로고 이미지를 수직으로 중앙 정렬한다.

      로고 이미지를 포함하는 a 태그의 height를 로고 이미지와 같은 36px로 지정하고 상하 margin을 12px씩 부여하면 로고 이미지가 중앙 정렬된다.

      ```css
      .logo {
        display: inline-block;
        height: 36px;
        margin: 12px 0 12px 25px;
      }
      .logo > img { height: 36px; }
      ```

      수직 정렬된 Navigation bar를 수평 정렬한다. 

      ```css
      .nav-items > li {
        display: inline-block;
      }
      ```

      수평 정렬된 Navigation bar를 수직 중앙 정렬한다.

      ```
      .nav-items > li > a {
        line-height: 60px;
        padding: 0 30px;
        color: rgba(0, 0, 0, 0.4);
      }
      ```

      마우스가 Navigation bar 위에 올라오면 텍스트 색상이 변경되도록 한다.

  - ###### 2.40.2 Section & Aside

    - 콘텐츠의 영역을 Section, 콘텐츠에 대한 Navigation item이나 부가 정보 영역을 Aside라 한다.

    - ```html
      <div id="content-wrap">
        <aside>
          <h1>Aside</h1>
          <ul>
            <li><a href="#" class="active">London</a></li>
            <li><a href="#">Paris</a></li>
            <li><a href="#">Tokyo</a></li>
            <li><a href="#">Newyork</a></li>
          </ul>
        </aside>
        <section>
          <article id="london">
            <h1>London</h1>
            <p>...</p>
          </article>
          <article id="paris">
            <h1>Paris</h1>
            <p>...</p>
          </article>
          <article id="tokyo">
            <h1>Tokyo</h1>
            <p>...</p>
          </article>
          <article id="newyork">
            <h1>Newyork</h1>
            <p>...</p>
          </article>
        </section>
      <!-- end of content-wrap   -->
      </div>
      ```

      aside를 좌측정렬, section을 우측 정렬한다.

      ```css
      /* clearfix */
      #content-wrap:after {
        content: "";
        display: block;
        clear: both;
      }
      aside {
        float: left;
        width: 20%;
      }
      section {
        float: right;
        width: 80%;
      }
      ```

      이 웹페이지에선 화면을 아래로 스크롤하면 navigation bar가 사라져 버리는 현상이 발생하기 때문에 fixed 프로퍼티로 header 요소를 상단에 고정시킨다.

      ```css
      header {
        /* for sticky header */
        position: fixed;
        top: 0;
        ...
      }
      ```

      이 때 contents 영역 상단이 header 영역과 겹치므로 contents 영역을 header의 height만큼 아래로 끌어 내린다.

      ```css
      #wrap {
        /* margin-top = header height */
        margin-top: 60p;
      }
      ```

      aside 영역도 마찬가지로 고정시켜준다. 이 때 float: left를 삭제해준다.

      ```css
      aside {
        /* for fixed side bar */
        position: fixed;
        top: 60px;
        bottom: 0;
      
        width: 200px;
      }
      section {
        float: right;
        margin-left: 200px;
      }
      ```

      aside navigation의 style을 정리한다.
      
      ```html
      aside {
        /* for fixed side bar */
        position: fixed;
        top: 60px;
        bottom: 0;
      
        width: 200px;
        padding-top: 25px;
        background-color: #333;
      }
      /* aside navigation */
      aside > ul {
        width: 200px;
      }
      aside > ul > li > a {
        display: block;
        color: #fff;
        padding: 10px 0 10px 20px;
      }
      aside > ul > li > a.active {
        background-color: #4CAF50;
      }
      aside > ul > li > a:hover:not(.active) {
        background-color: #555;
      }
      aside > h1 {
        padding: 20px 0 20px 20px;
        color: #fff;
      }
      /* Section */
      section {
        float: right;
        /* aside width */
        margin-left: 200px;
      }
      article {
        margin: 10px;
        padding: 25px;
        background-color: white;
      }
      ```
      
      h1의 크기가 위치한 영역에 따라 다르게 설정해준다.
      
      ```css
      h1 { font-size: 1.8em; }
      h1, h2, h3, h4, h5, h6, p {
        margin: 10px 5px;
      }
      ```
    
  - ###### 2.40.3 footer
  
    - ```html
      <footer>© Copyright 2016 ungmo2</footer>
      ```
  
    - footer도 고정되어 있어야 하지만 본문을 가려서는 안되므로 fixed가 아닌 absolute 프로퍼티를 사용해준다.
  
      ```css
      footer {
        /* footer를 aside위에 올리기 위해 사용(부유객체) */
        position: absolute;
        height: 60px;
        width: 100%;
        padding: 0 25px;
        line-height: 60px;
        color: #8a8c8f;
        border-top: 1px solid #dee5e7;
        background-color: #f2f2f2;
      }
      ```
  
- ##### 2.41 반응형 레이아웃

  - 위의 레이아웃 작성 방법에는 화면폭을 좁히면 화면이 망가진다는 문제점이 있다.

  - ###### 2.41.1 Responsive Web Design 개요

    - 화면 크기에 구애받지 않고 화면 해상도에 따라 가로폭이나ㅣ 배치를 변경하여 가독성을 높이는 것이다.

    - *2.41.1.1* *viewport meta tag*

      - viewport란 웹페이지의 가시영역을 의미한다. 이 viewport는 기기마다 차이가 있기 때문에 이를 이용하여 각종 기기 사용자에게 최적화된 웹페이지를 제공할 수 있다.![viewport](https://poiemaweb.com/img/viewportExample.jpg)

      - viewport meta tag는 브라우저의 화면 설정과 관련된 정보를 제공한다.

        | 프로퍼티      | Description                  | 사용 예             |
        | ------------- | ---------------------------- | ------------------- |
        | width         | viewport 너비. 기본값: 980px | width=240           |
        |               |                              | width=device-width  |
        | height        | viewport 높이                | height=800          |
        |               |                              | width=device-height |
        | initial-scale | viewport 초기 배율           | initial-scale=1.0   |
        | user-scale    | 확대 축소 가능 여부          | user-scale=no       |
        | maximum-scale | viewport 최대 배율           | maximum-scale=2.0   |
        | minimum-scale | viewport 최소 배율           | minimum-scale=1.0   |

      - 일반적으로 viewport meta tag는 모바일에서만 적용된다.

      - ```html
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ```

        가로폭을 디바이스의 가로폭에 맞추고 초기 화면 배율을 100%로 설정한다.

    - *2.41.1.2 @media*

      - 서로 다른 미디어 타입에 따라 각각의 style을 지정하게 한다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @media screen {
              * { color: red; }
            }
            @media print {
              * { color: blue; }
            }
          </style>
        </head>
        <body>
          <h1>@media practice</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </body>
        </html>
        ```

      - @media를 사용하여 미디어 별로 style을 지정하는 것을 Media Query라고 한다.

        ```
        @media not|only mediatype and (expressions) {
          CSS-Code;
        }
        ```

        ```css
        @media screen and (min-width: 480px) {
          body {
            background-color: lightgreen;
          }
        }
        ```

        | 프로퍼티            | Description                                      |
        | ------------------- | ------------------------------------------------ |
        | width               | viewport 너비                                    |
        | height              | viewport 높이                                    |
        | device-width        | 디바이스의 물리적 너비                           |
        | device-height       | 디바이스의 물리적 높이                           |
        | orientation         | 디바이스 방향(가로 : landscape, 세로 : portrait) |
        | device-aspect-ratio | 디바이스의 물리적 width/height 비율              |
        | color               | 디바이스에서 표현 가능한 최대 색상 비트 수       |
        | monochrome          | 흑백 디바이스의 픽셀 당 비트 수                  |
        | resolution          | 디바이스 해상도                                  |

        orientation을 제외한 모든 프로퍼티는 min/max 접두사를 사용할 수 있다.

        viewport의 width 프로퍼티를 이용하여 viewport 너비에 따라 반응하는 범위를 지정할 수 있다.

        ```css
        /*==========  Mobile First Method  ==========*/
        /* All Device */
        
        /* Custom, iPhone Retina : 320px ~ */
        @media only screen and (min-width : 320px) {
        
        }
        /* Extra Small Devices, Phones : 480px ~ */
        @media only screen and (min-width : 480px) {
        
        }
        /* Small Devices, Tablets : 768px ~ */
        @media only screen and (min-width : 768px) {
        
        }
        /* Medium Devices, Desktops : 992px ~ */
        @media only screen and (min-width : 992px) {
        
        }
        /* Large Devices, Wide Screens : 1200px ~ */
        @media only screen and (min-width : 1200px) {
        
        }
        
        /*==========  Non-Mobile First Method  ==========*/
        /* All Device */
        
        /* Large Devices, Wide Screens : ~ 1200px */
        @media only screen and (max-width : 1200px) {
        
        }
        /* Medium Devices, Desktops : ~ 992px */
        @media only screen and (max-width : 992px) {
        
        }
        /* Small Devices, Tablets : ~ 768px */
        @media only screen and (max-width : 768px) {
        
        }
        /* Extra Small Devices, Phones : ~ 480px */
        @media only screen and (max-width : 480px) {
        
        }
        /* Custom, iPhone Retina : ~ 320px */
        @media only screen and (max-width : 320px) {
        
        }
        
        ```

        ![media-query-breakpoints](https://poiemaweb.com/img/media-query-breakpoints.jpg)

        아래는 임의로 해상도를 3단계로 구분한 예시이다.

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            /* 801px ~ */
            * { color: black; }
            /* ~ 800px */
            @media screen and (max-width: 800px) {
              * { color: blue; }
            }
            /* ~ 480px */
            @media screen and (max-width: 480px) {
              * { color: red; }
            }
          </style>
        </head>
        <body>
          <h1>@media practice</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </body>
        </html>
        ```

      - 다음은 화면의 세로, 가로를 구분하는 예제이다.(스마트폰 해상도 지정 필수)

        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            /* 세로  */
            * { color: black; }
            /* 가로 */
            /* Desktop의 화면은 가로화면(landscape)이므로 아래 rule이 적용된다. */
            /*
            @media screen and (orientation: landscape) {
              { color: blue; }
            }
            */
        
            /* Landscape */
            @media screen
              /* 디바이스가 모바일일때(device-width 0 ~ 768px) */
              and (max-device-width: 760px)
              /* 가로 */
              and (orientation: landscape) {
              * { color: blue; }
            }
          </style>
        </head>
        <body>
          <h1>@media practice: orientation</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </body>
        </html>
        ```

  - ###### 2.41.2 Responsive Navigation Bar

    - 


#### 3. 값(value/속성값)

- **프로퍼티의 값**으로 해당 프로퍼티에 사용할 수 있는 값을 '키워드'나 '크기 단위' 또는 '색상 표현 단위'등의 특정 단위로 지정하여야 한다. 

- ##### 3.1 키워드

  - 각 프로퍼티에 따라 사용할 수 있는 키워드가 존재한다.

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

  - ##### Link style

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

  - ##### Embedding style

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

  - ##### Inline style

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