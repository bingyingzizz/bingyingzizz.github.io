# 连续函数空间的范数　`prop.continuous-functions-normed`　·　说明
根 `../`

**证明。**
**1.** $\sup$ 有限：连续函数在紧空间上有界（$f(S)$ 紧，而范数球的半径有限）✓；三条半范数公理由 $M$ 的半范数逐点验证、再取上确界 ✓；$\|f\| = 0 \implies f = 0$ 当且仅当 $M$ 是 Hausdorff 的（即范数而非半范数）✓。
**完备性**：设 $(f_{j})$ 是 $\|\cdot\|$ 下的 Cauchy 列，则每个 $x$ 处 $(f_{j}(x))$ 是 Cauchy 列，由 $M$ 完备有极限 $f(x)$ ✓；Cauchy 列是**一致**Cauchy 的（$\|f_{j}-f_{k}\| < \varepsilon$ 对每个 $x$ 成立），故 $f_{j} \to f$ **一致**，一致极限保持连续性 ✓，于是 $M$ 完备时 $C(S,M)$ 完备 ✓。
**2.** 给 $f \in C(S, M)$ 与 $\varepsilon > 0$。开覆盖
$$S = \bigcup_{m \in M} f^{-1}\bigl(B(m, \varepsilon/2)\bigr)$$
由 $S$ 是 Stone 空间，它有**有限的、两两不交的闭开加细** $S = \bigsqcup_{r} S_{r}$（Stone 空间上任何开覆盖都有这样的加细）✓。在每个 $S_{r}$ 上任取 $m_{r}$ 使 $S_{r} \subseteq f^{-1}(B(m_{r},\varepsilon/2))$ ✓，令 $g := m_{r}$ 在 $S_{r}$ 上。则 $g$ **局部

> 续见 notes/prop.continuous-functions-normed.2.md
