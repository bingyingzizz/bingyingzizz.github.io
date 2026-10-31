# 投射维数与消失　`prop.pd-vanishing`　·　说明
根 `../`

**证明。**
$(1) \implies (3)$：取长度 $n$ 的投射消解 $P_{\bullet}$，则删除消解在 $k > n$ 处为零，故 $\operatorname{Hom}(P_{\bullet}, N)$ 在 $k > n$ 次也为零，上同调自然为零 ✓（用到了「用投射消解算与用内射消解算给出同一个群」，见「扩展群的双边算法」）。
$(3) \implies (4)$：取 $k = n+1$ ✓。
$(4) \implies (1)$：取任意投射消解并算出 $K := \Omega^{n}M$。由**维数转移**（连用 $n$ 次）得 $\operatorname{Ext}^{1}_{R}(K, N) \cong \operatorname{Ext}^{n+1}_{R}(M, N)$，对一切 $N$ 为零 ✓。
而「$\operatorname{Ext}^{1}_{R}(K, -)$ 恒为零」迫使 $K$ 投射：若 $K$ 不投射，取满射 $F \twoheadrightarrow K$（$F$ 自由），它不分裂，于是由「一阶扩展的分类」得到 $\operatorname{Ext}^{1}_{R}(K, \ker) \ne 0$，矛盾 ✓。于是 $M$ 有一条长度 $n$ 的投射消解 ✓，即 $(1)$。
$(1) \iff (2)$ 是合冲的定义重述 ✓。∎

> 续见 notes/prop.pd-vanishing.2.md
