# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 + `thm.stokes` Stokes 定理 + `thm.stokes-chain` 链上的 Stokes 定理 + `lem.poincare-lemma` Poincaré 引理 + `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调 → `thm.de-rham` de Rham 定理

⚠️ **先得补一个前提**：$\int_{c}\omega$ 对**连续**奇异链按字面没定义（奇异 $k$-单形 $c:\Delta^{k}\to M$ 只连续，微分形式拉不回去）。正确做法是把链换成**光滑奇异链**（每个面 $C^{\infty}$、并能延拓到棱柱邻域），记复形 $C^{\infty}_{\ast}(M)$；光滑与连续奇异链的同调相同（单纯逼近 $+$ 光滑化），故不失一般性 —— ⚠️ 这个等价性本图**未证**（这条等价性本图未证，只有梗概）。以下假定 $c$ 是光滑奇异链。

> 续见 proofs/imp.mf2-de-rham.4.md
