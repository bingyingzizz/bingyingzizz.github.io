# 覆盖的加细　`def.refinement`
覆盖的加细、开加细与闭加细
layer 5 · 定义 · 仿紧与单位分解 · 拓扑学
[在星图里打开](../#n=def.refinement)　·　[节点索引](../index.md)

设 $\mathcal{U} = \{ U_{i} \}_{i \in I}$ 与 $\mathcal{V} = \{ V_{s} \}_{s \in S}$ 都是 $X$ 的覆盖。$\mathcal{V}$ 是 $\mathcal{U}$ 的**加细**，如果每个 $V_{s}$ 都落在某个 $U_{i}$ 里：

$$\forall s \in S,\ \exists i \in I :\quad V_{s} \subseteq U_{i}.$$

不要求指标集相同，也不要求单射：多个 $V_{s}$ 可以落在同一个 $U_{i}$ 里。
> 陈述续见 [nodes/def.refinement.2.md](./def.refinement.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.paracompact`](../nodes/def.paracompact.md) 仿紧空间 用
- 被 [`thm.michael-paracompact`](../nodes/thm.michael-paracompact.md) Michael 仿紧判别法 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.refinement.3.md](./def.refinement.3.md)

refs: Engelking, General Topology, Ch. 5 §5.1；Munkres, Topology (2nd ed.), Section 39

> 说明见 `notes/def.refinement.md`

引用：`def.refinement`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
