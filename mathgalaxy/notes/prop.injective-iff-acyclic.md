# 内射与零调的等价　`prop.injective-iff-acyclic`　·　说明
根 `../`

**证明。**
$(1) \implies (2)$：$I$ 内射时，$I$ 自己（连同恒等映射）就是一条**长度 $0$ 的内射消解** $0 \to I \xrightarrow{\ 1\ } I \to 0$ ✓。用它算右导出函子：$RF(I) = F(I)$ 集中在 $0$ 次，故 $R^{n}F(I) = 0$（$n > 0$）✓，即 $I$ 是 $F$-零调的。
$(2) \implies (3)$：显然（$\operatorname{Hom}(M,-)$ 是左正合的）。
$(3) \implies (1)$：对每个 $M$，$I$ 对 $\operatorname{Hom}(M,-)$ 零调意味着 $R^{n}\operatorname{Hom}(M, I) = \operatorname{Ext}^{n}(M, I) = 0$（$n > 0$），特别地 $\operatorname{Ext}^{1}_{\mathcal{A}}(M, I) = 0$ 对一切 $M$ 成立 ✓。而由**内射判据**，$\operatorname{Ext}^{1}_{\mathcal{A}}(-, I) = 0$ 正是「$I$ 内射」的等价刻画（在阿贝尔范畴里，它等价于「每个单态射 $I \rightarrowtail N$ 都有收缩」）✓。于是 $I$ 内射 ✓。∎

⭐ 用途：验「内射」时可以从**任何**左正合函子那一侧下手 —— 而在凝聚态 / 层的情形里，最方便的左正合函子就是取截面 $\Gamma(S, -)$。
