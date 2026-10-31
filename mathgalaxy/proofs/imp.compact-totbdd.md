# 紧 $\implies$ 全有界
`imp.compact-totbdd` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 → `def.totally-bounded` 全有界

给定 $\varepsilon > 0$。考虑开球族

$$\mathcal{U} = \{ B(x, \varepsilon) : x \in X \}$$

它显然是 $X$ 的开覆盖（每个 $x$ 都被 $B(x, \varepsilon )$ 含住）。由 $X$ 紧，存在有限子覆盖：

$$X = B(x_1, \varepsilon) \cup \cdots \cup B(x_n, \varepsilon)$$

即 $\{x_{1}$ …$x_{n}\}$ 是一个有限的 $\varepsilon$网。由 $\varepsilon > 0$ 任意，$X$ 全有界。∎

$>$ 注意这条证明只用了「开球盖住自己」这一点 —— 它说明紧 $\implies$ 全有界几乎不需要任何技术。真正难的方向是下一条。
