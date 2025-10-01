import { useState } from "react";
import "./App.css";
import { Typography } from "./Typography";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Typography 컴포넌트 사용 예제</h2>

      {/* 1. 기본 텍스트 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>기본 텍스트</h3>
        <Typography>안녕하세요! 기본 텍스트입니다.</Typography>
      </div>

      {/* 2. 글자수 제한 (viewLength) */}
      <div style={{ marginBottom: "20px" }}>
        <h3>글자수 제한 (viewLength)</h3>
        <Typography viewLength={8}>
          이 텍스트는 글자수 제한이 걸려서 잘립니다.
        </Typography>
        <br />
        <Typography viewLength={12} truncateText="~~~">
          긴 글자수 제한 테스트입니다.
        </Typography>
      </div>

      {/* 3. 글자수 제한 + 띄어쓰기/줄바꿈 제외 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>글자수 제한 (countSpaces=false)</h3>
        <p>띄어쓰기/줄바꿈을 포함하지 않고 글자수만 세는 경우:</p>
        <Typography viewLength={5} countSpaces={false}>
          안녕 하 세 요
        </Typography>
        {/* 결과: "안녕 하 세…" (띄어쓰기/줄바꿈 제외, 실제 한글 5자만 카운트) */}
      </div>

      {/* 4. 줄 수 제한 (viewLine + width 필수) */}
      <div style={{ marginBottom: "20px" }}>
        <h3>줄 수 제한 (viewLine)</h3>
        <Typography viewLine={2} width={200}>
          두 줄 이상 넘어가면 줄수 제한 기반 말줄임이 적용됩니다. 여러 줄 테스트
          여러 줄 테스트 여러 줄 테스트 여러 줄 테스트
        </Typography>
      </div>

      {/* 5. 스타일 변경 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>스타일 변경</h3>
        <Typography size={20} weight="bold" color="red">
          빨간색 볼드 텍스트
        </Typography>
        <br />
        <Typography
          size="1.2rem"
          weight={300}
          color="#555"
          style={{ fontStyle: "italic" }}
        >
          이탤릭 얇은 텍스트
        </Typography>
      </div>
    </div>
  );
}

export default App;
