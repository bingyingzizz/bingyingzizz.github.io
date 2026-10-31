# 理想　`def.ideal`
理想与商环
layer 9 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.ideal)　·　[节点索引](../index.md)

设 $A$ 是环。子集 $I \subseteq A$ 叫**（双边）理想**，如果 $(I, +)$ 是加法子群，并且对一切 $a \in A$、$x \in I$ 有

$$a x \in I \quad \text{与} \quad x a \in I.$$

（只要求 $a x \in I$ 的叫**左理想**，只要求 $x a \in I$ 的叫**右理想**；交换环里三者一致。）

商集 $A/I$（按加法陪集）上的乘法 $(a + I)(b + I) := ab + I$ 良定义，得到的环叫**商环**。

## 为什么成立（入边，证明在 proofs/）
- [`def.ring`](../nodes/def.ring.md) 环：用到了定义 环　[proofs/def-dep.ideal-ring.md](../proofs/def-dep.ideal-ring.md)

- …另有入边，续页见 [nodes/def.ideal.2.md](./def.ideal.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`prop.ideal-basic`](../nodes/prop.ideal-basic.md) 理想的运算与商环泛性质

- …另有出边，续页见 [nodes/def.ideal.3.md](./def.ideal.3.md)

refs: Lang, Algebra

> 说明见 `notes/def.ideal.md`

引用：`def.ideal`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
