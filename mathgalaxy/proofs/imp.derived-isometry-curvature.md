# 绝妙定理说高斯曲率是局部等距的不变量
`imp.derived-isometry-curvature` · 推出 · strong 边 · 根 `../`

`thm.theorema-egregium` 绝妙定理 → `def.isometry-surface` 等距

绝妙定理：若 $\varphi : S_{1}\to S_{2}$ 是局部等距，则

$$K_{1}(p) = K_{2}\bigl(\varphi(p)\bigr) \qquad (p \in S_{1}).$$

**取逆否。** 若存在 $p$ 使 $K_{1}(p) \ne K_{2}(\varphi(p))$，则 $\varphi$ 不是局部等距 —— 于是「$K$ 取值不同」直接否掉局部等距，不必逐点比较第一基本形式。

**例子。** 柱面 $K = 0$、半径 $R$ 的球面 $K = 1/R^{2}$，两者不局部等距（虽然都摆在 $\mathbb{R}^{3}$ 里、看上去都「弯」）；反过来 $K$ 相同也不够（等距的真正判据是「存在参数化使 $E,F,G$ 逐个相等」）。

> 续见 proofs/imp.derived-isometry-curvature.2.md
