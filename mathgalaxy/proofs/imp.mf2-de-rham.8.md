# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 → `thm.de-rham` de Rham 定理

于是两者自然同构 —— 这是代数拓扑的标准定理，本图不证。

**收尾**：把第三步、第四步拼起来，得到同构 $H^{k}_{\mathrm{dR}}(M) \cong H^{k}_{\mathrm{sing}}(M;\mathbb{R})$。

⚠️ 还需核对**它是一个映射**：两条路线都要过「链上积分」与「de Rham 复形到奇异上链的映射」，而这两者交换（Stokes）这一步本图**没有逐条验**。验过之后（标准做法：对每个奇异单纯形用 Stokes 归纳），才能说它与第一步的配对 $\langle\cdot,\cdot\rangle$ 是同一个映射，从而 $\Phi^{k}$ 就是这个同构。

> 续见 proofs/imp.mf2-de-rham.9.md
