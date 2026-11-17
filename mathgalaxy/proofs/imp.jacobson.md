# imp.jacobson
`imp.jacobson` · 推出 · strong 边 · 根 `../`

`def.jacobson-radical` Jacobson 根 + `def.semisimple-representation` 半单表示 + `def.irreducible-representation` 不可约表示 + `prop.semisimple-subquotient` 半单表示的子与商 → `thm.jacobson-criterion` Jacobson 根判定半单

设 $V$ 是不可约 $A$-模。取 $0\ne v\in V$，映射 $a\mapsto av$ 给出 $A/\operatorname{Ann}(v)\cong V$，故 $\operatorname{Ann}(v)$ 是极大左理想，$J(A)\subseteq\operatorname{Ann}(v)$。对所有 $v$ 取交得 $J(A)\subseteq\operatorname{Ann}(V)$，即 $J(A)V=0$。
于是 $J(A)$ 是双边理想：对极大左理想 $\mathfrak a$，$A/\mathfrak a$ 不可约，故 $J(A)(A/\mathfrak a)=0$，即 $J(A)A\subseteq\mathfrak a$；对所有 $\mathfrak a$ 取交得 $J(A)A\subseteq J(A)$，故为右理想，从而是双边理想。
$(\implies)$ 设 $A$ 半单，把正则模的单直和项按同构类分组：$A=\bigoplus_i A_i$，每个 $A_i$ 是若干同构单左理想之

> 续见 proofs/imp.jacobson.2.md
