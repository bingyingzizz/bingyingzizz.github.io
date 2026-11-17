# Wedderburn–Artin 定理　`thm.wedderburn-artin`　·　说明
根 `../`

因 $A$ 半单，左正则模分解为 $A=\bigoplus_i S_i^{\oplus n_i}$，$S_i$ 两两不同构单左模。
右乘给出 $A^{\mathrm{op}}\cong\operatorname{End}_A(A)$：$a\mapsto R_a$，$R_a(x)=xa$；逆由 $f\mapsto f(1)$ 给出。
由 Schur 引理，$\operatorname{Hom}_A(S_i,S_j)=0$（$i\ne j$），故 $\operatorname{End}_A(A)\cong\prod_i\operatorname{End}_A(S_i^{\oplus n_i})\cong\prod_i M_{n_i}(D_i)$，其中 $D_i=\operatorname{End}_A(S_i)$ 是除法代数。
取相反代数得 $A\cong\prod_i M_{n_i}(D_i^{\mathrm{op}})$。
反向：每个矩阵代数 $M_{n_i}(D_i)$ 半单，乘积半单；有限维半单代数的模都半单（子模有补）。$\blacksquare$
