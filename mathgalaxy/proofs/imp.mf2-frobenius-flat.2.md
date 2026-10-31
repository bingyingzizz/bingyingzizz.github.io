# 对合 $\implies$ 平坦坐标（流盒拉直 $+$ 降秩归纳）
`imp.mf2-frobenius-flat` · 推出 · strong 边 · 根 `../`

`def.involutive-distribution` 对合分布 + `thm.flow-local` 局部流 + `def.lie-bracket` Lie 括号 → `thm.frobenius` Frobenius 定理

**第二步：换成没有 $\partial_{1}$ 分量的生成元。** 设其余生成元为 $Y_{2},\ldots,Y_{k}$。把每个 $Y_{i}$ 换成

$$\tilde Y_{i} := Y_{i} - \bigl\langle \mathrm{d}y^{1},\ Y_{i}\bigr\rangle\,\partial_{1}\qquad (i = 2,\ldots,k),$$

它们与 $\partial_{1}$ 一起仍生成 $\mathcal{D}$（只是把 $\partial_{1}$ 那部分扣掉）。由对合性，$[\partial_{1},\tilde Y_{i}] \in \Gamma(\mathcal{D})$；而

$$\mathrm{d}y^{1}\bigl([\partial_{1},\tilde Y_{i}]\bigr) = \partial_{1}\bigl(\mathrm{d}y^{1}(\tilde Y_{i})\bigr) - \tilde Y_{i}\bigl(\mathrm{d}y^{1}(\partial_{1})\bigr) = \partial_{1}(0) - 0 = 0,$$

> 续见 proofs/imp.mf2-frobenius-flat.3.md
