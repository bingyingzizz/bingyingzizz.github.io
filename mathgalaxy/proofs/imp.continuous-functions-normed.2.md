# imp.continuous-functions-normed
`imp.continuous-functions-normed` · 推出 · strong 边 · 根 `../`

`def.banach-ab-group` Banach 阿贝尔群 + `def.semi-normed-ab-group` 半范数阿贝尔群 → `prop.continuous-functions-normed` 连续函数空间的范数

Cauchy 列是**一致**Cauchy 的（$\|f_{j}-f_{k}\| < \varepsilon$ 对每个 $x$ 成立），故 $f_{j} \to f$ **一致**，一致极限保持连续性 ✓，于是 $M$ 完备时 $C(S,M)$ 完备 ✓。
**2.** 给 $f \in C(S, M)$ 与 $\varepsilon > 0$。开覆盖
$$S = \bigcup_{m \in M} f^{-1}\bigl(B(m, \varepsilon/2)\bigr)$$
由 $S$ 是 Stone 空间，它有**有限的、两两不交的闭开加细** $S = \bigsqcup_{r} S_{r}$（Stone 空间上任何开覆盖都有这样的加细）✓。

在每个 $S_{r}$ 上任取 $m_{r}$ 使 $S_{r} \subseteq f^{-1}(B(m_{r},\varepsilon/2))$ ✓，令 $g := m_{r}$ 在 $S_{r}$ 上。

> 续见 proofs/imp.continuous-functions-normed.3.md
