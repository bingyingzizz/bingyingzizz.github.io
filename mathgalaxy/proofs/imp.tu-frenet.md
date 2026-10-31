# 单位正交 $\implies$ Frenet–Serret 公式
`imp.tu-frenet` · 推出 · strong 边 · 根 `../`

`def.frenet-frame` 曲率与挠率 + `def.arc-length` 弧长 → `thm.frenet-serret` Frenet–Serret 公式

全程弧长参数，$\langle T,T\rangle = \langle N,N\rangle = \langle B,B\rangle = 1$，两两正交。

**(1) $T' = \kappa N$。** 由 $\langle T,T\rangle = 1$ 得 $\langle T',T\rangle = 0$，即 $T'\perp T$；而 $N$ 的定义就是 $T'$ 的方向（$N := T'/\kappa$，$\kappa = \lVert T'\rVert$），故 $T' = \lVert T'\rVert N = \kappa N$。

**(2) $B' = -\tau N$。** $\langle B,B\rangle = 1$ 给 $B'\perp B$；又 $\langle B,T\rangle = 0$ 给

$$0 = \langle B',T\rangle+\langle B,T'\rangle = \langle B',T\rangle+\kappa\langle B,N\rangle = \langle B',T\rangle ,$$

故 $B'$ 与 $T$ 也正交。三维里同时垂直于 $T$ 与 $B$ 的方向只有 $\pm N$，于是 $B' = \langle B',N\rangle N = -\tau N$，最后一步是 $\tau$ 的定义。

> 续见 proofs/imp.tu-frenet.2.md
