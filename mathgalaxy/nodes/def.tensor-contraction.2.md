# 缩并　`def.tensor-contraction`　·　续页（第 2 页）
[在星图里打开](../#n=def.tensor-contraction)　·　第 1 页 [nodes/def.tensor-contraction.md](./def.tensor-contraction.md)

## 陈述（续）
设 $T$ 是 $M$ 上的 $(r,s)$ 型张量场（`def.tensor-field`），$r, s \ge 1$。取定第 $i$ 个上标（$1 \le i \le r$）与第 $j$ 个下标（$1 \le j \le s$），**缩并** $\mathrm{C}^{i}_
{\ j}T$ 是 $(r-1,s-1)$ 型张量场，逐点定义为
$$\bigl(\mathrm{C}^{i}_{\ j}T\bigr)_{p}\bigl(\alpha^{1},\ldots,\widehat{\alpha^{i}},\ldots;\ v_{1},\ldots,\widehat{v_{j}},\ldots\bigr)
 := \sum_{a=1}^{n} T_{p}\bigl(\ldots,\mathrm{d}x^{a},\ldots;\ \ldots,\partial_{a},\ldots\bigr),$$
即把第 $i$ 个余向量槽与第 $j$ 个向量槽**用同一组基配对求和**（帽子记「去掉这一项」）。在卡里就是
$$\bigl(\mathrm{C}^{i}_{\ j}T\bigr)^{\ldots}_{\ldots} = \sum_{a=1}^{n} T^{\ldots\,a\,\ldots}_{\ldots\,a\,\ldots},$$
一上一下两个指标同名求和 —— 爱因斯坦求和约定。

> 续见 [nodes/def.tensor-contraction.3.md](./def.tensor-contraction.3.md)
