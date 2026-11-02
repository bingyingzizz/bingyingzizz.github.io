# 消解同伦唯一 + 内射复形就是导出范畴 $\implies$ 两种算法一致
`imp-link.reshomotopy-extbal` · 推出 · strong 边 · 根 `../`

`prop.resolution-homotopy` 消解的同伦唯一性 + `thm.k-plus-injectives` 内射复形就是导出范畴 → `thm.ext-balanced` 扩展群的双边算法

两种算法都是在算导出范畴里的同一个 Hom：$\operatorname{Ext}^{n}_{R}(M, N) = \operatorname{Hom}_{D(R)}(M, N[n])$。
- **右侧**（内射算法）：由「内射复形就是导出范畴」的等价 $K^{+}(\mathcal{I}) \simeq D^{+}$，$\operatorname{Hom}_{D}(M, N[n]) = \operatorname{Hom}_{K}(M, I^{\bullet}[n]) = H^{n}\operatorname{Hom}(M, I^{\bullet})$ ✓。
- **左侧**（投射算法）：由同一条定理的对偶 $K^{-}(\mathcal{P}) \simeq D^{-}$，$P_{\bullet}$ 在导出范畴里代表 $M$，于是 $\operatorname{Hom}_{D}(M, N[n]) = \operatorname{Hom}_{K}(P_{\bullet}, N[n]) = H^{n}\operatorname{Hom}(P_{\bullet}, N)$ ✓。
两条路落在同一个群里，故两者相等 ✓。而「换成别的投射消解结果不变」正是消解的同伦唯一性给的

> 续见 proofs/imp-link.reshomotopy-extbal.2.md
