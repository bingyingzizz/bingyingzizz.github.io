# 扩展群的双边算法　`thm.ext-balanced`　·　说明
根 `../`

**证明（把两种算法都认成导出范畴里的同一个 Hom）。** 由 $\operatorname{Ext}$ 的定义，$\operatorname{Ext}^{n}_{R}(M, N) = \operatorname{Hom}_{D(R)}(M, N[n])$，其中 $N$ 支在 $0$ 次。
- **右边**：由「Ext 就是 RHom」，$H^{n}(\operatorname{Hom}(M, I^{\bullet})) = R^{n}\operatorname{Hom}(M, N) = \operatorname{Ext}^{n}(M, N)$ ✓。
- **左边**：由「内射复形就是导出范畴」的对偶版本，$K^{-}(\mathcal{P}) \to D^{-}(R\text{-}\mathbf{Mod})$ 是等价，故 $P_{\bullet}$ 在导出范畴里代表 $M$、$\operatorname{Hom}_{K}(P_{\bullet}, N[n]) = \operatorname{Hom}_{D}(P_{\bullet}, N[n])$ ✓。而 $H^{n}(\operatorname{Hom}(P_{\bullet}, N)) = \operatorname{Hom}_{K}(P_{\bullet}, N[n])$（同调第 $n$ 层就是「同伦类」那一步的标准换算）✓，于是左边也等于 $\operatorname{Hom}_{D}(M, N[n])$ ✓。
两条路落在同一个导出 Hom 上，所以两边相等 ✓。∎

> 续见 notes/thm.ext-balanced.2.md
