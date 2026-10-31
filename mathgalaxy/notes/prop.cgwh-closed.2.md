# 弱 Hausdorff 紧生成空间的开闭子空间与滤过余极限　`prop.cgwh-closed`　·　说明
根 `../`

**证明。**
- **开子空间**：$U \subseteq X$ 开。紧 Hausdorff 的 $g : S\to U$ 的像 $g(S)$ 在 $X$ 中闭，故在 $U$ 的子空间拓扑里 $g(S) = g(S)\cap U$ 闭 $\implies$ $U$ 弱 Hausdorff ✓；$k$-化与「取开子空间」交换（$k$ 拓扑由沿紧 Hausdorff 块拉回刻画，而块落进 $U$ 与否是局部条件）$\implies$ $U$ 紧生成 ✓。
- **闭子空间**：$A \subseteq X$ 闭。紧 Hausdorff 的 $g : S\to A$ 的像在 $X$ 中闭且含于 $A$，故在 $A$ 中闭 $\implies$ 弱 Hausdorff ✓；$A$ 紧生成同样由「$k$-化与取闭子空间交换」得到 ✓。
- **沿闭含入的滤过余极限**：对极限 $X = \varinjlim_{i\in I} X_{i}$（闭含入、$I$ 滤过），先有一条标准引理：**$X$ 中的闭集就是那些与每个 $X_{i}$ 的交都闭的集合**（余极限拓扑 + $X_{i}$ 闭），于是每个 $X_{i}$ 在 $X$ 中闭 ✓。
- **$X$ 弱 Hausdorff**：取紧 Hausdorff 的 $g : S \to X$。由上面那条引理与 $S$ **紧**，$g(S)$ 落在**某一个** $X_{i}$ 里（这是滤过余极限的标

> 续见 notes/prop.cgwh-closed.3.md
