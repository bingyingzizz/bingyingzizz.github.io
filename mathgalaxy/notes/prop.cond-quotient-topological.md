# 商群在凝聚态意义下一致　`prop.cond-quotient-topological`　·　说明
根 `../`

**证明（思路）。** 正合列 $0 \to N \to M \to M/N \to 0$ 里，$N$ 闭保证 $M/N$ 是 Hausdorff 的局部紧群 ✓。

要证 $\underline{M}/\underline{N} \cong \underline{M/N}$。⚠️ 不能写「保极限 $\implies$ 送余核」——保极限只给**核**。正确两步：

① CondAb 的余核 = 「逐点商」预层 $U \mapsto \underline{M}(U)/\underline{N}(U)$ 的**层化**；

② 层化后与常层 $\underline{M/N}$ 一致 —— 这一步不能靠普适的范畴论证，而是 LCA 群的一条标准事实：闭子群嵌入 $N \hookrightarrow M$ 在凝聚态阿贝尔群里仍给出短正合列 $0 \to \underline{N} \to \underline{M} \to \underline{M/N} \to 0$（Clausen–Scholze《Lectures on Condensed Mathematics》Lecture 3：$\mathrm{LCA} \hookrightarrow \mathrm{Cond(Ab)}$ 全忠实且正合）；等价地说，层化把「逐点商」预层补成 $C(S, M/N)$。**本图不展开层化的计算**，完整论证见 Le Stum, Exercise 6.5 ✓。

拼起来即得同构 ✓。∎

> 续见 notes/prop.cond-quotient-topological.2.md
