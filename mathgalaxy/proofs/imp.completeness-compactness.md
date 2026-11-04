# 完备性 $\implies$ 紧致性
`imp.completeness-compactness` · 推出 · strong 边 · 根 `../`

`thm.completeness-first-order` 完备性定理 → `thm.compactness` 紧致性定理

设 $\Gamma$ 的每个有限子集都有模型。反设 $\Gamma$ 没有模型，即 $\Gamma \vDash \bot$。

由完备性定理（$\vDash \implies \vdash$），$\Gamma \vdash \bot$；而一个证明是**有限**序列，只用到 $\Gamma$ 的有限多个成员，于是存在有限 $\Gamma_{0} \subseteq \Gamma$ 使 $\Gamma_{0} \vdash \bot$。

再由可靠性（$\vdash \implies \vDash$），$\Gamma_{0} \vDash \bot$ —— 即 $\Gamma_{0}$ 没有模型，与「每个有限子集都有模型」矛盾。∎

⚠ 用到了「证明有限」这一条（`def.provability` 的定义里就写着）—— 这是整个论证的关键。
