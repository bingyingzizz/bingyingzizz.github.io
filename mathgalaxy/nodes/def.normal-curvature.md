# 法曲率　`def.normal-curvature`
法曲率
layer 25 · 定义 · 曲面论 · 微分几何
[在星图里打开](../#n=def.normal-curvature)　·　[节点索引](../index.md)

设 $v \in T_{p}U$，$v \ne 0$。$v$ 方向的**法曲率**是

$$k_{n}(v) := \frac{II(v,v)}{I(v,v)} .$$

若改用切平面上的向量 $V = \mathrm{d}r(v)$ 写（$V \ne 0$），就是 $W$ 的 Rayleigh 商：
> 陈述续见 [nodes/def.normal-curvature.2.md](./def.normal-curvature.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.first-fundamental-form`](../nodes/def.first-fundamental-form.md) 第一基本形式：用到了定义 第一基本形式　[proofs/dep.dg-I-normal.md](../proofs/dep.dg-I-normal.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.normal-curvature.3.md](./def.normal-curvature.3.md)

refs: do Carmo, Differential Geometry of Curves and Surfaces, 第 3 章「Gauss 映射的几何」· 法曲率；陈维桓《微分几何讲义》, 「曲面的局部理论」· 法曲率与 Meusnier 定理

> 说明见 `notes/def.normal-curvature.md`

引用：`def.normal-curvature`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
