# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 → `thm.sylow` Sylow 定理

由轨道分解 $|X| = \sum |\text{轨道}|$，每个轨道长 $= [P : P_{hQ}]$ 是 $p$ 的幂。若**没有**不动点，则每个轨道长都被 $p$ 整除，于是 $p \mid |X| = m$，矛盾。故有不动点 $hQ$：对一切 $g \in P$ 有 $ghQ = hQ$，即 $h^{-1}Ph \le Q$。两端阶相同（都是 $p^{a}$），故 $h^{-1}Ph = Q$：$P$ 与 $Q$ 共轭。

把上面论证中的 $P$ 换成任一 $p$-子群 $R$，同样得到 $h^{-1}Rh \le Q$：**任何 $p$-子群都含在某个 Sylow 子群中**。

> 续见 proofs/imp.sylow.6.md
