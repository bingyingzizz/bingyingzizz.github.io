# Hölder + 有界性 $\implies$ $g \in L^q$
`imp.bounded-gives-lq` · 推出 · strong 边 · 根 `../`

`thm.holder` Hölder 不等式 + `def.duality-map` 对偶配对 φ_g → `prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q

$$\|g\|_q \le \lim_n \|g_n\|_q = \lim_n \int f_n g_n \le \lim_n \int |f_n g| = \lim_n \int f_n g \le M_g(g)$$

（第一个不等号由 Fatou，第二个是 $f_n g_n = |g_n|^q$，中间那个等号用的仍是符号 $\operatorname{sgn}$ 的消失。）故 $\|g\|_q \le M_g(g) < \infty$，$g \in L^q$；反向不等式 $M_g(g) \le \|g\|_q$ 由 Hölder。

> 续见 proofs/imp.bounded-gives-lq.4.md
