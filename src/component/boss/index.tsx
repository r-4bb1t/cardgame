import { useEffect, useState } from "react";
import * as S from "./styles";

interface BossProps {
  heart: number;
  attacked: boolean;
}

export default function Boss({ heart, attacked }: BossProps) {
  return (
    <S.BossContainer>
      <S.Boss>
        <img src="/assets/Boss.png" />
        <S.Heart percent={(heart / 10) * 100}></S.Heart>
      </S.Boss>
      {attacked && (
        <S.AttackEffect>
          <img src="/assets/player_attackeffect.gif" />
        </S.AttackEffect>
      )}
    </S.BossContainer>
  );
}
