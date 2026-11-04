# 选择公理　`ax.choice`
选择公理
layer 8 · 公理 · 选择原理 · 序理论+集合论
[在星图里打开](../#n=ax.choice)　·　[节点索引](../index.md)

任意一族非空集合都可以「同时」各挑出一个元素。写成选择函数的形式：

$\operatorname{dom}$ 只对函数有定义，所以这句说的是「存在函数 $f$，$\operatorname{dom} f = F$，且每个 $X \in F$ 都有 $f(X) \in X$」：

$\forall F [ ( \forall X \in F, X \ne \emptyset ) \to \exists f ( \operatorname{dom} f = F \wedge  \forall X \in F, f(X) \in X ) ]$
> 陈述续见 [nodes/ax.choice.2.md](./ax.choice.2.md)


## 它能推出什么 / 谁在用它
- ⟺ [`thm.wellordering`](../nodes/thm.wellordering.md) 良序定理
- ⇒ [`lem.zorn`](../nodes/lem.zorn.md) Zorn 引理

- …另有出边，续页见 [nodes/ax.choice.4.md](./ax.choice.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/ax.choice.3.md](./ax.choice.3.md)

refs: Jech, The Axiom of Choice；Kunen, Set Theory, I.12

外部：Wikipedia https://en.wikipedia.org/wiki/Axiom_of_choice · nLab https://ncatlab.org/nlab/show/axiom+of+choice

> 说明见 `notes/ax.choice.md`

引用：`ax.choice`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
