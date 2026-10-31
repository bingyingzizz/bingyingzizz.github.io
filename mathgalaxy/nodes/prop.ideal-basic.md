# 理想的运算与商环泛性质　`prop.ideal-basic`
命题：理想的交、和、积与商环的泛性质
layer 10 · 命题 · 代数结构 · 抽象代数
[在星图里打开](../#n=prop.ideal-basic)　·　[节点索引](../index.md)

设 $A$ 是环，$I, J \subseteq A$ 是理想。则：

**(i)** $I \cap J$ 与

$$I + J := \{\, x + y : x \in I,\ y \in J \,\}$$

都是理想；$I + J$ 是包含 $I \cup J$ 的**最小**理想；

**(ii)** 有限和组成的集合

$$IJ := \left\{ \sum_{k=1}^{n} x_k y_k : x_k \in I,\ y_k \in J,\ n \ge 0 \right\}$$

是理想，且 $IJ \subseteq I \cap J$；
> 陈述续见 [nodes/prop.ideal-basic.2.md](./prop.ideal-basic.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`prop.prime-ideal`](../nodes/prop.prime-ideal.md) 素理想与极大理想

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.ideal-basic.3.md](./prop.ideal-basic.3.md)

refs: Atiyah–Macdonald, Introduction to Commutative Algebra, Ch. 1

> 说明见 `notes/prop.ideal-basic.md`

引用：`prop.ideal-basic`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
