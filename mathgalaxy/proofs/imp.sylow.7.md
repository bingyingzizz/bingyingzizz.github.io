# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 → `thm.sylow` Sylow 定理

再由 $P \le N_G(P)$ 得 $n_p \mid [G : P] = m$。最后让 $P$ 共轭作用在 $\mathcal{S}$ 上：轨道长是 $p$ 的幂，而 $P$ 的不动点只有 $P$ 自己（若 $P$ 固定 $Q$，则 $P \le N_G(Q)$，于是 $P$ 与 $Q$ 都是 $N_G(Q)$ 的 Sylow 子群，由 (2) 在 $N_G(Q)$ 中共轭；但 $Q \trianglelefteq N_G(Q)$ 故只能 $P = Q$）。于是

$$n_p = 1 + \sum (\text{长度 } \ge 2 \text{ 的轨道长}) \equiv 1 \pmod p$$

∎

> ⭐ 第二步的论证是整条定理的模板，值得单独记住：**让 $p$-群作用在一个「基数不被 $p$ 整除」的集合上，必有不共点** —— 因为轨道长都是 $p$ 的幂，若都 $\ge p$ 就整除不了总和。这个「不动点论证」在表示论与代数拓扑里反复出现。
