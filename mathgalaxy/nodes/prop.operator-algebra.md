# 算子乘法的范数不等式　`prop.operator-algebra`
复合与算子范数：$\|vu\| \le \|v\|\,\|u\|$
layer 12 · 命题 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=prop.operator-algebra)　·　[节点索引](../index.md)

设 $u \in B(E, F)$，$v \in B(F, G)$。则 $v \circ u \in B(E, G)$ 且

$$\|v \circ u\| \le \|v\| \, \|u\| .$$

特别地 $B(E)$ 是**赋范代数**（乘法连续），且 $\|\mathrm{id}\| = 1$。

## 为什么成立（入边，证明在 proofs/）
- [`def.bounded-operator`](../nodes/def.bounded-operator.md) 有界线性算子：用到了定义 有界线性算子　[proofs/def-link.fa-boundedop-opalgebra.md](../proofs/def-link.fa-boundedop-opalgebra.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/prop.operator-algebra.2.md](./prop.operator-algebra.2.md)

refs: Rudin, Functional Analysis · 有界线性算子、对偶与 Neumann 级数

> 说明见 `notes/prop.operator-algebra.md`

引用：`prop.operator-algebra`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
