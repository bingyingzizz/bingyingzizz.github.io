# imp.jacobson
`imp.jacobson` · 推出 · strong 边 · 根 `../`

`def.jacobson-radical` Jacobson 根 + `def.semisimple-representation` 半单表示 + `def.irreducible-representation` 不可约表示 + `prop.semisimple-subquotient` 半单表示的子与商 → `thm.jacobson-criterion` Jacobson 根判定半单

和。对 $a\in A$ 与单左理想 $L$，$La$ 是 $L$ 的商，故为 $0$ 或与 $L$ 同构的单左理想；于是 $A_i$ 是双边理想，且不同类的乘积为 $0$。设 $e_i$ 是 $A_i$ 的单位元（$A=\bigoplus_i A_i$ 给出正交幂等元）。若 $0\ne r\in J(A)$，则某个 $r e_i\ne0$；但 $A_i$ 是不可约模的直和，$J(A)A_i=0$，故 $r e_i=0$，矛盾。
$(\Leftarrow)$ 设 $J(A)=0$。有限维使下降链终止；取有限个极大左理想 $\mathfrak a_1,\ldots,\mathfrak a_k$ 使 $J(A)=\bigcap_{i=1}^k\mathfrak a_i$（否则可构造维数严格下降的左理想链）。映射 $A\to\prod_i A/\mathfrak a_i$，$a\mapsto(a+\mathfrak a_i)$，核为 $J(A)=0$，

> 续见 proofs/imp.jacobson.3.md
