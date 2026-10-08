# F 的预测度 $\implies \mathbb{R}$ 上的 Borel 测度
`imp.ls-premeasure-to-measure` · 推出 · strong 边 · 根 `../`

`prop.ls-premeasure` F 给出的预测度 + `thm.caratheodory-uniqueness` 扩张的唯一性 → `thm.ls-exists` F ↔ Borel 测度

设 $F$ 递增右连续。由前一条命题，$\mu _{0}((a, b]) = F(b) - F(a)$ 扩充成半开区间生成的代数 $\mathfrak{A}$ 上的**预测度**。

**① 存在性。** 由 Carathéodory 扩张定理，$\mu _{0}$ 诱导的外测度限制在 $\mathcal{M}(\mathfrak{A})$ 上就是一个测度 $\mu _F$，且在 $\mathfrak{A}$ 上还原成 $\mu _{0}$。特别地 $\mu _F((a, b]) = F(b) - F(a)$。

**② 它是 Borel 测度。** 每个开区间 (a, b) 是可数个 $(a, b - 1/n]$ 之并，故属于 $\mathcal{M}(\mathfrak{A})$；于是 $\mathcal{M}(\mathfrak{A})$ 包含 $\mathbb{R}$ 的全体开集（$\mathbb{R}$ 的开集是可数个开区间之并），从而 $\mathfrak{B}_\mathbb{R} \subseteq \mathcal{M}(\mathfrak{A})$。

> 续见 proofs/imp.ls-premeasure-to-measure.2.md
