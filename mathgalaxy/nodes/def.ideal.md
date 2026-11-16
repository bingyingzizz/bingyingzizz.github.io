# 理想　`def.ideal`
理想与商环
layer 10 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.ideal)　·　[节点索引](../index.md)

设 $A$ 是环。子集 $I \subseteq A$ 叫**（双边）理想**，如果 $(I, +)$ 是加法子群，并且对一切 $a \in A$、$x \in I$ 有

$$a x \in I, \qquad x a \in I.$$

（只要求 $a x \in I$ 的叫**左理想**，只要求 $x a \in I$ 的叫**右理想**；交换环里三者一致。）

商环的构造（商集、运算良定义与泛性质）单独成节点，见 `def.quotient-ring`。

## 为什么成立（入边，证明在 proofs/）
- [`def.ring-hom`](../nodes/def.ring-hom.md) 环同态：环同态的核是理想　[proofs/dep.ringhom-ideal.md](../proofs/dep.ringhom-ideal.md)

- …另有入边，续页见 [nodes/def.ideal.2.md](./def.ideal.2.md)

## 它能推出什么 / 谁在用它
- 被 [`def.quotient-ring`](../nodes/def.quotient-ring.md) 商环 用

- …另有出边，续页见 [nodes/def.ideal.3.md](./def.ideal.3.md)

refs: Lang, Algebra

> 说明见 `notes/def.ideal.md`

引用：`def.ideal`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
