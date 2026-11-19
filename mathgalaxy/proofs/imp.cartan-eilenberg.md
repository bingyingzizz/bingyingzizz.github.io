# imp.cartan-eilenberg
`imp.cartan-eilenberg` · 推出 · strong 边 · 根 `../`

`def.injective-module` 内射模 + `def.spectral-sequence` 谱序列 + `def.bicomplex` 双复形 + `def.abelian-category` 阿贝尔范畴 → `lem.cartan-eilenberg` Cartan–Eilenberg 分解

构造上保证「行和列都是内射消解」—— 这正是 Cartan–Eilenberg 分解给出的东西。

**「$H^{p}$ 那一层也是内射消解」是关键的额外要求**：只要求每列是内射消解还不够（那样第二条谱序列会退化）；要求上同调层也是内射消解，才能让两条过滤都读到完整信息。

⭐ **用在哪**：推导「两个导出函子的复合 = 谱序列」（Grothendieck 谱序列）、以及导出范畴里「有界下有界复形可以换成分解」的标准论证，都要先有这条。

> 续见 proofs/imp.cartan-eilenberg.2.md
