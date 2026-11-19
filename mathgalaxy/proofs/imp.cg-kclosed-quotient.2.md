# imp.cg-kclosed-quotient
`imp.cg-kclosed-quotient` · 推出 · strong 边 · 根 `../`

`def.quotient-topology` 商拓扑 → `prop.cg-kclosed-quotient` k-闭等价关系与弱 Hausdorff 商

$T$ 紧，$X$ 紧生成且 $q$ 是商映射，故 $g$ 可沿 $q$ **逐块提升**：存在覆盖 $T = \bigcup_{i} T_{i}$（有限个紧 Hausdorff 块）与连续 $p_{i} : T_{i} \to X$ 使 $q p_{i} = g|_{T_{i}}$。

于是 $g(T) = \bigcup_{i} q(\tilde g_{i}(T_{i}))$，而每个 $q(K)$（$K \subseteq X$ 紧 Hausdorff）是闭的：$q^{-1}q(K)$ 是**饱和**的，其 $k$-闭性由 $R$ 的 $k$-闭性与「投影 $X\times K \to X$ 闭」给出，故 $q^{-1}q(K)$ 在紧生成的 $X$ 中闭，再由 $q$ 是商映射得 $q(K)$ 闭 ✓。

有限并仍闭，故 $g(T)$ 闭。

∎
