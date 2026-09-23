# 预测度 $\implies$ 诱导的外测度
`imp.premeasure-to-outer` · 推出 · strong 边 · 根 `../`

`def.premeasure` 预测度 → `prop.outer-measure-induced` 由预测度诱导外测度

**④ 可数次可加**：设 $A_{j} \subseteq X$。若某个 $\mu^{*}(A_{j}) = \infty$ 则不等式平凡；否则给定 $\varepsilon > 0$，对每个 $j$ 取 $\mathfrak{A}$ 中的覆盖 $\{E_\{j,k\}\}_{k}$ 使

$$\sum_k \mu_0(E_{j,k}) < \mu^*(A_j) + (\varepsilon/2)^j$$

把 {E_{j,k}}_{j,k} 按 (j, k) 之外再用双射排成一列（可数个可数集之并仍可数），它是 $\bigcup _{j} A_{j}$ 的一个覆盖，于是

$$\mu^*(\bigcup_j A_j) \le \sum_{j,k} \mu_0(E_{j,k}) \le \sum_j \mu^*(A_j) + \varepsilon$$

令 $\varepsilon \to 0$ 即得。∎

$>$ ⚠ ④ 的每一步都只需取**一个**覆盖 —— 这用的是 $\mathbb{N}$ 上的可数选择（可以从自然数的良序性显式给出），不需要完整的 AC。
