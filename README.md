# K-Pop Demon Hunters — Unofficial Fan Site (재구축본)

imweb에서 만드셨던 사이트를 지금까지 올려주신 모든 자료(홈, About the Movie 6개 서브,
Fan Creations 11개, Community, [KOREA] 5개)를 반영해 GitHub Pages용 정적 사이트로
재구성한 최종본입니다. 폴더를 늘리지 않고 파일 6개로 통합했습니다.

## 폴더 구조
```
index.html            홈 — 히어로, About The Movie 요약, Making Of, Seoul Trip Hunters, Honmoon Status, News
about.html             About the Movie 서브탭 6개 (OST / Characters / Movie Props / Korean References / Movie Locations / Collaboration)
fan-creations.html     Fan Creations 서브탭 6개 (Fan Videos / Fan Covers[지역 6탭] / Fan Reactions / Fan Shorts / Fan Goods / Fan Art)
kpop-bands.html        자료 미확보 — "준비 중" 안내 페이지
community.html         Board — 실제 게시글 18건 그대로 반영
korea.html             KOREA 서브탭 6개 (Language / Mythology / Traditional Music / Music / Culture / Korean Folk Tales)
css/style.css          공용 스타일 (검정 배경 + 탠 컬러 메인내비 + 초록 포인트 — 원본 캡처 그대로)
js/main.js             탭 전환, 지역 서브탭, 캐러셀, 스크롤탑 동작
images/                실제 이미지를 넣을 폴더 (현재 비어있음)
```

## 미리보기
`index.html`을 더블클릭하면 브라우저에서 바로 열립니다. 인터넷 연결이 있으면 구글
폰트(Bebas Neue, Noto Sans KR)도 정상적으로 뜹니다.

## 일부러 비워둔 것 (저작권 때문)
넷플릭스 공식 스틸컷, 캐릭터 이미지, 브랜드 협업 사진, 뮤직비디오, 가사, 원본
트레일러·굿즈 사진 등은 점선 박스(placeholder)로 남겨뒀습니다. 실제 이미지 파일을
`images/` 폴더에 넣고, 각 페이지의 `<div class="ph">...</div>`를
`<img src="images/파일명.jpg" alt="...">`로 바꾸면 됩니다. 유튜브 영상은 imweb
관리자 화면에서 임베드 코드(`<iframe>...`)를 복사해 그대로 붙여 넣으세요.

Honmoon Status 위젯은 honmoon.world의 외부 임베드로 보입니다 — 원본 imweb
관리자 화면에서 iframe 코드를 확인해 `.honmoon-widget.ph` 자리에 넣어주세요.

## 자료가 아직 없는 부분
- **K-POP Bands** — 참고 자료를 받지 못해 "준비 중" 페이지로만 만들어뒀습니다.
- **KOREA → Music (현대 K-Music)** — Traditional Music(Gugak)과 별도 탭인데
  자료가 없어 탭만 만들고 내용은 비워뒀습니다.
- **Fan Creations → Fan Art** — 원본에 26개 게시물이 있었는데, 실제 제목/작성자
  목록까지는 세부 확보가 안 돼 있어 예시 4개만 넣었습니다. 실제 목록으로 교체해 주세요.

## GitHub Pages 배포 방법
1. GitHub에서 새 저장소를 만듭니다 (예: `kpopdemonhunters-fansite`).
2. 이 폴더 전체를 저장소에 업로드합니다 (드래그&드롭 또는 git push).
3. 저장소 **Settings → Pages** → Source를 `Deploy from a branch`, Branch를
   `main` / `/(root)`로 설정 후 저장합니다.
4. 1~2분 후 `https://사용자명.github.io/저장소명/` 주소로 사이트가 뜹니다.

## 커스텀 도메인 연결 (카페24 → kpopdemonhuntersnetflix.com)

현재 저장소: `nexcoreglobal/kpopdemonhuntersnetflix`
(`https://nexcoreglobal.github.io/kpopdemonhuntersnetflix`)

이 폴더에 이미 `CNAME` 파일(`kpopdemonhuntersnetflix.com`)을 넣어뒀습니다.
파일을 그대로 두고 저장소에 함께 커밋/업로드하면 됩니다.

1. **GitHub 저장소 → Settings → Pages → Custom domain**에
   `kpopdemonhuntersnetflix.com` 입력 후 Save.
   (이미 CNAME 파일이 있어서 자동으로 채워질 수도 있습니다.)
2. **카페24 → 나의서비스 관리 → 도메인관리 → DNS 관리**로 이동.
3. **CNAME 레코드** 추가 — 호스트명 `www`, 값 `nexcoreglobal.github.io`
4. **A 레코드** 추가 — 호스트명 `@`, 값 `185.199.108.153`
   (카페24는 같은 호스트명에 A레코드 1개만 허용 — 1개만 넣어도 정상 작동합니다.)
5. 최대 24시간 DNS 전파 대기 후, GitHub Pages 설정 화면에서
   **Enforce HTTPS** 체크박스 활성화.
6. 브라우저에서 `https://kpopdemonhuntersnetflix.com` 접속 확인.
   `www.kpopdemonhuntersnetflix.com`으로 접속해도 자동으로
   `kpopdemonhuntersnetflix.com`으로 리디렉션됩니다 (GitHub Pages 기본 동작).
