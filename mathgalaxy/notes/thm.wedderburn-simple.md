# 单代数的 Wedderburn 结构定理　`thm.wedderburn-simple`　·　说明
根 `../`

取极小非零左理想 $V$；$V$ 是单 $A$-模，由 Schur 引理 $D=\operatorname{End}_A(V)$ 是除法代数。
自然映射 $A\to\operatorname{End}_D(V)$ 因 $A$ 单而单射：若 $aV=0$，则 $\operatorname{Ann}(V)$ 是非零双边理想，只能是 $A$，与 $AV=V$ 矛盾；Burnside 定理使它满射；故 $A\cong\operatorname{End}_D(V)\cong M_n(D^{\mathrm{op}})$。
代数闭时 Schur 引理给出 $D=F$。
注意方向：$A$ 同构于 $D^{\mathrm{op}}$ 上的矩阵代数。

本图的单代数是「无非平凡双边理想」；有限维时 $J(A)$ 是双边理想且不含 $1$，故 $J(A)=0$，由 thm.jacobson-criterion 得半单，Burnside 满射性可用。
