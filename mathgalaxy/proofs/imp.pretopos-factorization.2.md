# 预拓扑斯 $\implies$ 满-单分解
`imp.pretopos-factorization` · 推出 · strong 边 · 根 `../`

`def.pretopos` 预拓扑斯 + `def.effective-equivalence` 有效等价关系 + `def.regular-epi` 正则满态射 → `prop.pretopos-factorization` 满-单分解

$$\begin{array}{ccc} V & \longrightarrow & Z \\ \downarrow\scriptstyle{(g_0,h_0)} & & \downarrow\scriptstyle{(g,h)} \\ X \times_{X} X & \xrightarrow{\ \pi \times \pi\ } & \overline{X} \times \overline{X} \end{array}$$

笛卡尔。由 $l \circ g = l \circ h$ 得 $l \circ \pi \circ g_{0} = l \circ \pi \circ h_{0}$，即 $f \circ g_{0} = f \circ h_{0}$。于是 $(g_{0}, h_{0})$ 的像整个落在 $R = X \times_{Y} X$ 里 —— 换句话说 $(g_{0}, h_{0})$ 穿过 $R$。

> 续见 proofs/imp.pretopos-factorization.3.md
