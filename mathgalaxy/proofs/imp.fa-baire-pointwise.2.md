# Baire $\implies$ 连续点集是稠密 $G_\delta$
`imp.fa-baire-pointwise` · 推出 · strong 边 · 根 `../`

`thm.baire` Baire 纲定理 + `lem.countable-closed-cover` 闭覆盖的内点 → `thm.pointwise-limit-continuity` 连续点集是稠密 G_δ

$$\|f(y) - f(x)\| \le \|f(y) - f_m(y)\| + \|f_m(y) - f_m(x)\| + \|f_m(x) - f(x)\| < \varepsilon . \blacksquare$$

> 三个 $\varepsilon/3$ 分别来自：$F_{n,k}$ 里的一致接近、$f_m$ 的连续、$f_m \to f$ 的逐点收敛。
