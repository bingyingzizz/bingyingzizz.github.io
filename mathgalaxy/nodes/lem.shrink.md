# 收缩引理　`lem.shrink`
正规空间里局部有限开覆盖可以收缩
layer 7 · 引理 · 仿紧与单位分解 · 拓扑学
[在星图里打开](../#n=lem.shrink)　·　[节点索引](../index.md)

设 $X$ 是**正规**空间，$\mathcal{U} = \{ U_{i} \}_{i \in I}$ 是 $X$ 的**局部有限开覆盖**。则存在 $X$ 的开覆盖 $\mathcal{V} = \{ V_{i} \}_{i \in I}$（**指标集相同**）使

$$V_{i} \subseteq \operatorname{cl} V_{i} \subseteq U_{i}\qquad (i \in I),$$

并且 $\mathcal{V}$ 仍然局部有限。这样的 $\mathcal{V}$ 叫 $\mathcal{U}$ 的一个**收缩**（shrinking）。

## 它能推出什么 / 谁在用它
- ⇒ [`prop.paracompact-closed-refinement`](../nodes/prop.paracompact-closed-refinement.md) 闭加细

- …另有出边，续页见 [nodes/lem.shrink.3.md](./lem.shrink.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/lem.shrink.2.md](./lem.shrink.2.md)

refs: Munkres, Topology (2nd ed.), Section 41；Engelking, General Topology, Ch. 5

> 说明见 `notes/lem.shrink.md`

引用：`lem.shrink`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
