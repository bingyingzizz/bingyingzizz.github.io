# 球面的同调　`thm.sphere-homology`　·　说明
根 `../`

**约化 Mayer–Vietoris。** $U \cup V = S^{n}$ 且 $U \cap V \ne \emptyset$，故有长正合列

$$\cdots \to \tilde{H}_{p}(U \cap V) \to \tilde{H}_{p}(U) \oplus \tilde{H}_{p}(V) \to \tilde{H}_{p}(S^{n}) \to \tilde{H}_{p-1}(U \cap V) \to \cdots$$

中间项全为零，于是对每个 $p \ge 1$，$\tilde{H}_{p}(S^{n}) \cong \tilde{H}_{p-1}(S^{n-1})$；对 $p = 0$，序列末端 $\tilde{H}_{0}(U) \oplus \tilde{H}_{0}(V) \to \tilde{H}_{0}(S^{n}) \to 0$ 给出 $\tilde{H}_{0}(S^{n}) = 0$（$n \ge 1$ 时 $S^{n}$ 道路连通）。

**归纳结论。** 由基础情形与递归式，$\tilde{H}_{p}(S^{n}) = \mathbb{Z}$ 当 $p = n$，否则为 $0$。

**回到非约化同调。** $n \ge 1$ 时 $S^{n}$ 道路连通，故 $H_{0}(S^{n}) = \mathbb{Z}$（即 $\tilde{H}_{0} = 0$）；$p \ge 1$ 时 $H_{p} = \tilde{H}_{p}$。于是 $H_{0}(S^{n}) = \mathbb{Z}$、$H_{n}(S^{n}) = \mathbb{Z}$，其余 $H_{p}(S^{n}) = 0$。∎

> 续见 notes/thm.sphere-homology.4.md
