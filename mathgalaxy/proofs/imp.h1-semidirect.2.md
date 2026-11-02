# 交叉同态 + 半直积 $\implies$ 一维上同调分类分裂结构
`imp.h1-semidirect` · 推出 · strong 边 · 根 `../`

`thm.h1-crossed` 一维上同调与交叉同态 + `def.semidirect-product` 半直积 → `thm.h1-semidirect` 一维上同调与分裂扩张

反向：任何截面 $s^{\prime}$ 都满足 $s^{\prime}(g)s(g)^{-1} \in \ker\pi = i(A)$，故唯一地是 $i(d(g))$ 的形状，而上面的计算说明 $d \in Z^{1}$。

**② 共轭就是加上一个上边界。** 取 $a \in A$，把 $s_{d}$ 换成 $i(a)^{-1} s_{d}(g) i(a)$：

$$i(a)^{-1} i(d(g)) s(g) i(a) = i\bigl(-a + d(g)\bigr)\, i(g \cdot a)\, s(g) = i\bigl(d(g) + g\cdot a - a\bigr)\, s(g) = s_{d + \delta^{1}a}(g).$$

所以 $A$-共轭类恰是 $d$ 模 $B^{1}(G, A)$。

> 续见 proofs/imp.h1-semidirect.3.md
