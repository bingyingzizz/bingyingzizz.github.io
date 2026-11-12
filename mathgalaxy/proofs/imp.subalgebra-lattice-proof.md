# 闭子代数对 $\min,\max$ 封闭
`imp.subalgebra-lattice-proof` · 推出 · strong 边 · 根 `../`

`def.subalgebra-separating` 子代数与分离点 + `def.closed-set` 闭集与闭包 → `lem.closed-subalgebra-lattice` 闭子代数是格

只需证对 $f\in A$ 有 $|f|\in A$，因为
$$\max(f,g)=\frac{f+g+|f-g|}{2},\qquad \min(f,g)=\frac{f+g-|f-g|}{2}.$$

设 $\lVert f\rVert\le1$。则 $f^{2}\in A$、$0\le f^{2}\le1$。令 $u=1-f^{2}\in A$，$0\le u\le1$。二项级数
$$\sqrt{1-u}=1-\sum_{k\ge1}c_k u^{k},\qquad c_k=\frac{(2k-3)!!}{2^{k}k!}>0,$$
且 $\sum_k c_k=1$（代入 $u=1$）。部分和 $s_n=1-\sum_{k=1}^{n}c_k u^{k}\in A$，在 $[0,1]$ 上 $s_n\rightrightarrows\sqrt{1-u}$：余项 $\sum_{k>n}c_k u^{k}\le\sum_{k>n}c_k\to0$ 与 $u$ 无关。

$A$ 对一致收敛封闭（$A$ 闭于 $C(K,\mathbb R)$），故 $\sqrt{1-u}=\sqrt{f^{2}}=|f|\in A$。一般 $f$ 用 $f/\max(\lVert f\rVert,1)$ 归约，结论相同。∎

> 完整证明见本条边；节点注只保留动机与缺口。
