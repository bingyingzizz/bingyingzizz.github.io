# 米田引理给出万有元素的唯一同构
`def-link.univuniq-yoneda` · 推出 · strong 边 · 根 `../`

`lem.yoneda` 米田引理 → `prop.universal-unique-iso` 万有元素唯一到唯一同构

设 $(X,s)$、$(X^{\prime},s^{\prime})$ 都是 $F$ 的万有元素。万有性给唯一 $f:X\to X^{\prime}$ 使 $F(f)(s)=s^{\prime}$，以及 $g:X^{\prime}\to X$ 使 $F(g)(s^{\prime})=s$。于是 $F(gf)(s)=s$，而 $F(\operatorname{id}_{X})(s)=s$，由「满足 $F(h)(s)=s$ 的 $h$ 唯一」得 $gf=\operatorname{id}_{X}$；对称地 $fg=\operatorname{id}_{X^{\prime}}$。唯一性这一步是 `lem.yoneda`：$\operatorname{Nat}(h_{X},F)\cong F(X)$ 是双射，故至多一个。∎

> 唯一性由米田引理给出。
