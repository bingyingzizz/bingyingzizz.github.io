# 鼓包函数 $+$ 局部有限加细 $\implies$ 光滑单位分解
`imp.mf-smooth-partition-unity` · 推出 · strong 边 · 根 `../`

`prop.paracompact-partition-unity` 仿紧性与单位分解 + `def.partition-of-unity` 单位分解 → `thm.smooth-partition-unity` 光滑单位分解

**第一步：造鼓包函数。** 令

$$b(t) := \begin{cases} e^{-1/t}, & t > 0,\\ 0, & t \le 0,\end{cases}\qquad \beta(x) := \frac{b(1 - \lVert x\rVert^{2})}{b(1 - \lVert x\rVert^{2}) + b(\lVert x\rVert^{2} - \tfrac{1}{4})}.$$

$b$ 在 $t = 0$ 处各阶导数都是 $0$（$e^{-1/t}$ 比任何多项式趋零还快），故 $b$ 光滑；分母恒正，故 $\beta$ 光滑，且 $\beta \equiv 1$ 在 $\lVert x\rVert \le \tfrac{1}{2}$ 上、$\beta \equiv 0$ 在 $\lVert x\rVert \ge 1$ 外。

> 续见 proofs/imp.mf-smooth-partition-unity.2.md
