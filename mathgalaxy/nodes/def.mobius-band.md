# 莫比乌斯带　`def.mobius-band`
莫比乌斯带：$[0,1] \times [0,1]$ 把一头扭转后粘起来
layer 31 · 定义 · 曲面的地形 · 拓扑学
[在星图里打开](../#n=def.mobius-band)　·　[节点索引](../index.md)

在正方形 $[0,1] \times [0,1]$ 上取等价关系：把左边与右边**反向**粘起来，即

$$(0, t) \sim (1, 1 - t), \qquad 0 \le t \le 1.$$

商空间 $M := ([0,1]\times[0,1])/\sim$ 叫**莫比乌斯带**（Möbius band）。

## 为什么成立（入边，证明在 proofs/）
- [`def.quotient-topology`](../nodes/def.quotient-topology.md) 商拓扑：用到了定义 商拓扑　[proofs/dep.mobius-quotient.md](../proofs/dep.mobius-quotient.md)

- …另有入边，续页见 [nodes/def.mobius-band.2.md](./def.mobius-band.2.md)

## 它能推出什么 / 谁在用它
- 被 [`def.crosscap`](../nodes/def.crosscap.md) 交叉帽 用

- …另有出边，续页见 [nodes/def.mobius-band.3.md](./def.mobius-band.3.md)

refs: Munkres, Topology, Ch. 12（商空间与曲面）

> 说明见 `notes/def.mobius-band.md`

引用：`def.mobius-band`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
