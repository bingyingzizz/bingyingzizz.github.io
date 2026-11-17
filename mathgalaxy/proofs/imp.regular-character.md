# 正则特征标分解
`imp.regular-character` · 推出 · strong 边 · 根 `../`

`cor.character-multiplicity` 重数由特征标内积给出 + `thm.maschke` Maschke 定理 + `def.group-character` 群特征标 + `ex.regular-representation` 正则表示 → `cor.regular-character-decomposition` 正则特征标的分解

Maschke 定理给出 $F[G]$ 半单，故正则模分解为 $F[G]\cong\bigoplus_i n_iV_i$。
由重数公式 $n_i=\langle\chi_{\mathrm{reg}},\chi_{V_i}\rangle$。正则特征标 $\chi_{\mathrm{reg}}(1)=|G|$，$\chi_{\mathrm{reg}}(g)=0$（$g\ne1$），故 $n_i=\frac1{|G|}|G|\chi_{V_i}(1)=\dim V_i$。
于是 $\chi_{\mathrm{reg}}=\sum_i(\dim V_i)\chi_{V_i}$；在 $g=1$ 得 $|G|=\sum_i(\dim V_i)^2$，在 $g\ne1$ 得 $\sum_i(\dim V_i)\chi_{V_i}(g)=0$。$\blacksquare$
