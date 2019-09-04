# HTML



- ### 배경 지식

  - HTML document는 .html 확장자를 갖는 순수한 텍스트 파일이다. 따라서 메모장 등으로도 편집할 수도 있다. 이외에 다양한 편의 기능을 제공하는 에디터 또는 IDE(Integrated Development Environment)로는 대표적으로

    -visual studio code

    -webstorm

    -atom

    -brackets

    -sublime text

    등이 있다.
    
  - #### 시맨틱 웹

    - 웹에 존재하는 수많은 웹페이지들에 메타데이터[^1]를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 '의미'와 '관련성'을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.
    
      ```html
      <font size="6"><b>Hell</b></font>
      <h1>Hello</h1>
      ```
    
    - 위의 코드 두 줄은 둘 다
    
      # Hello
    
      를 출력하지만 1행의 요소는 폰트 크기와 볼드체를 지정하는 메타데이터[^1]만을 포함하고 있지만 2행의 요소는 제목(header) 중 가장 상위 레벨이라는 의미를 내포하고 있어서 개발자가 의도한 요소의 의미가 명확히 브라우저와 검색엔진에게도 전달된다.
    
    - HTML 요소는 non-semantic 요소 semantic 요소로 구분할 수 있다.
    
      - non-semantic 요소 : div, span 등이 있으며 이들 태그는 content에 대하여 어떤 설명도 하지 않는다.
      - semantic 요소 : form, table, img 등이 있으며 이들 태그는 content의 의미를 명확히 설명한다.

