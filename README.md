# 일인전승 신비문파의 머슴(?)제자 — 웹사이트 파운데이션

별도 빌드 도구나 프레임워크 없이 HTML, CSS, JavaScript만 사용하는 정적 사이트입니다. GitHub Pages에 바로 올릴 수 있습니다.

## 파일 구조

```text
index.html
style.css
characters.js
script.js
assets/
  title.webp                       # 타이틀 이미지
  background.webp                  # 세로형 배경 이미지
  characters/
    character-01.webp              # 묵화란 카드
    character-02.webp              # 백리향 카드
    character-03.webp              # 성유운 카드
    character-04.webp              # 청선아 카드
    character-05.webp              # 남궁양 카드
```

## 이미지와 소개문 교체

1. 타이틀 이미지를 `assets/title.webp`로 넣습니다.
2. 세로형 배경 이미지를 `assets/background.webp`로 넣습니다.
3. 이름표가 이미지 자체에 포함된 정사각형 인물 카드를 `assets/characters/`에 위 파일명으로 넣습니다.
4. `characters.js`에서 각 인물의 `description`에 상세 소개문을 입력합니다. 이미지 경로를 바꾸고 싶다면 같은 파일의 `image` 값도 바꾸면 됩니다.

코드에는 이미지와 설명문을 입력할 위치를 한국어 주석으로 표시해 두었습니다. 이미지 파일을 아직 넣지 않아도 깨진 이미지 아이콘 대신 안내용 자리표시자가 표시됩니다.

## 배치와 동작

- PC: 첫째 줄 묵화란·백리향, 둘째 줄 성유운·청선아·남궁양.
- 모바일: 작은 화면에서 카드를 읽기 편하도록 2열로 재배치합니다.
- 카드 클릭: 하단 상세 소개 영역에 해당 인물의 이름과 설명문이 표시됩니다.
- 카드 이미지에 이름표가 이미 들어 있으므로 카드 아래에 이름 텍스트를 중복 표시하지 않습니다.

## GitHub Pages 배포

레퍼지토리의 최상위 폴더에 이 파일들을 올린 뒤, GitHub 레퍼지토리의 **Settings → Pages**에서 배포 소스를 설정하면 됩니다. 모든 경로는 상대경로로 작성되어 있어 레퍼지토리 이름이 URL에 포함되는 GitHub Pages 환경에서도 동작하도록 구성했습니다.
