# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 + `thm.stokes` Stokes 定理 + `thm.stokes-chain` 链上的 Stokes 定理 + `lem.poincare-lemma` Poincaré 引理 + `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调 → `thm.de-rham` de Rham 定理

⚠️ 还需核对**它是一个映射**：两条路线都要过「链上积分」与「de Rham 复形到奇异上链的映射」，而这两者交换（Stokes）这一步本图**没有逐条验**。验过之后（标准做法：对每个奇异单纯形用 Stokes 归纳），才能说它与第一步的配对 $\langle\cdot,\cdot\rangle$ 是同一个映射，从而 $\Phi^{k}$ 就是这个同构。

> 续见 proofs/imp.mf2-de-rham.12.md
