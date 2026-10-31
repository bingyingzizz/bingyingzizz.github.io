# 维数转移 + 一阶扩展的分类 $\implies$ 投射维数的消失刻画
`imp-link.dimshift-pdvan` · 推出 · strong 边 · 根 `../`

`prop.dimension-shift` 维数转移 + `thm.ext1-extensions` 一阶扩展的分类 → `prop.pd-vanishing` 投射维数与消失

$(1) \implies (3)$：长度 $n$ 的投射消解在 $k > n$ 处为零，于是 $\operatorname{Hom}(P_{\bullet}, N)$ 在 $k > n$ 处为零，上同调为零 ✓。
$(3) \implies (4)$：取 $k = n+1$ ✓。
$(4) \implies (1)$：由维数转移连用 $n$ 次，$\operatorname{Ext}^{n+1}_{R}(M, N) \cong \operatorname{Ext}^{1}_{R}(\Omega^{n}M, N)$ ✓（这里用到「用投射消解算与用内射消解算给出同一个群」，即两种算法一致，所以维数转移的两个方向都可靠）。
条件 (4) 于是说的是 $\operatorname{Ext}^{1}_{R}(\Omega^{n}M, -)$ 恒为零。若 $\Omega^{n}M$ 不投射，取自由模盖住它得 $0 \to L \to F \to \Omega^{n}M \to 0$，它不分裂，由「一阶扩展的分类」这条路对应 $\operatorname{Ext}^{1}(\Omega^{n}M, L)$ 里的**非零**类，矛盾 ✓。故 $\Omega^{

> 续见 proofs/imp-link.dimshift-pdvan.2.md
