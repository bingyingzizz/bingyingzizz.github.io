# 闭形式　`def.closed-form`
闭形式：外微分为零的微分形式
layer 27 · 定义 · 微分形式、积分与 de Rham · 微分几何
[在星图里打开](../#n=def.closed-form)　·　[节点索引](../index.md)

**在做什么**：de Rham 复形里的**闭链**。它是「局部上没有旋度 / 没有源」的微分形式 —— 整门 de Rham 理论都在问「闭的里面有多少是真恰当的」。

设 $M$ 是光滑流形，$\omega \in \Omega^{k}(M)$。称 $\omega$ 是**闭形式**（closed form），若

$$d\omega = 0 .$$

记全体 $k$ 次闭形式为 $Z^{k}(M) := \ker\bigl(d : \Omega^{k}(M) \to \Omega^{k+1}(M)\bigr)$。
> 陈述续见 [nodes/def.closed-form.2.md](./def.closed-form.2.md)


## 它能推出什么 / 谁在用它
- 被 [`thm.chern-weil`](../nodes/thm.chern-weil.md) 陈–Weil 同态 用

- …另有出边，续页见 [nodes/def.closed-form.4.md](./def.closed-form.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.closed-form.3.md](./def.closed-form.3.md)

refs: Tu, An Introduction to Manifolds；Bott–Tu, Differential Forms in Algebraic Topology

> 说明见 `notes/def.closed-form.md`

引用：`def.closed-form`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
