# 平坦坐标 $\implies$ 积分流形 $\implies$ 对合，且叶片粘成叶状结构
`imp.mf2-frobenius-integral` · 推出 · strong 边 · 根 `../`

`def.integral-manifold` 积分流形 + `def.lie-bracket` Lie 括号 + `def.manifold-chart` 图卡 → `thm.frobenius` Frobenius 定理

证 (2)$\implies$(3)、 (3)$\implies$(1)、 (2)$\implies$(4)。

**(2)$\implies$(3)。** 在平坦坐标里 $\mathcal{D}$ 由 $\partial_{1},\ldots,\partial_{k}$ 生成。取 $p = (0,\ldots,0)$，令

$$N := \{x^{k+1} = 0,\ \ldots,\ x^{n} = 0\}\cap U,$$

它是 $k$ 维嵌入子流形，且 $T_{q}N = \operatorname{span}\{\partial_{1},\ldots,\partial_{k}\} = \mathcal{D}_{q}$ 对 $q \in N$ 成立。包含映射 $i$ 是单浸入，$\mathrm{d}i(TN) = \mathcal{D}$ —— 故 $N$ 是过 $p$ 的积分流形。

> 续见 proofs/imp.mf2-frobenius-integral.2.md
