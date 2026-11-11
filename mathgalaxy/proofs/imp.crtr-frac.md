# 第一同构定理给出中国剩余定理的环论形式
`imp.crtr-frac` · 推出 · strong 边 · 根 `../`

`thm.first-iso` 第一同构定理（Noether） → `thm.crt-rings` 中国剩余定理（环论形式）

考虑 $\varphi: A \to A/I \times A/J$，$a \mapsto (a \bmod I,\ a \bmod J)$，它是环同态。核 $\ker\varphi = I \cap J$。由第一同构定理，$A/(I \cap J) \cong \operatorname{im}\varphi$；再由互素 $I+J=A$ 写出 $1 = u+v$（$u\in I$、$v\in J$），对任意 $(x,y)$ 取 $a = xv + yu$ 即得 $a\equiv x \pmod I$、$a \equiv y \pmod J$，故 $\varphi$ 满射、$\operatorname{im}\varphi = A/I\times A/J$。合起来 $A/(I\cap J)\cong A/I\times A/J$；两两互素的情形对 $k$ 归纳。∎

> 第一同构定理提供「商掉核」这一步；满射性不用它，用互素给出的显式构造。
