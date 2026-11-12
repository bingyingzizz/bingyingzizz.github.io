# $B(E,F)$ 是赋范代数：复合的次乘性
`imp.operator-algebra-proof` · 推出 · strong 边 · 根 `../`

`def.bounded-operator` 有界线性算子 + `def.norm` 范数 → `prop.operator-algebra` 算子乘法的范数不等式

对 $x\in E$，
$$\lVert v(ux)\rVert\le\lVert v\rVert\,\lVert ux\rVert\le\lVert v\rVert\,\lVert u\rVert\,\lVert x\rVert ,$$
故 $vu$ 有界且 $\lVert vu\rVert\le\lVert v\rVert\lVert u\rVert$（右边是 $\lVert vu\rVert$ 的定义下确界的一个上界）。

乘法连续性：
$$\lVert v_1u_1-v_2u_2\rVert\le\lVert v_1\rVert\lVert u_1-u_2\rVert+\lVert v_1-v_2\rVert\lVert u_2\rVert ,$$
故 $(u,v)\mapsto vu$ 连续。

$B(E)$ 含单位 $\mathrm{id}$，$E\ne\{0\}$ 时 $\lVert\mathrm{id}\rVert=1$，故是赋范代数。∎

> 完整证明见本条边；节点注只保留动机与缺口。
