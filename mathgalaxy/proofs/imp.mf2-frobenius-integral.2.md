# 平坦坐标 $\implies$ 积分流形 $\implies$ 对合，且叶片粘成叶状结构
`imp.mf2-frobenius-integral` · 推出 · strong 边 · 根 `../`

`def.integral-manifold` 积分流形 + `def.lie-bracket` Lie 括号 + `def.manifold-chart` 图卡 → `thm.frobenius` Frobenius 定理

因 $\mathrm{d}i : TN \to \mathcal{D}$ 是逐纤维同构，$X, Y$ 在 $i^{-1}(U)$ 上分别是 $\mathrm{d}i(X_{N})$、$\mathrm{d}i(Y_{N})$ 的形式（$X_{N}, Y_{N}$ 是 $N$ 上的向量场）。

在卡里逐项验算即得括号的自然性

$$\mathrm{d}i\bigl([X_{N},Y_{N}]_{p}\bigr) = \bigl[\mathrm{d}i(X_{N}),\ \mathrm{d}i(Y_{N})\bigr]_{i(p)} = [X,Y]_{i(p)},$$

故 $[X,Y]$ 落在 $\mathrm{d}i(TN) = \mathcal{D}$ 里 —— 对合成立。

**(2)$\implies$(4)。** 把平坦坐标里所有形如 $\{x^{k+1} = c^{k+1},\ldots,x^{n} = c^{n}\}$ 的切片按「过同一点则重合」粘起来：由 `def.integral-manifold` 的 notes 里的局部唯一性，粘出来的是一族互不相交的极大连通积分流形，覆盖 $M$（每点在自己的卡里落在一片切片上）。

> 续见 proofs/imp.mf2-frobenius-integral.3.md
