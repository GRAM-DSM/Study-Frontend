# CSS

### css

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

- ##### 4. 클래스 셀렉터(Class Selector)

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

#### 2. 프로퍼티(property/속성)

- **셀렉터로 지정한 html요소에 프로퍼티(속성)와 값을 지정하는 것**으로 다양한 style을 정의할 수 있다.
- 프로퍼티는 표준 스펙으로 이미 지정되어 있는 것을 사용하여야하며 사용자가 임의로 정의할 수 없다.
- 여러 개의 프로퍼티를 연속해서 지정할 수 있으며 세미콜론으로 구분한다.

#### 3. 값(value/속성값)

- **프로퍼티의 값**으로 해당 프로퍼티에 사용할 수 있는 값을 '키워드'나 '크기 단위' 또는 '색상 표현 단위'등의 특정 단위로 지정하여야 한다.

#### 4. HTML과 CSS의 연동

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

#### 5. Reset CSS 사용하기

- 모든 웹 브라우저는 디폴트 스타일(브라우저가 내장하고 있는 기본 스타일)을 가지고 있어 CSS가 없이도 작동한다.
- 허나 웹브라우저에 따라 디폴트 스타일이 상이하고 지원하는 tag나 style도 제각각이어서 주의가 필요하다.
- Reset CSS는 기본적인 HTML 요소의 CSS를 초기화하는 용도로 사용한다. 즉, 브라우저 별로 제각각인 디폴트 스타일을 하나의 스타일로 통일시켜 주는 역할을 한다.
- 자주 사용되는 Reset CSS로는 Eric Meyer's reset과 normalize.css가 있다.