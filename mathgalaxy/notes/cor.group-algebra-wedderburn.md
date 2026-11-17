# 群代数的 Wedderburn 分解　`cor.group-algebra-wedderburn`　·　说明
根 `../`

Maschke 定理给出 $F[G]$ 半单。由 thm.wedderburn-artin，$F[G]\cong\prod_i M_{n_i}(D_i)$。\n$\operatorname{char}F=0$ 且 $F$ 代数闭 故 有限维除法 $F$-代数 $D_i=F$：若 $a\in D_i$ 超出 $F$，则 $F(a)$ 是有限扩张，与代数闭矛盾。\n故 $F[G]\cong\prod_i M_{n_i}(F)$。作为左 $F[G]$-模，$M_{n_i}(F)$ 的自然模 $F^{n_i}$ 是单模，故 $F[G]\cong\bigoplus_i n_iV_i$，其中 $V_i=F^{n_i}$，$n_i=\dim V_i$。\n比较维数得 $|G|=\sum_i n_i^2$。$\blacksquare$
