# imp.group-algebra-wedderburn
`imp.group-algebra-wedderburn` · 推出 · strong 边 · 根 `../`

`thm.maschke` Maschke 定理 + `thm.wedderburn-artin` Wedderburn–Artin 定理 + `def.algebraically-closed` 代数闭域 → `cor.group-algebra-wedderburn` 群代数的 Wedderburn 分解

Maschke 定理给出 $F[G]$ 半单；thm.wedderburn-artin 给出 $F[G]\cong\prod_i M_{n_i}(D_i)$。
$F$ 代数闭，故每个有限维除法 $F$-代数 $D_i=F$（$\operatorname{char}F=0$ 已在 Maschke 一步用到）。故 $F[G]\cong\prod_i M_{n_i}(F)$。
左正则模分解为 $F[G]\cong\bigoplus_i n_iV_i$，$V_i=F^{n_i}$ 为 $M_{n_i}(F)$ 的自然模，故 $n_i=\dim V_i$；比较维数得 $|G|=\sum_i n_i^2$。$\blacksquare$
