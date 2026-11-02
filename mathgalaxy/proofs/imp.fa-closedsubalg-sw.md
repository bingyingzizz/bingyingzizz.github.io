# 闭子代数是格 $\implies$ Stone–Weierstrass
`imp.fa-closedsubalg-sw` · 推出 · strong 边 · 根 `../`

`lem.closed-subalgebra-lattice` 闭子代数是格 + `def.subalgebra-separating` 子代数与分离点 → `thm.stone-weierstrass` Stone–Weierstrass 定理

记 $\bar A$ 为 $A$ 在 $C(K,\mathbb{R})$ 中的闭包：仍含单位、分离点，且由引理是**格**。
**两点插值**：$x \ne y$、$\alpha, \beta \in \mathbb{R}$。取 $g \in A$，$g(x) \ne g(y)$；解 $a + b\,g(x) = \alpha$、$a + b\,g(y) = \beta$（行列式 $g(x)-g(y) \ne 0$），得 $f = a\cdot 1 + b g \in A$ 在两点取指定值。
**上下夹**：固定 $f \in C(K)$、$\varepsilon > 0$。对每个 $x$ 用插值取 $h_x \in \bar A$ 在 $x$ 附近 $> f - \varepsilon$；紧性取有限覆盖并用 $\max$ 得 $h > f - \varepsilon$；再对有限多个点用 $\min$ 压到 $h < f + \varepsilon$。故 $\|f - h\| < 2\varepsilon$。$\blacksquare$

> ⚠️ 讲义里这一段用了两次有限子覆盖（$U^c_{x,y}$ 与 $V_x^\varepsilon$），这里按同样逻辑压缩成「先压上、再压下」。
