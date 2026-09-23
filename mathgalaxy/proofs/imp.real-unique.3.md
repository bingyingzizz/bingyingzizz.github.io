# $\mathbb{Q}$ 稠密 $\implies$ 完备有序域与 $\mathbb{R}$ 同构
`imp.real-unique` · 推出 · strong 边 · 根 `../`

`lem.archimedean` 阿基米德性质 + `def.real` 实数系 ℝ → `thm.real-unique` 完备有序域的唯一性

**满射**：给定 $y' \in K'$，令 $x := \sup\{q \in \mathbb{Q} : q' < y'\}$（同样由阿基米德性与完备性存在）。任取有理数 $p < x < r$，则 $p' \le y' \le r'$；由 $\mathbb{Q}$ 稠密取 $p \nearrow x$、$r \searrow x$ 代入，得 $f(x) = y'$。

**③ 唯一性。** 设 $g : K \to K'$ 也是这样的同构。由 ① 的「没有选择余地」，$g$ 与 $f$ 在 $\mathbb{Q}$ 上一致。任取 $x \in K$，由 $\mathbb{Q}$ 在 $K$ 中**稠密**，$x = \sup\{ q \in \mathbb{Q} : q < x \}$；又 $g$ 保序且把上确界送到上确界（保序双射 + 稠密性），故

$$g(x) = g\big(\sup\{q : q < x\}\big) = \sup\{g(q) : q < x\} = \sup\{q' : q < x\} = f(x)$$

所以 $f = g$：**同构存在且唯一**。$\blacksquare$

> 续见 proofs/imp.real-unique.4.md
