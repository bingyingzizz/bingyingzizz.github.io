# 选择公理 + Hartogs 定理 $\implies$ 佐恩引理（路线 $1\implies2$）
`imp.hartogs-zorn` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 + `thm.hartogs` Hartogs 定理 → `lem.zorn` 佐恩引理

$$p(\alpha) = \varphi( S(\{ p(\beta) : \beta < \alpha \}) )\quad \text{ 只要} S(\{ p(\beta) : \beta < \alpha \}) \ne \emptyset;\text{ 一旦} S\text{ 为空就停}$$

于是得到一列严格递增的 $p(0) \prec p(1) \prec p(2) \prec \cdots$。第 0 步用 $S(\emptyset ) = P \ne \emptyset$，所以 $p(0) = \varphi (P)$ 有定义。

> 续见 proofs/imp.hartogs-zorn.3.md
