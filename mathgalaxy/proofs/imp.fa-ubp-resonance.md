# UBP 的补集形态：共振集稠密
`imp.fa-ubp-resonance` · 推出 · strong 边 · 根 `../`

`thm.ubp` 共鸣定理 → `cor.ubp-resonance` 共振集是稠密 G_δ

令 $M(x) := \sup_n \|u_n x\|$，$\Omega_k := \{x : M(x) > k\} = \bigcup_n \{x : \|u_n x\| > k\}$，每个 $\{\cdots\}$ 开，故 $\Omega_k$ 开；$R = \bigcap_k \Omega_k$ 是 $G_\delta$。
稠密性：若某 $\Omega_k$ 不稠密，则存在球 $B(x_0, r) \subseteq \Omega_k^c$，即球上 $M \le k$。与 UBP 同样的平移 + 伸缩给出 $\sup_n \|u_n\| \le 2k/r < \infty$，与 $\sup_n\|u_n\| = \infty$ 矛盾。故每个 $\Omega_k$ 稠密，交也稠密（Baire）。$\blacksquare$

> ⭐ 这条把「一致有界原理」的否定形式写成「发散集是稠密 $G_\delta$」—— 这才是它在 Fourier 级数、插值算子、数值求积公式里被引用的形态。
