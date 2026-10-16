# 预拓扑斯 $\implies$ 满-单分解
`imp.pretopos-factorization` · 推出 · strong 边 · 根 `../`

`def.pretopos` 预拓扑斯 + `def.effective-equivalence` 有效等价关系 + `def.regular-epi` 正则满态射 → `prop.pretopos-factorization` 满-单分解

设 $f : X \to Y$。取核对 $R := X \times_{Y} X$，它是 $X$ 上的等价关系。由预拓扑斯第 3 条，等价关系**有效**，所以可以取商

$$\overline{X} := X/R = \operatorname{coker}(R \rightrightarrows X)$$

两条投影在 $f$ 下相等，故 $f$ 穿过商，得到分解

$$f : X \twoheadrightarrow \overline{X} \xrightarrow{\ l\ } Y$$

**$l$ 是单态射。** 设 $g, h : Z \to \overline{X}$ 且 $l \circ g = l \circ h$。因为 $\overline{X} = X/R$，把 $g, h$ 与商映射 $\pi$ 一起拉回：考虑 $V$ 使方块

> 续见 proofs/imp.pretopos-factorization.2.md
