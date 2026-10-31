# 切映射　`def.differential-map`
切映射（微分）
layer 20 · 定义 · 向量场与 Lie 结构 · 微分几何
[在星图里打开](../#n=def.differential-map)　·　[节点索引](../index.md)

**在说什么**：光滑映射在每点给出一个线性映射，把「沿曲线的方向」送到像上的方向 —— 这就是流形上的导数；流形上没有减法，唯一能做的是「跟着曲线走」。

设 $F : N \to M$ 光滑，$p \in N$。定义

$$\mathrm{d}F_{p} : T_{p}N \longrightarrow T_{F(p)}M,\qquad \mathrm{d}F_{p}([\gamma]) := [F \circ \gamma],$$
> 陈述续见 [nodes/def.differential-map.2.md](./def.differential-map.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.integral-manifold`](../nodes/def.integral-manifold.md) 积分流形 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.differential-map.3.md](./def.differential-map.3.md)

refs: Tu, An Introduction to Manifolds (2nd ed., GTM 334), 「Tangent Vectors」· 切映射与链式法则

> 说明见 `notes/def.differential-map.md`

引用：`def.differential-map`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
