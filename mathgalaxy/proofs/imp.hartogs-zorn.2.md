# 选择公理 + Hartogs 定理 $\implies$ 佐恩引理（路线 $1\implies2$）
`imp.hartogs-zorn` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 + `thm.hartogs` Hartogs 定理 → `lem.zorn` Zorn 引理

$$p(\alpha) = \varphi( S(\{ p(\beta) : \beta < \alpha \}) )\quad \text{ 只要} S(\{ p(\beta) : \beta < \alpha \}) \ne \emptyset;\text{ 一旦} S\text{ 为空就停}$$

于是得到一列严格递增的 $p(0) \prec p(1) \prec p(2) \prec \cdots$。第 0 步用 $S(\emptyset ) = P \ne \emptyset$，所以 $p(0) = \varphi (P)$ 有定义。

**④ 必停**：由 **Hartogs 定理**，$\aleph (P)$ 是不能单射进 $P$ 的最小序数。

把递归的上限取到 $\aleph (P)$ 就够 —— 若对一切 $\alpha < \aleph (P)$ 都不停，则 $\alpha \mapsto p(\alpha )$ 就是一个单射 $\aleph (P) \to P$，与 $\aleph (P)$ 的定义矛盾。

故存在 $\alpha _{0} < \aleph (P)$ 使 $S(\{ p(\beta ) : \beta < \alpha _{0} \}) = \emptyset$。

> 续见 proofs/imp.hartogs-zorn.3.md
