# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 → `thm.sylow` Sylow 定理

**（3）计数。** 设 $\mathcal{S}$ 是全体 Sylow $p$-子群的集合。$G$ 共轭作用在 $\mathcal{S}$ 上（由 (2) 传递）；$P$ 的稳定子是 $N_G(P)$，故

$$n_p = |\mathcal{S}| = [G : N_G(P)].$$

再由 $P \le N_G(P)$ 得 $n_p \mid [G : P] = m$。

最后让 $P$ 共轭作用在 $\mathcal{S}$ 上：轨道长是 $p$ 的幂，而 $P$ 的不动点只有 $P$ 自己（若 $P$ 固定 $Q$，则 $P \le N_G(Q)$，于是 $P$ 与 $Q$ 都是 $N_G(Q)$ 的 Sylow 子群，由 (2) 在 $N_G(Q)$ 中共轭；

> 续见 proofs/imp.sylow.6.md
