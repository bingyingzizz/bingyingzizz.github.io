# T3.5 空间　`def.t35-space`
T3.5：单点与闭集可由连续函数分开
layer 6 · 定义 · 分离公理 · 拓扑学
[在星图里打开](../#n=def.t35-space)　·　[节点索引](../index.md)

**在做什么**：把「用开集分开」升级成「用**连续函数**分开」—— 这是分离公理链里第一次请出函数，也是紧化与度量化理论的入口。同样**不含 $T_{1}$**。

拓扑空间 $X$ 叫 **$T_{3.5}$ 空间**，若对任意闭集 $F$ 与任意 $x \notin F$，存在连续函数 $f : X \to [0, 1]$ 使

$$f(x) = 0, \qquad f|_{F} \equiv 1 .$$

⚠️ **名字约定**：加了 $T_{1}$ 之后叫**完全正则空间**（`def.completely-regular-space`，= Tychonoff 空间）。$T_{3.5}$ 本身推不出 $T_{1}$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.t35-space.2.md](./def.t35-space.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.t35-space.3.md](./def.t35-space.3.md)

refs: Munkres, Topology；Engelking, General Topology

> 说明见 `notes/def.t35-space.md`

引用：`def.t35-space`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