- ### 형식

  - html5 문서는 반드시 <!DOCTYPE html>으로 시작하여 문서 형식을 html5로 지정한다.

  - 실질적인 html document는 2행부터 시작되는데 <html>과 </html> 사이에 기술한다.

  - < head >와 < /head >사이에는 document title, 외부 파일의 참조, 메타데이터[^1]의 설정 등이 위치하며 이 정보들은 브라우저에 표시되지 않는다.

  - 웹브라우저에 출력되는 모든 요소는 <body>와 </body> 사이에 위치한다.

  - 

  - #### 요소

    - HTML 요소는 시작 태그와 종료 태그 그리고 태그 사이에 위치한 content로 구성된다.![tag](https://poiemaweb.com/img/tag.png)
    
    - 요소는 중첩될 수 있다. 즉, 요소는 다른 요소를 포함할 수 있다.
    
      ```
      <!DOCTYPE html>
      <html>
       <head>
        <meta charset="utf-8">
       </head>
       <body>
       <h1>안녕하세요</h1>
       <p>반갑습니다!</p>
       </body>
      </html>
      ```
    
    - html 요소는 웹페이지를 구성하는 모든 요소들을 포함한다. 위 예제에서는 html 요소가 body 요소를 포함하며 body 요소는 h1, p 요소를 포함한다. 이를 중첩 관계(부자 관계)라고 하며 이는 웹페이지의 구조를 표현한다.
    
    - ##### 빈 요소
    
      - content를 가질 수 없는 요소를 빈 요소라 한다. <meta charset="utf-8"> 같은 경우는 content가 필요없으며 어트리뷰트만을 가질 수 있다. 대표적인 빈 요소로는 < br >, < hr >,<img>,< input >,< link >,< meta > 등이 있다.
    
  - #### 어트리뷰트(attribute, 속성)

    - 요소의 성질, 특징을 자세하게 정의하는 내용. 요소에 추가적 정보를 제공한다.![html attribute](https://poiemaweb.com/img/html-attribute.png)

    - 어트리뷰트는 시작 태그에 위치해야 하며 이름과 값이 쌍을 이룬다.

    - **어트리뷰트**

      - src(source) : img 태그와 함께 사용되는 속성으로 이미지의 주소를 src="주소" 형식으로 달아준다. 내 컴퓨터의 이미지와 인터넷의 이미지를 달아줄 수 있다. 내 컴퓨터의 파일을 프로젝트 폴더에 위치시킨 후 이미지 파일의 이름을 src="파일이름.jpg"의 형식으로 적어주면 내 컴퓨터의 이미지 파일을 웹페이지에 올릴 수 있다.
      
    - width : img 태그와 함께 사용되는 속성으로 이미지의 크기를 숫자 또는 %로 지정해줄 수 있다.
      
      - background : 배경그림(body 태그와 함께 사용되는 속성)
      
    - bgcolor : 배경색(body 태그와 함께 사용되는 속성)
      
      - text : 글자색(body 태그와 함께 사용되는 속성)
      
    - link : 링크색(body 태그와 함께 사용되는 속성)
      
    - vlink : 방문링크색(body 태그와 함께 사용되는 속성)
    
    - alink : 활성링크색(body 태그와 함께 사용되는 속성)

    - href : 이동하고자 하는 파일의 위치(경로 : 파일 시슴템 상에서 특정 파일의 위치)를 값으로 받는다.

      - 디렉터리(Directory) : 파일과 다른 디렉터리를 갖는 파일 시스템 내의 존재물로서 폴더라고도 불리운다.

        - ###### 루트 디렉터리 : 파일 시스템 계층 구조 상의 최상위 디렉터리이다. Unix: /와 Windows: C:\가 있다.
    
        - ###### 홈 디렉터리 : 시스템의 사용자에게 각각 할당된 개별 디렉터리이다. 위의 루트 디렉터리 주소에서 Users와 계정명이 붙는다.
    
        - ###### 작업 디렉터리 : 작업 중인 파일의 위치한 디렉터리이다. ./
    
        - ###### 부모 디렉터리 : 작업 디렉터리의 부모 디렉터리이다. ../
    
      - 파일 경로(File path) : 파일 경로는 파일 시스템에서 파일의 위치를 나타내는 방법이다. 절대경로와 상대경로가 있다.
    
        - 절대경로(Absolute path) : 현재 작업 디렉터리와 관계없이 특정 파일의 절대적인 위치를 가리킨다. 루트 디렉터리를 기준으로 파일의 위치를 나타낸다.
        - 상대경로(Relative path) : 현재 작업 디렉터리를 기준으로 특정 파일의 상대적인 위치를 가리킨다.
    
      - href 어트리뷰트에 사용 가능한 값은 
    
        절대 URL(웹사이트 URL (href=”http://www.example.com/default.html”))
    
        상대 URl(자신의 위치를 기준으로한 대상의 URL (href=”html/default.html”))
    
        fragment identifier(페이지 내의 특정 id를 갖는 요소에의 링크(href=”#top”))
    
        메일(mailto:)
    
        script(href=”javascript:alert(‘Hello’);”)
    
        가 있다.
    
    - target : 링크를 클릭했을 때 윈도우를 어떻게 오픈할 지를 지정한다. _self(링크를 클릭했을 대 연결문서를 현재 윈도우에서 오픈한다.)와 _blank(링크를 클릭했을 때 연결문서를 새로운 윈도우나 탭에서 오픈한다.)가 있다.
    
    - ##### 글로벌 어트리뷰트
    
      - 모든 html 요소가 공통으로 사용할 수 있는 어트리뷰트로 몇몇 요소에는 효과가 적용되지 않을 수 있지만 대체로 모든 요소에 사용될 수 있다.
    
      - 자주 사용되는 글로벌 어트리뷰트
    
        id : 유일한 식별자(id)를 요소에 지정한다. 중복지정이 불가능하다.
    
        class : 스타일시트에 정의된 class를 요소에 지정한다. 중복 지정이 가능하다.
    
        hidden : css의 hidden과는 다르게 의미상으로도 브라우저에 노출되지 않게 된다.
    
        lang : 지정된 요소의 언어를 지정한다. 검색엔진의 크롤링 시 웹페이지의 언어를 인식할 수 있게 한다.
    
        style : 요소에 인라인 스타일을 지정한다.
    
        tabindex : 사용자가 키보드로 페이지를 내비게이션 시 이동 순서를 지정한다.
    
        title : 요소에 관한 제목을 지정한다.
        
        lang : 언어 설정 어트리뷰트로 html태그와 함깨 사용된다.
    
    - 주석
    
      - 개발자에게 코드를 설명하기 위해 사용되는 주석이다. <!--내용-->의 형식으로 작성한다.

- ### 태그
  
  - 태그는 대소문자를 구별하지 않으나 소문자를 사용하는 것이 일반적이다.
    
  - ##### 문서 형식 정의 태그
    
    - < !DOCTYPE html > : HTML5에서의 문서 형식 정의(Document Type Definition, DTD) 기술 양식이다.
    
  - < html > :  모든 HTML 요소로 모든 요소는 html 요소의 요소이다.(단, <!DOCTYPE>는 예외이다.) hyml은 글로벌 어트리뷰트를 지원한다. 특히 lang 어트리뷰트를 사용하는 경우가 많다.
  
  - < head > : html 문서의 속성을 지정하기 위한 태그로 메타데이터를 포함한다. 메타데이터는 HTML 문서의 title, style, link, script에 대한 데이터로 화면에 표시되지 않는다. 
  
    - < title > : 문서의 제목을 정의한다. 정의된 제목은 브라우저의 탭에 표시된다.
    
    - < style > : HTML 문서를 위한 style 정보를 정의한다.(배경색, 글씨색 등)
    
    - < link > : 외부 리소스와의 연계 정보를 정의한다. 주로 HTML과 외부 CSS 파일을 연계에 사용한다. 
    
    - < script > client-side JavaScript를 정의한다. 
    
      ```html
      <script>
            document.addEventListener('click', function () {
              alert('Clicked!');
            });
          </script>
      ```
    
      src 어트리뷰트를 사용하면 외부 JavaScript 파일을 로드할 수 있다.
    
      ```html
      <script src="main.js"></script>
      ```
    
    - < meta > : description, keywords, author, 기타 메타데이터 정의에 사용된다. 메타데이터는 브라우저, 검색엔진 등에 의해 사용된다. charset 어트리뷰트는 브라우저가 사용할 문자셋을 정의한다.
    
      ```html
      <meta charset="utf-8">
      ```
    
      SEO(검색엔진 최적화)를 위해 검색엔진이 사용할 keywords을 정의한다,
    
      ```html
      <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
      ```
    
      웹페이지의 설명을 정의한다.
    
      ```html
      <meta name="description" content="Web tutorials on HTML and CSS">
      ```
    
      웹페이지의 저자를 명기한다.
    
      ```html
      <meta name="author" content="John Doe">
      ```
    
      웹페이지를 30초마다 Refresh한다.
    
      ```html
      <meta http-equiv="refresh" content="30">
      ```
    
  - < body > : html 문서의 내용을 나타내기 위한 태그. 표시될 문서의 레이아웃을 이 태그 안에 넣으면 된다. 속성으로 background=배경그림, bgcolor=배경색, text=글자색, link=링크색, vlink=방문링크색, alink=활성링크색 이렇게 6가지가 있었으나 CSS가 도입되며 굳이 body 태그에 직접 속성을 지정해야 할 이유가 사라졌고 html5부터 지원하지 않게 되었다.
  
  - ##### 텍스트 관련 태그
  
    - 제목 태그 : 제목을 나타내는 태그로 < h1 >에서 < h6 >까지의 태그가 있다. h1이 가장 중요한 제목을 뜻하며 글자의 크기도 가장 크다. 시맨틱 웹의 의미를 살려서 제목 이외에는 사용하지 않는 것이 좋다.
  
    - < u > : 밑줄 긋기.
  
    - < b > : **볼드체**를 지정한다. 다만 제목 태그와는 다르게 의미론적(semantic, 시맨틱) 중요성의 의미는 없다. 따라서 아래와 같이 사용할 수도 있다.
  
      ```html
       <p style="font-weight: bold;">This text is bold.</p>
      ```
  
    - < strong > : **볼드체** 표기. b 태그와는 다르게 의미론적 중요성의 의미를 갖는다.
  
    - < i > : *italic*체를 지정. 의미론적 중요성의 의미는 없다.
  
      ```html
      <p style="font-style: italic;">This text is italic.</i>
      ```
  
    - < em > : emphasized(강조, 중요한) text를 지정한다. *Italic*체로 표현되며 의미론적 중요성의 의미를 갖는다.
  
    - < small > : 작게할 글씨를 지정한다.
  
    - < mark > : highlighted text(형광펜)를 지정한다.
  
    - < del > : deleted text(취소선)를 지정한다.
  
    - < ins > : inserted text(끼워넣은 문자, 밑줄 처리)를 지정한다.
  
    - < sub >/< sup > : 각각 subscripted(아래에 쓰인) text, superscripted(위에 쓰인) text를 지정한다.
  
  - ##### 본문 태그
  
    - < p > : 단락(Paragraphs)을 지정한다. 단락과 단락 사이를 한 줄씩 띄워준다.
    - < br > : (강제)개행을 지정한다. 빈 요소로 닫는 태그(/)가 없다. HTML에서는 1개 이상의 연속된 공백을 삽입하여도 1개의 공백으로 표시되기에 연속된 줄바꿈도 1개의 공백으로 표시된다. 연속된 공백을 삽입하려면 '&nbsp;'을 써야한다.(이 자식 은신술 씀 ㅡㅡ)
    - < pre > : 형식화된(preformatted) text를 지정한다. pre 태그 내의 content는 작성된 그대로 브라우저에 표시된다.
    - < hr > : 수평줄을 삽입한다.
    - < q > : 짧은 인용문(quotation)을 지정한다. 브라우저는 인용부호로 q 요소를 감싼다.
    - < blockquote > : 긴 인용문 블록을 지정한다. 브라우저는 이 태그의 요소를 들여쓰기한다. css를 이용하여 다양한 style을 적용할 수 있다.
    - < a > : 하이퍼링크를 적용시켜준다. 속성 href와 함께 쓴다.
  
  - ##### 목록(list) 태그
  
    - < li > : 순서없는 목록을 표현한다.
    - < ol > : 순서있는 목록을 표현한다. < li > 요소를 활용한다.
      - type 어트리뷰트를 사용하여 순서를 나타내는 문자를 지정할 수 있다. 숫자, 대/소문자 알파벳/로마숫자가 지정가능하다.(로마숫자는 i, 알파벳은 a, 숫자는 1로 지정한다.)
      - start 어트리뷰트로 리스트의 시작값을 지정할 수 있다.
      - reversed 어트리뷰트로 리스트의 순서값을 역으로 표현한다.
    - < ul > : 목록들을 중첩할 수 있게 해준다.
  
  - ##### 테이블
  
    - 표(table)를 만들 때 사용하는 태그이다. 과거에는 테이블 태그를 사용하여 레이아웃을 구성하기도 하였으나 모던 웹에서는 주로 공간 분할 태그인 < div > 태그를 사용하여 레이아웃을 구성한다.
    - < table > : 표를 감싼다.
    - < tr > : 표 내부의 행.
    - < th > : 행 내부의 제목 셀
    - < td > : 행 내부의 일반 셀![table tag](https://poiemaweb.com/img/html_table_structure.gif)
    - 어트리뷰트로는 border(표 테두리 두께 지정), rowspan(해당 셀이 점유하는 행의 수 지정), colspan(해당 셀이 점유하는 열의 수 지정)이 있다.
  
  - ##### 이미지 태그
  
    - 웹페이지에 이미지를 삽입하는 태그이다.
    - 어트리뷰트로는 src(이미지 파일 경로), alt(이미지 파일이 없을 경우 표시되는 문장), width(이미지의 너비), height(이미지의 높이)가 있다.
  
  - ##### 미디어 태그
  
    - < audio > : 오디오 플레이어 태그이다.
    - 어트리뷰트로는 src(음악 파일 경로), preload(재생 전에 음악 파일을 모두 불러올 것인지 지정), autoplay(음악 팡리을 자동 재생 개시할 것인지 지정), lood(음악을 반복할 것인지 지정), controls(음악 재생 도구를 표시할 것인지 지정, 재생 도구의 외관은 브라우저마다 차이가 있다.)
    - < video > : 영상 플레이어 태그이다.
    - 어트리뷰트로는 src(동영상 파일 경로), poster(동영상 준비 중에 표시될 이미지 파일 경로), width(동영상의 너비를 지정), height(동영상의 높이를 지정), preload, autoplay, loop, controls 어트리뷰트는 audio 태그와 같다.
  
  - ##### < form > 태그
  
    - 사용자가 입력한 데이터를 수집하기 위해 사용되며 input, textarea, button, select, checkbox, radio button, submit button 등의 **입력 양식 태그**를 포함할 수 있다.
  
    - 어트리뷰트로는 action(입력 데이터가 전송될 URL 지정), method(입력 데이터 전달 방식 지정, get과 post 중 하나를 value으로 받는다.)이 있다.
  
      - get 방식은 전송 URL에 입력 데이터를 쿼리스트링으로 보내는 방식이다. ex) http://jsonplaceholder.typicode.com/posts?userId=1&id=1
  
        - ?를 통해 데이터의 시작을 알려주고, key-value 형태의 데이터를 추가한다. 1개 이상의 전송 데이터는 '&'로 구분한다.
        - URL에 전송 데이터가 노출되어 보안에 문제가 있고 전송할 수 있는 데이터의 한계가 있다.(최대 255자)
  
      - post 방식은 Reauest Body에 담아 보내는 방식이다. ex) http://jsonplaceholder.typicode.com/posts
  
        - URL에 전송 데이터가 모두 노출되지 않지만 GET에 비해 속도가 느리다.
  
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <form action="http://jsonplaceholder.typicode.com/users" method="get">
              ID: <input type="text" name="id" value="1"><br>
              username: <input type="text" name="username" value="Bret"><br>
              <input type="submit" value="Submit">
            </form>
          </body>
        </html>
        ```
  
    - 위의 예시에서 submit 버튼이 클릭되면 input 태그에 입력된 데이터가 form 태그의 method 어트리뷰트에 지정된 방식으로 action 어트리뷰트에 지정된 서버측의 처리 로직에 전달된다.
  
    - ###### < input > 태그
  
      - form 태그 중에서 가장 중요한 태그로 사용자로부터 데이터를 입력받기 위해 사용된다.
  
      - type 어트리뷰트로 input 태그가 구분된다. 
  
      - 아래는 type 어트리뷰트의 값들이다.
  
        button(버튼 생성)
  
        checkbox(체크박스 생성)
  
        color(색 선택 생성)
  
        date(년원일 생성)
  
        datetime(년월일시분초 생성)
  
        datetime-local(지역 datetime 생성)
  
        email(이메일 입력 form 생성)
  
        file(파일 선택 form 생성)
  
        hidden(감추어진 입력 form 생성)
  
        image(이미지로된 summit button 생성)
  
        month(월 선택 form 생성)
  
        number(숫자 입력 form 생성)
  
        password(비밀번호 입력 form 생성)
  
        radio(radio 버튼 생성)
  
        range(범위 선택 form 생성)
  
        reset(초기화 버튼 생성)
  
        search(검색어 입력 form 생성)
  
        submit(제출 버튼 생성)
  
        tel(전화번호 입력 form 생성)
  
        text(텍스트 입력 form 생성)
  
        time(시간 선택 form 생성)
  
        url(url 입력 form 생성)
  
        week(주 선택 입력 form 생성)
  
        아래 코드로 모든 기능을 확인해 볼 수 있다.
  
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <h3>button</h3>
            <input type="button" value="Click me" onclick="alert('Hello world!')">
            <hr>
        
            <h3>checkbox</h3>
            <input type="checkbox" name="fruit1" value="apple" checked> 사과<br>
            <input type="checkbox" name="fruit2" value="grape"> 포도<br>
            <input type="checkbox" name="fruit3" value="peach"> 복숭아<br>
            <hr>
        
            <h3>color</h3>
            <input type="color" name="mycolor">
            <hr>
        
            <h3>date</h3>
            <input type="date" name="birthday">
            <hr>
        
            <h3>datetime</h3>
            <input type="datetime" name="birthdaytime">
            <hr>
        
            <h3>datetime-local</h3>
            <input type="datetime-local" name="birthdaytime">
            <hr>
        
            <h3>email</h3>
            <input type="email" name="useremail">
            <hr>
        
            <h3>file</h3>
            <input type="file" name="myfile">
            <hr>
        
            <h3>hidden</h3>
            <input type="hidden" name="country" value="Norway">
            hidden filed는 사용자에 표시되지 않는다.
            <hr>
        
            <h3>image</h3>
            <input type="image" src="img/img_submit.gif" alt="Submit" width="48" height="48">
            <hr>
        
            <h3>month</h3>
            <input type="month" name="birthdaymonth">
            <hr>
        
            <h3>number</h3>
            <input type="number" name="quantity" min="2" max="10" step="2" value="2">
            <hr>
        
            <h3>password</h3>
            <input type="password" name="pwd">
            <hr>
        
            <h3>radio</h3>
            <input type="radio" name="gender" value="male" checked> 남자<br>
            <input type="radio" name="gender" value="female"> 여자<br>
            <hr>
        
            <h3>range</h3>
            <input type="range" name="points" min="0" max="10" step="1" value="5">
            <hr>
        
            <h3>reset</h3>
            <input type="reset">
            <hr>
        
            <h3>search</h3>
            <input type="search" name="googlesearch">
            <hr>
        
            <h3>submit</h3>
            <input type="submit" value="Submit">
            <hr>
        
            <h3>tel</h3>
            <input type="tel" name="mytel">
            <hr>
        
            <h3>text</h3>
            <input type="text" name="myname">
            <hr>
        
            <h3>time</h3>
            <input type="time" name="mytime">
            <hr>
        
            <h3>url</h3>
            <input type="url" name="myurl">
            <hr>
        
            <h3>week</h3>
            <input type="week" name="week_year">
          </body>
        </html>
        ```
  
      - 서버에 전송되는 데이터는 name 어트리뷰트를 키로, value 어트리뷰트를 값으로 하여 key=value의 형태로 전송된다.
  
    - ###### < select > 태그
  
      - select form을 생성한다. 복수개의 리스트에서 복수개의 아이템을 선택할 때 사용한다.
      - 함께 사용할 수 있는 태그는 < option >(선택지 생성), < optgroup >(선택지를 그룹화한다.)
  
    - ###### < textarea > 태그
  
      - 여러 줄의 글자를 입력받을 때 사용되는 입력공간이다.
  
    - ###### < button > 태그
  
      - 버튼을 생성한다. < input type="button" >과 유사하지만 input 태그는 빈 태그인 반면 button 태그는 그렇지 않다.
  
        ```html
        <button type="button" onclick="alert('Hello World!')">Click Me!</button>
        <input type="button" value="Click Me!" onclick="alert('Hello world!')">
        ```
  
    - ###### < fieldset >/< legend > 태그
  
      - fieldset 태그는 관련된 입력 양식들을 그룹화할 때 사용한다. 
      - legend 태그는 fieldset 태그 내에서 사용되야하며 그룹화된 fieldset의 제목을 정의한다.
      
    - ###### 공간 분할 태그
  
      - < div >, < span >, < table > 등이 있다. 그러나 의미론적으로 어떠한 의미도 가지고 있지 않기 때문에 아래의 HTML5에서 새롭게 추가된 시맨틱 태그를 사용한다.(단, IE에서 작동하지 않음)
  
        - | tag     | Desription                       |
          | ------- | -------------------------------- |
          | header  | 헤더                             |
          | nav     | 내비게이션                       |
          | aside   | 사이드에 위치하는 공간           |
          | section | 본문의 여러 내용을 포함하는 공간 |
          | article | 본문의 주내용이 들어가는 공간    |
          | footer  | 푸터                             |
  
        
  
        ![HTML5 semantic elements](https://poiemaweb.com/img/building-structure.png)
  
  - ##### 시맨틱 태그
  
    - header : 헤더를 의미한다.(HTML5에서 추가)
    - nav : 내비게이션을 의미한다.(HTML5에서 추가)
    - aside : 사이드에 위치하는 공간을 의미한다.(HTML5에서 추가)
    - section : 본문의 여러 내용(article)을 포함하는 공간을 의미한다.(HTML5에서 추가)
    - article : 본문의 주내용이 들어가는 공간을 의미한다.(HTML5에서 추가)
    - footer : 푸터를 의미한다.(HTML5에서 추가)
  
- ### 용어 정리

  - **크롤링** : 검색엔진이 로봇이라는 프로그램을 이용해 매일 전세계의 웹사이트 정보를 수집하는 것. 검색엔진의 크롤러가 이를 수행한다.
  - **인덱싱** : 검색 키워드에 대응하는 인덱스(색인)을 만들어 두는 행위. 검색 로봇이 수집한 정보를 이용해 인덱스를 생성한다. 이 정보는 결국 웹사이트의 html 코드이다. 즉, 검색 엔진은 html 코드만으로 그 의미를 인지하여야 하는데 이때 **시맨틱 요소**를 해석하게 된다.
  - **시맨틱 요소** : 태그 이름만 보고도 그 용도를 짐작할 수 있는 태그를 칭함. 똑같이 생긴 요소더라도 브라우저는 그 태그에 따라 다르게 분석하기 때문에 이 시맨틱 요소는 브라우저와 사람 모두 그 의미를 전달할 수 있다.

# 각주

[^1]: 메타데이터 : 데이터에 대한 데이터. 어떤 목적을 가지고 만들어진 데이터라고도 정의한다. 도서관에서 서지기술용으로 만든 것이 그 대표적인 예이다.

