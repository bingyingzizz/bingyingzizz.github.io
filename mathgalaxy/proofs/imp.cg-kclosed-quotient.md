# imp.cg-kclosed-quotient
`imp.cg-kclosed-quotient` · 推出 · strong 边 · 根 `../`

`def.quotient-topology` 商拓扑 → `prop.cg-kclosed-quotient` k-闭等价关系与弱 Hausdorff 商

**证明。** 记 $q : X \to X/R$ 为商映射，则
$$R = (q\times q)^{-1}\bigl(\Delta_{X/R}\bigr), \qquad q\times q : X\times X \longrightarrow X/R\times X/R .$$
- **$\Longleftarrow$**：$X/R$ 弱 Hausdorff $\implies$ $\Delta_{X/R}$ 是 $k$-闭的；$k$-闭集沿连续映射拉回仍 $k$-闭（用紧 Hausdorff 测试），故 $R$ 是 $k$-闭的。
- **$\implies$**：$R$ $k$-闭 $\implies$ $q$ 是**商映射**（$U \subseteq X/R$ 开 $\iff$ $q^{-1}(U)$ 在 $X$ 中开 —— 这正是 $R$ 的 $k$-闭性加 $X$ 紧生成给出的「饱和 $k$-闭集是闭集」）。

于是 $X/R$ 紧生成（商的紧生成仍紧生成）。
再证弱 Hausdorff：取紧 Hausdorff 的 $g : T \to X/R$。

> 续见 proofs/imp.cg-kclosed-quotient.2.md
