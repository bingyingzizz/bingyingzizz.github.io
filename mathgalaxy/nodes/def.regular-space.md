# 正则空间　`def.regular-space`
正则空间（T3）：点与闭集可以分开
layer 8 · 定义 · 拓扑空间 · 拓扑学
[在星图里打开](../#n=def.regular-space)　·　[节点索引](../index.md)

**在做什么**：把 $T_{2}$ 的「点 vs 点」升级成「点 vs 不含它的闭集」。这是第一个能对**闭集**动手的分离公理。

拓扑空间 $X$ 叫**正则**（regular），若对任意闭集 $F$ 与任意 $x \notin F$，存在不交开集 $U, V$ 使

$$x \in U, \qquad F \subseteq V .$$
> 陈述续见 [nodes/def.regular-space.2.md](./def.regular-space.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.t1-space`](../nodes/def.t1-space.md) T1 空间：用到了定义 T1 空间　[proofs/dep.reg-t1.md](../proofs/dep.reg-t1.md)

- …另有入边，续页见 [nodes/def.regular-space.3.md](./def.regular-space.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.regular-space.4.md](./def.regular-space.4.md)

refs: Munkres, Topology（⚠️ 章节未核实，只记书名）· 分离公理；Engelking, General Topology（⚠️ 章节未核实，只记书名）

> 说明见 `notes/def.regular-space.md`

引用：`def.regular-space`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
