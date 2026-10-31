# 正则曲面 $\implies$ 存在光滑的活动标架
`imp.dg-frame-exists` · 推出 · strong 边 · 根 `../`

`def.regular-surface` 曲面与参数化 → `def.moving-frame` 活动标架

取 $r_{u}, r_{v}, n$。正则性 $r_{u}\times r_{v} \ne 0$ 保证三者在每点线性无关；Gram–Schmidt 给出正交基：

$$e_{1} := \frac{r_{u}}{\lVert r_{u}\rVert},\qquad e_{2} := \frac{r_{v}-\langle r_{v}, e_{1}\rangle e_{1}}{\lVert r_{v}-\langle r_{v}, e_{1}\rangle e_{1}\rVert},\qquad e_{3} := e_{1}\times e_{2},$$

再取符号使之等于 $n$（若 $e_{1}\times e_{2} = -n$，把 $e_{2}$ 换成 $-e_{2}$）。$r$ 是 $C^{2}$，故 $n$ 是 $C^{1}$，右端全是 $C^{1}$ 表达式，于是 $(e_{1}, e_{2}, e_{3})$ 是 $C^{1}$ 标架场；对偶余标架 $\omega^{i} = \langle \cdot, e_{i}\rangle$ 也随之 $C^{1}$。∎
