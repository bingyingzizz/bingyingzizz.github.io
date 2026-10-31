# 预拓扑斯 $\implies$ 满-单分解
`imp.pretopos-factorization` · 推出 · strong 边 · 根 `../`

`def.pretopos` 预拓扑斯 + `def.effective-equivalence` 有效等价关系 + `def.regular-epi` 正则满态射 → `prop.pretopos-factorization` 满-单分解

**唯一性。** 若 $f = X \xrightarrow{\ \pi'\ } X' \xrightarrow{\ l'\ } Y$ 是另一个满-单分解，则由 $l'$ 是单态射得 $R = X \times_{X'} X$。记 $\pi'$ 为满态射，由第 4 条它是**正则**的，即 $\pi' = \operatorname{coker}(X \times_{X'} X \rightrightarrows X)$；把 $X \times_{X'} X = R$ 代进去得 $\pi'$ 与 $\pi$ 是同一个余等化子。于是存在互逆的 $\overline{X} \rightleftarrows X'$，$X' \cong \overline{X}$。∎

> 续见 proofs/imp.pretopos-factorization.5.md
