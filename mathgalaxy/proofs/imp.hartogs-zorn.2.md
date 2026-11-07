# 选择公理 + Hartogs 定理 $\implies$ 佐恩引理（路线 $1\implies2$）
`imp.hartogs-zorn` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 + `thm.hartogs` Hartogs 定理 → `lem.zorn` Zorn 引理

（约定 $S(\emptyset ) = P$。）注意「$C$ 有上界」与「$S(C) \ne \emptyset$」不是一回事：$S$ 要的是**严格**上界。

**③ 超限递归**：只要 $S$ 非空就往下走 ——

$$p(\alpha) = \varphi( S(\{ p(\beta) : \beta < \alpha \}) )\quad \text{ 只要} S(\{ p(\beta) : \beta < \alpha \}) \ne \emptyset;\text{ 一旦} S\text{ 为空就停}$$

于是得到一列严格递增的 $p(0) \prec p(1) \prec p(2) \prec \cdots$。第 0 步用 $S(\emptyset ) = P \ne \emptyset$，所以 $p(0) = \varphi (P)$ 有定义。

> 续见 proofs/imp.hartogs-zorn.3.md
