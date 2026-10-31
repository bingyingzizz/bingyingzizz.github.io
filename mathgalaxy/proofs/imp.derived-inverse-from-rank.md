# 秩定理取 $r = n = m$ 就是逆映射定理
`imp.derived-inverse-from-rank` · 推出 · strong 边 · 根 `../`

`cor.rank-theorem` 常秩定理 → `thm.inverse-function` 逆映射定理

常秩定理：若 $f : U \to \mathbb{R}^{m}$ 的 Jacobi 矩阵秩在 $U$ 上恒为 $r$，则局部存在光滑坐标变换 $\varphi, \psi$ 使

$$\psi \circ f \circ \varphi^{-1}(x_{1}, \ldots, x_{n}) = (x_{1}, \ldots, x_{r}, 0, \ldots, 0).$$

**① 把「一点满秩」变成「邻域恒满秩」。** 逆映射定理只知道 $Df(a)$ 可逆。但 $x \mapsto \det Df(x)$ 连续且 $\det Df(a) \ne 0$，所以存在 $a$ 的邻域 $U' \subseteq U$ 使 $\det Df(x) \ne 0$ 对一切 $x \in U'$ 成立 —— 即 $\operatorname{rank} Df \equiv n$ 在 $U'$ 上。这里 $n = m$，故 $r = n = m$，常秩定理的前提成立。

> 续见 proofs/imp.derived-inverse-from-rank.2.md
