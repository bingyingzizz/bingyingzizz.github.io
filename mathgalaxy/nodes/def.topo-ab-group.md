# 拓扑阿贝尔群　`def.topo-ab-group`
拓扑阿贝尔群与连续同态（Topological Abelian Group）
layer 16 · 定义 · 拓扑阿贝尔群 · 凝聚态数学+拓扑学

**拓扑阿贝尔群** $(M, +, \tau)$ 是一个**阿贝尔群** $M$ 连带一个拓扑 $\tau$，使运算连续：

$$+ : M \times M \longrightarrow M, \qquad - : M \longrightarrow M.$$

两个拓扑阿贝尔群之间的**连续同态**记作

$$C_{\mathbb{Z}}(M, N) \;\subseteq\; C(M, N),$$

右边带**紧开拓扑**，左边取**子空间拓扑**。

## 为什么成立（入边，证明在 proofs/）
- `def.group` 群：用到了定义 群　proofs/def-dep.topoab-group.md
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/def-dep.topoab-topology.md
- `def.compact-open-topology` 紧开拓扑：用到了定义 紧开拓扑　proofs/def-dep.topoab-compactopen.md

## 它能推出什么 / 谁在用它
- 被 `prop.abtop-to-abcond` 拓扑阿贝尔群嵌入凝聚态 用
- 被 `prop.continuous-hom-condensed` 连续同态与内部 Hom 用

> 说明见 `notes/def.topo-ab-group.md`

- …另有出边，续页见 `nodes/def.topo-ab-group.2.md`
