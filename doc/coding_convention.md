# 코오-딩 컨벤션

본 프로젝트에서만 특이하게 사용되는 코딩 컨벤션을 메모하였습니다.

아래 항목에 기재되지 않은 내용은 [airbnb javascript style guide](https://github.com/airbnb/javascript) 를 참고해주세요.



## 파일

### 파일 이름은 export 되는 변수명과 동일하여야 합니다.
### 파일 1개당 1개의 함수만 가져야 합니다.
### static 파일의 경우, 소문자 camelCase를 사용하여야 합니다.




## 폴더

### 폴더에는 최소 2개의 파일이 들어있어야 합니다.
### 폴더명은 소문자를 사용하여야 합니다.
### 폴더는 `/src`를 제외하고 3-depth 미만으로 설계되어야 합니다.




## 변수 / 함수 명

### 변수명과 함수명은 모두 카멜 케이스(CamelCase)를 사용합니다.
* React Component의 경우, 앞 글자가 대문자여야 합니다.
### 모든 함수명은 직관적이여야 합니다.
### 함수명의 규칙은 반드시 아래와 같아야 합니다.
* 자신의 상위 폴더 목록 (`index/main` => `indexMain`)
* export 되는 함수명
* 파일이 위치한 최 상위 폴더 (`component` / `module` / `container`)

예시 : `module/home/history` 폴더에 위치한 `Item` 컴포넌트의 경우 => `HomeHistoryItemModule`
### 컴포넌트 import의 경우 상위 폴더 목록과 상위 폴더를 제외하여야 합니다.
예시 : `HomeHistoryItemModule`의 경우, `<Item />`

### prop의 이름은 직관적이여야 합니다.


## 기타