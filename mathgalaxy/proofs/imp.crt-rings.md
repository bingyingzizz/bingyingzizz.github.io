# imp.crt-rings
`imp.crt-rings` · 推出 · strong 边 · 根 `../`

`def.comaximal` 互素理想 + `thm.first-iso` 第一同构定理（Noether） + `def.quotient-ring` 商环 + `def.ideal` 理想 → `thm.crt-rings` 中国剩余定理（环论形式）

**构造**：由互素写 $1 = u + v$（$u \in I$、$v \in J$），令 $e := u$（于是 $e \in I$、$e \equiv 1 \pmod J$）。则



$$e \equiv 0 \pmod I, \qquad e \equiv 1 \pmod J, \qquad e^{2} \equiv e \pmod{I \cap J} .$$



（$e$ 不是幂等元本身：$e(1-e)=uv\in IJ\subseteq I\cap J$，只在模 $I\cap J$ 的意义下幂等；又 $1-e=v$。）于是对任意右端 $(x, y)$，元素 $a = x(1-e) + y e = xv + yu$ 满足 $a \equiv x \pmod I$、$a \equiv y \pmod J$ —— 存在性。唯一性：两解之差被 $I$ 与 $J$ 同时整除，故落在 $I \cap J$。



**同构**：由第一同构定理（`thm.first-iso`），核是 $I \cap J$、商掉即得；满射由上面的构造给出。

> 用互素写 $1=u+v$ 造幂等、给出存在唯一性与第一同构定理。
