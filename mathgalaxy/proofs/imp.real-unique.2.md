# $\mathbb{Q}$ 稠密 $\implies$ 完备有序域与 $\mathbb{R}$ 同构
`imp.real-unique` · 推出 · strong 边 · 根 `../`

`lem.archimedean` 阿基米德性质 + `def.real` 实数系 ℝ → `thm.real-unique` 完备有序域的唯一性

- $x \le y \implies f(x) \le f(y)$：$\{q : q<x\} \subseteq \{q : q<y\}$；
- $x < y \implies f(x) < f(y)$：由 $\mathbb{Q}$ 稠密取 $q, r$ 使 $x < q < r < y$，则 $f(x) \le q' < r' \le f(y)$。

**保运算**：以加法为例，若 $p < x$、$q < y$，则 $p + q < x + y$，故 $f(x) + f(y) \le f(x+y)$；反向用稠密性：任取 $s < x + y$，取有理数 $u < x$ 使 $s - u < y$，则 $s < u + (s - u) < x + y$ 且 $s' \le f(x) + f(y)$，对一切 $s < x+y$ 取上确界得 $f(x+y) \le f(x) + f(y)$。两边相等。乘法同理（先把正元夹在有理数之间，再用符号规则）。

> 续见 proofs/imp.real-unique.3.md
