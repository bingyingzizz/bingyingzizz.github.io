# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 → `thm.de-rham` de Rham 定理

**第四步：层上同调 $=$ 奇异上同调。** 这两套上同调都是「同伦不变 $+$ 单点的值 $+$ 对（空间，子空间）有长正合列」的**上同调理论**；Eilenberg–Steenrod 型的唯一性定理说：两个这样的理论只要在单点上的值相同、且在映射上自然，就在**有好覆盖的空间**（CW 复形、拓扑流形都算）上自然同构。⚠️ 这些前提不写全，「唯一确定」是不成立的；本条只当引理用不证。

具体地：常层 $\underline{\mathbb{R}}$ 的层上同调由这组性质唯一确定；奇异上同调满足同一组性质（奇异链给出 $\underline{\mathbb{R}}$ 的一个消解：$\mathrm{Hom}(C^{\mathrm{sing}}_{\bullet}(-),\mathbb{R})$ 在可缩空间上正合）。

> 续见 proofs/imp.mf2-de-rham.8.md
