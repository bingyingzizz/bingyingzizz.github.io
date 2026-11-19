# 笛卡尔闭范畴　`def.cartesian-closed-category`
笛卡尔闭范畴
layer 15 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.cartesian-closed-category)　·　[节点索引](../index.md)

范畴 $\mathcal C$ 称为**笛卡尔闭**，若它有有限积（终对象与二元积），且对每个 $X$，函子 $(-)\times X:\mathcal C\to\mathcal C$ 有右伴随 $(-)^X$。等价地，存在求值态射 $\mathrm{ev}:Y^X\times X\to Y$ 与自然双射 $\hom_{\mathcal C}(Z\times X,Y)\cong\hom_{\mathcal C}(Z,Y^X)$，称为 curry 化。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.cartesian-closed-category.2.md](./def.cartesian-closed-category.2.md)

refs: Mac Lane, Categories for the Working Mathematician, Ch. IV

> 说明见 `notes/def.cartesian-closed-category.md`

引用：`def.cartesian-closed-category`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
