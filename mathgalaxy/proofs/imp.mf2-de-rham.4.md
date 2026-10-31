# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 → `thm.de-rham` de Rham 定理

**第四步：层上同调 = 奇异上同调。** 常层 $\underline{\mathbb{R}}$ 的层上同调由「同伦不变 $+$ 单点的值 $+$ 长正合列」这组性质唯一确定；奇异上同调满足同一组性质（奇异链给出 $\underline{\mathbb{R}}$ 的一个消解：$\mathrm{Hom}(C^{\mathrm{sing}}_{\bullet}(-),\mathbb{R})$ 在可缩空间上正合）。于是两者自然同构 —— 这是代数拓扑的标准定理，本图不证。

**收尾**：把第三步、第四步拼起来，得到同构 $H^{k}_{\mathrm{dR}}(M) \cong H^{k}_{\mathrm{sing}}(M;\mathbb{R})$；它与第一步的配对 $\langle\cdot,\cdot\rangle$ 是同一个映射（两种算法算同一个积分），故 $\Phi^{k}$ 就是它。

> 续见 proofs/imp.mf2-de-rham.5.md
