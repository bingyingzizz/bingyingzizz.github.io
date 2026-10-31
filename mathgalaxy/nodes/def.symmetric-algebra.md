# 对称代数　`def.symmetric-algebra`
对称代数 $\operatorname{Sym}^{\bullet} V$
layer 12 · 定义 · 多重线性与张量 · 抽象代数
[在星图里打开](../#n=def.symmetric-algebra)　·　[节点索引](../index.md)

与外幂平行地，对称幂定义为 $V^{\otimes k}$ 商掉由 $v \otimes w - w \otimes v$ 张成的子空间，记像为 $v \cdot w$（交换）；再把各次直和起来得**对称代数**

$$\operatorname{Sym}^{\bullet} V := \bigoplus_{k \ge 0} \operatorname{Sym}^{k} V$$

它是一个**交换**分次代数，并且

$$\dim \operatorname{Sym}^{k} V = \binom{n + k - 1}{k}, \qquad \operatorname{Sym}^{\bullet} V \cong K[x_1, \ldots, x_n] \ (n = \dim V)$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.symmetric-algebra.2.md](./def.symmetric-algebra.2.md)

refs: Lang, Algebra, Ch. XIX

> 说明见 `notes/def.symmetric-algebra.md`

引用：`def.symmetric-algebra`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
