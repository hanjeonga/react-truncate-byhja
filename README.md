# 📦 Text 컴포넌트

React 환경에서 텍스트 스타일링 및 글자/줄 수 제한을 적용할 수 있는 컴포넌트입니다.

- 글자 수 제한 (`viewLength`)
- 줄 수 제한 (`viewLine`)
- 글자 수 + 줄 수 동시 제한 가능
- 말줄임표(`truncateText`) 커스텀 가능
- 띄어쓰기/줄바꿈 포함 여부 설정 (`countSpaces`)
- 폰트 크기, 두께, 색상 커스터마이징

---

## 🚀 설치

```bash
npm install react-truncate-byhja
yarn add react-truncate-byhja
```

---

## ⚙️ Props

| Prop           | Type                                        | Default              | 설명                                     |
| -------------- | ------------------------------------------- | -------------------- | ---------------------------------------- |
| `children`     | `string`                                    | "기본 텍스트입니다." | 렌더링할 텍스트 내용                     |
| `viewLength`   | `number`                                    | -                    | 글자 수 제한 (초과 시 잘림)              |
| `viewLine`     | `number`                                    | -                    | 최대 줄 수                               |
| `width`        | `number \| string`                          | -                    | `viewLine` 사용 시 필수                  |
| `truncateText` | `string`                                    | "…"                  | 글자/줄 수 제한 시 붙일 문자열           |
| `countSpaces`  | `boolean`                                   | `true`               | `false`일 경우 띄어쓰기, 줄바꿈, 탭 제외 |
| `size`         | `number \| string`                          | `16px`               | 폰트 크기(px 또는 rem 등)                |
| `weight`       | `number \| "normal" \| "bold" \| "lighter"` | "normal"             | 폰트 두께                                |
| `color`        | `string`                                    | "#000"               | 텍스트 색상                              |
| `style`        | `React.CSSProperties`                       | -                    | 추가 인라인 스타일                       |

---

## 📝 사용 예제

### 기본 텍스트

```javascript
<Typography>안녕하세요! 기본 텍스트입니다.</Typography>
```

### 글자 수 제한 (viewLength)

```javascript
<Typography viewLength={8}>
  이 텍스트는 글자수 제한이 걸려서 잘립니다.
</Typography>

<Typography viewLength={12} truncateText="~~~">
  긴 글자수 제한 테스트입니다.
</Typography>
```

### 글자 수 제한 + 띄어쓰기/줄바꿈 제외 (countSpaces=false)

```javascript
<TextTypography viewLength={5} countSpaces={false}>
  안녕 하 세 요
</Typography>
```

### 줄 수 제한 (viewLine + width 필수)

```javascript
<Typography viewLine={2} width={200}>
  두 줄 이상 넘어가면 줄수 제한 기반 말줄임이 적용됩니다. 여러 줄 테스트 여러 줄
  테스트 여러 줄 테스트
</Typography>
```

### 글자 수 + 줄 수 동시 제한

```javascript
<Typography viewLength={15} viewLine={2} width={200}>
  글자 수와 줄 수 제한을 동시에 적용한 텍스트 예제입니다. 줄 수와 글자 수를 모두
  고려하여 말줄임 표시됩니다.
</Typography>
```

### 스타일 변경

```javascript
<Typography size={20} weight="bold" color="red">
  빨간색 볼드 텍스트
</Typography>

<Typography size="1.2rem" weight={300} color="#555" style={{ fontStyle: "italic" }}>
  이탤릭 얇은 텍스트
</Typography>
```

---

## 💡 App.tsx 예제

```javascript
import React from "react";
import { Typography } from "./Typography";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Typography 컴포넌트 사용 예제</h2>

      <Typography>안녕하세요! 기본 텍스트입니다.</Typography>

      <Typography viewLength={8}>
        이 텍스트는 글자수 제한이 걸려서 잘립니다.
      </Typography>

      <Typography viewLength={12} truncateText="~~~">
        긴 글자수 제한 테스트입니다.
      </Typography>

      <Typography viewLine={2} width={200}>
        두 줄 이상 넘어가면 줄수 제한 기반 말줄임이 적용됩니다. 여러 줄 테스트
        여러 줄 테스트 여러 줄 테스트
      </Typography>

      <Typography viewLength={15} viewLine={2} width={200}>
        글자 수와 줄 수 제한을 동시에 적용한 텍스트 예제입니다. 줄 수와 글자
        수를 모두 고려하여 말줄임 표시됩니다.
      </Typography>

      <Typography viewLength={5} countSpaces={false}>
        안녕 하 세 요
      </Typography>

      <Typography size={20} weight="bold" color="red">
        빨간색 볼드 텍스트
      </Typography>

      <Typography
        size="1.2rem"
        weight={300}
        color="#555"
        style={{ fontStyle: "italic" }}
      >
        이탤릭 얇은 텍스트
      </Typography>
    </div>
  );
}

export default App;
```

---

## 📌 주의사항

- viewLength와 viewLine은 동시에 적용 가능합니다.

- viewLine 사용 시 width를 반드시 설정해야 정상적으로 말줄임이 적용됩니다.

- countSpaces={false}로 설정하면 띄어쓰기, 줄바꿈, 탭은 글자 수에서 제외됩니다.
