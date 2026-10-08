# 理想　`def.ideal`
理想与商环（Ideal）
layer 9 · 定义 · 代数结构 · 抽象代数

设 $A$ 是环。子集 $I \subseteq A$ 叫**（双边）理想**，如果 $(I, +)$ 是加法子群，并且对一切 $a \in A$、$x \in I$ 有

$$a x \in I \quad \text{与} \quad x a \in I.$$

（只要求 $a x \in I$ 的叫**左理想**，只要求 $x a \in I$ 的叫**右理想**；交换环里三者一致。）

商集 $A/I$（按加法陪集）上的乘法 $(a + I)(b + I) := ab + I$ 良定义，得到的环叫**商环**。

## 为什么成立（入边，证明在 proofs/）
- `def.ring` 环：用到了定义 环　proofs/def-dep.ideal-ring.md
- `def.quotient-group` 商群：用到了定义 商群　proofs/def-dep.ideal-quotientgroup.md

> 说明见 `notes/def.ideal.md`
