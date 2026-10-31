# 平坦坐标 $\implies$ 积分流形 $\implies$ 对合，且叶片粘成叶状结构
`imp.mf2-frobenius-integral` · 推出 · strong 边 · 根 `../`

`def.integral-manifold` 积分流形 + `def.lie-bracket` Lie 括号 + `def.manifold-chart` 图卡 → `thm.frobenius` Frobenius 定理

**(2)$\implies$(4)。** 把平坦坐标里所有形如 $\{x^{k+1} = c^{k+1},\ldots,x^{n} = c^{n}\}$ 的切片按「过同一点则重合」粘起来：由 `def.integral-manifold` 的 notes 里的局部唯一性，粘出来的是一族互不相交的极大连通积分流形，覆盖 $M$（每点在自己的卡里落在一片切片上）。（这一步的严格写法要对「所有的叶」用一个极大的不相交族取并，属于集合论层面的手续，本图只给口径。）

**为什么 (1) 是本定理的核心**：(2)、(3)、(4) 都是「存在某个几何对象」，而 (1) 只是「有限个括号的封闭性」。定理真正说的是：**一条纯代数的条件等价于一条纯几何的结论** —— 前者有限步可验，后者要解偏微分方程组。∎
