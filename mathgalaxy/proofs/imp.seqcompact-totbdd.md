# 列紧 $\implies$ 全有界
`imp.seqcompact-totbdd` · 推出 · strong 边 · 根 `../`

`def.sequentially-compact` 列紧 → `def.totally-bounded` 全有界

证明逆否：若 $X$ 不全有界，则存在一个没有收敛子列的序列。

**① 不全有界给了我们一个「一致」的正数。** $X$ 不全有界，意思是存在某个 $\varepsilon _{0} > 0$，使 $X$ **不能**被有限个半径 $\varepsilon _{0}$ 的球盖住。

**② 递归地挑点。** 取 $x_{1} \in X$ 任意。已取好 $x_{1}$ …$x_{n}$ 后，有限个球 $B(x_{1}, \varepsilon _{0})$ …$B(x_{n}, \varepsilon _{0})$ 盖不住 $X$，所以可再取

$$x_{n+1} \in X \setminus \bigcup_{i=1}^{n} B(x_i, \varepsilon_0)$$

于是任何两个不同的项都满足 $m \ne n \implies d(x_m, x_n) \ge \varepsilon_0$

**③ 它没有收敛子列。** 任何子列中任意两项距离都 $\ge \varepsilon _{0}$，所以它不是 Cauchy 列；而度量空间里收敛必 Cauchy，故它不收敛。

> 续见 proofs/imp.seqcompact-totbdd.2.md
