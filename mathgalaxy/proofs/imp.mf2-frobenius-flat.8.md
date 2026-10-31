# 对合 $\implies$ 平坦坐标（流盒拉直 $+$ 降秩归纳）
`imp.mf2-frobenius-flat` · 推出 · strong 边 · 根 `../`

`def.involutive-distribution` 对合分布 + `thm.flow-local` 局部流 + `def.lie-bracket` Lie 括号 → `thm.frobenius` Frobenius 定理

⭐ 这段证明只用两件东西：**流盒**（把 $X_{1}$ 拉直，来自 `thm.flow-local`）与**括号封闭**（保证 $\mathcal{D}^{\prime}$ 仍对合、且 $[\partial_{1},\tilde Y_{i}]$ 没有 $\partial_{1}$ 分量）。对合在这里被用了两次，正好是「必要条件」升级成「充分条件」的全部代价。
