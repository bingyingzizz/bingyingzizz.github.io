# 提升定理　`thm.lifting`
道路与同伦在覆叠里的唯一提升
layer 7 · 定理 · 基本群 · 拓扑学
[在星图里打开](../#n=thm.lifting)　·　[节点索引](../index.md)

设 $p : E \to B$ 是覆叠映射，$p(e_{0}) = b_{0}$。

**(1) 道路提升**：对任意道路 $\alpha : [0, 1] \to B$ 且 $\alpha(0) = b_{0}$，存在**唯一**的道路

$$\tilde{\alpha} : [0, 1] \longrightarrow E,\qquad \tilde{\alpha}(0) = e_{0},\quad p \circ \tilde{\alpha} = \alpha.$$
> 陈述续见 [nodes/thm.lifting.2.md](./thm.lifting.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.covering-space`](../nodes/def.covering-space.md) 覆叠空间：用到了定义 覆叠空间　[proofs/e58:definition.md](../proofs/e58:definition.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.lifting.3.md](./thm.lifting.3.md)

refs: Munkres, Topology (2nd ed.), Ch. 9 · Covering Spaces（lifting theorem）；Hatcher, Algebraic Topology, Ch. 1 §1.3 · lifting properties

> 说明见 `notes/thm.lifting.md`

引用：`thm.lifting`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
