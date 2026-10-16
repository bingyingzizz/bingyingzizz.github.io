# 内射复形就是导出范畴　`thm.k-plus-injectives`　·　说明
根 `../`

记 $\mathbf{K}^{+}(\mathcal{I})$ 为**上有界内射复形**模同伦构成的范畴。这条说：要算 $D^{+}(\mathcal{A})$ 里的东西，**只需要看内射复形**。

**证明：全忠实 + 本质满。**
- **全忠实**：源与靶都是 $C^{+}(\mathcal{I})$ 里的复形，由「上有界内射复形里 Hom 就是导出 Hom」直接得 $\operatorname{Hom}_{\mathbf{K}}(I^{\bullet}, J^{\bullet}) = \operatorname{Hom}_{D}(I^{\bullet}, J^{\bullet})$，所以含入在 Hom 上是双射。
- **本质满**：任给 $K^{\bullet} \in C^{+}(\mathcal{A})$，由「足够多内射」可逐项提升，造出**由单射组成**的内射消解 $K^{\bullet} \rightarrowtail I^{\bullet}$（同伦范畴里每步用内射性延拓态射即可，从上往下递推）。消解是拟同构，于是在 $D^{+}(\mathcal{A})$ 里是同构 —— $K^{\bullet}$ 与 $I^{\bullet}$ 同构。

> 续见 notes/thm.k-plus-injectives.2.md
