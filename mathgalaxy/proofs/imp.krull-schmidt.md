# imp.krull-schmidt
`imp.krull-schmidt` · 推出 · strong 边 · 根 `../`

`lem.iso-factorization` 同构因子引理 + `lem.nilpotent-sum` 幂零自同态之和 + `def.indecomposable-representation` 不可分解表示 + `def.direct-sum-representation` 表示的直和 → `thm.krull-schmidt` Krull–Schmidt 定理

存在性：对 $\dim V$ 归纳。若 $V$ 不可分解，则 $V$ 本身即分解；否则 $V=V_1\oplus V_2$ 且 $\dim V_i<\dim V$，对 $V_1,V_2$ 归纳后合并。有限维保证归纳可用。
唯一性：设 $V=\bigoplus_{i=1}^k V_i=\bigoplus_{j=1}^m W_j$，所有 $V_i,W_j$ 不可分解。对 $k$ 归纳。取投影 $e:V\to V_1$（沿 $V_2\oplus\cdots\oplus V_k$）与投影 $f_j:V\to W_j$，则 $\sum_j f_j=\operatorname{id}_V$，故 $\sum_j e f_j e=\operatorname{id}_{V_1}$。每个 $e f_j e\in\operatorname{End}_A(V_1)$；若全为幂零，反复用 lem.nilpotent-sum（归纳）可知其和也幂零，与等于 $\operatorname{id}$ 矛盾。故某个 $j$ 使 $\alpha=e f_j e$ 可逆。令 $\beta=f_j e:V_1\to W_j$、$\gamma=e|_{W_j}:W_j\to V

> 续见 proofs/imp.krull-schmidt.2.md
