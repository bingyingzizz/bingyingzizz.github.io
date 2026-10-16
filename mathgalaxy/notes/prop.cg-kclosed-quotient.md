# k-闭等价关系与弱 Hausdorff 商　`prop.cg-kclosed-quotient`　·　说明
根 `../`

**证明。** 记 $q : X \to X/R$ 为商映射，则
$$R = (q\times q)^{-1}\bigl(\Delta_{X/R}\bigr), \qquad q\times q : X\times X \longrightarrow X/R\times X/R .$$
- **$\Longleftarrow$**：$X/R$ 弱 Hausdorff $\implies$ $\Delta_{X/R}$ 是 $k$-闭的；$k$-闭集沿连续映射拉回仍 $k$-闭（用紧 Hausdorff 测试），故 $R$ 是 $k$-闭的。
- **$\implies$**：$R$ $k$-闭 $\implies$ $q$ 是**商映射**（$U \subseteq X/R$ 开 $\iff$ $q^{-1}(U)$ 在 $X$ 中开 —— 这正是 $R$ 的 $k$-闭性加 $X$ 紧生成给出的「饱和 $k$-闭集是闭集」）。于是 $X/R$ 紧生成（商的紧生成仍紧生成）。
再证弱 Hausdorff：取紧 Hausdorff 的 $g : T \to X/R$。$T$ 紧，$X$ 紧生成且 $q$ 是商映射，故 $g$ 可沿 $q$ **逐块提升**：存在覆盖 $T = \bigcup_{i} T_{i}$（有限个紧 Hausdorff 块）与连续 $p_{i} : T_{i} \to X$ 使 $q p_{i} = g|_{T_{i}}$。于是 $g(T) = \bigcup_{i} q(\tilde g_{i}(T_{i}))$，而每个 $q(K)$（$K \subseteq X$ 紧 Hausdorff）是闭的：$q^{-1}q(K)$ 是**饱和**的，其 $k$-闭性由 $R$ 的 $k$-闭

> 续见 notes/prop.cg-kclosed-quotient.2.md
