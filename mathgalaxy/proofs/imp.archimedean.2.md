# 完备性 $\implies$ 阿基米德性质 + $\mathbb{Q}$ 稠密
`imp.archimedean` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 → `lem.archimedean` 阿基米德性质

$$m \le nx < m + 1$$

（「整数版本」：先用 (i) 取 $k > nx$，再从 $\{0, 1, \ldots, k\}$ 中取最小的使 $\ge nx$ 的那个。）令 $q := (m+1)/n \in \mathbb{Q}$。则

- $q > x$：由 $nx < m + 1$ 两边除以 $n > 0$；
- $q < y$：由 $q = \frac{m+1}{n} \le \frac{nx + 1}{n} = x + \frac{1}{n} < x + (y - x) = y$。

故 $x < q < y$，$\mathbb{Q}$ 在 $K$ 中稠密。$\blacksquare$

> ⭐ 注意 (i) 的证明只用了「$\mathbb{N}$ 的每个元都有后继」与「上确界存在」这两件事 —— 这就是为什么**完备性蕴含阿基米德性**。
