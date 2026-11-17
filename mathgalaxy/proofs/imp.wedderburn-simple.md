# imp.wedderburn-simple
`imp.wedderburn-simple` · 推出 · strong 边 · 根 `../`

`def.simple-algebra` 单代数 + `def.division-algebra` 除法代数 + `thm.burnside-surjectivity` Burnside 满射性定理 → `thm.wedderburn-simple` 单代数的 Wedderburn 结构定理

取极小非零左理想 $V$，则 $V$ 是单 $A$-模。由 Schur 引理 $D=\operatorname{End}_A(V)$ 是除法代数。定义 $\Phi:A\to\operatorname{End}_D(V)$，$a\mapsto(v\mapsto av)$。若 $\Phi(a)=0$，则 $aV=0$；但 $AV=V$ 且 $A$ 单，故 $a=0$，所以 $\Phi$ 单。由 Burnside 满射性，$\Phi$ 满。于是 $A\cong\operatorname{End}_D(V)\cong M_n(D^{\mathrm{op}})$，$n=\dim_DV$。代数闭时 Schur 给出 $D=F$。$\blacksquare$
