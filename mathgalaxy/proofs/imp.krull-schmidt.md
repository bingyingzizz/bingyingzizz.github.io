# imp.krull-schmidt
`imp.krull-schmidt` · 推出 · strong 边 · 根 `../`

`lem.iso-factorization` 同构因子引理 + `lem.nilpotent-sum` 幂零自同态之和 + `def.indecomposable-representation` 不可分解表示 → `thm.krull-schmidt` Krull–Schmidt 定理

存在性对维数归纳。唯一性：设 $V=\oplus_{i=1}^m V_i=\oplus_{j=1}^n W_j$。取第一个 $V_1$，投影 $p:V\to V_1$ 与包含 $i_1:V_1\to V$；$p|_{W_j}$ 对某个 $j$ 非零（否则 $p$ 在 $\oplus W_j$ 上为零）。由不可分解性与同构因子引理，$V_1\cong W_j$ 且可消去；对剩余部分归纳。幂零和引理用于处理自同态的组合。$\blacksquare$
