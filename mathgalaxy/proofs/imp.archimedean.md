# 完备性 $\implies$ 阿基米德性质 + $\mathbb{Q}$ 稠密
`imp.archimedean` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 → `lem.archimedean` 阿基米德性质

设 $K$ 是完备有序域（把 $\mathbb{N}$、$\mathbb{Z}$、$\mathbb{Q}$ 按 $1$ 生成的子域嵌进去看）。

**(i) 自然数无上界。** 反设 $\mathbb{N}$ 在 $K$ 中有上界。由**完备性**，$s := \sup \mathbb{N}$ 存在。$s - 1 < s$，故 $s - 1$ 不是上界，于是存在 $n \in \mathbb{N}$ 使 $n > s - 1$。但那样 $n + 1 > s$，而 $n + 1 \in \mathbb{N}$ —— 与 $s$ 是上界矛盾。故

$$\forall x \in K, \exists n \in \mathbb{N}: n > x$$

（顺带一句：若 $x > 0$，把 $n$ 换成 $n + 1$ 还能保证 $n \ge 1$、$1/n < x$。）

**(ii) $\mathbb{Q}$ 稠密。** 设 $x < y$，则 $y - x > 0$。由 (i)（取 $x$ 换成 $1/(y-x)$ 的用法）可取 $n \in \mathbb{N}$，$n \ge 1$，使

$$n (y - x) > 1, \qquad \text{即}\quad \frac{1}{n} < y - x$$

再对实数 $nx$ 用一次 (i) 的整数版本：存在 $m \in \mathbb{Z}$ 使

> 续见 proofs/imp.archimedean.2.md
