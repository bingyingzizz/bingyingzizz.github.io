# 滤子　`def.filter`　·　续页（第 2 页）
[在星图里打开](../#n=def.filter)　·　第 1 页 [nodes/def.filter.md](./def.filter.md)

## 陈述（续）
1. $\emptyset \notin \mathcal{F}$、$X \in \mathcal{F}$；
2. 上闭：$F \in \mathcal{F}$ 且 $F \subseteq G$ $\implies$ $G \in \mathcal{F}$；
3. 对有限交封闭：$F, G \in \mathcal{F}$ $\implies$ $F \cap G \in \mathcal{F}$。

**收敛**：$\mathcal{F} \to x$，若 $x$ 的每个邻域都属于 $\mathcal{F}$（即 $\mathcal{N}(x) \subseteq \mathcal{F}$）。
**超滤子**（ultrafilter）：极大的滤子。等价地，对每个 $A \subseteq X$，$A$ 与 $X \setminus A$ 中**恰有**一个属于 $\mathcal{U}$。

**超滤子引理**：每个滤子都含在一个超滤子中（用 Zorn 引理，`lem.zorn`）。

> 续见 [nodes/def.filter.3.md](./def.filter.3.md)
