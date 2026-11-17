# imp.wedderburn-artin
`imp.wedderburn-artin` · 推出 · strong 边 · 根 `../`

`thm.wedderburn-simple` 单代数的 Wedderburn 结构定理 + `def.semisimple-representation` 半单表示 → `thm.wedderburn-artin` Wedderburn–Artin 定理

因 $A$ 半单，$A=\bigoplus_i S_i^{\oplus n_i}$。右乘映射 $a\mapsto R_a$ 给出 $A^{\mathrm{op}}\cong\operatorname{End}_A(A)$（逆为 $f\mapsto f(1)$）。\nSchur 引理给出不同 $S_i$ 之间无同态，故 $\operatorname{End}_A(A)\cong\prod_i\operatorname{End}_A(S_i^{\oplus n_i})\cong\prod_i M_{n_i}(D_i)$，$D_i=\operatorname{End}_A(S_i)$ 为除法代数。\n取相反代数：$A\cong\prod_i M_{n_i}(D_i^{\mathrm{op}})$。反向由“矩阵代数乘积半单”得到。$\blacksquare$
