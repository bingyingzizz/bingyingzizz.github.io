# 连续映射　`def.continuous-map`
连续映射
layer 5 · 定义 · 拓扑空间 · 拓扑学+数学分析
[在星图里打开](../#n=def.continuous-map)　·　[节点索引](../index.md)

设 $X$、$Y$ 是拓扑空间。映射 $f : X \to Y$ **连续**，当且仅当**每个开集的原像是开集**：

$$V \in \mathcal{T}_Y \implies f^{-1}(V) \in \mathcal{T}_X$$

只需对某一组**基**（或子基）验证即可。

连续的复合仍连续：$f$、$g$ 连续 $\implies g \circ f$ 连续。

## 为什么成立（入边，证明在 proofs/）
- [`def.topology`](../nodes/def.topology.md) 拓扑空间与开集：用到了定义 拓扑空间与开集　[proofs/dep.topology-continuous-map.md](../proofs/dep.topology-continuous-map.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.continuous-map.2.md](./def.continuous-map.2.md)

refs: Munkres, Topology, Ch. 2

> 说明见 `notes/def.continuous-map.md`

引用：`def.continuous-map`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
