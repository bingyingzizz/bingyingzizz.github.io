# 一维上同调与分裂扩张　`thm.h1-semidirect`　·　说明
根 `../`

**第 1 条为什么成立**：$s^{\prime}(g) s(g)^{-1} \in \ker\pi = i(A)$，所以它必然是 $i(d(g))$ 的形状。把 $s_{d}(g) = i(d(g)) s(g)$ 代进「$s_{d}$ 是同态」里：

$$i\bigl(d(g_{1}g_{2})\bigr) s(g_{1}g_{2}) = i\bigl(d(g_{1})\bigr) s(g_{1})\, i\bigl(d(g_{2})\bigr) s(g_{2}) = i\bigl(d(g_{1}) + g_{1} d(g_{2})\bigr) s(g_{1} g_{2}),$$

中间的等号用了 $s(g_{1})\, i(a)\, s(g_{1})^{-1} = i(g_{1} \cdot a)$ —— 这正是 $A$ 上 $G$-模结构的定义。两边一比就是交叉同态关系。∎

**第 2 条的「共轭」是什么**：$E$ 的内自同构 $\operatorname{Inn}(i(a))$ 保持 $i(A)$ 与 $\pi$，所以它把扩张送到一个**等价**的扩张。它作用在截面上是

$$s(g) \longmapsto i(a)^{-1} s(g) i(a) = i\bigl(g \cdot a - a\bigr)\, s(g),$$

也就是把 $d$ 换成 $d + (g \mapsto g \cdot a - a)$ —— 恰好加上一个**主**交叉同态。反过来任何保持 $i$ 与 $\pi$ 的扩张同构都能写成这样的共轭，于是 $A$-共轭类恰是 $H^{1}$ 的元素。∎

> 续见 notes/thm.h1-semidirect.2.md
