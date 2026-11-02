# 有界 $\iff$ 连续（线性）
`imp.fa-lincont-bounded` · 推出 · strong 边 · 根 `../`

`def.bounded-operator` 有界线性算子 → `thm.linear-continuous-bounded` 连续 ⟺ 有界

有界 $\implies$ Lipschitz：$\|u(x) - u(y)\| \le C\|x - y\|$。
在 $0$ 连续 $\implies$ 有界：反证。若不存在 $C$，则对每个 $n$ 有 $x_n \ne 0$ 使 $\|u(x_n)\| > n\|x_n\|$；令 $y_n = x_n/(n\|x_n\|)$，则 $\|y_n\| = 1/n \to 0$ 而 $\|u(y_n)\| > 1$，与 $u$ 在 $0$ 连续矛盾。
一点连续 $\implies$ 在 $0$ 连续：$x \to 0$ 时 $x + x_0 \to x_0$，故 $u(x) = u(x + x_0) - u(x_0) \to 0$。$\blacksquare$

> 「一点连续 $implies$ 处处连续」只因为线性（平移是连续双射）。
