# 平坦坐标 $\implies$ 积分流形 $\implies$ 对合，且叶片粘成叶状结构
`imp.mf2-frobenius-integral` · 推出 · strong 边 · 根 `../`

`def.integral-manifold` 积分流形 + `def.lie-bracket` Lie 括号 + `def.manifold-chart` 图卡 → `thm.frobenius` Frobenius 定理

**(3)$\implies$(1)。** 设 $X, Y \in \Gamma(\mathcal{D}|_{U})$，$q \in U$ 落在积分流形 $i : N \to M$ 里。因 $\mathrm{d}i : TN \to \mathcal{D}$ 是逐纤维同构，$X, Y$ 在 $i^{-1}(U)$ 上分别是 $\mathrm{d}i(X_{N})$、$\mathrm{d}i(Y_{N})$ 的形式（$X_{N}, Y_{N}$ 是 $N$ 上的向量场）。在卡里逐项验算即得括号的自然性

$$\mathrm{d}i\bigl([X_{N},Y_{N}]_{p}\bigr) = \bigl[\mathrm{d}i(X_{N}),\ \mathrm{d}i(Y_{N})\bigr]_{i(p)} = [X,Y]_{i(p)},$$

故 $[X,Y]$ 落在 $\mathrm{d}i(TN) = \mathcal{D}$ 里 —— 对合成立。

> 续见 proofs/imp.mf2-frobenius-integral.3.md
