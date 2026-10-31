# 预拓扑斯 $\implies$ 满-单分解
`imp.pretopos-factorization` · 推出 · strong 边 · 根 `../`

`def.pretopos` 预拓扑斯 + `def.effective-equivalence` 有效等价关系 + `def.regular-epi` 正则满态射 → `prop.pretopos-factorization` 满-单分解

**平衡性。** 若 $f$ 既满又单，则 $R = X \times_{Y} X \cong X$（单态射的等价刻画），故 $\overline{X} \cong X$，$f \cong l$ 是单态射；又 $f$ 已是单态射，故 $f$ 是同构。∎

**严格性。** 上面的分解把 $\operatorname{im} f$ 与 $\operatorname{coim} f$ 都算成了 $\overline{X}$，所以它们同构。∎

> 整条证明只用了一个构造「取核对再取商」和一组事实「等价关系有效 + 满态射正则」。这正是预拓扑斯那四条公理想换来的东西。
